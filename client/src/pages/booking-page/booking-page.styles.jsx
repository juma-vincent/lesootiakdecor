import styled from 'styled-components';

export const FormContainer = styled.div`    
    font-family: Yu Gothic UI;
    color: rgb(78, 73, 73);
    max-width: 70%;
    margin: 2.5rem auto;    
    padding: 2rem ;    
    text-align: start;
    display: flex;
    flex-direction: column;    
    box-shadow: 0px 3px 5px rgba(63, 46, 46, 0.4);

        label{
            display: block;  
            display: flex;
            flex-direction: column;      
            
            .label-name{
                margin-top: 35px;
                margin-bottom: 0;
                font-weight: 500;
                font-size: 18px;
            }
            
            
        }
        
        input, select {
            width: 80%;
            border: none;
            padding-top: 10px;
            margin-right: 30px;        
            color: rgb(78, 73, 73);
            border-bottom: solid lightblue 2px;
            font-size: 16px;
            &:focus {
                outline: none;
                border-bottom: solid lightblue 1px;
            }
            
        }

        textarea {
            width: 80%;
            color: rgb(78, 73, 73);
            border: solid lightblue 2px;
            font-size: 16px;
            border-radius: 5px;
            height: 15vh;
            &:focus {
                outline: none;
                border: solid lightblue 1px;
            }
        }

        #btn {
            border-radius: 4px;
            margin-right: 30%;
            margin-top: 30px;
            letter-spacing: 3px;
            font-family: Cochin, Georgia, Times, "Times New Roman", serif;
            background-color: #cf8a09;
            border: solid 1px#cf8a09;
            padding: 10px;
            width: 180px;
            outline:none;
                      

        
            &:hover {
            background-color: rgba(105, 199, 42, 0.918);
            border: solid 1px rgba(105, 199, 42, 0.918);
            color: darkgreen;
            
            }
        }

        .uploading{
            position: relative;
        
               .spin{
                   position: absolute;
                   top: 25.9%;
                   right: 8%;
                   display: inline-block;
                   width: 20px;
                   height: 20px;
                   border: 3px dotted rgba(63, 68, 61, 0.678);
                   border-radius: 50%;
                   border-top-color: #0d9213;
                   animation: spin 1.3s infinite linear;
                   -webkit-animation: spin 1.3 infinite linear;
                   @keyframes spin {
                       0% { transform: rotate(0deg); }
                       100% { transform: rotate(360deg); }
                   }
                   @-webkit-keyframes spin {
                       0% { transform: rotate(0deg); }
                       100% { transform: rotate(360deg); }
                   }
               }
        } 


    @media screen and (max-width: 800px) {                            
        max-width: 90%;
        padding-right: 0px ;
    }
    

`;
  



