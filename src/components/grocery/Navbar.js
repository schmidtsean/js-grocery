import { Component } from 'react';

const Navbar = () => (
<>
<nav>
    <div>
     <a href="/" class="brand-logo"> Grocery Store</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/grocery"> Grocery Store</a></li>
        </ul>
    </div>
</nav>
</>

)
export default Navbar;