import Header from "@/components/headers/Header";
import Sidebar from "@/components/sidebars/Sidebar";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full max-h-screen min-w-full max-w-screen overflow-hidden flex flex-col ">
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}