import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import useInterval from './useInterval'

const lastShiftSelector = state => state.shifts.slice(-1)[0]

const useIsOnShift = () => {
  const lastShift = useSelector(lastShiftSelector)

  const [currentTime, setCurrentTime] = useState(moment())
  const [isOnShift, setIsOnShift] = useState(false)

  const updateTime = () => {
    setCurrentTime(moment())
  }

  useInterval(() => {
    updateTime()
  }, 1000)

  useEffect(() => {
    if (lastShift) {
      setIsOnShift(currentTime.isBefore(lastShift.endTime))
    }
  }, [currentTime])

  return [isOnShift]
}

export default useIsOnShift
