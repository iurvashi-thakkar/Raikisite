import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Statement = () => {
    return (
        <div className='w-full flex justify-center items-center md:mt-[150px] mt-[80px] relative px-[20px]'>
            <div className='flex flex-col gap-8'>
                <RiDoubleQuotesL size={45} className='text-[#8777D7] absolute md:left-44 -top-14' />
                <p className='md:w-[785px] md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada, ex vel mattis ullamcorper, ex lectus condimentum nisl, ut auctor nisi dui et ligula. Nam luctus libero vitae nisl rutrum accumsan. Ut scelerisque, eros a tempus dictum, nisl ipsum volutpat nisl, nec aliquet elit urna eu nisi.</p>
                <RiDoubleQuotesR size={45} className='text-[#8777D7] absolute md:right-48 md:top-28 top-40 right-0' />
            </div>

        </div>
    )
}

export default Statement
