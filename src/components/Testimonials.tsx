import { useState, useEffect } from "react";
import { MessageSquare } from "react-feather"; // Importing quote-style icon

// Testimonials Data
const testimonials = [
  {
    quote:
      "\"I recently had ceiling lights installed at my business in Tirau by Shane. I found him very professional, friendly and prompt. I was very happy with the service, workmanship and price and would highly recommend 1 Electric.\"",
    name: "Janice",
    company: "Tucker Bar and Eatery",
  },
  {
    quote:
      "\"1 Electric did our gym fitout in Omokoroa. We absolutely loved working with them and would highly recommend.\n\nThe detail in their work is amazing, the lights in our main gym area are the focal point and had to be straight and level. They did an amazing job accomplishing this, and the gym looks like a totally new space with all their work.\n\nThe finer detail with all the wires that are out of the way is amazing – they are all bound up nice and tidy. We had a time constraint and they smashed out this job within this time, even doing some late shifts to make sure it was done.\n\nWe are super thankful and highly recommend 1 Electric for great detailed work on time.\"",
    name: "Vance and Ash",
    company: "Common Ground Gym Omokoroa",
  },
  {
    quote:
      "\"We have used 1 Electric on several occasions and have always found them to be professional, hardworking and knowledgeable. We wouldn't hesitate to recommend them.\"",
    name: "",
    company: "Passive House Builders NZ Ltd",
  },
  {
    quote:
      "\"Thanks Shane and team, for an amazing job rewiring our home.\n\nYour communication and experience really showed! Cheers!\"",
    name: "Andy",
    company: "",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-6 lg:p-24 pb-16 flex flex-col items-center justify-center snap-center bg-ghostwhite">
      {/* Heading */}
      <header className="text-center">
        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">
          Testimonials
        </h4>
        <h2 className="text-3xl font-bold mb-4">What our clients say</h2>
        {/* Divider */}
        <div className="divider"></div>
      </header>

      {/* Testimonial Card */}
      <article className="text-center max-w-5xl">
        {/* Icon as a Quote Indicator */}
        <MessageSquare className="text-trueblue w-12 h-12 mx-auto mb-4" />

        {/* Testimonial Quote */}
        <blockquote className="text-xl italic mb-4">
          {testimonials[currentTestimonial].quote.split("\n").map((line, i) => (
            <p key={i} className="mb-2">{line}</p>
          ))}
        </blockquote>

        {/* Client Name & Company */}
        <div className="mt-4">
          <p className="font-semibold text-trueblue">{testimonials[currentTestimonial].name}</p>
          <p className="text-philippinesilver">
            {testimonials[currentTestimonial].company}
          </p>
        </div>
      </article>
    </section>
  );
}
