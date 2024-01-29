import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import { CustomLink, IssueStatusBadge } from "../components";
import IssueActions from "./IssueActions";

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
}

const IssuesPage = async () => {
  const issues: Issue[] = await prisma.issue.findMany();

  // await simulateDelay(2000);

  return (
    <div className="">
      <IssueActions />

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues?.map((issue: Issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <CustomLink href={`/issues/${issue.id}`}>
                  {issue.title}
                </CustomLink>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status as Status} />
                </div>
              </Table.Cell>

              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status as Status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
export default IssuesPage;
