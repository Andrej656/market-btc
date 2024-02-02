import React, { useState } from 'react';
import Slider from 'react-rangeslider';

const RangeSlider = () => {
  const [volume, setVolume] = useState(0);
  // handleOnChange
  const handleOnChange = (value) => {
    setVolume(value)
  }
  return (
    <>
      <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
        <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
          <div className="nft__filter-price-box">
            <input value={0.00} onChange={handleOnChange} type="text" id="input-with-keypress-0" />
            <span>Min</span>
          </div>
          <div className="nft__filter-price-to">
            <span>To</span>
          </div>
          <div className="nft__filter-price-box">
            <input type="text" value={volume} onChange={handleOnChange} id="input-with-keypress-0" />
            <span>Max</span>
          </div>

        </div>
        <Slider
          min={0}
          max={10}
          value={volume}
          tooltip={false}
          orientation="horizontal"
          onChange={handleOnChange}
          formatLabel={value => value.toFixed(2)}
        />
        <div className="slider-styled inside-slider" id="nft-slider"></div>
      </div>
    </>
  );
};

export default RangeSlider;