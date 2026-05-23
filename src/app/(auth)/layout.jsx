import Navbar from "@/components/shared/Navbar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-0">
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AuthLayout;
