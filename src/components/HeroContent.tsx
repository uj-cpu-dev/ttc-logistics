import CTAButtons from "./CTAButtons";

const HeroContent = () => {
    return (
        <div className="flex-1 text-center lg:text-left">
      <span className="text-sm font-semibold uppercase text-orange-500 tracking-wider border-l-4 border-orange-500 pl-3 inline-block mb-3">
        Your Global Freight Partner
      </span>

            <h1
                className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ lineHeight: "1.1" }}
            >
                Reliable <span className="text-orange-500">Logistics</span> Solutions
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
                Tiniji Trading Concepts (TTC Logistics) offers swift, secure, and
                reliable air, sea, and land freight services across global markets.
            </p>

            <CTAButtons />
        </div>
    );
};

export default HeroContent;