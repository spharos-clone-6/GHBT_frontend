import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LinkImage from '../ui/LinkImage'
import axios from 'axios'
import { eventType } from '@/types/types'

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
  const [eventList, setEventList] = useState<eventType[]>();

  const getEvent = async () => {
    const result = await axios.get('http://backend.grapefruit-honey-black-tea.shop/api/event')
    setEventList(result.data)
  }

  useEffect(() => {
    getEvent();
  }, [])

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
          {
            eventList && eventList.map((e: eventType) => (
              <LinkImage
                key={e.id}
                route={`/event?category=${e.tag}`}
                imageSrc={`https://storage.googleapis.com${e.thumbnailUrl}`}
                alt={e.description}
              />
            ))
          }
        </Slider>

      </div>
    </section>
  )
}
