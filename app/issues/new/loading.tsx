import { simulateDelay } from "@/app/utils/simulateDelay";
import { Box } from "@radix-ui/themes";
import { Skeleton } from "../../components";

const LoadingNewIssuePage = async () => {
  await simulateDelay(5000);

  return (
    <Box>
      <Skeleton width="3rem" />
      <Skeleton width="5rem" />
    </Box>
  );
};
export default LoadingNewIssuePage;
