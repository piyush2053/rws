import {  Drawer, Sidebar, TextInput } from "flowbite-react";
import {
    HiSearch
} from "react-icons/hi";
import logo from '../assets/rwsLogoonly.png'
import excel from '../assets/excel.png'
import ai from '../assets/aiRWS.png'
import '../index.css'
import { BiSolidSpreadsheet } from "react-icons/bi";
import { useDrawer } from "./Store/Provider";
const DrawerComp = () => {
    const { open, setOpen } = useDrawer();
    const handleClose = () => setOpen(false);
    return (
        <>
            <Drawer open={open} onClose={handleClose} className="w-25" >
                <Drawer.Header title="RWS" titleIcon={() => <><img src={logo} className="h-7 mr-2"/></>} />
                <Drawer.Items>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>
                                <form className="pb-3 md:hidden">
                                    <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                                </form>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/gen-ai" icon={() => <><img src={ai} className="h-5 rounded-lg"/></>}>
                                            Generative AI
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/estimation" icon={() => <><img src={excel} className="h-5"/></>}>
                                            Estimate Efforts
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/team-indore" icon={() => <><img src={logo} className="h-5"/></>}>
                                            Our Team
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/timesheet" icon={() => <BiSolidSpreadsheet color="#007373" className="text-[22px]"/>}>
                                            TimeSheet
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </>
    )
}

export default DrawerComp