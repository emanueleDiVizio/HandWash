import { call } from 'redux-saga/effects'
import notificationService from '../services/NotificationService'
import _ from 'lodash'
import moment from 'moment'
import config from '../config'
const setUpNotificationSchedule = shiftDuration => {
  _.range(shiftDuration / config.defaultNotificationIntervalInHours).forEach(
    i => {
      notificationService.scheduleNotification(
        `Remember to wash your hands!`,
        'Click here to start your timer',
        moment()
          .add((i + 1) * config.defaultNotificationIntervalInHours, 'h')
          .toDate()
      )
    }
  )
}
function* shiftSaga() {
  yield call(setUpNotificationSchedule, config.defaultShiftDurationInHours)
}

export default shiftSaga
