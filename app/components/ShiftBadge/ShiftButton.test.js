import React from 'react'
import ShiftBadge from './ShiftBadge'
import { render } from '@testing-library/react-native'
import * as redux from 'react-redux'
import moment from 'moment'
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

  it('renders correctly when off shift', () => {
    state = {
      shifts: [],
    }
    const { baseElement } = render(<ShiftBadge />)

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correctly when on shift', () => {
    state = {
      shifts: [{ endTime: moment().add(2, 'h') }],
    }
    const { baseElement } = render(<ShiftBadge />)

    expect(baseElement).toMatchSnapshot()
  })
})
