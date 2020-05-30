import React from 'react'
import HandWashHistory from './HandWashHistory'
import { render } from '@testing-library/react-native'
import * as redux from 'react-redux'

describe('HandWashComponent', () => {
  let state

  beforeEach(() => {
    redux.useSelector = selector => selector(state)
  })

  it('renders correctly fetching data from store', () => {
    state = {
      handWashes: [
        { endTime: 1589532292430 },
        { endTime: 1589532322793 },
        { endTime: 1589532333570 },
      ],
    }
    const { baseElement } = render(<HandWashHistory />)

    expect(baseElement).toMatchSnapshot()
  })
})
