// components/FooterSection.tsx
import React from 'react'

const FooterSection: React.FC = () => {
  return (
    <section className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </section>
  )
}

export default FooterSection
