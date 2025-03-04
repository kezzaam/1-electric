import Credentials from "./Credentials";

const ComingSoon = () => {
    return (
        <>
            <div className="relative min-h-screen">
                {/* Background Overlay*/}
                <div className="absolute inset-0 bg-gray-900 z-[-1] opacity-70"></div>
                {/* Background */}
                <div className="absolute inset-0 z-[-2] overflow-hidden">
                    <div
                        className="w-full h-full bg-cover bg-center sm:bg-[size:120%]"
                        style={{
                            backgroundImage: "url('/background.webp')",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                </div>

                {/* Main Content */}
                <main className="relative min-h-screen w-full flex flex-col sm:flex-col lg:flex-row items-center justify-center lg:text-left snap-center gap-12 px-6 pt-24 pb-6 overflow-auto">
                    <div className="flex h-full flex-col gap-8 max-w-2xl w-full">
                        <div>
                            <h1 className="text-white text-5xl lg:text-6xl font-bold py-6">
                                Need an<br />
                                <span className="text-trueblue text-shadow-lg">Electrician?</span>
                            </h1>
                            <p className="text-white text-xl lg:text-xl transition-all">
                                We are a locally owned and operated business servicing the Bay of Plenty Region, specialising in heavy industrial, industrial, and commercial electrical. Whether your job is big or small, we provide the solutions to meet your needs. We take pride in providing top-quality service and workmanship to every single client.
                            </p>
                        </div>

                        <button className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-start gap-4 bg-deepkoamaru rounded-3xl p-3 text-lg text-white">
                            <div className="bg-sunray text-yankeesblue rounded-full py-2 px-4 uppercase font-bold w-full lg:w-max whitespace-nowrap">
                                Coming Soon
                            </div>
                            <p className="text-center sm:text-left break-words">
                                This website is under construction. Come back again soon, or phone{" "}
                                <a className="textlink" href="tel:+64224571594" title="Call 022 457 1594">
                                    022 457 1594
                                </a> for enquiries.
                            </p>
                        </button>

                        <Credentials />
                    </div>

                    {/* Logo (Responsive Size) */}
                    <div className="w-full hidden max-w-[80%] sm:max-w-[60%] lg:block lg:max-w-[36%]">
                        <img
                            src="/1Electric.png"
                            alt="1 Electric Logo"
                            className="w-full h-auto object-cover opacity-90"
                        />
                    </div>
                </main>
            </div>

        </>
    );
};

export default ComingSoon;
