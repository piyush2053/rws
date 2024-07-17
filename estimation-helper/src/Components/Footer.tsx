const Footer = ()=>{
    return(
        <div className="flex flex-col">
      
        <footer className="bg-[#003D7F] py-1 text-sm text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-center text-[#CFD8DC]  hover:text-white md:text-left">&copy; 2024 RWS. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="https://www.rws.com/legal/privacy/" className="hover:underline text-[#CFD8DC]  hover:text-white cursor-pointer " >
              Terms of Service
            </a>
            <a href="https://www.rws.com/legal/privacy/" className="hover:underline text-[#CFD8DC] hover:text-white cursor-pointer " >
              Privacy Policy
            </a>
            <a href="https://www.rws.com/contact/" className="hover:underline text-[#CFD8DC]  hover:text-white cursor-pointer" >
              Contact
            </a>
            <a href="https://www.rws.com/about/" className="hover:underline text-[#CFD8DC]  hover:text-white cursor-pointer" >
              About
            </a>
          </nav>
        </div>
      </footer>
      </div>
    )
}

export default Footer;