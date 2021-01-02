import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>The Expanse \</HeroH1>
                    <HeroH1>/ Virtual Reality</HeroH1>
                    <HeroP>
                        Explore the Outer Reaches of the Universe in our Virtual Reality Conquest.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to="signup" 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover} 
                            primary="true" 
                            dark="true"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                        >
                            Expand The Universe {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
