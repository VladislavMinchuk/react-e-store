import { ReactNode } from "react";
import AppHeader from "../blocks/AppHeader";
import AppFooter from "../blocks/AppFooter";

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <AppHeader></AppHeader>
        <main className="main-layout">
          { children }
        </main>
      <AppFooter></AppFooter>
    </>
  );
}

export default MainLayout;