   import React from 'react'
   import { Link } from 'react-scroll'

   const Navbar = () => {
   const navItems = ['About', 'Projects', 'Experience', 'Contact']

   return (
      <div className="w-fit mx-auto mt-6 px-3 sm:px-6 py-2 rounded-full border border-[#CBACBF]/30 bg-[#01081b]/80 backdrop-blur-lg shadow-lg z-50 fixed top-6 left-1/2 transform -translate-x-1/2">
         <ul className="flex gap-6 text-white text-[12px] sm:text-base font-medium">
            {navItems.map((item, index) => (
               <li key={index}>
                  <Link
                     to={item.toLowerCase()}
                     spy={true}
                     smooth={true}
                     duration={600}
                     offset={-10}
                     className="cursor-pointer hover:text-[#CBACBF] transition-colors duration-300"
                  >
                     {item}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
   }

   export default Navbar
