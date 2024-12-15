// components/FooterSection.tsx
import React from 'react'

const FooterSection: React.FC = () => {
  return (
    <section className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By: Ova2 Consultants, LLC.
        </p>
      </div>
    </section>
  )
}

export default FooterSection
