import { simulateDelay } from "@/app/utils/simulateDelay";
import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssuePage = async () => {
  await simulateDelay(5000);

  return <div>Loading...</div>;
};
export default LoadingNewIssuePage;
