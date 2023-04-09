import React, { useState } from 'react'
import styled from 'styled-components'
import ReactTypingEffect from 'react-typing-effect'
import Translate from './localisation/Translate'

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
  }

  span {
    margin-left: 0.4rem;
  }
`

const ImageWrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;

  img, div {
    image-rendering: high-quality;

    object-fit: cover;
    width: 12.5rem;
    height: 12.5rem;
    margin: 2.3rem 0 1rem 0;
    border-radius: 50%;
    box-shadow: inset 2px 1px 4px rgba(0, 0, 0, 0.1);
  }
`

const ImageFallback = styled.div `
  background-color: lightgray;
  filter: blur(2px);
`

const Name = styled.h1 `
  padding: 0;
  margin: 0 0 2rem 0;
  font-size: 1.65rem;
`

const Subtitle = styled.div `
  h3 {
    font-size: 1.25rem;
    margin-block: 0rem;
  }
`

const Infos = styled.div `
  margin-top: 0.8rem;

  p {
    font-size: 1.05rem;
    line-height: 1.2rem;
  }
`

const Avatar = ({ imageName }) => {
    const [image, setImage] = useState(null)
    import(`../assets/${ imageName }`).then((result) => setImage(result.default))

    return (
        <Wrapper>
            <ImageWrapper>
              { image
                ? <img
                  src={ image }
                  alt='foto de perfil'
                  height='12.5rem'
                  width='12.5rem'
                  loading='lazy'
                />
                : <ImageFallback />
              }
            </ImageWrapper>
            <div>
              <Name className="title">
                <ReactTypingEffect
                  text='Alexandre Fernandes'
                  typingDelay='800'
                  speed='150'
                  eraseDelay='8000'>
                </ReactTypingEffect>
              </Name>
              <Subtitle className="subtitle">
                  <h3>
                    <Translate token="tecnologies"/>
                  </h3>
              </Subtitle>
              <Subtitle className="subtitle">
                <h3>
                  <Translate token="work" /><span role="img" aria-label="work tech">👨‍💻</span> 
                </h3>
              </Subtitle>
              <Infos>
                <p><Translate token="student" /> <span role="img" aria-label="university">🏫</span></p>
                <p>xandecode@gmail.com <span role="img" aria-label="email">📬</span></p>
              </Infos>
            </div>
        </Wrapper>
    )
}

export default React.memo(Avatar)
