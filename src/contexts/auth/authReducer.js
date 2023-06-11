import { types } from "./types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                logged: true,
                ...action.payload
            }

        case types.logout:
            return {
                logged: false,
                id: '',
                name: '',
                email: '',
                token: ''
            }

    }
}