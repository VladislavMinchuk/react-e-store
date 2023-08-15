import { ReactNode } from "react";
import Header from "../blocks/common/Header";

type MainLayoutProps = {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="main-layout">
            <Header></Header>
            { children }
        </div>
    );
}

export default MainLayout;