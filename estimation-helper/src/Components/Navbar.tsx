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
        <Navbar fluid rounded color="light" className="py-5" >
            <Navbar.Brand  >
                <img src={logo} className="mr-3 h-4 lg:h-5" alt="RWS" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <div className="flex gap-2">
                    {!open && <div onClick={() => setOpen(true)} className="bg-white inline-flex font-bold h-8 items-center justify-center rounded-md  px-2 text-sm shadow-md border-2 border-[#CFD8DC] cursor-pointer hover:bg-white ">
                        <Tooltip placement="right-end" content="Menu Options">
                            <HiMenu color="#007373" />
                        </Tooltip>
                    </div>}
                    <Tooltip content="Our Team">
                    <a className="inline-flex cursor-pointer font-bold h-8 items-center justify-center rounded-full bg-[#007373] px-2.5 text-sm text-white shadow transition-colors hover:bg-primary/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" href="/team-indore">
                        <RiTeamFill />
                    </a>
                    </Tooltip>
                    <PopoverMe />
                    <a href="/" className="inline-flex border-2 border-[#BDBDBD] font-bold h-8 items-center justify-center rounded-md text-[#0E6ED6] px-5 text-sm shadow-xl transition-colors hover:bg-[#0E6ED6] hover:text-white ">
                        Home
                    </a>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default NavbarTop