import React from "react";
import styles from './LogoCarousel.module.scss'
import InfiniteLogoSlider from "react-infinite-logo-slider";

const LogoCarousel = () => {
    const logos = [
        "/images/logos/aliqua.png",
        "/images/logos/dynamic.png",
        "/images/logos/fugiat.png",
        "/images/logos/labore.png",
        "/images/logos/aliqua.png",
        "/images/logos/dynamic.png",
        "/images/logos/fugiat.png",
        "/images/logos/labore.png",
    ];

    return (
        <div className={styles.logoCarousel}>
            <InfiniteLogoSlider
                duration={30}
                blurBorders={false}
                width="150px"
            >
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        style={{ width: "105px", height: "54px", objectFit: "contain", marginLeft: "72px"}}
                    />
                ))}
            </InfiniteLogoSlider>
        </div>
    );
};

export default LogoCarousel;

