import { Navbar, Tooltip } from "flowbite-react";
import '../index.css'
import logo from '../assets/svg/rws-logo_no--whitespace_tcm228-236815.svg'
import { HiMenu } from "react-icons/hi";
import { useDrawer } from "./Store/Provider";
import PopoverMe from "./SmallChunks/PiyushPopover";
import { RiTeamFill } from "react-icons/ri";

const NavbarTop = () => {
    const { open, setOpen } = useDrawer()
    return (
        <Navbar fluid rounded className="py-3" >
            <Navbar.Brand  >
                {!open && <div onClick={() => setOpen(true)} className="bg-white inline-flex font-bold h-8 items-center justify-center rounded-md  px-2 text-sm hover:shadow-xl cursor-pointer hover:bg-white ">
                    <HiMenu color="#007373" />
                </div>}
                <Tooltip content="Navigate to Home" arrow={false} className="text-[12px] bg-white text-[#007373] shadow-md">
                    <a className="cursor-pointer flex py-auto my-auto  ml-5" href="/">
                        <img src={logo} className="mr-3 h-4 lg:h-5" alt="RWS" />
                        {/* <p className="px-2 py-1 text-white text-xs rounded-full tracking-wide bg-[#007373] shadow-xl" >Omega</p> */}
                    </a>
                </Tooltip>
            </Navbar.Brand>
        </Navbar>
    )

}

export default NavbarTop