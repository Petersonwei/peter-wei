'use client'

import React, { useRef, useState, forwardRef, useImperativeHandle, useCallback, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import VoiceBot from './VoiceBot'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare } from 'lucide-react'

// Define possible states for the voice assistant
type AssistantState = 'ready' | 'calling' | 'error';

// Message interface for communication with parent components
interface Message {
  id: string
  type: 'response' | 'transcription'
  role?: string
  content: string
  timestamp: Date
  isComplete?: boolean
}

// Props for the VoiceAssistant component
interface VoiceAssistantProps {
  onCallStatusChange?: (status: string) => void;  // Callback when call status changes
  onMessagesUpdate?: (messages: Message[]) => void;  // Callback to update messages in parent
  onEndCall?: () => void;  // Callback when call ends
}

// Methods exposed via ref to parent components
export interface VoiceAssistantRef {
  endCall: () => Promise<void>;  // Method to programmatically end a call
  startCall: () => Promise<void>; // Method to programmatically start a call
}

/**
 * VoiceAssistant - A component that handles voice calls with Anna
 * when activated by user interaction.
 * 
 * This component handles:
 * - State management for the calling process
 * - Integration with VoiceBot for handling the actual call
 */
const VoiceAssistant = forwardRef<VoiceAssistantRef, VoiceAssistantProps>(
  ({ onCallStatusChange, onMessagesUpdate, onEndCall }, ref) => {
    const { toast } = useToast()
    
    // Main state to track what the assistant is doing
    const [assistantState, setAssistantState] = useState<AssistantState>('ready');
    
    // Refs for VoiceBot and state management
    const voiceBotRef = useRef<{ startCall: () => Promise<void>; endCall: () => Promise<void> } | null>(null);  // Reference to VoiceBot component
    const isCallEndingRef = useRef<boolean>(false);  // Flag to prevent multiple call end attempts
    const isApiCallingRef = useRef<boolean>(false);  // Flag to prevent rapid API calls
    
    /**
     * Safe wrapper for API calls to prevent rapid multiple requests
     * This helps prevent crashes especially on mobile browsers
     */
    const safeApiCall = useCallback(async <T,>(
      apiCall: () => Promise<T>, 
      errorMessage: string
    ): Promise<T | null> => {
      // Don't start if already calling
      if (isApiCallingRef.current) {
        console.log('[VoiceAssistant] API call already in progress, skipping');
        return null;
      }
      
      try {
        isApiCallingRef.current = true;
        return await apiCall();
      } catch (err) {
        console.error(`[VoiceAssistant] ${errorMessage}:`, err);
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive"
        });
        return null;
      } finally {
        // Set a small delay before allowing the next call
        setTimeout(() => {
          isApiCallingRef.current = false;
        }, 1000);
      }
    }, [toast]);
    
    /**
     * Initiates a call using the VoiceBot component
     */
    const startCall = useCallback(async () => {
      // Don't start if we're ending a call
      if (isCallEndingRef.current) {
        console.log('[VoiceAssistant] Cannot start call while ending another call');
        return;
      }

      setAssistantState('calling');
      
      // Check if VoiceBot ref is available
      if (!voiceBotRef.current) {
        console.error('[VoiceAssistant] VoiceBot reference not available');
        toast({
          title: "Call Error",
          description: "Voice system not initialized. Please try again.",
          variant: "destructive"
        });
        setTimeout(() => {
          setAssistantState('ready');
        }, 2000);
        return;
      }
      
      // Use safeApiCall to prevent multiple rapid API calls
      const result = await safeApiCall(
        async () => {
          // Start the call with timeout protection
          const callPromise = voiceBotRef.current!.startCall();
          
          // Add a timeout to prevent hanging if startCall never resolves
          const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Call start timeout')), 10000);
          });
          
          // Race the call start against the timeout
          return await Promise.race([callPromise, timeoutPromise]);
        },
        "Failed to start call. Please try again."
      );
      
      // If the API call failed, go back to ready state
      if (result === null) {
        setTimeout(() => {
          setAssistantState('ready');
        }, 2000);
      }
    }, [toast, safeApiCall]);
    
    /**
     * Set up event listener for manual start via the Start Conversation button
     */
    useEffect(() => {
      if (typeof window === 'undefined') return;
      
      // Add event listener for manual start
      const handleStartConversation = () => {
        console.log('[VoiceAssistant] Received startConversation event');
        // Start the call
        startCall();
      };
      
      console.log('[VoiceAssistant] Adding startConversation event listener');
      window.addEventListener('startConversation', handleStartConversation);
      
      // Cleanup on unmount
      return () => {
        console.log('[VoiceAssistant] Removing startConversation event listener');
        window.removeEventListener('startConversation', handleStartConversation);
      };
    }, [startCall]);
    
    /**
     * Handles the end of a call
     * - Resets state
     * - Notifies parent components
     */
    const handleCallEnd = () => {
      console.log('[VoiceAssistant] Call ended');
      
      // Notify parent about call end
      onCallStatusChange?.('ended');
      onEndCall?.();
      
      // Reset to ready state
      setAssistantState('ready');
    };

    /**
     * Programmatically ends an active call
     * - Can be called by parent components via ref
     * - Resets state
     */
    const endCall = useCallback(async () => {
      if (isCallEndingRef.current) {
        console.log('[VoiceAssistant] Call is already ending, ignoring request');
        return;
      }

      isCallEndingRef.current = true;
      console.log('[VoiceAssistant] Starting call end process');

      try {
        // Update state to reflect we're ending the call
        setAssistantState('ready');

        // End the call in VoiceBot
        if (voiceBotRef.current) {
          console.log('[VoiceAssistant] Ending call in VoiceBot');
          await voiceBotRef.current.endCall();
        }

        // Notify parent about call end
        onCallStatusChange?.('ended');
        onEndCall?.();

        // Wait a moment to ensure everything is cleaned up
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Reset flag
        isCallEndingRef.current = false;
      } catch (err) {
        console.error('[VoiceAssistant] Error during call end:', err);
        // Even if there's an error, try to reset states and notify parent
        isCallEndingRef.current = false;
        setAssistantState('ready');
        onCallStatusChange?.('ended');
        onEndCall?.();
      }
    }, [onCallStatusChange, onEndCall]);

    // Expose methods via ref for parent components to use
    useImperativeHandle(ref, () => ({
      endCall,
      startCall
    }), [endCall, startCall]);

    /**
     * Render method
     */
    return (
      <div className="voice-assistant">
        {/* The VoiceBot component is kept for functionality but hidden from view */}
        <div className="hidden">
          <VoiceBot 
            ref={voiceBotRef}
            onCallStatusChange={(status) => {
              console.log('[VoiceAssistant] Call status changed:', status);
              if (status === 'ended' || status === 'error') {
                handleCallEnd();
              } else if (status === 'ongoing' || status === 'connecting') {
                // If a call is started manually, update our state
                if (assistantState !== 'calling') {
                  console.log('[VoiceAssistant] Manual call detected, updating state');
                  setAssistantState('calling');
                }
              }
              // Notify parent component about status change
              onCallStatusChange?.(status);
            }}
            onMessagesUpdate={(messages) => {
              // Pass messages to parent component
              onMessagesUpdate?.(messages);
            }}
          />
        </div>

        {assistantState === 'error' && (
          <Card className="mb-4 border-red-300">
            <CardContent className="p-4">
              <div className="flex flex-col items-center text-center">
                <div className="bg-red-100 p-3 rounded-full mb-4">
                  <MessageSquare className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Voice Assistant Error</h3>
                <p className="text-sm text-gray-600 mb-4">
                  There was a problem with the voice assistant. Please try again.
                </p>
                <Button 
                  onClick={() => setAssistantState('ready')}
                >
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
);

VoiceAssistant.displayName = 'VoiceAssistant';

export default VoiceAssistant; 