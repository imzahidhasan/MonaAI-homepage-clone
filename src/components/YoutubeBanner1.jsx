import youtube_right from "../assets/youtube_right.png"
const YoutubeBanner1 = () => {
    return (
        <section classNameName=" container mx-auto text-white py-16 px-4">
            <h1 class="mx-auto text-center mb-[16px] w-full text-[32px] font-semibold text-white/[0.9] lg:w-full lg:text-[48px]">YouTube Translation: Two Tiers to Suit Your Needs</h1>
            <div className="flex w-full flex-col items-center justify-between lg:flex-row  xl:0 px-[20px]">
                <div className="w-full lg:w-2/5 order-last mt-[40px] xl:mt-0">
                    <img src={youtube_right} alt="" />
                </div>
                <div className="w-full lg:w-[50%]">
                    <p className="header-font text-[28px] font-[500] text-white/[0.9] xl:text-[40px]">Best Translation</p>
                    <p className="font-inter mb-[36px] mt-[24px] text-[16px] font-[400] text-white/[0.6] xl:text-[20px]">Experience top-tier YouTube translation with our Best Translation service. Utilizing advanced AI algorithms, this option delivers highly accurate subtitles and dubbing in Mongolian. Ideal for professional use, academic content, or when precision is paramount.</p>
                    <a className=" bg-[#2d9f89] font-inter text-white block rounded-[12px]  p-[19px] text-center text-[16px] font-[400]  xl:inline xl:px-[36px] xl:text-[20px]" href="">Try Now</a>
                </div>
            </div>
        </section>
    );
};

export default YoutubeBanner1;