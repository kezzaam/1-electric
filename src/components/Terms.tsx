import CTA from "./CTA";
import Testimonials from "./Testimonials";
import PageHeroImage from "./PageHeroImage";

export default function Terms() {
    return (
        <>
            <PageHeroImage
                imageUrl="/mount.jpg"
                photoCredit="Tim Walker"
                photoLink="http://electricphotography.co.nz/"
            />
            <section className="content">

                <article>

                    {/* Privacy Statement */}
                    <div>
                        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">
                            Privacy Policy
                        </h4>
                        <h2 className="text-3xl font-bold text-center mb-4">
                            Our Commitment to Privacy
                        </h2>
                        {/* Divider */}
                        <div className="divider"></div>

                        <div className="text-xl text-center max-w-4xl space-y-6">
                            <p>
                                At 1 Electric, we prioritize the integrity, security, and privacy of personal information.
                                We adhere to the principles outlined in the Privacy Act 2020 and are committed to safeguarding your information.
                            </p>
                            <p>
                                We collect various types of personal information, including but not limited to: name, contact information, location,
                                and site/job-specific details. This information is utilized to complete electrical projects and may be shared with
                                other tradespeople involved in a project.
                            </p>
                            <p>
                                You have the right to request a copy of your personal information held by us and request corrections if necessary.
                                For inquiries or corrections, please contact us at{" "}
                                <a
                                    href="mailto:admin@1electric.nz"
                                    className="text-trueblue hover:scale-105 transition-all hover:text-metallicorange"
                                    aria-label="Send an email to admin@1electric.nz"
                                >
                                    admin@1electric.nz
                                </a>{" "}
                                or call{" "}
                                <a
                                    href="tel:+64224571594"
                                    className="text-trueblue hover:scale-105 transition-all hover:text-metallicorange whitespace-nowrap"
                                    aria-label="Call 022 457 1594"
                                >
                                    022 457 1594
                                </a>.
                            </p>
                        </div>
                    </div>

                    {/* Health & Safety Statement */}
                    <div>
                        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">
                            Health & Safety Policy
                        </h4>
                        <h2 className="text-3xl font-bold text-center mb-4">
                            Our Commitment to Health & Safety
                        </h2>
                        {/* Divider */}
                        <div className="divider"></div>

                        <div className="text-xl text-center max-w-4xl space-y-6">
                            <p>
                                At 1 Electric, we maintain a proactive approach to health and safety. We continuously evolve our practices based on
                                incident reports, changes in regulations, and best practices in the industry.
                            </p>
                            <p>
                                We prioritize providing a safe and healthy workplace for our team and others present on-site. Our comprehensive
                                workplace health and safety policies, updated regularly, ensure adherence to sound practices.
                            </p>
                            <p>
                                Additionally, our team holds certifications in first aid, working at heights, and elevated working platforms.
                                We are certified master electricians and members of Sitesafe.
                            </p>
                        </div>
                    </div>

                </article>
            </section>

            {/* Testimonials & Call-to-Action */}
            <Testimonials />
            <CTA />
        </>
    );
}
