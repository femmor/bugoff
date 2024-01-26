import ErrorMessage from "@/app/components/ErrorMessage";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { notFound } from "next/navigation";

interface IssueDetailPageProps {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params: { id } }: IssueDetailPageProps) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <h1>{issue.title}</h1>
      <p>{issue.description}</p>
      <IssueStatusBadge status={issue.status as Status} />
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  );
};
export default IssueDetailPage;
