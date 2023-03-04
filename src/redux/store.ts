import { configureStore } from '@reduxjs/toolkit'

import { type Person } from '@/models'
import { favoritesSlice, peopleSlice } from '@/redux/states'

export interface AppStore {
  people: Person[]
  favorites: Person[]
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer
  }
})
