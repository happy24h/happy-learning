import React from 'react';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import './SliderLayout.scss';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
}
function SliderLayout() {
    var dataSlider = [
        {
            image: 'https://yt3.ggpht.com/iw1deD0urPolLmxUN7CZHdpEace1SnUUxKwCXBly9nAjRpVs3DKHNkhQIdYUcBxU_t-DdZRc=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        },

        {
            image: 'https://toigingiuvedep.vn/wp-content/uploads/2020/12/anh-dep-thien-nhien-chat-luong-cao.jpg',
        },

        {
            image: 'https://img5.thuthuatphanmem.vn/uploads/2021/11/17/anh-nen-phong-canh-binh-yen_111415890.jpg',
        },
    ];

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                {dataSlider.map((item, index) => (
                    <div key={index}>
                        <div
                            className="image-slider"
                            style={{
                                backgroundImage: `url(${item.image})`,
                            }}
                        ></div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderLayout;
