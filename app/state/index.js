import { combineReducers } from 'redux'
import handWash from './handWashSlice'
import shift from './shiftSlice'

const reducer = combineReducers({
  handWashes: handWash.reducer,
  shifts: shift.reducer,
})

export default reducer
