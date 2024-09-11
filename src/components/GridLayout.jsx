import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ResponsiveImageGrid({images}) {
  return (
      <div>
          <Swiper
              className='size-full'
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
          >
              <SwiperSlide>
                    <img src={images[0]} alt="img1" />
              </SwiperSlide>
              <SwiperSlide>
                    <img src={images[1]} alt="img2" />
              </SwiperSlide>
              <SwiperSlide>
                    <img src={images[2]} alt="img3" />
              </SwiperSlide>
              <SwiperSlide>
                    <img src={images[3]} alt="img4" />
              </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default ResponsiveImageGrid