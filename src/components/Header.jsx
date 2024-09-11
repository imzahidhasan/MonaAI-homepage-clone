import img from "../assets/banner.png"

const Header = () => {
    return (
        <header className=" text-white py-20 px-4">
            <div className="container mx-auto space-y-8 text-center">
                <p className="header-font font-400 text-center text-[32px] leading-[38px] text-white/[0.8] lg:text-[80px] lg:leading-[104px]">Unlock Global Knowledge with <br className="hidden md:block" />Our<span className="header-font block bg-gradient-to-r from-[#24DDB9] to-[#0189A7] bg-clip-text text-center text-[43px] font-[700] leading-[51px] text-transparent lg:text-[80px] lg:leading-[96px]">Ai Translation Services</span></p>
                <p className="text-xl mb-12 text-gray-300">
                    Accuracy of translation is 90%+ on most languages. Professional dubbing and subtitle creation
                </p>
                <div className="relative  mx-auto">
                    <div className="absolute inset-0  rounded-lg transform translate-x-2 translate-y-2"></div>
                    <img
                        src={img}
                        alt="Mona AI Translation Interface"
                        className="relative z-10 rounded-lg shadow-2xl w-full"
                    />
                </div>
            </div>
            <div className="mt-[38px] w-full text-center lg:mt-[56px]"><a className=" font-inter block rounded-[10px] px-[40px] py-[19px] bg-[#2d9f89] text-white  text-[16px] font-[500] lg:inline lg:text-[20px]" href="/pricing">Try it for free</a></div>
        </header>
    );
};

export default Header;