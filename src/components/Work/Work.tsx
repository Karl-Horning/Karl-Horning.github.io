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
                Things I&apos;ve been working on at work.
            </p>

            <div className="gap-4 md:grid md:grid-cols-12">
                <WorkAndProjectsText
                    title="Learnlight App"
                    description="I am currently responsible for developing and maintaining the GraphQL API used by the Learnlight app's frontend. Leveraging Sequelize as the ORM, my role involves crafting efficient raw SQL queries to extract pertinent business data."
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
                    description="This app monitors trainers undergoing training, retrieving job and applicant data from the JazzHR API through chained promises. It utilises the exceljs library to export this data into an Excel file, which is then utilised in the onboarding process."
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
