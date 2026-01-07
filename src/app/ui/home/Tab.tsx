import { TTabs } from "@/app/page";
import { cn } from "@/lib/utils";

type TabProps = {
  tabName: TTabs;
  currentTab: TTabs;
  handler: (str: TTabs) => void;
};

export const Tab: React.FC<TabProps> = ({ tabName, currentTab, handler }) => {
  return (
    <div
      onClick={() => handler(tabName)}
      className={cn(
        tabName === currentTab && "border-b",
        "py-1 w-20 cursor-pointer"
      )}
    >
      <p className="text-center capitalize">{tabName}</p>
    </div>
  );
};
