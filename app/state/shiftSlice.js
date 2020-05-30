import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
const shiftSlice = createSlice({
  name: 'shifts',
  initialState: [],
  reducers: {
    startShift: state => [
      ...state,
      {
        startTime: moment().valueOf(),
        endTime: moment()
          .add(8, 'h')
          .valueOf(),
      },
    ],
    endShift: state => {
      var newState = [...state]
      return [{ ...newState.pop(), endTime: moment().valueOf() }, ...newState]
    },
  },
})

export default shiftSlice
