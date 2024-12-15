// components/HeroArea.tsx
import Image from 'next/image';
import React from 'react';

const HeroArea: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Image src="/images/laptop.jpg" alt="Hero Background" fill />
    </div>
  );
};

export default HeroArea;
