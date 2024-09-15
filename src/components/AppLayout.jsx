import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
    return (
        <div className="flex h-screen flex-col justify-between text-xs sm:text-sm">
            <Header />
            <main className="container mx-auto my-0 sm:w-3/4 sm:max-w-3xl">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
