import { Navbar, Tooltip } from "flowbite-react";
import '../index.css'
import logo from '../assets/svg/rws-logo_no--whitespace_tcm228-236815.svg'
import { HiMenu } from "react-icons/hi";
import { useDrawer } from "./Store/Provider";
import PopoverMe from "./SmallChunks/PiyushPopover";

const NavbarTop = () => {
    const { open, setOpen } = useDrawer()
    return (
        <Navbar fluid rounded color="light" className="py-5" >
            <Navbar.Brand  >
                <img src={logo} className="mr-3 h-4 lg:h-5" alt="RWS" />
                <Tooltip content="Open the Menu Options" placement="right-end">
                {/* //z-50 ml-[-100px] */}
                    <a onClick={() => setOpen(true)} className="top-5 bg-[#007373] inline-flex font-bold h-8 items-center justify-center rounded-md text-[#007373] px-2 text-sm shadow transition-colors cursor-pointer hover:bg-[#007373] hover:text-white hover:border-0 "> 
                        <HiMenu  color="white"/>
                    </a>
                </Tooltip>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <a href="/" className="inline-flex border-2 border-[#0E6ED6] font-bold h-8 items-center justify-center rounded-md text-[#0E6ED6] px-5 text-sm shadow transition-colors hover:bg-[#0E6ED6] hover:text-white ">
                    Home
                </a>
                <PopoverMe />
            </Navbar.Collapse>
        </Navbar>
    )

}

export default NavbarTop