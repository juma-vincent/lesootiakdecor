import { TOGGLE_NAVIGATION_OPEN, TOGGLE_OPTION_DROPDOWN_OPEN} from './modal-actions.types';

const INITIAL_STATE = {
    navIsOpen: false,
    optionDropdownIsOpen: false,
}

export default (state = INITIAL_STATE, action) =>{

    switch(action.type){
        
        case TOGGLE_NAVIGATION_OPEN:
            return {...state, navIsOpen: !state.navIsOpen}

        case TOGGLE_OPTION_DROPDOWN_OPEN:
            return {...state, optionDropdownIsOpen: !state.optionDropdownIsOpen}

        default:
            return state;

    }
    
    
}