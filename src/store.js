import { configureStore } from '@reduxjs/toolkit'
import remindersReducer from './reducers/remindersSlice'

export default configureStore({
  reducer: {
    reminders: remindersReducer
  },
})
