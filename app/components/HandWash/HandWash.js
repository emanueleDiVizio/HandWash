import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import useInterval from '../../hooks/useInterval'
import PropTypes from 'prop-types'
import config from '../../config'
import handWash from '../../state/handWashSlice'

const HandWash = ({
  timerDelay = config.defaultTimerDelay,
  timerTimeout = config.defaultTimerTimeoutInSeconds,
}) => {
  const [timerCount, setTimerCount] = useState(1)
  const [delay, setDelay] = useState(null)
  const [isWashing, setIsWashing] = useState(false)

  const dispatch = useDispatch()

  const onUserPressButton = () => {
    setIsWashing(true)
    setDelay(timerDelay)
  }

  const onTimeOut = () => {
    setDelay(null)
    dispatch(handWash.actions.addHandWash())
    setIsWashing(false)
    setTimerCount(0)
  }

  const calculateProgress = () => {
    return isWashing ? (timerCount / (timerTimeout - 1)) * 100 : 0
  }

  useEffect(() => {
    if (timerCount === timerTimeout) {
      onTimeOut()
    }
  }, [timerCount])

  useInterval(() => {
    setTimerCount(timerCount + 1)
  }, delay)

  return (
    <TouchableOpacity
      style={styles.circle}
      onPress={onUserPressButton}
      testID="timer-button"
    >
      <AnimatedCircularProgress
        size={210}
        style={styles.progress}
        width={5}
        fill={calculateProgress()}
        tintColor={config.colors.main}
      />

      {isWashing ? (
        <React.Fragment>
          <Text style={styles.countText}>{timerCount}</Text>
          <Text style={styles.secondsText}>Seconds</Text>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Icon
            name="sign-language"
            size={60}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.washText}>Wash</Text>
        </React.Fragment>
      )}
    </TouchableOpacity>
  )
}

HandWash.propTypes = {
  timerDelay: PropTypes.number,
  timerTimeout: PropTypes.number,
}

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: config.colors.accent,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { height: -2 },
  },
  progress: { position: 'absolute', top: -5, right: 0, left: -5, bottom: 0 },
  washText: {
    color: 'white',
    fontSize: 21,
  },
  icon: {
    marginBottom: 24,
  },
  secondsText: {
    color: 'white',
    fontSize: 21,
  },
  countText: {
    color: 'white',
    fontSize: 60,
    marginBottom: 24,
  },
})

export default HandWash
