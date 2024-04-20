import HeaderImage from "@/components/Header/HeaderImage";
import HeaderText from "@/components/Header/HeaderText";

/**
 * Header component renders the header section of the website.
 * @component
 * @returns {JSX.Element} Header component
 */
export default function Header() {
    return (
        <header
            id="header"
            className="bg-red min-h-screen px-10 py-20 text-white"
        >
            <div className="container mx-auto">
                <div className="py-5 md:grid md:grid-cols-2 md:gap-4">
                    <div className="flex items-center justify-center md:min-h-screen">
                        <HeaderImage />
                    </div>
                    <div className="flex items-center justify-center md:min-h-screen">
                        <HeaderText />
                    </div>
                </div>
            </div>
        </header>
    );
}
