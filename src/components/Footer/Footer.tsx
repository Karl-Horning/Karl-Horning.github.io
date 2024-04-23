"use client";

import { useState, useEffect } from "react";
import { Poppins900 } from "@/app/styles/fonts";
import { Link } from "@nextui-org/react";
import * as Icons from "@/components/Icons/Icons";
import * as ProfileLinks from "@/components/ProfileLinks/ProfileLinks";

/**
 * Footer component displays the site's footer and the copyright info.
 * @component
 * @returns {JSX.Element} JSX Element representing the Footer component
 */
export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2024);

    useEffect(() => {
        try {
            const currentYear = new Date().getFullYear();
            setCurrentYear(currentYear);
        } catch (error) {
            console.error("Error fetching current year:", error);
        }
    }, []);

    return (
        <footer id="footer" className="bg-black py-20 text-center text-white">
            <div className="container mx-auto">
                <p className={`${Poppins900.className} my-10 text-2xl`}>
                    Karl Horning
                </p>

                <hr />

                <div
                    className={`${Poppins900.className} my-10 flex items-center justify-center gap-6 text-white`}
                >
                    <Link
                        href={ProfileLinks.linkedInLink}
                        target="_blank"
                        className="text-white"
                    >
                        <Icons.LinkedInIcon className="mr-4 text-xl" /> LinkedIn
                    </Link>

                    <Link
                        href={ProfileLinks.codePenLink}
                        target="_blank"
                        className="text-white"
                    >
                        <Icons.CodePenIcon className="mr-4 text-xl" /> CodePen
                    </Link>

                    <Link
                        href={ProfileLinks.gitHubLink}
                        target="_blank"
                        className="text-white"
                    >
                        <Icons.GitHubIcon className="mr-4 text-xl" /> GitHub
                    </Link>
                </div>

                <hr />

                <p className="my-10">
                    <small id="copyright-info">
                        &copy; {currentYear} Karl Horning
                    </small>
                </p>
            </div>
        </footer>
    );
}
