import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "contact.json");

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as Omit<ContactForm, "createdAt">;

    let existing: ContactForm[] = [];
    try {
      const fileData = await readFile(filePath, "utf8");
      existing = JSON.parse(fileData || "[]");
    } catch {
      existing = [];
    }

    existing.push({
      ...data,
      createdAt: new Date().toISOString(),
    });

    await writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");

    return NextResponse.json({ message: "Form saved successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error saving form" }, { status: 500 });
  }
}
