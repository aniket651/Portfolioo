import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='FooterContainer'>
      <div className='FooterWrapper'>
        <h1 className='Logo'>Aniket Pandey</h1>
        <div className='Nav'>
          <a className='NavLink' href="https://www.linkedin.com/in/aniket-pandey-b80654219/">linkedin</a>
          <a className='NavLink' href="https://github.com/aniket651">github</a>
          <a className='NavLink' href="https://codeforces.com/profile/aniket_651">codeforces</a>
          <a className='NavLink' href="https://leetcode.com/aniketpandey651/">leetcode</a>
          <a className='NavLink' href="https://www.codechef.com/users/aniket_651">codechef</a>
        </div>
      </div>
    </div>
  )
}

export default Footer