import { aboutInstitutions } from "@/lib/constants/about";
import Image from "next/image";

/**
 * A presentational component that displays university and organisation logos.
 *
 * Used to showcase institutions the author has worked with.
 * Logos are shown in a responsive grid with hover effects.
 *
 * This component is static and does not accept props.
 *
 * @component
 */
export default function AboutInstitutions() {
    return (
        <div data-aos="zoom-in" data-aos-delay="450">
            <section
                aria-labelledby="institutions-heading"
                className="h-full transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="institutions-heading"
                    className="mb-6 text-center text-2xl text-primary"
                >
                    Institutions I&apos;ve Worked With
                </h2>

                <ul className="grid grid-cols-2 gap-6" role="list">
                    {aboutInstitutions.map(({ name, src }) => (
                        <li
                            key={src}
                            className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm"
                        >
                            <Image
                                src={src}
                                key={name}
                                alt={`${name} logo`}
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
