import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Topbar } from "@/components/Topbar";
import { cn } from "@/lib/utils";
import { Provider } from "@/components/SessionProvider";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const revalidate = 86400;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("scroll-smooth bg-black", inter.className)}>
        <Provider>
          <main className="grid min-h-screen grid-cols-4">
            <Sidebar />
            <div className="inner-main col-span-3 min-w-full">
              <Topbar />
              {children}
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
