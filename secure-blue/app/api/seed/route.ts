import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    await connectToDatabase();

    // Check if David already exists to prevent duplicate errors
    const existingUser = await User.findOne({ email: "david.rife@fairlakesgc.com" });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists!" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash("fairlakesGC", saltRounds);

    // Create the user linked to the Fairlakes GC tenant
    const newUser = await User.create({
      email: "david.rife@fairlakesgc.com",
      passwordHash: hashedPassword,
      name: "David Rife",
      tenantId: "33c1ea7c-93b2-479c-b392-5e1aa767e90c", // From your ChirpStack Tenant ID
      role: "admin"
    });

    return NextResponse.json({ 
      success: true, 
      message: "Seed successful. You can now log in.",
      user: {
        email: newUser.email,
        tenantId: newUser.tenantId
      }
    });

  } catch (error) {
    console.error("Seed Error:", error);
    return NextResponse.json({ error: "Failed to seed user" }, { status: 500 });
  }
}