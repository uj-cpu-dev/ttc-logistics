import ImageContentSection from "./ImageContentSection";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";


interface AboutSectionProps {
    imageOnLeft?: boolean;
}

const AboutSection = ({ imageOnLeft = true }: AboutSectionProps) => {
    return (
        <ImageContentSection
            id="about"
            image={<AboutImage />}
            content={<AboutContent />}
            imageOnLeft={imageOnLeft}
            backgroundColor="bg-white"
        />
    );
};

export default AboutSection;