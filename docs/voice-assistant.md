# Voice Assistant Documentation

This document explains the voice assistant feature in the Peter Wei Portfolio project.

## Overview

The voice assistant allows users to navigate and interact with the portfolio using voice commands. It's activated by a wake word and can respond to various queries about the projects, skills, and navigation requests.

## Components

The voice assistant is implemented using two main components:

1. **WakeWordDetector**: Listens for the wake word ("Hey Peter") to activate the voice assistant
2. **VoiceBot**: Handles the voice conversation, speech recognition, and responses

## Architecture

```
                     ┌─────────────────┐
                     │     User        │
                     │  Voice Input    │
                     └────────┬────────┘
                              │
                              ▼
┌───────────────────┐    ┌────────────────┐
│  WakeWordDetector │◄───┤   Browser      │
│  (Listens for     │    │ Web Speech API │
│   "Hey Peter")    │    └────────────────┘
└────────┬──────────┘
         │
         │ (When wake word detected)
         ▼
┌─────────────────────┐
│     VoiceBot        │
│  (Handles the       │
│   conversation)     │
└────────┬────────────┘
         │
         │
         ▼
┌─────────────────────┐
│    Application      │
│    (Navigation,     │
│     Content)        │
└─────────────────────┘
```

## Key Features

- **Wake Word Detection**: Activates the assistant when "Hey Peter" is heard
- **Natural Language Understanding**: Processes user questions and commands
- **Voice Responses**: Provides spoken responses using text-to-speech
- **Navigation Actions**: Can navigate to different pages on the site
- **Project Information**: Can provide information about projects

## WakeWordDetector Component

**File**: `components/WakeWordDetector.tsx`

The WakeWordDetector component:
- Uses the Web Speech API's SpeechRecognition interface
- Continuously listens for the wake word "Hey Peter"
- When detected, triggers the VoiceBot to start a conversation
- Handles browser compatibility and fallbacks

```typescript
// Key parts of the implementation
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event) => {
  const transcript = Array.from(event.results)
    .map(result => result[0].transcript)
    .join('');
    
  if (transcript.toLowerCase().includes('hey peter')) {
    // Wake word detected, start conversation
    startConversation();
  }
};
```

## VoiceBot Component

**File**: `components/VoiceBot.tsx`

The VoiceBot component:
- Manages the conversation state
- Handles speech recognition for user inputs
- Processes commands and generates responses
- Uses text-to-speech for spoken responses
- Communicates with the rest of the application

```typescript
export interface VoiceAssistantRef {
  endCall: () => Promise<void>;
  startCall: () => Promise<void>;
}

// Inside component:
const startCall = useCallback(async () => {
  // Initialize speech recognition
  // Start listening for user input
}, []);

const handleUserInput = useCallback((input: string) => {
  // Process user input
  // Generate appropriate response
  // Execute actions (navigation, etc.)
}, []);

const speakResponse = useCallback((text: string) => {
  // Convert text to speech
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}, []);
```

## Voice Commands

The voice assistant supports the following types of commands:

| Command Type | Examples | Action |
|--------------|----------|--------|
| Navigation | "Go to projects" | Navigates to the projects page |
| | "Show me your about page" | Navigates to the about page |
| | "Take me home" | Navigates to the home page |
| Project Info | "Tell me about your portfolio project" | Provides info about a specific project |
| | "What technologies did you use for the AI assistant?" | Lists technologies for a project |
| General Info | "What are your skills?" | Lists skill categories |
| | "Tell me about yourself" | Provides a brief introduction |
| | "What do you do?" | Explains professional role |
| Controls | "Stop" | Ends the conversation |
| | "Thanks" | Ends with a polite response |

## Integration with UI

The voice assistant is integrated with the UI in several ways:

1. **Status Indicator**: Shows when the assistant is listening or speaking
2. **Text Transcript**: Displays what the user said and the assistant's response
3. **Visual Feedback**: Highlights relevant UI elements during interaction

## Implementation Challenges

1. **Browser Compatibility**: The Web Speech API is not uniformly supported across browsers
2. **Wake Word Reliability**: Improving accuracy of wake word detection without false positives
3. **Context Awareness**: Maintaining conversation context for natural interactions

## Performance Considerations

- The voice detection runs on the client side with minimal performance impact
- Speech processing is done in small chunks to maintain responsiveness
- The assistant automatically times out after periods of inactivity

## Future Enhancements

Potential improvements to the voice assistant:

1. **More Natural Conversations**: Improved context awareness and multi-turn conversations
2. **Custom Voice Model**: Replace the browser's text-to-speech with a custom voice
3. **Expanded Commands**: Support for more complex queries and actions
4. **Accessibility Focus**: Improved support for users with different speech patterns

## Usage Example

```tsx
// In a page or layout component
import VoiceAssistant from '@/components/VoiceAssistant';

export default function Layout({ children }) {
  const voiceAssistantRef = useRef<VoiceAssistantRef>(null);
  
  return (
    <div>
      {/* Site content */}
      {children}
      
      {/* Voice assistant */}
      <VoiceAssistant
        ref={voiceAssistantRef}
        onCallStatusChange={(status) => {
          console.log('Voice assistant status:', status);
        }}
      />
      
      {/* Activation button */}
      <button 
        onClick={() => voiceAssistantRef.current?.startCall()}
        className="fixed bottom-4 right-4 p-3 bg-primary rounded-full"
      >
        <MicIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
``` 