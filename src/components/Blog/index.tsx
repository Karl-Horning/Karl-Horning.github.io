import Section from "../Section";
import BlogCard from "./BlogCard";

export default function Blog() {
    return (
        <Section id="blog" header="From the Blog">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                <BlogCard />
                <BlogCard />
            </div>
        </Section>
    );
}
