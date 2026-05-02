import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
            <Header />
            <BreakingNews />
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
