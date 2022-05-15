import React from 'react';
import { Button } from '../ButtonElement';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({
        lightBg,
        id,
        imgStart,
        topLine,
        lightText,
        headline,
        darkText,
        description,
        buttonLabel,
        img,
        alt,
        primary,
        dark
    }) => {

    var buttonLink;
    if (id === 'about') {
        buttonLink = '//pghdonutdash.crowdchange.co/20152';
    } else if (id === 'beneficiary') {
        buttonLink = '//mariolemieux.org/austins-playrooms/';
    } else {
        buttonLink = '/contactus';
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to={buttonLink}
                                    target="_blank"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;