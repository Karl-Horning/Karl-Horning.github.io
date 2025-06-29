import { assets } from "@/constants/assets";
import Image from "next/image";

/**
 * A visual profile card component used on the About page.
 *
 * Displays a profile image with an overlay that appears on hover,
 * showing the user's name and role description.
 *
 * This component is purely presentational and does not accept props.
 *
 * @component
 */
export default function AboutPhotoCard() {
    return (
        <section className="group relative">
            <Image
                src={assets.profileImage}
                alt="Karl: JavaScript developer and learning technologist"
                className="h-full w-full transform rounded-xl bg-primary object-cover transition-transform duration-300 group-hover:scale-105"
                priority={true}
                width={480}
                height={480}
            />
            <div className="absolute inset-0 transform rounded-xl bg-black/60  p-4 text-white opacity-0 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100">
                <h2 className="text-xl font-bold">Karl Horning</h2>
                <p className="text-sm">
                    Full-Stack JavaScript Developer & Learning Technologist
                </p>
            </div>
        </section>
    );
}
