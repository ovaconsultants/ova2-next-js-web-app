// components/HeroArea.tsx
import Image from 'next/image'
import React from 'react'

const HeroArea: React.FC = () => {
  return (
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <Image  
            width={800}
            height={800}
            src="/images/hero-bg.png"  
            alt="Hero Background"
          />
        </div>
      </div>
  )
}

export default HeroArea
