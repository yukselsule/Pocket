import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
    return (
        <div>
            <Header />
            <main className="container mx-auto my-0 w-3/4 pt-12">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
