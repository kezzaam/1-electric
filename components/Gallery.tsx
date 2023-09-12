export default function Gallery() {
  return (
    <section className="pt-[196px] h-screen flex flex-col items-center snap-center">
    <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Subheading</h4>
    <h2 className="text-3xl font-bold text-center mb-4">Our work</h2>
    <p className="text-center mb-8 max-w-2xl">
        Description of work and projects pictured here
    </p>
    <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
<h3>Featured</h3>
Featured Cards here with image, name, description, email on each
    </div>    
    <div>Gallery here, showcasing work, maybe with a large featured project section, or more than one? Filter and sort buttons?</div>

  </section>
  )
}
