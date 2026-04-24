import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <section className="full-page" aria-labelledby="error-heading">
            <div className="page-inner">
                <p className="error__eyebrow">— Error</p>
                <div className="error__code" aria-hidden="true" data-text="404">
                    <span>4</span>
                    <span className="zero">0</span>
                    <span>4</span>
                </div>
                <div className="error__rule" aria-hidden="true"></div>
                <div className="error__bottom">
                    <div className="error__left">
                        <h1 className="error__heading" id="error-heading">
                            Page not found.
                        </h1>
                        <p className="error__sub">
                            This URL doesn&apos;t exist — the link may be broken
                            or the page has moved.
                        </p>
                    </div>
                    <div className="error__actions">
                        <Link href="/" className="btn btn--solid">
                            <FiArrowLeft aria-hidden="true" /> Go home
                        </Link>
                        <Link href="/blog" className="btn btn--ghost">
                            Read the blog
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
