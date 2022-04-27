import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {

  const[selected,setSelected]=useState('TR');

  const phones={
    US:'+1',
    DE:'+50',
    TR:'+90',
    IT:'+7',
    IN:'+15'
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-[500px] relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider className="h-full hidden sm:block" {...settings}>
        <div>
          <div
            className="h-[500px] bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url(https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg)",
            }}
          ></div>
        </div>
        <div>
          <div
            className="h-[500px] bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url(https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg)",
            }}
          ></div>
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            height={180}
            width={180}
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center mb-4 font-semibold">
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={code => setSelected(code)}
              selected={selected}
              className="flag-select"
            />
            <label className="flex-1 relative block">
              <input required className="h-14 px-4 border-2 peer text-sm pt-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none"/>
              <span className="transition-all peer-focus:h-7 peer-focus:text-xs peer-focus:text-primary-brand-color absolute text-sm peer-valid:h-7 peer-valid:text-xs peer-valid:text-primary-brand-color text-gray-500 top-0 left-0 h-full px-4 flex items-center">Telefon Numarası</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
