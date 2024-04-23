import PageSection from "@/components/PageSection/PageSection";
import * as Icons from "@/components/Icons/Icons";
import * as ProfileLinks from "@/components/ProfileLinks/ProfileLinks";
import WorkAndProjectsImage from "@/components/WorkAndProjects/WorkAndProjectsImage";
import WorkAndProjectsText from "@/components/WorkAndProjects/WorkAndProjectsText";

/**
 * Work component displays work projects completed.
 * @component
 * @returns {JSX.Element} JSX Element representing the Work component.
 */
export default function Work() {
    const llAppAvailableFromTags = [
        {
            link: ProfileLinks.learnlightIosAppLink,
            colour: "primary",
            icon: <Icons.AppStoreIosIcon />,
            name: "iOS Store",
        },
        {
            link: ProfileLinks.learnlightPlayAppLink,
            colour: "secondary",
            icon: <Icons.GooglePlayIcon />,
            name: "Play Store",
        },
    ];

    const llAppBuiltUsingTags = [
        {
            link: ProfileLinks.gitHubGraphQlTagLink,
            colour: "secondary",
            icon: <Icons.GraphQlIcon />,
            name: "GraphQL",
        },
        {
            link: ProfileLinks.gitHubNodeJsTagLink,
            colour: "success",
            icon: <Icons.NodeJsIcon />,
            name: "Node.js",
        },
        {
            link: ProfileLinks.gitHubPostgreSqlTagLink,
            colour: "primary",
            icon: <Icons.PostgreSqlIcon />,
            name: "PostgreSQL",
        },
        {
            link: ProfileLinks.gitHubApolloServerTagLink,
            colour: "secondary",
            icon: <Icons.ApolloServerIcon />,
            name: "Apollo Server",
        },
        {
            link: ProfileLinks.gitHubMongoDbTagLink,
            colour: "success",
            icon: <Icons.MongoDbIcon />,
            name: "MongoDB",
        },
    ];

    const ttlAppAvailableFromTags = [
        {
            link: ProfileLinks.trainerTraineeListLink,
            colour: "primary",
            icon: <Icons.GitHubIcon />,
            name: "GitHub",
        },
    ];

    const ttlAppBuiltUsingTags = [
        {
            link: ProfileLinks.gitHubElectronTagLink,
            colour: "primary",
            icon: <Icons.ElectronIcon />,
            name: "Electron",
        },
        {
            link: ProfileLinks.gitHubBootstrapTagLink,
            colour: "secondary",
            icon: <Icons.BootstrapIcon />,
            name: "Bootstrap",
        },
    ];

    return (
        <PageSection id="work" header="Work" bgColour="bg-white">
            <p className="mb-20 text-center">
                Embark on a journey through my professional endeavours. Explore
                the projects that showcase my skills and dedication in action.
            </p>

            <div className="gap-4 md:grid md:grid-cols-12">
                <WorkAndProjectsText
                    title="Learnlight App"
                    description="Driving the backend engine of the Learnlight app, I meticulously sculpt and maintain its GraphQL API, ensuring seamless communication with the frontend. With Sequelize as my trusty ORM, I orchestrate efficient SQL queries, extracting crucial business data to power the app's functionality. Additionally, I've seamlessly integrated the Oxford Learner's Dictionaries API, enriching the app's offerings with premium language resources."
                    order={1}
                    availableFromTags={llAppAvailableFromTags}
                    builtUsingTags={llAppBuiltUsingTags}
                />

                <WorkAndProjectsImage
                    src="/work-and-projects/learnlight-app-preview.webp"
                    alt="Learnlight app"
                    order={2}
                />
            </div>

            <div className="gap-4 md:grid md:grid-cols-12">
                <WorkAndProjectsText
                    title="Trainer Trainee List"
                    description="Introducing the Trainer Trainee List app, a robust tool tailored to empower onboarder staff in tracking the progress of trainers. Seamlessly interfacing with the JazzHR API through Axios, this application efficiently retrieves and organizes job and applicant data. Leveraging Electron and Bootstrap for a seamless user experience, it employs the exceljs library to export comprehensive reports, enabling onboarder staff to monitor trainer progress with ease."
                    order={2}
                    availableFromTags={ttlAppAvailableFromTags}
                    builtUsingTags={ttlAppBuiltUsingTags}
                />

                <WorkAndProjectsImage
                    src="/work-and-projects/trainer-trainee-list-preview.webp"
                    alt="Trainer Trainee List app"
                    order={1}
                />
            </div>
        </PageSection>
    );
}
