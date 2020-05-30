import { createSlice } from '@reduxjs/toolkit'

const handWashSlice = createSlice({
  name: 'handWashes',
  initialState: [],
  reducers: {
    addHandWash: state => [
      ...state,
      {
        endTime: Date.now(),
      },
    ],
  },
})

export default handWashSlice
