import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
    return (
        <div>
            <Header />
            <main className="container mx-auto my-0 w-11/12 pt-4 sm:w-3/4 sm:max-w-3xl">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
