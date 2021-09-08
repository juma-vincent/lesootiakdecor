import { TOGGLE_NAVIGATION_OPEN,
         TOGGLE_OPTION_DROPDOWN_OPEN,
         TOGGLE_SUCCESS_MESSAGE_ON} from './modal-actions.types';

const INITIAL_STATE = {
    navIsOpen: false,
    optionDropdownIsOpen: false,
    successMessageOn: false,
}

export const NavigationToggleReducer = (state = INITIAL_STATE, action) =>{

    switch(action.type){
        
        case TOGGLE_NAVIGATION_OPEN:
            return {...state, navIsOpen: !state.navIsOpen}

        case TOGGLE_OPTION_DROPDOWN_OPEN:
            return {...state, optionDropdownIsOpen: !state.optionDropdownIsOpen}
       
        default:
            return state;

    }
    
    
}

export const SuccessMessageToggleReducer = (state = INITIAL_STATE, action) =>{

    switch(action.type){
        
        case TOGGLE_SUCCESS_MESSAGE_ON:
            return {...state, successMessageOn: !state.successMessageOn}

        default:
            return state;

    }
    
    
}