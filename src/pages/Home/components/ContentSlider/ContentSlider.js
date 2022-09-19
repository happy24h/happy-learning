import React from 'react';
import Courses from '../Courses';
import Websites from '../Websites';
import Teacher from '../Teacher';

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
    let inner_w = window.innerWidth;
    console.log('data width:', inner_w);
    const handleInnerWidth = () => {
        if (inner_w >= 740) {
            return false;
        } else {
            return true;
        }
    };

    var settings = {
        dots: false,
        infinite: handleInnerWidth(),
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            <Courses settings={settings} />
            <Websites settings={settings} />
            <Teacher settings={settings} />
        </div>
    );
}
