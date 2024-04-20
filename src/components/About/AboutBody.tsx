import { Poppins500 } from "@/app/styles/fonts";
import { Link } from "@nextui-org/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function AboutBody() {
    return (
        <div className={`${Poppins500.className} text-black`}>
            <p className="pb-4">
                I&apos;m a Full-Stack Software Engineer with 13+ years of
                experience in education. During my time working for different
                institutions in the UK and EU, I have cultivated a deep
                understanding of both the academic and tech worlds.
            </p>

            <p className="pb-4">
                I enjoy using technology to craft scalable, de-coupled, and high
                availability backend web solutions, specialising in GraphQL,
                Node.js, PostgreSQL, and MongoDB. My expertise in education has
                enabled me to automate repetitive tasks to reduce time and human
                error using technologies such as Electron, JavaScript, Node.js,
                Python, and VBA.
            </p>

            <p className="pb-4">
                One of my career highlights has been my pivotal role in
                developing Learnlight&apos;s learner platform, a project that
                has achieved an impressive uptime of 99.94% and enabled a 99.8%
                SLA with our customers. It&apos;s immensely gratifying to know
                that the platform I contributed to is accessible to students
                worldwide, whether they&apos;re accessing it through the web,
                iOS, or Google Play stores. What&apos;s truly special is that
                this project allowed me to combine my past as an English teacher
                with my current role, as I had the privilege of working on the
                very app my students used to study English!
            </p>

            <p className="pb-4">
                My aspiration is to utilise my experience as both a Full-Stack
                Software Engineer and a teacher to mentor and guide new
                developers. I&apos;m committed to sharing my knowledge and
                expertise to empower the next generation of talent in the tech
                industry.
            </p>

            <p className="pb-4">
                Message me if you&apos;d like to discuss backend development
                strategies, my work with automation, GraphQL advancements, or
                any tech (or ed-tech) related topics. I&apos;m always eager to
                collaborate and share what I have learnt in order to propel our
                industry forward!
            </p>

            <p className="pb-4">
                You can view my current contributions here:{" "}
                <Link
                    href="https://github.com/Karl-Horning"
                    target="_blank"
                    className="link"
                >
                    github.com/Karl-Horning{" "}
                    <FaArrowUpRightFromSquare className="ml-1" />
                </Link>
            </p>
        </div>
    );
}
