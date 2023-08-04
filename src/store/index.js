import { configureStore, createSlice } from '@reduxjs/toolkit'
import { knowMode, setMode, getTheme, setTheme } from './utils'

const initialModeState = {
  darkMode: knowMode(),
  colorTheme: getTheme(),
}

const modeSlice = createSlice({
  name: 'mode',
  initialState: initialModeState,
  reducers: {
    toggle(state) {
      state.darkMode = !state.darkMode
      setMode(state.darkMode ? 'dark' : 'light')
      state.colorTheme = setTheme(state.darkMode)
      document.documentElement.setAttribute(
        'style',
        `--underline-color: ${state.darkMode ? '#fff' : '#000'}`,
      )
    },
  },
})

export const store = configureStore({
  reducer: {
    mode: modeSlice.reducer,
  },
})

export const modeActions = modeSlice.actions
