import React from 'react';
import ServiceHeader from '../components/OurService/ServiceHeader';
import Numerology from '../components/OurService/Numerology';
import TarrotCard from '../components/OurService/TarrotCard';
import RaikiHeal from '../components/OurService/RaikiHeal';


const Service = () => {
    return (
        <div>
            <ServiceHeader />
            <RaikiHeal />
            <Numerology />
            <TarrotCard />
        </div>
    )
}

export default Service
