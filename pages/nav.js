import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

const nav = () => {
    return (
        <div >
        <Navbar className='bg-violet-600'
fluid={true}
rounded={true}
>
<Navbar.Brand  href="/">
<img className='w-20' src="https://i.ibb.co/NS834Lr/93191-click.gif" alt="" />
<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
  Test News
</span>
</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse>
<Link
  href="/home"
  active={true}
>

  Home
</Link>

<Link href='/home'>
<Button className='text-red-400'>
   go
</Button>

</Link>
<Link href="/world">
  World
</Link>
<Link  href="/world">
 Local
</Link>
<Link href="/world">
  Cricket
</Link>
<Link href="/world">
  top News
</Link>
</Navbar.Collapse>
</Navbar>
    </div>
    );
};

export default nav;