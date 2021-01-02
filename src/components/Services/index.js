import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP, ServicesIcon} from './ServicesElements';


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Beta Features</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-4.svg" />
                    <ServicesH2>Discover Worlds</ServicesH2>
                    <ServicesP>Ability to explore and discover multiple worlds throughout the Universe.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-2.svg" />
                    <ServicesH2>Virtual Connections</ServicesH2>
                    <ServicesP>Through the VR platform you can connect online with people all over the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-6.svg" />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Be one of the first to pioneer the potential of The Expanse VR platform.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
