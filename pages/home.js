import Link from 'next/link';
import React from 'react';

const home = () => {
    return (
        <div>
            <h2 className='text-center my-12'>Home page</h2>
            <Link className='btn ' href='/'>GO home</Link>
        </div>
    );
};

export default home;