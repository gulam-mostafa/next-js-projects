import { Button } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

const world = () => {
    return (
        <div className='text-center w-1/2  m-auto'>
            <h2 className='text-center my-12'>world page</h2>
            <Link className=' m-auto btn btn-primary' href={'/'}><Button>Home</Button></Link>
        </div>
    );
};

export default world;