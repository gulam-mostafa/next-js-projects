import { Navbar } from 'flowbite-react';
import React from 'react';

const nav = () => {
    return (
        <div>
        <Navbar
fluid={true}
rounded={true}
>
<Navbar.Brand href="https://flowbite.com/">
<img className='w-20' src="https://i.ibb.co/NS834Lr/93191-click.gif" alt="" />
<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
  Flowbite
</span>
</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse>
<Navbar.Link
  href="/navbars"
  active={true}
>
  Home
</Navbar.Link>
<Navbar.Link href="/navbars">
  World
</Navbar.Link>
<Navbar.Link href="/navbars">
 Local
</Navbar.Link>
<Navbar.Link href="/navbars">
  Cricket
</Navbar.Link>
<Navbar.Link href="/navbars">
  top News
</Navbar.Link>
</Navbar.Collapse>
</Navbar>
    </div>
    );
};

export default nav;