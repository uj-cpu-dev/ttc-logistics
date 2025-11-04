import React from 'react';

interface ImageContentSectionProps {
    id?: string;
    image: React.ReactNode;
    content: React.ReactNode;
    imageOnLeft?: boolean;
    backgroundColor?: string;
    className?: string;
}

const ImageContentSection: React.FC<ImageContentSectionProps> = ({id, image, content, imageOnLeft = true, backgroundColor = "bg-white", className = ""}) => {
    return (
        <section id={id} className={`py-16 sm:py-20 px-6 ${backgroundColor} ${className}`}>
            <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                {imageOnLeft ? (
                    <>
                        {image}
                        {content}
                    </>
                ) : (
                    <>
                        {content}
                        {image}
                    </>
                )}
            </div>
        </section>
    );
};

export default ImageContentSection;