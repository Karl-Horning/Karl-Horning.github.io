export default function AboutLookingFor() {
    return (
        <div data-aos="zoom-in" data-aos-delay="400" className="lg:col-span-2">
            <section
                aria-labelledby="skills-heading"
                className="h-full transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <div className="mb-6 flex items-center justify-center gap-3">
                    <h2 id="skills-heading" className="text-2xl text-primary">
                        What I&apos;m Looking For
                    </h2>
                </div>

                <p>
                    I&apos;m looking for remote and hybrid roles. As a UK
                    citizen with indefinite leave to remain in Portugal, I have
                    full work rights in both countries and am open to
                    opportunities across Europe. London is an ideal base for me
                    when working in the UK, as it allows for easy travel to
                    Portugal. I enjoy working in education but am also open to
                    roles in the technology sector.
                </p>

                <div className="mt-6 space-y-2 text-center">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-sm text-white">
                        Available for new opportunities
                    </span>
                    <p className="text-sm text-muted">
                        Open to remote, hybrid, and London-based positions
                        across the UK, Portugal, and Europe
                    </p>
                </div>
            </section>
        </div>
    );
}
