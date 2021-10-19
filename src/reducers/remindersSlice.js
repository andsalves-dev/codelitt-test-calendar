import { createSlice } from '@reduxjs/toolkit'

const getFromStorage = () => {
  try {
    const itemsStr = localStorage.getItem('remindersList')
    return JSON.parse(itemsStr) || []
  } catch {
  }

  return []
}
const setInStorage = list => {
  localStorage.setItem('remindersList', JSON.stringify(list))
}

const remindersSlice = createSlice({
  name: 'reminders',
  initialState: {
    list: getFromStorage(),
    showModal: false,
  },
  reducers: {
    add: (state, { payload }) => {
      const id = state.list.reduce((id, rem) => rem.id > id ? rem.id : id, 0) + 1
      state.list.push({ id, ...payload })
      setInStorage(state.list)
    },
    remove: (state, { payload }) => {
      state.list = state.list.filter(rem => rem.id !== payload.id)
      setInStorage(state.list)
    },
    edit: (state, { payload }) => {
      state.list = state.list.map(rem => {
        if (rem.id === payload.id) {
          return { ...rem, ...payload }
        }
        return rem
      })
      setInStorage(state.list)
    },
  },
})

export const { add, remove, edit } = remindersSlice.actions

export default remindersSlice.reducer
