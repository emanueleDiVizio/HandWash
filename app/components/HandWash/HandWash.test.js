import React from 'react'
import HandWash from './HandWash'
import { fireEvent, render, act, wait } from '@testing-library/react-native'
import * as redux from 'react-redux'
import handWash from '../../state/handWashSlice'

describe('HandWash', () => {
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
    redux.useDispatch = () => dispatch
  })

  it('initializes correctly', () => {
    const { baseElement } = render(<HandWash />)

    expect(baseElement).toMatchSnapshot()
  })

  it('starts the timer when button is pressed and updates with elapsed time', async () => {
    const { baseElement, getByTestId, getByText } = render(<HandWash />)

    const button = getByTestId('timer-button')
    fireEvent.press(button)

    act(() => jest.advanceTimersByTime(10000))

    await wait(() => expect(getByText('11')).toBeTruthy())

    expect(baseElement).toMatchSnapshot()
  })

  it('dispatches `addHandWash` when timer is complete ', async () => {
    const { getByTestId } = render(<HandWash />)

    const button = getByTestId('timer-button')
    fireEvent.press(button)

    act(() => jest.advanceTimersByTime(22000))

    expect(dispatch).toHaveBeenCalledWith(handWash.actions.addHandWash())
  })
})
