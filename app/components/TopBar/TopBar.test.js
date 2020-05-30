import React from 'react'
import TopBar from './TopBar'
import { render } from '@testing-library/react-native'

describe('TopBar', () => {
  it('renders correctly when off shift', () => {
    const { baseElement } = render(<TopBar />)

    expect(baseElement).toMatchSnapshot()
  })
})
