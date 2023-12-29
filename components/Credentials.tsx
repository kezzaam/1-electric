import Image from 'next/image';

export default function Credentials() {
  return (
    <div className="text-philippinesilver w-full">
      <h2 className="uppercase tracking-wide pb-2">Certified Master Electricians</h2>
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-end lg:space-x-4 mb-10">
        <div className="w-[80%] lg:w-[40%]">
          <Image src="/cert-01.png" alt="Master Electricians Logo 1" width={210} height={70} layout="responsive" />
        </div>
        <div className="w-[80%] lg:w-[40%]">
          <Image src="/cert-05.png" alt="Master Electricians Logo 2" width={210} height={92} layout="responsive" />
        </div>
      </div>
    </div>
  );
}
