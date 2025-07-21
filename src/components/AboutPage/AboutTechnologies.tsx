import { aboutTechnologies } from "@/constants/about";
import Image from "next/image";

export default function AboutTechnologies() {
    return (
        <div data-aos="zoom-in" data-aos-delay="400">
            <section
                aria-labelledby="tech-heading"
                className="h-full transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="tech-heading"
                    className="mb-6 text-center text-2xl text-primary"
                >
                    Technologies I&apos;ve Worked With
                </h2>

                <ul className="grid grid-cols-2 gap-6" role="list">
                    {aboutTechnologies.map(({ name, src }) => (
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
