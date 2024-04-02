import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="min-h-[90vh] flex items-start justify-center">
                <div className="w-9/12">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}