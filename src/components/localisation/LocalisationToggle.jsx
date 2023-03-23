import React, { useContext, useEffect } from 'react'
import styled from  'styled-components'
import { LocalisationContext } from './localisationProvider'
import Translate from './Translate'

const LocalisationToggle= () => {

    const SectionToggler = styled.span `
        cursor: pointer;
        position: absolute;
        left: auto;
        right: 0;
        font-size: 20px;
        vertical-align: middle;
        margin: 0 3.5em;
    `

    const {
        localisationStore: [ localisationState, dispatch ], availableLanguages
    } = useContext(LocalisationContext)

    const setLanguage = ((payload) => {
        window.localStorage.setItem('language', payload)
        dispatch({ type: 'LANGUAGE_UPDATE', payload: payload })
    })

    const changeLanguage = () => {
        if (localisationState.selectedLanguage === availableLanguages[0]['shortCode']) {
            setLanguage(availableLanguages[1]['shortCode'])
        }
        else {
            setLanguage(availableLanguages[0]['shortCode'])
        }
    }

    useEffect(() => {
        const localLanguage = window.localStorage.getItem('language')
        localLanguage && setLanguage(localLanguage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <SectionToggler onClick={ changeLanguage }>
            <Translate token="flag" />
        </SectionToggler>
    )
}

export default React.memo(LocalisationToggle)
