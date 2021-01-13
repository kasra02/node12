import React from 'react';
import { FaStar,FaStarHalfAlt } from 'react-icons/fa';
import styled from "styled-components";


const Rating = ({rating,review,color}) => {
    return (
        <Wrapper color={color}>
            <div>
                {rating>=1?<FaStar/>:rating>=0.5?<FaStarHalfAlt/>:null}
                {rating>=2?<FaStar/>:rating>=1.5?<FaStarHalfAlt/>:null}
                {rating>=3?<FaStar/>:rating>=2.5?<FaStarHalfAlt/>:null}
                {rating>=4?<FaStar/>:rating>=3.5?<FaStarHalfAlt/>:null}
                {rating>=5?<FaStar/>:rating>=4.5?<FaStarHalfAlt/>:null}
            </div>
            <div className='review'>
                <span>{review}</span>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display:flex;
    margin-top:3px;
    color:${props=>props.color};
    .review{
        margin-left:5px;
    }

`




Rating.defaultProps = {
    color:'#333'
}

export default Rating;