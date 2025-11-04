import AboutImageSVG from "./AboutImageSVG";
const AboutImage = () => {
    return (
        <div className="relative p-3 sm:p-4 bg-yellow-50 rounded-3xl flex justify-center items-center">
            {/*<AboutImageSVG className="w-full h-auto max-w-md md:max-w-full" />*/}
            <img src={"https://images.pexels.com/photos/6146700/pexels-photo-6146700.jpeg"} alt={'about-image'} />
        </div>
    );
};

export default AboutImage;