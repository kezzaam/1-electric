
import ProfileCard from "./ProfileCard"
import CTA from "./CTA"
import Testimonials from "./Testimonials"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "react-feather"
import Mount from "./Mount"

export default function About() {

    // service data
    const team = [
        {
            image: '/shane.jpg',
            firstname: 'Shane',
            lastname: 'Elliott',
            position: 'Owner | Registered Electrician',
            description: '',
            skills: [
                'Honest and Reliable',
                'Proven track record',
                'Great communication',
                'Excellent service'
            ],
            email: "shane@1electric.com",
        },
    ]

    return (
        <>
            <Mount />
            <main className="flex flex-col items-center justify-center p-6 lg:px-24 lg:py-12 snap-y">
                <section className="flex flex-col items-center text-center snap-center space-y-10">

                    {/* heading, title, description */}
                    <div>
                        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">We are 1 Electric</h4>
                        <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
                        <div className="text-xl mb-8 max-w-4xl space-y-6">
                        <p>1 Electric is owned and operated by Shane Elliott, registered electrician.</p>
                        <p>Shane grew up in the Waikato on a dairy farm and has the great kiwi number 8 wire can do attitude, ingenuity and resourcefulness.</p> 
                        
                        <p>Shane has a wide range of previous experience including appliance repairs and installations, milk and water pump technician and electrical work specialising in industrial and heavy industrial work.</p> 
                        
                        <p>Shane moved to the sunny Bay of Plenty with his family and has been working as an electrician in the Bay since 2016.</p> 
                        
                        <p>Shane and the 1 electric team pride themselves with keeping up to date with the latest technology, rules and regulations and licensing requirements to ensure that they can carry out all projects safely and efficiently.</p> 

                        <p>We are a member of ECANZ (Electrical Contractors Association of New Zealand) and are certified Master Electricians.This means you can be assured of the quality of our work and that we are experts in what we do. All our work is guaranteed.</p>
                        
                        </div>
                    </div>

                    {/* divider */}
                    <div className="w-36 h-1 mb-10 bg-trueblue"></div>

                    {/* heading */}
                    <h2 className="text-3xl font-bold text-center mb-4"></h2>

                    {/* profile cards section - for future layout with more staff */}
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
                    
                    {/* Profile section for Shane - can also add more like this easily */}
                    {team.map((person, index) => {
                            const name = `${person.firstname} ${person.lastname}`;

                            return (
                                <Link
                                    key={index}
                                    href={`#${name.toLowerCase()}`}
                                    passHref
                                >
                                    <section
                                        id={name.toLowerCase()}
                                        key={index}
                                        className={`${index % 2 === 0 ? 'bg-ghostwhite' : 'bg-deepkoamaru text-white'
                                            } flex flex-col lg:flex-row shadow hover:scale-105 hover:transition-all snap-center scroll-mt-24 items-center`}
                                    >
                                        <div className={`lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                                            <Image
                                                src={person.image}
                                                alt={name}
                                                width={1000}
                                                height={1000}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className={`lg:w-1/2 lg:order-${index % 2 === 0 ? '2' : '1'} flex flex-col p-8 lg:p-24`}>
                                            <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                                            <h5 className="text-sm text-trueblue mb-4">{person.position}</h5>
                                            <p className="mb-4">{person.description}</p>
                                            <ul className="ml-6 space-y-4">
                                                {person.skills.map((skill, index) => (
                                                    <li key={index} className="flex items-center space-x-2 text-metallicorange">
                                                        <CheckCircle />
                                                        <p>{skill}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link href={`mailto:${person.email}`}>
                                                <button className="bg-trueblue rounded-lg p-4 mt-10 text-white text-xl font-bold hover:bg-metallicorange hover:scale-105 hover:transition-all w-full">Email {person.firstname}</button>
                                            </Link>
                                        </div>
                                    </section>
                                </Link>
                            );
                        })}
                    
                </section>
            </main>
            <Testimonials />
            <CTA />
        </>
    )
}
