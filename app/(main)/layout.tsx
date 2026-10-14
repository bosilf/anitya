import Header from "@/components/headers/Header";
import Sidebar from "@/components/sidebars/Sidebar";

export default function PlayLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-full max-h-screen min-w-full max-w-screen overflow-hidden flex flex-col">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}