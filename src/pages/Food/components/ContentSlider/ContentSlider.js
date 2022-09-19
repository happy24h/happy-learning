import React from 'react';
import Product from '../Product';
import Food from '../Food';
import Book from '../Book';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../Home/components/ContentSlider/ContentSlider.scss';

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
        <div className="content-blog">
            <Product settings={settings} />
            <Food settings={settings} />
            <Book settings={settings} />
        </div>
    );
}
