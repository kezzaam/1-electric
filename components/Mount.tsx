import Link from 'next/link';

const Mount = () => {
  return (
    <div className="relative">
      <div className="flex pt-[95px] bg-cover w-auto h-[55vh] bg-[url('/mount.jpg')]">
        {/* Image Credit */}
        <div className="absolute bottom-4 right-4 text-white bg-trueblue text-xs px-2 py-1 rounded">
          photo by <Link className="underline" href="http://electricphotography.co.nz/" target="_blank" title="Visit Tim's website">Tim Walker</Link>
        </div>
      </div>
    </div>
  );
};

export default Mount;