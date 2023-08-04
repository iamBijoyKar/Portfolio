export function knowMode() {
  const mode = localStorage.getItem('mode')
  if (mode == 'dark') {
    document.documentElement.setAttribute('style', '--underline-color: #fff')
    return true
  } else if (mode == 'light') {
    document.documentElement.setAttribute('style', '--underline-color: #000')
    return false
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('style', '--underline-color: #fff')
    return true
  }
  document.documentElement.setAttribute('style', '--underline-color: #000')
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function setMode(mode) {
  localStorage.setItem('mode', mode)
}

const darkTheme = {
  primaryBg: '#0E2954',
  secondaryBg: '#2a2c2e',
  primaryText: '#e1e1e1',
  secondaryText: '#e1e1e1',
  mainHeading: '#FFA41B',
}

const lightTheme = {
  primaryBg: '#ffffff',
  secondaryBg: '#e1e1e1',
  primaryText: '#1a1c1e',
  secondaryText: '#2a2c2e',
  mainHeading: '#0B2447',
}

export function getTheme() {
  return knowMode() ? darkTheme : lightTheme
}

export function setTheme(mode) {
  return mode ? darkTheme : lightTheme
}
