interface HeaderProps {
    text: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}

/**
 * A reusable header component that renders an h1-h6 element with styling based on the heading level.
 *
 * @component
 * @param {string} text - The text content inside the header.
 * @param {1 | 2 | 3 | 4 | 5 | 6} [level=2] - The heading level, from 1 to 6, defaults to 2.
 * @param {string} [className] - Additional Tailwind CSS classes to apply.
 */
export default function Header({
    text,
    level = 2,
    className = "",
}: HeaderProps) {
    // Choose the tag dynamically
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    // Define font sizes for each level (customise as needed)
    const sizeClasses = {
        1: "text-5xl",
        2: "text-4xl",
        3: "text-3xl",
        4: "text-2xl",
        5: "text-xl",
        6: "text-lg",
    };

    const combinedClasses = `mb-12 text-center font-heading font-black text-primary ${sizeClasses[level]} ${className}`;

    return <Tag className={combinedClasses}>{text}</Tag>;
}
