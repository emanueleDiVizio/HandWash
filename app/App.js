import React, { useEffect } from 'react'

import { Provider } from 'react-redux'
import { store, persistor } from './config/store'
import HandWashScreen from './screens/HandWashScreen'
import notificationService from './services/NotificationService'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  useEffect(() => {
    notificationService.setUpService(() => {})
    return () => {
      notificationService.tearDownService()
    }
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HandWashScreen />
      </PersistGate>
    </Provider>
  )
}

export default App
