import React from 'react'
import loadable from '@loadable/component'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/theme/GlobalStyle'
import { lightTheme, darkTheme } from './components/theme/themes'
import { useDarkMode } from './components/theme/useDarkMode'
import { LocalisationProvider } from './components/localisation/localisationProvider'
import avatarImage from './assets/avatar.png'
import previewImage from './assets/avatar-placeholder.jpg'

const LocalisationToggle = loadable(() => import ('./components/localisation/LocalisationToggle'))
const Avatar = loadable(() => import('./components/Avatar'))
const Summary = loadable(() => import('./components/Summary'))
const Social = loadable(() => import('./components/Social'))
const ThemeToggle = loadable(() => import('./components/theme/ThemeToggler'))

function App() {
    const [ theme, themeToggler, mountedComponent ] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!mountedComponent) return <div/>
    return (
        <LocalisationProvider>
            <ThemeProvider theme={themeMode}>
                <>
                <GlobalStyles/>
                <>
                    <LocalisationToggle></LocalisationToggle>
                    <ThemeToggle theme={theme} toggleTheme={themeToggler} />
                </>
                    <Avatar image={ avatarImage } previewImage={ previewImage } />
                    <Summary/>
                    <Social/>
                </>
            </ThemeProvider>
        </LocalisationProvider>
  )
}

export default App;
