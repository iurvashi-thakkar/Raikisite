import React from 'react';
import homeicon from "../../Assets/home-icon.png";
import ourclient from "../../Assets/downArrowClient.png";
import ReactWhatsapp from 'react-whatsapp';
import { Link } from 'react-router-dom';


const Hero = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('client');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            {/* <section className='w-full  justify-around flex flex-col md:flex-row items-center bg-rect bg-cover bg-no-repeat'  >
                <div className='flex flex-col md:gap-2 max-w-[600px] mt-20 md:mt-0 md:text-left text-center items-center md:items-start'>
                    <h1 className='text-3xl md:text-6xl font-bold md:leading-[80px] text-[#282828] '>
                        Watch your breath
                        Relax your mind
                    </h1>
                    <p className='text-[#565A5C] md:block hidden'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis. Vestibulum tristique dolor non ferment.
                    </p>
                    <button className='px-[42px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold md:mt-[69px] mx-auto md:mx-0 mt-5'>Book Now</button>
                </div>
                <img src={homeicon} alt="yoga logo" className='md:mr-20' />
            </section> */}

            <section className='w-full lg:justify-between flex flex-col lg:flex-row items-center bg-rect bg-cover bg-no-repeat'  >
                <div className='flex flex-col md:gap-2 max-w-[800px] mt-20 md:mt-0 md:text-left text-center items-center md:items-start'>
                    <h1 className='text-3xl md:text-4xl font-bold md:leading-[60px] text-[#282828] '>
                        Better <span className='text-[#8777D7]'>mental,</span>  </h1>
                    <h1 className='text-3xl md:text-4xl font-bold md:leading-[60px] text-[#282828] '>
                        <span className='text-[#8777D7]'>Physical </span>and  </h1>
                    <h1 className='text-3xl md:text-4xl font-bold md:leading-[60px] text-[#282828] '>
                        <span className='text-[#8777D7]'>spiritual</span> health  </h1>

                    <p className='text-[#565A5C] md:block hidden'>
                        Get insight into your future and seek answers to your concerns through numerology, reiki healing and Tarot card reading.
                        <p className='text-[#565A5C] font-semibold mt-[16px]'> Inspire us to be and do our very best.</p>
                    </p>
                    <ReactWhatsapp number="+91 9987560606"><button className='px-[42px] py-[13px] bg-[#8777D7] w-max rounded-[12px] text-white font-bold md:mt-[16px] mx-auto lg:mx-0 mt-5'>Book Now</button></ReactWhatsapp>
                </div>
                <img src={homeicon} alt="yoga logo" className='md:mr-20' />
            </section>
            <img src={ourclient} alt="clientsection" className='mx-auto md:block hidden' onClick={handleClickScroll} />
        </>

    )
}

export default Hero
