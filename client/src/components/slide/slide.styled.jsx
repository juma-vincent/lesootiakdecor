import styled from 'styled-components'

export const ImageWrapper = styled.div` 
    min-width: 100vw;
    height: 70vh;
    transition: .2.5s ease-in-out ;
    overflow: hidden;      
       
        
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;   
    background-image: linear-gradient(
      rgba(238, 85, 144, 0.18),
      rgba(230, 47, 138, 0.28)
            ),
            url(${props=> props.imageUrl});    
    
    
    
    
`;

export const TextAndButtonContainer = styled.div`
      position: absolute;
      top: 10%;
      left: 25%;
      text-shadow: 1px 1px 1px black;
      
      
      

                  h1{
                        font-weight:bold;
                        color: white;
                        text-align: start;
                        text-shadow: 1px 1px 1px rgba(21, 28, 58, 0.98) ;

                        animation: moveInFromRight 1.3s ease-out;
                  }
                  p{
                        font-size:20px;
                        color: white;
                        text-align: start;
                        animation: moveInFromLeft 1.3s ease-out;
                        
                  }

                  button{
                  margin: 10px;                 
                  padding: 10px;
                  margin-left: -55%;
                  border-radius: 2px;
                  background: rgba(21, 28, 58, 0.78);
                  outline: none;
                  color: white;
                  border: rgba(21, 28, 58, 0.38);
                  cursor: pointer;
                  font-family: Yu Gothic UI;

                  animation-name: moveInFromRight;
                  animation-duration: 1.3s;
                  animation-timing-function: ease-out;
                  

                  }

      @media screen and (max-width: 800px) {   
            top: 20%;
            left: 13%;
            font-size: 13px;

                  button{
                        margin-left: -50%;
                  }
            
      }

      @keyframes moveInFromRight{
            0%{
                opacity: 0;
                transform: translateX(100px);
            }

            80%{
                transform: translateX(-5px);
            } 

            100%{
                opacity: 1;
                transform: translateX(0)
            }
      }

      @keyframes moveInFromLeft{
            0%{
                opacity: 0;
                transform: translateX(-100px);
            }

            80%{
                transform: translateX(5px);
            } 

            100%{
                opacity: 1;
                transform: translateX(0)
            }
      }

      

`;

