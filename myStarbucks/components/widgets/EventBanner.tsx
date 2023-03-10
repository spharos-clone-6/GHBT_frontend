import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LinkImage from '../ui/LinkImage';

function NextArrow(props: { style?: any }) {
  const { style } = props;
  return (
    <div
      style={{ ...style, display: "none" }}
    />
  );
}

function PrevArrow(props: { style?: any }) {
  const { style } = props;
  return (
    <div
      style={{ ...style, display: "none" }}
    />
  );
}

export default function EventBanner() {
  const settings = {
    infinite: true,
    speed: 500,
    centerPadding: '0px',
    arrow: false,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2300,
  }

  return (
    <section id="event-banner" className="first-section">
      <div className="event-banner">
        <Slider {...settings}>
          <LinkImage
            route='/event?category=케이크'
            imageSrc='/images/banner/1.jpg'
            alt='케이크 배너 이미지'
          />
          <LinkImage
            route='/event?category=바리스타 춘식'
            imageSrc='/images/banner/2.jpg'
            alt='무궁화'
          />
          <LinkImage
            route='/best?category=라이프스타일'
            imageSrc='/images/banner/3.jpg'
            alt='데일리MD'
          />
          <LinkImage
            route='/best?category=텀블러/보온병'
            imageSrc='/images/banner/4.jpg'
            alt='벚꽃 기획상품'
          />
        </Slider>

      </div>
    </section>
  )
}
