import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import Banners from "./../api/banners.json";
import Title from "./ui/Title";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <button className={className} style={style} onClick={onClick}></button>
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


export default function Campaigns() {

  const [banners,setBanners] =useState([]);

  useEffect(() => {
    setBanners(Banners);
  },[])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
       {banners.length && banners.map((banner,index) =>(
         <div key={banner.id}>
           <picture className="block px-2">
             <img src={banner.image} className="rounded"></img>
           </picture>
         </div>
       ))}
      </Slider>
    </div>
  );
}
