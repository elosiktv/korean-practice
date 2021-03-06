import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import mainLoaderReducer from './mainLoaderReducer'
import settingsReducer from './settingsReducer';
import lettersReducer from './lettersReducer';
import wordsReducer from './wordsReducer';
import conjugationReducer from './conjugationReducer';
import testTypeOneReducer from './testTypeOneReducer';
import testTypeTwoReducer from './testTypeTwoReducer';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import modalReducer from './modalReducer';
import sentencesReducer from './sentencesReducer';
import irregularsReducer from './irregularsReducer';
import infiniteScrollLoaderReducer from './infiniteScrollLoaderReducer';

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	authReducer: authReducer,
	mainLoaderReducer: mainLoaderReducer,
	settingsReducer: settingsReducer,
	lettersReducer: lettersReducer,
	wordsReducer: wordsReducer,
	conjugationReducer: conjugationReducer,
	testTypeOneReducer: testTypeOneReducer,
	testTypeTwoReducer: testTypeTwoReducer,
	userReducer: userReducer,
	adminReducer: adminReducer,
	modalReducer: modalReducer,
	sentencesReducer: sentencesReducer,
	irregularsReducer: irregularsReducer,
	infiniteScrollLoaderReducer: infiniteScrollLoaderReducer
});

export default rootReducer;