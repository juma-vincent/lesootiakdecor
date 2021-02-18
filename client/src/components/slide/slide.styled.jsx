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
      color: blue;
      backface-visibility: hidden;
                             

                  h1{
                        font-weight:bold;
                        color: white;
                        text-align: start;
                        text-shadow: 1px 1px 1px rgba(21, 28, 58, 0.98) ;
                        animation: moveInFromRightt 6s ease-out infinite;
                        
                        
                  }
                  p{
                        font-size:20px;
                        color: white;
                        text-align: start;
                        animation: moveInFromLeftt 6s ease-out infinite;                        
                        
                        
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
                  animation: moveInFromRightt 6s ease-out infinite;
                  
                  
                  

                  }

      @media screen and (max-width: 800px) {   
            top: 20%;
            left: 13%;
            font-size: 13px;

                  button{
                        margin-left: -50%;
                  }
            
      }

      @keyframes moveInFromRightt {
            20%  {
              opacity: 1;
              transform: translateX(-30px);
            }            

            100%  {
                  opacity: 1;
                  transform: translateX(10px);
                }

            0% {
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
          }

          @keyframes moveInFromLeftt {
            20%  {
              opacity: 1;
              transform: translateX(30px);
            }
            100%  {
                  opacity: 1;
                  transform: translateX(10px);
                }

            0% {
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
          }




`;
