import Image from 'next/image';

const MountTown = () => {
  return (
    <div className="relative">
      <div className="flex pt-[95px] bg-cover w-auto h-[55vh] bg-[url('/mount-town.jpg')]">
        {/* Image Credit */}
        <div className="absolute bottom-4 left-4 text-white text-xs px-2 py-1 rounded">
          photo by <a className="underline" href="http://electricphotography.co.nz/" target="_blank" title="Visit Tim's website">Tim Walker</a>
        </div>
      </div>
    </div>
  );
};

export default MountTown;