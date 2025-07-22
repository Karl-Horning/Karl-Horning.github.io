import { ReactNode } from "react";
import CMALTSidebar from "@/components/CMALT/CMALTSidebar";

export default function CMALTLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mx-auto grid max-w-4xl gap-12 px-4 py-16 text-[var(--text)] lg:grid-cols-3">
            {/* Main content (2 columns on large screens) */}
            <main className="prose-cmalt lg:col-span-2">{children}</main>
            {/* Sidebar (left column on large screens) */}
            <CMALTSidebar />
        </div>
    );
}
