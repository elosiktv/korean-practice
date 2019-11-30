const initState = {
    testTypeOneData: null,
    loadingTestTypeOne: false,
    exp: 0,
    numberOfWords: null
}

const testTypeOneReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_TEST_ONE_DATA':
            return {
                ...state,
                testTypeOneData: action.data
            }
        case 'SET_EXP_TEST_ONE':
            return {
                ...state,
                exp: action.data
            }
        case 'SET_NUMBER_OF_WORDS_TEST_ONE':
            return {
                ...state,
                numberOfWords: action.data
            }
        case 'REMOVE_TEST_ONE_DATA':
            return {
                ...state,
                testTypeOneData: true
            }
        case 'CLEAR_TEST_ONE':
            return {
                ...state,
                testTypeOneData: null,
                loadingTestTypeOne: false,
                exp: 0,
                numberOfWords: null
            }
        case 'LOADING_TEST_ONE':
            return {
                ...state,
                loadingTestTypeOne: action.data
            }
        default: return state;
    }
}

export default testTypeOneReducer;