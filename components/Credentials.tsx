import Image  from 'next/image'

export default function Credentials() {
  return (
    <div className="text-philippinesilver w-full">
    <h2 className="uppercase tracking-wide pb-2">Certified Master Electricians</h2>
    <span className="flex items-center justify-between flex-wrap space-y-4">
        <Image src="/cert-01.png" alt="Master Electricians Logo" width={260} height={86} className="object-cover w-[40%] lg:w-[20%]"/>
        <Image src="/cert-02.png" alt="Master Electricians Logo" width={280} height={48} className="object-cover w-[40%] lg:w-[20%]"/>
        <Image src="/cert-03.png" alt="Master Electricians Logo" width={280} height={80} className="object-cover w-[40%] lg:w-[20%]"/>
        <Image src="/cert-04.png" alt="Master Electricians Logo" width={260} height={114} className="object-cover w-[40%] lg:w-[20%]"/>
    </span>
</div>
  )
}
