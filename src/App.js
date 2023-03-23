import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/theme/GlobalStyle'
import { lightTheme, darkTheme } from './components/theme/themes'
import { useDarkMode } from './components/theme/useDarkMode'
import { LocalisationProvider } from './components/localisation/localisationProvider'
import avatarImage from './assets/avatar.webp'

import LocalisationToggle from './components/localisation/LocalisationToggle'
import Avatar from './components/Avatar'
import Social from './components/Social'
import Summary from './components/Summary'
import ThemeToggle from './components/theme/ThemeToggle'

function App() {
    const [ theme, themeToggler ] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
      <LocalisationProvider>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles/>
          <LocalisationToggle></LocalisationToggle>
          <ThemeToggle theme={theme} toggleTheme={themeToggler} />
          <Avatar image={ avatarImage } />
          <Summary/>
          <Social/>
        </ThemeProvider>
      </LocalisationProvider>
  )
}

export default App;
