import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useIsOnShift from '../../hooks/useIsOnShift'
import config from '../../config'

const ShiftBadge = () => {
  const [isOnShift] = useIsOnShift()

  return isOnShift ? (
    <View style={styles.container}>
      <Text style={styles.text}>
        Currently on shift and receiving reminders
      </Text>
    </View>
  ) : (
    <React.Fragment />
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 4,
    backgroundColor: config.colors.main,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    padding: 6,
    fontSize: 17,
  },
})

export default ShiftBadge
