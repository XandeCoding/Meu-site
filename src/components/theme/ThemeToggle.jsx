import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

const SectionToggler = styled.div `
    display: flex;
    justify-content: flex-end;
    margin: 1.3rem 1em 0 0;
`

const SvgToggler = styled.svg `
    cursor: pointer;
    height: 2em;
    width: 2em;

    circle {
        fill: ${({ theme }) => theme.toggle};
        shape-rendering: geometricPrecision;
        stroke-width: 0;
        stroke: none;
    }
`

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <SectionToggler>
            <SvgToggler onClick={ toggleTheme }>
                <circle cx="15" cy="15" r="10"/>
            </SvgToggler>
        </SectionToggler>
    )
}

ThemeToggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default React.memo(ThemeToggle)
