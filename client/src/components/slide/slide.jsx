
import React from 'react';
import {  TextAndButtonContainer, ImageWrapper } from './slide.styled';
import {Link} from 'react-router-dom';





const Slide = ({ imageUrl, title, subtitle, buttonText, link, x }) => {
  
  return(
    <ImageWrapper imageUrl={imageUrl} className='textcont' style={{transform:`translateX(${x}%)`}}>
      <TextAndButtonContainer >
        <h1 >{title}</h1>
        <p>{subtitle}</p>
        {/* {buttonText? <Link to={link}><button>{buttonText}</button> </Link>: null } */}
        {buttonText? <a href={link}><button>{buttonText}</button> </a>: null }
      </TextAndButtonContainer>

    </ImageWrapper>
  );
  
  }

export default Slide