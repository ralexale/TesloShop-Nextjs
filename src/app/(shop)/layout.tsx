import { TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen">
      <TopMenu />
      <main className="px-0 sm:px-5">{children}</main>
    </main>
  );
}
