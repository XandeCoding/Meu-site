import React from 'react'
import styled from 'styled-components'
import { Github, DevTo, LinkedinSquare, Codepen } from '@styled-icons/boxicons-logos'
import Translate from './localisation/Translate'

const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 3rem 0 3rem 0;
    padding: 0em 5em;
    justify-content: center;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        padding: 0 0;
    }
`

const Title = styled.h3 `
    text-align: center;
    font-weight: 600;
    font-size: 1.4em;
    width: 100%;
`
const LinkSocial = styled.a `
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;
    margin: 1em 0;
    padding: 0.2em;
    width: 7rem;
    text-align: left;
`

const NameSocial = styled.span `
    margin-right: auto;
    margin-left: 0.85rem;
    display: block;
`

const Social = () => {
    return (
        <Wrapper>
            <Title className="title"><Translate token="socialNetworks" /></Title>
            <LinkSocial href="https://github.com/XandeCoding">
                <Github className="icon" size="32" />
                <NameSocial className="text">GitHub</NameSocial>
            </LinkSocial>
            <LinkSocial href="https://dev.to/xandecodes">
                <DevTo className="icon" size="32" />
                <NameSocial className="text">Dev.to</NameSocial>
            </LinkSocial>
            <LinkSocial href="https://www.linkedin.com/in/xandecodes/">
                <LinkedinSquare className="icon" size="32" />
                <NameSocial className="text">Linkedin</NameSocial>
            </LinkSocial>
                <LinkSocial href="https://codepen.io/XandeCoding/pens/showcase">
                <Codepen className="icon" size="32" />
                <NameSocial className="text">Codepen</NameSocial>
            </LinkSocial> 
        </Wrapper>
    )
}

export default React.memo(Social)
