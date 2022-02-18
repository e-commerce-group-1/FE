import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from '../styles/Carousel.module.css'

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
                <a className={style.carouselItem}>
                    <img src="/assets/carousel/Promo Banner.png" alt="" onClick={imgClick} />
                </a>
            </div>
            <div>
                <div className={style.carouselItem}>
                    <img src="/assets/carousel/Promo Banner.png" alt="" />
                </div>
            </div>
            <div>
                <div className={style.carouselItem}>
                    <img src="/assets/carousel/Promo Banner.png" alt="" />
                </div>
            </div>
        </Slider>
  )
}

export default CustomCarousel