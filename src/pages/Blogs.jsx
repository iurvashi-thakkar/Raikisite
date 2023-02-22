import React from 'react';
import Cards from '../components/Blogs/Cards';
import Appointment from '../components/Blogs/Appointment';

const Blogs = () => {
    return (
        <div className='md:px-[40px] px-[20px]'>
            <h3 className='text-center md:text-4xl text-2xl'>Blogs & Articles</h3>
            <Cards />
            <Appointment />
        </div>
    )
}

export default Blogs
