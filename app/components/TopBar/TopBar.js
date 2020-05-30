import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import config from '../../config'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TopBar = ({ title = config.headerTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon name="cog" size={21} color="white" style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 100 : 64,
    backgroundColor: config.colors.main,
    alignItems: Platform.OS === 'ios' ? 'flex-end' : 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    marginBottom: Platform.OS === 'ios' ? 12 : 0,
    fontSize: 17,
    flex: 1,
    textAlign: 'center',
  },
  icon:
    Platform.OS === 'ios'
      ? {
          flexDirection: 'row',
          right: 12,
          bottom: 12,
          position: 'absolute',
        }
      : {
          flexDirection: 'row',
          right: 12,
          position: 'absolute',
        },
})

export default TopBar
