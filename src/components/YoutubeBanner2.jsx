import youtube_right from "../assets/youtube_left.png"
const YoutubeBanner2 = () => {
    return (
        <section className=" text-white py-16 px-4">
            <div className="flex w-full flex-col items-center justify-between lg:flex-row mt-[64px] xl:0 px-[20px]"><div className="w-full lg:w-2/5 order-last xl:order-first mt-[40px] xl:mt-0"><img src={youtube_right} alt="" />
            </div>
                <div className="w-full lg:w-[50%]"><p className="header-font text-[28px] font-[500] text-white/[0.9] xl:text-[40px]">Standard Translation</p>
                    <p className="font-inter mb-[36px] mt-[24px] text-[16px] font-[400] text-white/[0.6] xl:text-[20px]">Our Standard Translation service offers a cost-effective way to enjoy YouTube videos in Mongolian. While it may occasionally have minor inaccuracies, it provides a good overall understanding of the content. Perfect for casual viewing and when quick, budget-friendly translation is needed.</p>
                    <a className="button-hover  block rounded-[12px]  p-[19px] text-center text-[16px] font-[400]  xl:inline xl:px-[36px] bg-[#2d9f89] font-inter xl:text-[20px]" href="#">Try Now</a></div></div>
        </section>
    );
};

export default YoutubeBanner2;