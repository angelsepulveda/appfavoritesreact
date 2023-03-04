import { createSlice } from '@reduxjs/toolkit'

import { LocalStorageTypes, type Person } from '@/models'
import { getLocalStorage, setLocalStorage } from '@/utilities'

const initialState: Person[] = []

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string) : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, action.payload)
      return action.payload
    }
  }
})

export const { addPeople } = peopleSlice.actions
