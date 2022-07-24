import React from 'react';
import FrontEnd from '../FrontEnd';
import BackEnd from '../BackEnd';
import FeaturedPost from '../FeaturedPost';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ContentSlider.scss';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
}
export default function ContentSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            <FrontEnd settings={settings} />
            <BackEnd settings={settings} />
            <FeaturedPost settings={settings} />
        </div>
    );
}
