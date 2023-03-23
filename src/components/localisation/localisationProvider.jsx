import React, { useReducer } from 'react'
import Dictionary from './dictionary'

import {
    availableLanguages,
    initialState,
    reducer
} from './localisationReducer'

export const LocalisationContext = React.createContext()

export function LocalisationProvider({ children }) {
    const localisationStore = useReducer(reducer, initialState)

    return (
        <LocalisationContext.Provider
            value={{ localisationStore, Dictionary, availableLanguages }}>
                { children }
            </LocalisationContext.Provider>
    )
}
