import { Navbar, Tooltip } from "flowbite-react";
import '../index.css'
import logo from '../assets/svg/rws-logo_no--whitespace_tcm228-236815.svg'
import { HiMenu } from "react-icons/hi";
import { useDrawer } from "./Store/Provider";
import PopoverMe from "./SmallChunks/PiyushPopover";
import { RiTeamFill } from "react-icons/ri";
import RWS from "./SmallChunks/RWSLogo";

const NavbarTop = () => {
    const { open, setOpen } = useDrawer()
    return (
        <Navbar fluid className="py-2 bg-[#007373]" >
            <Navbar.Brand  >
                <div onClick={() => setOpen(true)} className="inline-flex font-bold h-8 items-center justify-center rounded-md px-2 text-sm text-white hover:shadow-xl cursor-pointer rounded-lg">
                    <HiMenu color="white" className="text-[20px]" />
                </div>
                <a className="cursor-pointer flex py-auto my-auto" href="/">
                    <RWS />
                </a>
            </Navbar.Brand>
        </Navbar>
    )

}

export default NavbarTop