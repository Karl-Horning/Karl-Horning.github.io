import Head from "next/head";

type JsonLdContactProps = {
    jsonLdData: Record<string, unknown>;
};

/**
 * Injects JSON-LD structured data into the document head.
 *
 * @component
 * @param jsonLdData - The JSON-LD object to inject.
 * @returns JSON-LD script tag in `<Head>`.
 */
export default function JsonLdSchema({ jsonLdData }: JsonLdContactProps) {
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                key="jsonld-person"
            />
        </Head>
    );
}
