import React from 'react'
import loadable from '@loadable/component'
import styled from 'styled-components'
const Translate = loadable(() => import ('./localisation/Translate'))

const Summary = () => {
    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0 0 0;
    `

    const Title = styled.h2`
        text-align: center;
        font-weight: 600;
        font-size: 1.3em;

    `
    const Text = styled.p`
        text-align: center;
        max-width: 50rem;
        margin: 1em 2.5em;
    `

    return (
        <Wrapper>
            <Title className="title"><Translate token="summaryTitle" /> <span role="img" aria-label="Flying Saucer">🛸</span></Title>
            <Text><Translate token="summaryTextPt1" /><br/><br/><Translate token="summaryTextPt2" />
                <span role="img" aria-label="Vulcan Salute"> 🖖</span></Text>

        </Wrapper>
    )
}

export default React.memo(Summary)
