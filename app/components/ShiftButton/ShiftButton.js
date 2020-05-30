import React from 'react'
import { useDispatch } from 'react-redux'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import shiftSlice from '../../state/shiftSlice'
import useIsOnShift from '../../hooks/useIsOnShift'
import config from '../../config'

const ShiftController = () => {
  const dispatch = useDispatch()

  const [isOnShift] = useIsOnShift()

  const onUserPressButton = () => {
    isOnShift
      ? dispatch(shiftSlice.actions.endShift())
      : dispatch(shiftSlice.actions.startShift())
  }

  const computeStyles = onShift => ({
    backgroundColor: onShift ? config.colors.accent : config.colors.main,
  })

  return (
    <TouchableOpacity
      testID="shift-button"
      style={[computeStyles(isOnShift), styles.container]}
      onPress={onUserPressButton}
    >
      <Text style={styles.text}>{isOnShift ? 'End Shift' : 'Start shift'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { height: -4 },
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 17,
  },
})

export default ShiftController
