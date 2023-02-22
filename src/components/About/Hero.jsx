import React from 'react';
import about1 from '../../Assets/about-h1.png';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Hero = () => {
    return (
        <div className='w-full flex justify-between md:px-[40px] px-[20px] md:pt-[100px] pt-[20px] items-center bg-[#F9F8FD]' >
            <div className='relative w-[568px]'>
                <RiDoubleQuotesL size={45} className='text-[#8777D7]' />
                <p className='md:text-2xl md:ml-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada, ex vel mattis ullamcorper, ex lectus condimentum nisl, ut auctor nisi dui et ligula.</p>
                <RiDoubleQuotesR size={45} className='text-[#8777D7] ml-auto' />
            </div>
            <img src={about1} alt="about-hero" className='mr-[200px] md:block hidden' />

        </div>
    )
}

export default Hero
