import { Issue } from "@prisma/client";
import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-2xl">
      <Skeleton width="3rem" />
      <Flex className="gap-3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};
export default LoadingIssueDetailPage;
