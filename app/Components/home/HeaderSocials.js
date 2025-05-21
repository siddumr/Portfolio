
import React from 'react'

const HeaderSocials = () => {
  return (
  <div className='home__socials'>
        <a href='https://www.linkedin.com/in/siddarthan-m-r-423546258' className='home__social-link' target='_blank'>
        <i class="fa-brands fa-linkedin"></i>
        </a>
     <a href="https://leetcode.com/your-username" className="home__social-link" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 1024 1024"
      fill="currentColor"
    >
      <path d="M713.6 842.7L529 1024 193.3 691.3l117.4-118.2 123.2 124.3 191.1-193.4L430.3 309.5l118.6-120 305.2 305.9c41.2 41.3 66.6 96.3 66.6 158.3s-25.4 117-66.6 158.3L713.6 842.7zM642.6 773.4l128.7-129.3c17.6-17.7 27.4-41.2 27.4-66.4s-9.8-48.7-27.4-66.4L596.6 390.2 540.9 446l106.7 107.9-306.1 310-58.3-58.8L317 745.4l157.6 158.9 167.9-171zM387.2 508.3L217.7 336.7l230-231.9 174.5 177.2-61 61.8-113.3-115.1-114.2 115.1 167.2 169.5-114.4 115z"/>
    </svg>
</a>

        <a href='https://github.com/siddumr' className='home__social-link' target='_blank'>
        <i class="fa-brands fa-github"></i>
        </a>

  </div>
  )
}

export default HeaderSocials