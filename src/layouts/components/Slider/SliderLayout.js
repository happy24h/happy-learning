import React from 'react';

import './SliderLayout.scss';

function SliderLayout() {
    var dataSlider = [
        {
            image: 'https://yt3.ggpht.com/iw1deD0urPolLmxUN7CZHdpEace1SnUUxKwCXBly9nAjRpVs3DKHNkhQIdYUcBxU_t-DdZRc=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        },
    ];

    return (
        <div className="slider-wrapper">
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
            {/* </Slider> */}
        </div>
    );
}

export default SliderLayout;
