export default function PlayLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-full max-h-screen min-w-full max-w-screen overflow-hidden flex flex-col">
      {children}
    </div>
  );
}