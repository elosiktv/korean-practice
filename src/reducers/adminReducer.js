const initState = {
    adminStatus: null,
    appSettings: null,
    users: [],
    lastUser: null
}

const adminReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_USER_ADMIN_STATUS':
            return {
                ...state,
                adminStatus: action.data
            }
        case 'UPDATE_SETTINGS':
            return {
                ...state,
                appSettings: action.data
            }
        case 'UPDATE_USERS':
            if (action.init) {
                return {
                    ...state,
                    users: action.data
                }
            } else {
                return {
                    ...state,
                    users: [...state.users, ...action.data]
                }
            }
        case 'UPDATE_LAST_USER':
            return {
                ...state,
                lastUser: action.data
            }
        case 'CLEAR_LAST_USER':
            return {
                ...state,
                lastUser: null
            }
        default: return state;
    }
}

export default adminReducer;