import Aside, { MobileMenu } from "@/components/aside";
import Header from "@/components/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Aside />
      <div className="relative mx-3 my-3 lg:ml-28 lg:mr-4 pb-24 lg:pb-0 flex flex-col gap-6">
        <Header />
        {children}
      </div>
      <MobileMenu />
    </>
  );
}
