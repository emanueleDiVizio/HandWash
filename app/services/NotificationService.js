import PushNotificationIOS from '@react-native-community/push-notification-ios'
import PushNotification from 'react-native-push-notification'
import { Platform } from 'react-native'
class NotificationService {
  setUpService = onNotificationCb => {
    if (!this.isSetUp) {
      PushNotification.configure({
        onNotification: notification => {
          if (onNotificationCb) {
            onNotificationCb(notification)
          }
          notification.finish(PushNotificationIOS.FetchResult.NoData)
        },
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
        requestPermissions: Platform.OS === 'ios',
        popInitialNotification: true,
      })
      this.isSetUp = true
    }
  }

  tearDownService = () => {
    this.isSetUp = false
  }

  scheduleNotification = (title, message, date) => {
    if (this.isSetUp) {
      PushNotification.localNotificationSchedule({
        title,
        message,
        date,
      })
    }
  }
}

const service = new NotificationService()

export default service
