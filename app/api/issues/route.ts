import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../validationSchemas";

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
