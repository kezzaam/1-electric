// import ProfileCard from "./ProfileCard";
import CTA from "./CTA";
import Testimonials from "./Testimonials";
import { CheckCircle } from "react-feather";
import PageHeroImage from "./PageHeroImage";

export default function About() {
    // Service data
    const team = [
        {
            image: "/shane.jpg",
            firstname: "Shane",
            lastname: "Elliott",
            position: "Owner | Registered Electrician",
            description: "",
            skills: [
                "Honest and Reliable",
                "Proven track record",
                "Great communication",
                "Excellent service",
            ],
            email: "shane@1electric.com",
        },
    ];

    return (
        <>
            <PageHeroImage
                imageUrl="/mount.webp"
                photoCredit="Tim Walker"
                photoLink="http://electricphotography.co.nz/"
            />
            <section className="content">
                <article>
                    {/* Heading, Title, Description */}
                    <div>
                        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">
                            We are 1 Electric
                        </h4>
                        <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
                        {/* Divider */}
                        <div className="divider"></div>
                        <div className="text-xl mb-8 max-w-4xl space-y-6">
                            <p>1 Electric is owned and operated by Shane Elliott, a registered electrician.</p>
                            <p>Shane grew up in the Waikato on a dairy farm and has the great Kiwi Number 8 wire can-do attitude, ingenuity, and resourcefulness.</p>
                            <p>Shane has a wide range of previous experience including appliance repairs and installations, milk and water pump technician, and electrical work specializing in industrial and heavy industrial work.</p>
                            <p>Shane moved to the sunny Bay of Plenty with his family and has been working as an electrician in the Bay since 2016.</p>
                            <p>Shane and the 1 Electric team pride themselves on keeping up to date with the latest technology, rules, regulations, and licensing requirements to ensure that they can carry out all projects safely and efficiently.</p>
                            <p>We are a member of ECANZ (Electrical Contractors Association of New Zealand) and are certified Master Electricians. This means you can be assured of the quality of our work and that we are experts in what we do. All our work is guaranteed.</p>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center mb-4"></h2>

                    {/* Profile Cards Section - For Future Layout with More Staff */}
                    {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                        <ProfileCard
                            name="Shane Elliot"
                            position="Position here"
                            description="Brief description ie BAGS statement here, maybe show a bit of personality"
                            email="shane@1electric.com"
                            image="/shane.jpg"
                        />
                        <ProfileCard
                            name="Shane Elliot"
                            position="Position here"
                            description="Brief description ie BAGS statement here, maybe show a bit of personality"
                            email="shane@1electric.com"
                            image="/shane.jpg"
                        />
                        <ProfileCard
                            name="Shane Elliot"
                            position="Position here"
                            description="Brief description ie BAGS statement here, maybe show a bit of personality"
                            email="shane@1electric.com"
                            image="/shane.jpg"
                        />
                        <ProfileCard
                            name="Shane Elliot"
                            position="Position here"
                            description="Brief description ie BAGS statement here, maybe show a bit of personality"
                            email="shane@1electric.com"
                            image="/shane.jpg"
                        />
                        <ProfileCard
                            name="Shane Elliot"
                            position="Position here"
                            description="Brief description ie BAGS statement here, maybe show a bit of personality"
                            email="shane@1electric.com"
                            image="/shane.jpg"
                        />
                    </div> */}

                    {/* Profile Section for Shane - Can Also Add More Like This Easily */}
                    {team.map((person, index) => {
                        const name = `${person.firstname} ${person.lastname}`;
                        return (
                            <section
                                id={name.toLowerCase()}
                                key={index}
                                className={`${index % 2 === 0 ? "bg-ghostwhite" : "bg-deepkoamaru text-white"}
                                    flex flex-col lg:flex-row shadow hover:scale-101 hover:transition-all snap-center scroll-mt-24 items-center`}
                            >
                                {/* Image */}
                                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                                    <img
                                        src={person.image}
                                        alt={name}
                                        className="object-cover w-full h-auto"
                                    />
                                </div>

                                {/* Profile Info */}
                                <div className={`lg:w-1/2 flex flex-col p-8 lg:p-24 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                                    <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                                    <h5 className="text-sm text-trueblue mb-4">{person.position}</h5>
                                    <p className="mb-4">{person.description || "Experienced and reliable electrician."}</p>

                                    {/* Skills */}
                                    <ul className="ml-6 space-y-4">
                                        {person.skills.map((skill, i) => (
                                            <li key={i} className="flex items-center space-x-2 text-metallicorange">
                                                <CheckCircle />
                                                <p>{skill}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Contact Button */}
                                    <a href={`mailto:${person.email}`}>
                                        <button className="bg-trueblue rounded-lg p-4 mt-10 text-white text-xl font-bold hover:bg-metallicorange hover:scale-101 hover:transition-all w-full cursor-pointer">
                                            Email {person.firstname}
                                        </button>
                                    </a>
                                </div>
                            </section>
                        );
                    })}
                </article>
            </section>

            {/* Testimonials & CTA */}
            <Testimonials />
            <CTA />
        </>
    );
}
