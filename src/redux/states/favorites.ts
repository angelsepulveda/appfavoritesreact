import { createSlice } from '@reduxjs/toolkit'

import { LocalStorageTypes, type Person } from '@/models'
import { getLocalStorage, setLocalStorage } from '@/utilities'

const initialState: Person[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string) : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload)
      return action.payload
    }
  }
})

export const { addFavorite } = favoritesSlice.actions
