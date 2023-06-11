import { types } from "./types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            console.log('1');
            break;
    
        default:
            break;
    }
}