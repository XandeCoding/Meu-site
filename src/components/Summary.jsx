import React from 'react'
import styled from 'styled-components'
import Translate from './localisation/Translate'

const Summary = () => {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
    `

    const Title = styled.h2`
        text-align: center;
        font-weight: 600;
        font-size: 1.4em;

    `
    const Text = styled.p`
        display: block;
        text-align: center;
        max-width: 50rem;
        margin: 1em 2.5em;

        @media (max-width: 700px) {
            font-size: 1rem;
        }

        &:last-child {
            margin-bottom: 0;
        }
    `

    return (
        <Wrapper>
            <Title className="title"><Translate token="summaryTitle" /> <span role="img" aria-label="Flying Saucer">🛸</span></Title>
            <Text>
                <Translate token="summaryTextPt1" />
            </Text>
            <Text>
                <Translate token="summaryTextPt2" />
            </Text>
            <Text>
                <Translate token="summaryTextPt3" />
            </Text>
        </Wrapper>
    )
}

export default React.memo(Summary)
