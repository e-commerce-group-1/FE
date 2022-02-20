import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from '../styles/Carousel.module.css'
import Image from 'next/image';

function CustomCarousel() {
    let arrow = React.createRef();

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 6000,
        // cssEase : 'linear'

      };

      function imgClick(){
          console.log(arrow.current);
      }

  return (
        <Slider ref={arrow} {...sliderSettings} className={style.carouselContainer}>
            <div>
                <div className={style.carouselItem}>
                    <Image 
                    src="/assets/carousel/Promo Banner.png" 
                    alt="Promo Banner"
                    width={'1200px'} 
                    height={'600px'} 
                    layout='responsive'
                    onClick={imgClick}
                    />
                </div>
            </div>
        </Slider>
  )
}

export default CustomCarousel