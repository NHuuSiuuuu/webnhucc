import { Card } from "./ui/card";
import { Input } from "./ui/input";

function AddTask() {
  return (
    // Đây là component của ShadCn: Tạo ô hình chữ nhật
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="Cần phải làm gì?"
          className="h-12 text-base border bg-slate-50 focus:border-primary/50 focus:ring-primary/20" // ring là lớp ngoài bao boder
        />
      </div>
    </Card>
  );
}

export default AddTask;
