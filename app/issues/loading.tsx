import { Table } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5, 6];

  return (
    <>
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
          {issues.map((issue) => (
            <Table.Row key={issue}>
              <Table.Cell>
                <div className="skeleton h-4 w-full"></div>
                <div className="block md:hidden">
                  <div className="skeleton h-4 w-full"></div>
                </div>
              </Table.Cell>

              <Table.Cell className="hidden md:table-cell">
                <div className="skeleton h-4 w-full"></div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <div className="skeleton h-4 w-full"></div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};
export default LoadingIssuesPage;
