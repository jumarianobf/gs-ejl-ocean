'use client'
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import dados from './Link.json'
import "./Header.css"

interface Dados {
  href : string;
  name : string;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link href={"/"}>EJL Ocean Sustainability</Link>  
          </div>
          
          <ul className={menuOpen ? "open" : ""}>
            {dados.map((link:Dados) =>(
              <li><Link href={ link.href }>{ link.name }</Link></li>
            ))}
            
          </ul>
          
        </nav>
      </header> 
    </>
  );
}
