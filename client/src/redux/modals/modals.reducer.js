import { TOGGLE_NAVIGATION_OPEN} from './modal-actions.types';

const INITIAL_STATE = {
    navIsOpen: false
}

export default (state = INITIAL_STATE, action) =>{

    switch(action.type){
        
        case TOGGLE_NAVIGATION_OPEN:
            return {...state, navIsOpen: !state.navIsOpen}

        default:
            return state;

    }
    
    
}