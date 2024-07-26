import { Navbar } from "flowbite-react";
import '../index.css'
import { HiMenu } from "react-icons/hi";
import { useDrawer } from "./Store/Provider";

const NavbarTop = () => {
    const { open, setOpen } = useDrawer()
    return (
        <Navbar fluid className="py-2 bg-[#007373]" >
            <Navbar.Brand  >
                <div onClick={() => setOpen(true)} className=" inline-flex font-bold h-7 items-center justify-center p-1 text-sm text-white hover:shadow-xl cursor-pointer rounded-full bg-[#B2DFDB]">
                    <HiMenu color="white" className="text-[18px] text-[#007373]" />
                </div>
            </Navbar.Brand>
        </Navbar>
    )

}

export default NavbarTop