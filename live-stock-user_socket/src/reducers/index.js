import { combineReducers } from 'redux'
import itemCollectionReducer from './itemReducer/item.collection.reducer'

export default combineReducers({
    itemCollection: itemCollectionReducer,
})