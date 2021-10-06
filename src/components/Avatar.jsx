import React from 'react'
import styled from 'styled-components'
import ReactTypingEffect from 'react-typing-effect'
import ProgressiveImage from "react-progressive-image-loading"
import Translate from './localisation/Translate'

const Avatar = ({ image, previewImage}) => {
    const Wrapper = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      margin: 0.1rem 1rem;
      font-size: 1.2rem;
      line-height: 1rem;

      &.smaller {
        font-size: 0.95rem;
        
        @media (max-width: 700px) {
            font-size: 0.8rem;
        }
      }
    }
    `

    const ImageWrapper = styled.div `
      width: 100%;

      img {
        width: 12.5rem;
        position: relative;
        margin: 2.3rem 0 1rem 0;
        border-radius: 50%;
        box-shadow: inset 2px 1px 4px rgba(0, 0, 0, 0.1);
      }
    `

    const Name = styled.h1 `
      padding: 0;
      margin: 0 0 2rem 0;
      font-size: 1.65rem;
    `

    const Work = styled.div `
      margin-bottom: 0.5rem;  

      p {
        line-height: 1.75rem; 
      }
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
                  <p>
                    <Translate token="work"/>
                  </p>
              </Work>
              <p className="smaller"><Translate token="student" /> <span role="img" aria-label="university">🏫</span></p>
              <p className="smaller">xandecode@gmail.com <span role="img" aria-label="email">📬</span></p>
            </div>
          </div>
        </Wrapper>
    )
}

export default React.memo(Avatar)
