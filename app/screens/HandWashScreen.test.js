import React from 'react'
import HandWashScreen from './HandWashScreen'
import { render } from '@testing-library/react-native'
import * as redux from 'react-redux'
import MockDate from 'mockdate'

describe('HandWashComponent', () => {
  let state
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
    redux.useSelector = selector => selector(state)
    redux.useDispatch = () => dispatch
    MockDate.set('2018-1-1')
  })

  afterEach(() => {
    MockDate.reset()
  })

  it('renders correctly', () => {
    state = {
      shifts: [],
      handWashes: [],
    }
    const { baseElement } = render(<HandWashScreen />)

    expect(baseElement).toMatchSnapshot()
  })
})
