import CTA2 from "../components/CTA2"
import Testimonials from "../components/Testimonials"
import Socials from "./Socials"
import Link from 'next/link'
import { Phone, Mail } from 'react-feather'
import ContactForm from "./ContactForm"

export default function Contact() {
  return (
    <>       
    <div className="flex pt-[95px] bg-cover w-auto h-[55vh] bg-[url('/bayofplenty.jpg')]">                
    </div>
    <main className="flex flex-col items-center justify-center p-6 lg:px-24 lg:py-12 snap-y">
        <section className="flex flex-col items-center text-center snap-center space-y-10">

            {/* heading, title, description */}
            <div>
                <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Chat with us</h4>
                <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
                <p className="text-xl text-center mb-8 max-w-2xl">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
                </p>
            </div>

            {/* contact details & form */}
            
      <div className="flex flex-col lg:flex-row p-0 lg:mx-10 items-center bg-ghostwhite ">
        {/* Contact Form */}
        <div className="lg:w-[70%] lg:rounded-l-xl p-8 lg:p-24">
          {/* Simple Contact Form */}
          <ContactForm />
        </div>
        {/* Contact Details */}
        <div className="lg:w-[30%] bg-deepkoamaru lg:rounded-r-xl text-ghostwhite flex flex-col items-center space-y-4 p-4 pb-12">
          <div>
            {/* temporary iframe - look into google map api if needed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1610978.1480281334!2d175.63482959706627!3d-37.94347145659292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6e32aa7865b8d7%3A0x2a00ef616659add0!2sBay%20Of%20Plenty!5e0!3m2!1sen!2snz!4v1694993659409!5m2!1sen!2snz" 
              width="600" 
              height="300" 
              className="border-0 max-w-full shadow-inner rounded"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
          <h3 className="font-bold text-2xl">1 Electric Ltd.</h3>
          {/* divider */}
          <div className="w-36 h-1 mb-10 bg-trueblue"></div>
          <div className="text-lg">
          <p>(Address if applicable)</p>
          <p>
            <Link href="tel:+64224571594" className="hover:scale-105 hover:transition-all hover:text-trueblue">
              <span className="flex space-x-2 items-center justify-center"><Phone size={20} /><span>022 457 1594</span></span>
            </Link>
          </p>
          <p>
            <Link href="mailto:shane@1electric.nz" className="hover:scale-105 hover:transition-all hover:text-trueblue">
              <span className="flex space-x-2 items-center justify-center"><Mail size={20} /><span>shane@1electric.nz</span></span>
            </Link>
          </p>
          <p>Office Hours: (hours here)</p>

          </div>
          
          <Socials />
        </div>


      </div>

        </section>
        </main>
        <Testimonials />
        <CTA2 />
        </>
  )
}
