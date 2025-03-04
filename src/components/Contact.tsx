import Testimonials from "./Testimonials";
import Socials from "./Socials";
import { Phone, Mail } from "react-feather";
import ContactForm from "./ContactForm";
import PageHeroImage from "./PageHeroImage";
import Map from "./Map"; // Import the new Leaflet map

export default function Contact() {
    return (
        <>
            <PageHeroImage
                imageUrl="/mount-town.jpg"
                photoCredit="Tim Walker"
                photoLink="http://electricphotography.co.nz/"
            />
            <section className="content">
                <article>

                    {/* Heading, Title, Description */}
                    <div>
                        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">
                            Keen to discuss your next project?
                        </h4>
                        <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
                        {/* Divider */}
                        <div className="divider"></div>
                        <p className="text-xl text-center mb-8 max-w-2xl">
                            We'd love to hear from you!
                            <br />
                            Fill out the form below, and we'll be in touch soon.
                            <br />
                            Or, feel free to give us a call or send us an email.
                        </p>
                    </div>

                    {/* Contact Details & Form */}
                    <div className="flex flex-col lg:flex-row p-0 m-auto mb-24 items-center justify-start bg-ghostwhite">

                        <ContactForm />

                        {/* Contact Details */}
                        <div className="bg-deepkoamaru lg:rounded-r-xl text-ghostwhite flex flex-col items-center space-y-4 p-4 pb-12">

                            {/* Leaflet Map */}
                            <Map />

                            <h3 className="font-bold text-2xl">1 Electric Ltd.</h3>

                            {/* Divider */}
                            <div className="divider"></div>

                            <div className="text-lg">
                                <p>
                                    <a
                                        href="tel:+64224571594"
                                        className="hover:scale-105 hover:transition-all hover:text-trueblue"
                                    >
                                        <span className="flex space-x-2 items-center justify-center">
                                            <Phone size={20} />
                                            <span>022 457 1594</span>
                                        </span>
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="mailto:admin@1electric.nz"
                                        className="hover:scale-105 hover:transition-all hover:text-trueblue"
                                    >
                                        <span className="flex space-x-2 items-center justify-center">
                                            <Mail size={20} />
                                            <span>admin@1electric.nz</span>
                                        </span>
                                    </a>
                                </p>
                                <p>
                                    <b>Office Hours:</b> 8am - 5pm Monday to Friday
                                    <br />
                                    After hours service available
                                </p>
                            </div>

                            <Socials />
                        </div>
                    </div>
                </article>
            </section>
            <Testimonials />
        </>
    );
}
