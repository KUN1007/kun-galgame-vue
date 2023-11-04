/*
 * This file is used to obtain all default environments of the user's system or browser.
 */

// Read language configuration from local storage
let localStorageString = ''
if (typeof window !== 'undefined') {
  const storage = localStorage.getItem('KUNGalgameSettings')
  localStorageString = storage ? storage : ''
}

// To ensure compatibility with various browsers, some browsers have 'zh-CN' as navigator.language, which may cause errors.
const getInitLanguage = () => {
  let userLanguage = ''

  if (typeof navigator !== 'undefined') {
    userLanguage = navigator.language
  }

  if (userLanguage.includes('en')) {
    return 'en'
  } else if (userLanguage.includes('zh')) {
    return 'zh'
  } else {
    // Return the default language or implement other handling logic.
    return 'en'
  }
}

export const KUNGalgameLanguage = localStorageString
  ? JSON.parse(localStorageString).showKUNGalgameLanguage
  : getInitLanguage()

// Read local day-night mode, this function will return 'true' if it's in dark mode.
export const mode = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : ''
  }
  return ''
}
