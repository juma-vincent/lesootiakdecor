
import {Link} from 'react-scroll';


const CustomLink = (props) => {
    return ( 
        <span>
            <Link
             activeClass='active' 
             to={props.text} 
             spy={true} 
             smooth={true} 
             offset={-70} 
             duration={500}  >
               
               {props.children}
             </Link>
        </span>
     );
}
 
export default CustomLink;