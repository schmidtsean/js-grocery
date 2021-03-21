import './Navbar.css'

const Navbar = () => (
<>
<nav>
    <div>
     <a href="/" class="brand-logo" style={{color: 'pink'}}> Grocery Store</a>
     <a href='./home.html' class='brand-logo' style={{color: 'pink'}}> Home Page</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        </ul>
    </div>
</nav>
</>

)
export default Navbar;