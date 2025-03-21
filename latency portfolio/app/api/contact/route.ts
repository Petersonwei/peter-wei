import { firestore } from "@/firebase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Add timestamp
    const contactData = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    // Save to Firestore
    await firestore.collection("contacts").add(contactData);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
} 