import Navbar from "@/components/shared/Navbar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className} bg-[#F3F3F3]`}>
            <div className="container mx-auto">
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AuthLayout;