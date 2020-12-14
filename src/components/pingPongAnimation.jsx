import React from 'react';
import Lottie from 'react-lottie';
import pinPongData from '../assets/ping-pong-animation';
import styled from 'styled-components'

const PingPongAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pinPongData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const LottieWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  return (
    <LottieWrap>
      <Lottie
	      options={defaultOptions}
        height={400}
        width={400}
      />
    </LottieWrap>
  )
}

export default PingPongAnimation
