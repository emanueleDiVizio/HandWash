import React from 'react'
import { View, StyleSheet } from 'react-native'
import HandWash from '../components/HandWash/HandWash'
import HandWashHistory from '../components/HandWashHistory/HandWashHistory'
import TopBar from '../components/TopBar/TopBar'
import ShiftButton from '../components/ShiftButton/ShiftButton'
import ShiftBadge from '../components/ShiftBadge/ShiftBadge'

const HandWashScreen = () => (
  <View style={styles.container}>
    <TopBar />
    <View style={styles.badgeContainer}>
      <ShiftBadge />
    </View>

    <View style={styles.handWashContainer}>
      <HandWash />
    </View>

    <View style={styles.historyContainer}>
      <HandWashHistory />
    </View>
    <ShiftButton />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: { flex: 1 },
  badgeContainer: {},
  interactionContainer: { flex: 1, flexDirection: 'row' },
  handWashContainer: { margin: 16, alignItems: 'center' },
  shiftContainer: { flex: 1, margin: 16 },
  historyContainer: { flex: 1 },
})

export default HandWashScreen
