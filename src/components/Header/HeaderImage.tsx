import { Image } from "@nextui-org/react";

/**
 * HeaderImage component displays the header image for the website.
 * @component
 * @returns {JSX.Element} Header image component
 */
export default function HeaderImage() {
    return (
        <Image
            alt="Karl Horning"
            height={700}
            width={700}
            src={"/site-photo.webp"}
            className="-rotate-6 p-8 pb-12"
        />
    );
}
