'use client'

import Link from "next/link";
import "./Footer.css"

export default function Footer() {
    return (
      <>
        <footer>
          <div className="footer_conteudo">
              <p className="footer_marca">EJL Ocean Sustainability</p>
              <ul className="footer_lista">
                  <li><Link href="/" >Julia Mariano RM:552713 1TDSPT</Link></li>
                  <li><Link href="/" >Enzo Franco RM:553643 1TDSPT</Link></li>
                  <li><Link href="/" >Leonardo Gaspar RM:553383 1TDSPT</Link></li>
                  <li><Link href="https://github.com/jumarianobf/gs-ejl-ocean" target="_blank">GitHub</Link></li>
              </ul>
          </div>
          <div className="footer_copyright"> &#169; 2024 EJL Ocean Sustainability. All rights reserved.</div>
      </footer>
      </>
    );
  }