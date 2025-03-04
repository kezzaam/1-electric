const PageHeroImage = ({
  imageUrl,
  photoCredit,
  photoLink,
}: {
  imageUrl: string;
  photoCredit?: string; // optional
  photoLink?: string;    // optional
}) => {
  return (
    <div className="relative">
      <div
        className="flex pt-[95px] bg-cover w-auto h-[40vh] lg:h-[67.5vh]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Conditionally Render Image Credit */}
        {photoCredit && photoLink && (
          <div className="absolute bottom-4 right-4 text-white bg-trueblue text-xs px-2 py-1 rounded">
            photo by{" "}
            <a
              className="underline"
              href={photoLink}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${photoCredit}'s website`}
            >
              {photoCredit}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeroImage;
