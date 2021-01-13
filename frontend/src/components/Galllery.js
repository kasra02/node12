import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Thumbs} from 'swiper'
import styled from "styled-components";
import image1 from '../airpods.jpg'


SwiperCore.use([Navigation,Pagination,Thumbs])

const Gallery = ({images}) => {

    return (
        <SlideWrapper>
            <Swiper
                navigation
                pagination
                spaceBetween={10}
                slidesPerView={1}
            >
                {images.map((image,index)=>{
                    return(
                        <SwiperSlide key={index} style={{display: 'flex',justifyContent: 'center'}} >
                            <img src={image} alt="" style={{maxWidth:'1000px'}} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </SlideWrapper>
    );
};

const SlideWrapper = styled.div`
    .swiper-container{
            height:300px;
            overflow:hidden;
            img{
                width: 300px;
                height:auto;
        }
        
         @media (min-width: 1000px) {
            min-height:500px;
            img{
                width: 100%;
                height:100%;
        }
    }
    .swiper-button-prev,.swiper-button-next{
        color:black;
    }
    .swiper-pagination-bullet-active{
        background:black;
    }
`


export default Gallery;