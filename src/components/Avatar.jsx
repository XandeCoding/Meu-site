import React from 'react'
import loadable from '@loadable/component'
import styled from 'styled-components'
import ReactTypingEffect from 'react-typing-effect'
import ProgressiveImage from "react-progressive-image-loading"
const Translate = loadable(() => import ('./localisation/Translate'))

const Avatar = ({ image, previewImage}) => {
    const Wrapper = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      margin: 0.1rem 0;
    }
    `

    const ImageWrapper = styled.div `
      width: 100%;

      img {
        width: 12.5rem;
        position: relative;
        margin: 4rem 0 1rem 0;
        border-radius: 50%;
        box-shadow: inset 2px 1px 4px rgba(0, 0, 0, 0.1);
      }
    `

    const Name = styled.h1 `
        padding: 0;
        margin: 0 0 2.3rem 0;
    `

    const Work = styled.div `
        margin-bottom: 0rem;
    `

    return (
        <Wrapper>
            <div>
            <ImageWrapper>
              <ProgressiveImage
                preview={ previewImage }
                src={ image }
                render={(src, style) => <img src={src} style={style} alt="Alexandre" />}
              />
            </ImageWrapper>
                <div>
                    <Name className="title"><ReactTypingEffect text='Alexandre Fernandes' typingDelay='800' speed='150' eraseDelay='8000'></ReactTypingEffect></Name>
                    <Work className="subtitle">
                        <Translate token="work"/>
                    </Work>
                    <p><Translate token="student" /> <span role="img" aria-label="university">🏫</span></p>
                    <p>xandecode@gmail.com <span role="img" aria-label="email">📬</span></p>
                </div>
            </div>
        </Wrapper>
    )
}

export default React.memo(Avatar)
