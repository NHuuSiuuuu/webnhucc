import { Filter } from "lucide-react";
import { FilterType } from "@/lib/data";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";


// Component này là làm về phần thống kê và bộ lọc
function StatsAndFilters({
  completedTasksCount = 0,
  activeTasksCount = 0,
  filter = "all",
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      {/* phần thống kê */}
      <div className="flex gap-3">
        <Badge
          variant="secondary"
          className="rounded-md bg-white/50 text-accent-foreground border-info/20"
        >
          {activeTasksCount} {FilterType.active}
        </Badge>
        <Badge
          variant="secondary"
          className="rounded-md bg-white/50 text-success border-success/20"
        >
          {completedTasksCount} {FilterType.completed}
        </Badge>
      </div>

      {/* Phần filter */}
      <div className="flex flex-col gap-2 sm:flex-row">
        {/* Vì FilterType là 1 đối tượng obj nên phải dùng Obj.keys  */}
        {Object.keys(FilterType).map((type) => (
          <Button
            key={type}
            variant={filter === type ? "gradient" : "ghost"} // Nếu là type = all thì sẽ lấy màu gradient và ngược lại
            size="sm"
            className="capitalize"
          >
            <Filter className="size-4" />
            {FilterType[type]}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default StatsAndFilters;
