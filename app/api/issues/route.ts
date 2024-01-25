import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import prisma from "@/prisma/client";

// zod schema to validate the request body
const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required."),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Validate request body
  const validationResult = createIssueSchema.safeParse(body);

  // If validation is not successful, we return error
  if (!validationResult.success) {
    return NextResponse.json(
      {
        error: validationResult.error.format(),
      },
      {
        status: 400,
      }
    );
  }

  // Else store the issue in the database
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
