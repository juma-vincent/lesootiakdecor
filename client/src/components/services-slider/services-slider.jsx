import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../arrow/arrow';
import Slide from '../slide/slide';
import { ImageSliderContainer} from './services-slider.styles';

const bannerData=[
{title:'Events Planning Services', 
subtitle:'We save your time in organinzing your events', 
buttonText:'BOOK NOW',
link:'',
imageUrl:'/images/image1.jpg'},

{title:'', 
subtitle:'.', 
buttonText:'',
link:'',
imageUrl:'/images/image4.jpg'},

{title:'', 
subtitle:'', 
buttonText:'',
link:'',
imageUrl:'/images/image3.jpg'},

]



const ServicesSlider = ({autoPlay}) => {
    const [x, setX] = useState(0);

    const autoPlayRef = useRef();

    useEffect(()=>{
        autoPlayRef.current= goRight;
    })

    useEffect(()=>{
        const play = ()=>{
          autoPlayRef.current()
        }
        if(autoPlay){
          const interval = setInterval(play, autoPlay* 1000);
          return ()=> clearInterval(interval)
        }
        
      },[])

    const goLeft= ()=>{
        x === 0? setX(-100*(bannerData.length -1)) : setX(x+100);             
        
    }

    const goRight= ()=>{
        (x === -100*(bannerData.length -1))? setX(0) : setX(x-100);              
    }

    return (
        <ImageSliderContainer>
            {bannerData.map(({imageUrl, title, subtitle, buttonText,link })=> 
                    
                       
                    <Slide key={imageUrl}
                    x={x}
                    imageUrl={imageUrl} 
                    title={title} 
                    subtitle={subtitle} 
                    buttonText={buttonText}
                    link={link}
                    />
                )
            }
            <Arrow direction='left' handleClick={goLeft}/>
            <Arrow direction='right' handleClick={goRight}/>
            
        </ImageSliderContainer>
      );
}
 
export default ServicesSlider;