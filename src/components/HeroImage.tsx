
import ContactCard from "./ContactCard";
import HeroImageSVG from "./HeroImageSVG";

const HeroImage = () => {
    return (
        <div className="flex-1 flex justify-center items-center relative">
            <HeroImageSVG className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl" />
            <ContactCard />
        </div>
    );
}

export default HeroImage;