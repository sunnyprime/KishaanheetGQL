import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from '../config/fbConfig'

import rootReducer from './root-reducer'

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })]

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger)
}

export const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reactReduxFirebase(fbConfig), // redux binding for firebase
		reduxFirestore(fbConfig) // redux bindings for firestore
	)
)

export const persistor = persistStore(store)

export default { store, persistStore }
