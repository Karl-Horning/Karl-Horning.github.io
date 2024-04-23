import { motion, Variants, Variant } from "framer-motion";
import { ReactNode } from "react";

/**
 * Props for the Grow component.
 */
interface GrowProps {
    children: ReactNode; // The content to be animated
}

/**
 * Props for the GrowPlusHover component.
 */
interface GrowPlusHoverProps {
    children: ReactNode; // The content to be animated
}

/**
 * Common animation variant used in both Grow and GrowPlusHover components.
 */
const commonVariant: Variant = {
    scale: 1,
    opacity: 1,
    transition: {
        delay: 0.4,
    },
};

/**
 * Animation variant for hover effect.
 */
const hoverVariant: Variant = {
    position: "relative",
    zIndex: 1,
    scale: [1, 1.2, 1.1],
    transition: {
        duration: 0.2,
    },
};

/**
 * Variants object containing the hover animation variant.
 */
const hoverVariants: Variants = {
    hover: hoverVariant,
};

/**
 * Grow component applies a growing animation to its children when they come into view.
 * @param {GrowProps} props - The props for the Grow component.
 * @returns {JSX.Element} A JSX Element representing the Grow component.
 */
export function Grow({ children }: GrowProps): JSX.Element {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={growVariants}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * GrowPlusHover component applies a growing animation and a hover effect to its children.
 * @param {GrowPlusHoverProps} props - The props for the GrowPlusHover component.
 * @returns {JSX.Element} A JSX Element representing the GrowPlusHover component.
 */
export function GrowPlusHover({ children }: GrowPlusHoverProps): JSX.Element {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={growVariants}
            whileHover="hover" // Reference the hover variant label
        >
            {children}
        </motion.div>
    );
}

/**
 * Variants object containing animation variants for Grow component.
 */
const growVariants: Variants = {
    hidden: {
        scale: 0.8,
        opacity: 0,
    },
    visible: commonVariant,
};
