import { configureStore, createSlice } from '@reduxjs/toolkit'
import { knowMode, setMode, getTheme, setTheme } from './utils'

const initialModeState = {
  darkMode: knowMode(),
  colorTheme: getTheme(),
}

const initialConfettiState = {
  confetti: false,
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

const confettiSlice = createSlice({
  name: 'confetti',
  initialState: initialConfettiState,
  reducers: {
    toggle(state) {
      state.confetti = !state.confetti
    },
  },
})

export const store = configureStore({
  reducer: {
    mode: modeSlice.reducer,
    confetti: confettiSlice.reducer,
  },
})

export const modeActions = modeSlice.actions
export const confettiActions = confettiSlice.actions
