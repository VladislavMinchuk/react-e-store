import { ReactNode } from "react";
import AppHeader from "../blocks/AppHeader";
import AppFooter from "../blocks/AppFooter";

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <AppHeader></AppHeader>
      { children }
      <AppFooter></AppFooter>
    </div>
  );
}

export default MainLayout;