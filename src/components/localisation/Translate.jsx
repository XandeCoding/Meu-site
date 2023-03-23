import React, { Fragment, useContext } from 'react'
import { LocalisationContext } from './localisationProvider'

const Translator = ({ token }) => {
    const {
        localisationStore: [state], Dictionary
    } = useContext(LocalisationContext)

    const { selectedLanguage } = state
    const translatedToken = Dictionary[selectedLanguage][token]
    
    return <Fragment>{ translatedToken }</Fragment>
}

export default Translator