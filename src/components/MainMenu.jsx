import React from 'react'
import {ReactComponent as IconPlayContainer} from '../assets/images/icon-play-container.svg'
import {ReactComponent as PlayIcon} from '../assets/images/icon-play.svg'

const MainMenu = () => {
  return (
    <div className=' bg-hman_bg--mobile md:bg-hman_bg--tablet lg:bg-hman_bg--desktop @apply h-dvh bg-no-repeat w-dvw bg-cover px-5 flex items-center'>
        <div className='h-[30.07rem] rounded-[3rem] w-full bg-[#344ABA] flex items-center justify-center'>
            
        <svg width="324" height="481" viewBox="0 0 324 481" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ii_51_150)">
<rect width="324" height="481" rx="48" fill="url(#paint0_linear_51_150)"/>
</g>
<defs>
<filter id="filter0_ii_51_150" x="0" y="-4" width="324" height="491" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_innerShadow_51_150"/>
<feOffset dy="6"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141667 0 0 0 0 0.386905 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_51_150"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect2_innerShadow_51_150"/>
<feOffset dy="-8"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.054902 0 0 0 0 0.4 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_51_150" result="effect2_innerShadow_51_150"/>
</filter>
<linearGradient id="paint0_linear_51_150" x1="162" y1="0" x2="162" y2="481" gradientUnits="userSpaceOnUse">
<stop stop-color="#344ABA"/>
<stop offset="1" stop-color="#001479" stop-opacity="0.83"/>
</linearGradient>
</defs>
</svg>

            <div className='relative '>
                

            <IconPlayContainer/>
            <div className='absolute top-12 right-[5.4rem] w-5 h-5 '>

            <PlayIcon/>
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default MainMenu