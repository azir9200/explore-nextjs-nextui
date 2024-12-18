import { Card as NextUiCard } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

const CardSkeleton = () => {
  return (
    <NextUiCard className="py-4">
      <div className="pb-0 pt-2 px-4 flex-col items-start">
        <Skeleton className="my-2 w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
      </div>
      <div className="overflow-visible py-2">
        <Skeleton className="py-2 w-full rounded-full">
          <div className="h-8 w-full rounded-full bg-default-200" />
        </Skeleton>
      </div>
      <div>
        <Skeleton className="py-2 w-full rounded-full">
          <div className="h-8 w-full rounded-full bg-default-200" />
        </Skeleton>
      </div>
    </NextUiCard>
  );
};

export default CardSkeleton;
