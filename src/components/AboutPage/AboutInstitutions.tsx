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
                    {/* Imperial College London */}
                    <li className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-transform hover:scale-105">
                        <Image
                            src="/img/institutions/imperial-logo.svg"
                            alt="Imperial College London logo"
                            title="Imperial College London"
                            width={160}
                            height={80}
                            className="object-contain"
                        />
                    </li>

                    {/* Kingston University */}
                    <li className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-transform hover:scale-105">
                        <Image
                            src="/img/institutions/kingston-university-logo.svg"
                            alt="Kingston University London logo"
                            title="Kingston University London"
                            width={160}
                            height={80}
                            className="object-contain"
                        />
                    </li>

                    {/* St George’s, University of London */}
                    <li className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-transform hover:scale-105">
                        <Image
                            src="/img/institutions/city-st-georges-logo.svg"
                            alt="City St George's, University of London logo"
                            title="City St George's, University of London"
                            width={160}
                            height={80}
                            className="object-contain"
                        />
                    </li>

                    {/* University of Roehampton */}
                    <li className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-transform hover:scale-105">
                        <Image
                            src="/img/institutions/roehampton-logo.svg"
                            alt="University of Roehampton logo"
                            title="University of Roehampton"
                            width={160}
                            height={80}
                            className="object-contain"
                        />
                    </li>
                </ul>
            </section>
        </div>
    );
}
