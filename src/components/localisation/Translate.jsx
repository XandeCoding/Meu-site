import React, { Fragment, useContext } from 'react'
import { LocalisationContext } from './localisationProvider'

const Translator = ({ token }) => {
    const {
        localisationStore: [state], dictionary
    } = useContext(LocalisationContext)

    const { selectedLanguage } = state
    const translatedToken = dictionary[selectedLanguage][token]
    
    return <Fragment>{ translatedToken }</Fragment>
}

export default Translator