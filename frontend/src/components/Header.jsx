function Header() {
  return (
    <div className="space-y-2 text-center">
      <h1 class="text-4xl font-bold text-transparent bg-primary bg-clip-text">
        Todo X
      </h1>

      {/*Text này có màu muted-foreground */}
      <p className="text-muted-foreground">
        Không có việc gì khó, chỉ sợ có việc khó hơn
      </p>
    </div>
  );
}

export default Header;
