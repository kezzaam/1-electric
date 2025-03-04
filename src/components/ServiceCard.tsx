interface ServiceCardProps {
    title: string;
    subheading: string;
    description: string;
    link: string;
    image: string;
  }
  
  export default function ServiceCard({ title, subheading, description, link, image }: ServiceCardProps) {
    return (
      <div className="w-full">
        <a href={link} className="opacity-90 bg-white rounded shadow flex flex-col h-full hover:scale-105 hover:opacity-100 hover:transition-all">
          {/* Image */}
          <div className="w-full max-h-[240px] rounded-t relative overflow-hidden">
            <img src={image} alt={title} className="w-full h-auto object-cover rounded-t" />
          </div>
  
          {/* Card Content */}
          <div className="px-4 pt-4 pb-16">
            <h5 className="text-sm text-trueblue mt-4">{subheading}</h5>
            <h3 className="text-lg font-semibold my-2">{title}</h3>
            <p className="text-base">{description}</p>
          </div>
        </a>
      </div>
    );
  }
  