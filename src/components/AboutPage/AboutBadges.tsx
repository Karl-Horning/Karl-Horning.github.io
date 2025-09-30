import { aboutBadges } from "@/lib/constants/about";
import Image from "next/image";

/**
 * A presentational component that displays a collection of badges and certifications.
 *
 * The component renders a styled section with a heading and a responsive grid list
 * of digital badge images. Each badge includes appropriate alt and title attributes
 * for accessibility. Uses Next.js Image component with lazy loading.
 *
 * This component is static and does not accept any props.
 *
 * @component
 */
export default function AboutBadges() {
    return (
        <div data-aos="zoom-in" data-aos-delay="400">
            <section
                aria-labelledby="badges-heading"
                className="h-full transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="badges-heading"
                    className="mb-6 text-center text-2xl text-primary"
                >
                    Certifications and Badges I&apos;ve Earned
                </h2>

                <ul className="grid grid-cols-2 gap-6" role="list">
                    {aboutBadges.map(({ name, src }) => (
                        <li
                            key={src}
                            className={`flex items-center justify-center rounded-lg bg-white p-4 shadow-sm ${
                                name === "Apple Teacher" ? "col-span-2" : ""
                            }`}
                        >
                            <Image
                                src={src}
                                key={name}
                                alt={`${name} badge`}
                                title={name}
                                width={160}
                                height={80}
                                className="object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
