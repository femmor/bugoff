import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  {
    label: string;
    color: "orange" | "purple" | "green";
  }
> = {
  OPEN: {
    label: "Open",
    color: "orange",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "purple",
  },
  CLOSED: {
    label: "Closed",
    color: "green",
  },
};

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};
export default IssueStatusBadge;
