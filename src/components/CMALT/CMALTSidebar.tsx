import AboutTheAuthor from "./AboutTheAuthor";
import CMALTNav from "./CMALTNav";

/**
 * CMALTSidebar component used in the CMALT layout.
 *
 * Combines the "About the Author" section and CMALT navigation into a styled sidebar.
 * Intended to be used alongside CMALT portfolio pages to provide consistent context and navigation.
 *
 * @component
 * @returns The rendered sidebar with author info and CMALT section links.
 */
export default function CMALTSidebar() {
    return (
        <aside id="sidebar" className="transform rounded-lg bg-surface p-6 text-center shadow-md sidebar">
            <AboutTheAuthor />

            <hr className="mb-6 mt-8" />

            <CMALTNav />
        </aside>
    );
}
