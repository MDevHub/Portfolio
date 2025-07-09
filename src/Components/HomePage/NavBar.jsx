   import React from 'react'
   import { Link as ScrollLink } from 'react-scroll'
   import { Link as RouterLink } from 'react-router-dom' // ✅ For routing to another page

   const Navbar = () => {
   const navItems = [
      { name: 'About', isPage: false },
      { name: 'Projects', isPage: false },
      { name: 'Experience', isPage: true },
      { name: 'Contact', isPage: false },
   ]

   return (
      <div className="w-fit mx-auto mt-6 px-3 sm:px-6 py-2 rounded-full border border-[#CBACBF]/30 bg-[#01081b]/80 backdrop-blur-lg shadow-lg z-50 fixed top-6 left-1/2 transform -translate-x-1/2">
         <ul className="flex gap-6 text-white text-[12px] sm:text-base font-medium">
         {navItems.map((item, index) => (
            <li key={index}>
               {item.isPage ? (
               <RouterLink
                  to="/experience"
                  className="cursor-pointer hover:text-[#CBACBF] transition-colors duration-300"
               >
                  {item.name}
               </RouterLink>
               ) : (
               <ScrollLink
                  to={item.name.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-10}
                  className="cursor-pointer hover:text-[#CBACBF] transition-colors duration-300"
               >
                  {item.name}
               </ScrollLink>
               )}
            </li>
         ))}
         </ul>
      </div>
   )
   }

   export default Navbar
