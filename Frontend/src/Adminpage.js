import React from 'react'
import { Link } from 'react-router-dom'
function Adminpage() {
  return (
    <div>
        <div class="homeback">
    <div class="main-wrap">
    <input id="slide-sidebar" type="checkbox" role="button" />
        <label for="slide-sidebar"><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEUAAAD///8vLy8HBwefn5+2traQkJBGRkZkZGQeHh4bGxve3t5gYGDY2Ng8PDzi4uKBgYHPz88uLi6+vr5vb281NTUXFxf39/e4uLjx8fHIyMhoaGirq6tOTk7o6Oh7e3slJSXS6+RuAAABpElEQVR4nO3b23aCMBCF4Y00HD1hhQiC8v5PWSi1VXufn4vZLzCfC0NC1owiODKAAVYDKJNtugmUdJuUb4DdXoGz3z0Dkjh0fSlOfgGH4D9/yf7wA6iZ+lK9AI5Ufek4Ayrg+T8SVxPgxNWXTpE+yfqayp9ZwFnYElhSq2ABhcA1MCdWwwIabVjARhkLyORYgJNHl0HhFV1IwGXeDcF/Qfa9Hbc5VT9vlwNJBwny7nEmbJGnkLVPp2IXfC0U7vW7wLtrnceBktdX598/TKgYwAAGMIABDGAAAxhgRQBfuY9AcZX/B+iHoFcl8dC/AG5DyOpLhtsfoEfuaZr+AbgT5efcF0BH1Ze6GeBHDjD6CYDe1Z4jlWR9TeUTFpAoZQGpRhYw8pfVOGBkASP/J8SXIf4iwl/F/GaEb8f8gYQ/kvGHUv5YvoIPEywGMIABDGAAAxjAAAZYDYBu4YCbWOg2HrqRCW/lopvZ6HY+vKERb+nEm1rxtl68sRm/rMab2/H2fnzAAR/xwIdc+DEffNCJH/Xih93wcb+IH3iM8JFPLgYwAA74AgZPMaEEVpRbAAAAAElFTkSuQmCC" class="toggleimg"></img></span></label>
        <div class="sidebar"><h2 class='menu'>Menu</h2>
        <Link to="/Add"><p class="details">Add Shows</p></Link>
        <Link to="/Update"><p class="details">Update Shows</p></Link> 
        <Link to="/Get"><p class="details">Get Shows</p></Link>
        <Link to="/Delete"><p class="details">Delete Shows</p></Link>
        
        </div>
    <div class="portfolio">
      <header class="homeheader">
      <a href="#" class="logo">LiveTix</a>
      <nav class="nav-items">
      <a href="#">Home</a>
      <Link to="/Adminlogin"><a href="#">Logout</a></Link>
      
    </nav>
  </header>
  <center>
  <h1 class="book">LOOK THE DETAILS OF BOOKED &nbsp;
    <span class="concert">CONCERTS</span></h1>
    </center>
    
      </div>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    
    
    </div>
</div>
  )
}

export default Adminpage