
import React from 'react'

const HeaderSocials = () => {
  return (
  <div className='home__socials'>
        <a href='https://www.linkedin.com/in/siddarthan-m-r-423546258' className='home__social-link' target='_blank'>
        <i class="fa-brands fa-linkedin"></i>
        </a>
       <a href="https://leetcode.com/Siddarthan21" className="home__social-link" target="_blank" rel="noopener noreferrer">
      <img src="/leetcode.png" alt="LeetCode" style={{ width: '20px', height: '20px' }} />
      </a>
        <a href='https://github.com/siddumr' className='home__social-link' target='_blank'>
        <i class="fa-brands fa-github"></i>
        </a>

  </div>
  )
}

export default HeaderSocials