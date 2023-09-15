
import ProfileCard from "./ProfileCard"
import CTA from "./CTA"
import Testimonials from "./Testimonials"

export default function About() {
    return (
        <>       
        <div className="flex pt-[95px] bg-cover w-auto h-[55vh] bg-[url('/bayofplenty.jpg')]">                
        </div>
        <main className="flex flex-col items-center justify-center p-6 lg:px-24 lg:py-12 snap-y">
            <section className="flex flex-col items-center text-center snap-center space-y-10">

                {/* heading, title, description */}
                <div>
                    <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">We are 1 Electric</h4>
                    <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
                    <p className="text-xl text-center mb-8 max-w-2xl">
                        We are a locally owned and operated business servicing the Bay of Plenty Region, specialising in heavy industrial, industrial and commercial electrical.
                        With a key group of experienced and qualified electricians our focus is dependable innovation and robust electrical installations in the industrial and commercial sector.
                    </p>
                </div>

                {/* divider */}
                <div className="w-36 h-1 mb-10 bg-trueblue"></div>

                {/* heading */}
                <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>

                {/* profile cards section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
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
                </div>
            </section>
            </main>
            <Testimonials />
            <CTA />
            </>
    )
}
