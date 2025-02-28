const Credentials = () => {
    return (
      <div className="text-philippinesilver w-full text-center lg:text-left">
        <h2 className="uppercase tracking-wide pb-4">Certified Master Electricians</h2>
  
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-end lg:justify-start">

          <div className="w-full sm:w-[80%] lg:w-[40%]">
            <img
              src="/cert-01.png"
              alt="Master Electricians Logo 1"
              className="w-full h-auto"
            />
          </div>
  
          <div className="w-full sm:w-[80%] lg:w-[40%]">
            <img
              src="/cert-05.png"
              alt="Master Electricians Logo 2"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Credentials;
  