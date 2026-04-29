import Navbar from "@/components/Navbar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;