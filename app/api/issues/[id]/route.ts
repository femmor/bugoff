import { issueSchema } from "@/app/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface EditIssueProps {
  params: {
    id: string;
  };
}

export async function PATCH(
  req: NextRequest,
  { params: { id } }: EditIssueProps
) {
  const body = await req.json();

  // Validate request body
  const validationResult = issueSchema.safeParse(body);

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

  // Else find the issue with the params id
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) {
    return NextResponse.json(
      {
        error: "Invalid issue",
      },
      {
        status: 404,
      }
    );
  }

  // If issue is found, update the issue with the req.body payload
  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
      closedAt: body.closedAt,
    },
  });

  return NextResponse.json(updatedIssue, { status: 200 });
}
