"use client"

import React, { useState, useEffect } from 'react'

// Sample data for testimonials (you can replace this with your own data)
const testimonials = [
  {
    quote: '"I recently had ceiling lights installed at my business in Tirau by Shane. I found him very professional, friendly and prompt. I was very happy with the service, workmanship and price and would highly recommend 1 Electric."',
    name: 'Janice',
    company: 'Tucker Bar and Eatery'
  },
  {
    quote: '"1 electric did our gym fitout in Omokoroa. \nWe absolutely loved working with them and would highly recommend.\n\nThe detail in their work is amazing, the lights in our main gym area are the focal point and had to be straight and level. They did an amazing job accomplishing this and the gym looks like a total new space with all their work. The finer detail with all the wires that are out of eyes way is amazing, they are all bound up nice and tidy. We had a time constraint and they smashed out this job within this time even doing some late shifts to make sure it is done.\n\nWe are super thankful and we highly recommend 1 electric as you will get great detailed work on time."',
    name: 'Vance and Ash',
    company: 'Common Ground Gym Omokoroa'
  }  
]

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Automatically advance to the next testimonial every 5 seconds (adjust as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) =>
        prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
      )
    }, 15000) // 15000 milliseconds (15 seconds)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="p-4 lg:p-24 flex flex-col items-center justify-center snap-center bg-ghostwhite -mb-12">
      {/* heading, title, description */}
      <div>
        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4 text-center">Testimonials</h4>
        <h2 className="text-3xl font-bold text-center mb-4">What our clients say</h2>
      </div>
      {/* divider */}
      <div className="w-36 h-1 mb-10 bg-trueblue"></div>
      {/* testimonial */}
      <div className="text-center max-w-6xl">
        <p className="text-xl italic mb-4">{testimonials[currentTestimonial].quote}</p>
        <div className="flex items-center justify-center">
          <div>
            <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
            <p className="text-philippinesilver">{testimonials[currentTestimonial].company}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
