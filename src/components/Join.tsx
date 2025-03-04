"use client";

import CTA from "./CTA";
import Testimonials from "./Testimonials";
import PageHeroImage from "./PageHeroImage";

export default function Join() {
    return (
        <>
            {/* Hero Section */}
            <PageHeroImage
                imageUrl="/mount.jpg"
                photoCredit="Tim Walker"
                photoLink="http://electricphotography.co.nz/"
            />
            <section className="content">
                <article>

                    {/* Heading, Title & Description */}
                    <div>
                        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">
                            We are 1 Electric
                        </h4>
                        <h2 className="text-3xl font-bold text-center mb-4 max-w-2xl mx-auto">
                            Become part of a growing team with a big variety of exciting projects
                        </h2>
                        {/* Divider */}
                        <div className="divider"></div>


                        {/* Job Description */}
                        <article className="text-xl max-w-4xl space-y-6">
                            <p>
                                We are often looking for qualified Electricians in the Bay of Plenty.
                                We specialize in industrial work and have a great team that we look after.
                            </p>
                            <p>
                                Depending on our needs at the time, we can accommodate an employee
                                or sub-contractor arrangement with flexibility around days/hours per week for the right person.
                            </p>
                            <p>
                                We look for an experienced Industrial Electrician with great problem-solving skills
                                and a willingness to learn and to teach apprentices. Excellent communication
                                with all of our team and stakeholders is a must. The perfect fit for our team
                                is someone who is honest, reliable with great work ethic and an ability to self-manage
                                and work independently.
                            </p>
                            <p>
                                You would need a current practicing license and a current driver’s license.
                                Working at heights and{" "}
                                <span title="Mobile Elevating Work Platform">MEWP</span> certification is a bonus;
                                however, we can provide necessary training for the right person.
                            </p>
                            <p>
                                If you think you’ve got what it takes, please email us your CV at{" "}
                                <a
                                    className="text-trueblue hover:text-metallicorange"
                                    href="mailto:admin@1electric.nz"
                                    aria-label="Send an email to admin@1electric.nz"
                                >
                                    admin@1electric.nz
                                </a>{" "}
                                telling us a bit about yourself, and we’ll get in touch.
                            </p>
                        </article>
                    </div>
                    {/* Future form section */}
                    {/* <section className="mt-10">
            <FormComponent /> 
          </section> */}

                </article>
            </section >

            {/* Testimonials & Call-to-Action */}
            < Testimonials />
            <CTA />
        </>
    );
}
