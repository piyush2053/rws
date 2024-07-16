import { Drawer, Sidebar, TextInput } from "flowbite-react";
import {
    HiSearch
} from "react-icons/hi";
import logo from '../assets/rwsLogoonly.png'
import excel from '../assets/excel.png'
import ai from '../assets/aiRWS.png'
import '../index.css'
import { FaRobot } from "react-icons/fa6";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { FaFileExcel } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";
import { useDrawer } from "./Store/Provider";
const DrawerComp = () => {
    const { open, setOpen } = useDrawer();
    const handleClose = () => setOpen(false);
    return (
        <>
            <Drawer open={open} onClose={handleClose} className="w-[220px]" style={{ overflowX: 'hidden' }}>
                <Drawer.Header title="RWS" titleIcon={() => <><img src={logo} className="h-7 mr-2" /></>} />
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
                                        <Sidebar.Item href="/gen-ai" icon={() => <FaRobot color="#007373" className="text-[22px]" />}>
                                            Generative AI
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/estimation" icon={() => <FaFileExcel color="#007373" className="text-[22px]" />}>
                                            Estimate Efforts
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/news" icon={() => <BsNewspaper color="#007373" className="text-[22px]" />}>
                                            News
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/timesheet" icon={() => <BiSolidSpreadsheet color="#007373" className="text-[22px]" />}>
                                            TimeSheet
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item href="/team-indore" icon={() => <><img src={logo} className="h-5" /></>}>
                                        Our Team
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </>
    )
}

export default DrawerComp