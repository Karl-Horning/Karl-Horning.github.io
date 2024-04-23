import PageSection from "@/components/PageSection/PageSection";
import AboutBody from "@/components/About/AboutBody";

/**
 * About component displays information about the user
 * @component
 * @returns {JSX.Element} JSX Element representing the About component
 */
export default function About() {
    return (
        <PageSection id="about" header="About Me">
            <AboutBody />
        </PageSection>
    );
}
