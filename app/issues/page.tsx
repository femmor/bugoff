import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      Issues Page
      <Button>
        <Link href="/issues/new">Create Issue</Link>
      </Button>
    </div>
  );
};
export default IssuesPage;
