import {CubeIcon} from '@heroicons/react/solid'
import {MenuIcon} from '@heroicons/react/solid'


function Header() {
  return (
  <header>
  <div>      

      <img 
        src="/assets/dw.png"
        width={100}
        height={100}
        className="cursor-pointer object-contain logo"
      />

      <ul id="nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Showcase</a></li>
      </ul>      

    
      <div>
        <MenuIcon className="h-6 w-6 menuButton"/>
      </div>
  </div>
  </header>
  )
}

export default Header