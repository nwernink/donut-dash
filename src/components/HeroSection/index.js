import React, { useState } from 'react';
// import Video from '../../videos/dd-video.mp4';
import Image from '../../images/cover.jpg';
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImageBg src={Image} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Donut Dash</HeroH1>
                <HeroP>
                    Run A Mile, Eat Six Donuts, Run Another Mile!
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='//pghdonutdash.crowdchange.co/20152' target="_blank"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Register
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;