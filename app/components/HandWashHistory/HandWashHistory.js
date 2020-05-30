import React from 'react'
import { useSelector } from 'react-redux'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import config from '../../config'

const handWashHistorySelector = state =>
  [...state.handWashes].sort(({ endTime }, { endTime: bEndTime }) => {
    let nA = moment(endTime)
    let nB = moment(bEndTime)
    return nA.isAfter(nB) ? -1 : nA.isBefore(nB) ? 1 : 0
  })

const HandWashItem = ({ endTime }) => {
  var date = moment(endTime)
  return (
    <View style={styles.rowContainer}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{date.format('HH:mm')}</Text>
      </View>
      <View>
        <Text style={styles.dayText}>{date.format('dddd')}</Text>
        <Text style={styles.dateText}>{date.format('Do MMMM YYYY')}</Text>
      </View>
    </View>
  )
}

const HandWashHistory = () => {
  const data = useSelector(handWashHistorySelector)
  return (
    <View>
      <Text style={styles.headerText}>HISTORY</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <HandWashItem endTime={item.endTime} />}
        keyExtractor={item => item.endTime.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rowContainer: { flexDirection: 'row', margin: 16 },
  timeContainer: {
    backgroundColor: config.colors.main,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    width: 70,
  },
  timeText: { color: 'white', padding: 8 },
  dayText: { fontWeight: 'bold', fontSize: 17 },
  dateText: { fontSize: 14, color: '#9B9B9B' },
  headerText: { marginLeft: 16, marginBottom: 8, color: '#4A4A4A' },
})

export default HandWashHistory
