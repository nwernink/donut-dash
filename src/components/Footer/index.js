import React from 'react';
import Icon1 from '../../images/sae.jpg';
import Icon2 from '../../images/cmu.png';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo src={Icon1} />
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/PghDonutDash' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com/pghdonutdash/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com/channel/UC7UWwgKtgv-ubAHG0Edj5KA' target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//twitter.com/PGHDonutDash' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialLogo src={Icon2} />
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;