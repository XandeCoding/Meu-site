import React from 'react'
import styled from 'styled-components'
import loadable from '@loadable/component'
import { Github } from '@styled-icons/entypo-social'
import { Gitlab, Codepen, Twitch } from '@styled-icons/fa-brands'
import { DevTo, LinkedinSquare, InstagramAlt, Dribbble } from '@styled-icons/boxicons-logos'
const Translate = loadable(() => import ('./localisation/Translate'))

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

    .icon {
        margin-left: 1em;
    }
`

const Title = styled.h3 `
    text-align: center;
    font-weight: 600;
    font-size: 1.3em;
    width: 100%;
`
const LinkSocial = styled.a `
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;
    margin: 1em 0;
    padding: 0.2em;
`

const NameSocial = styled.span `
    margin: 0 1em;
`

const Social = () => {
    return (
        <Wrapper>
            <Title className="title"><Translate token="socialNetworks" /></Title>
            <LinkSocial href="https://github.com/XandeCoding">
                <Github className="icon" size="32" />
                <NameSocial className="text">GitHub</NameSocial>
            </LinkSocial>
            <LinkSocial href="https://gitlab.com/XandeCoding">
                <Gitlab className="icon" size="32" />
                <NameSocial className="text">GitLab</NameSocial>
            </LinkSocial>
            <LinkSocial href="https://dev.to/xandecodes">
                <DevTo className="icon" size="32" />
                <NameSocial className="text">Dev.to</NameSocial>
            </LinkSocial>
            <LinkSocial href="https://www.twitch.tv/xande0_0_">
                <Twitch className="icon" size="32" />
                <NameSocial className="text">Twitch</NameSocial>
            </LinkSocial>
            <LinkSocial href="https://dribbble.com/Xande0_0">
                <Dribbble className="icon" size="32" />
                <NameSocial className="text">Dribbble</NameSocial>
            </LinkSocial>
            <LinkSocial href="https://codepen.io/XandeCoding">
                <Codepen className="icon" size="32" />
                <NameSocial className="text">CodePen</NameSocial>
            </LinkSocial>
            <LinkSocial href="https://www.linkedin.com/in/xandecodes/">
                <LinkedinSquare className="icon" size="32" />
                <NameSocial className="text">Linkedin</NameSocial>
            </LinkSocial>
            <LinkSocial href="https://www.instagram.com/xande0_0/?hl=pt-br">
                <InstagramAlt className="icon" size="32" />
                <NameSocial className="text">Instagram</NameSocial>
            </LinkSocial>
        </Wrapper>
    )
}

export default React.memo(Social)
