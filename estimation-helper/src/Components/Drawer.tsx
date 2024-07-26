import { Drawer, Sidebar, TextInput } from "flowbite-react";
import logo from '../assets/rwsLogoonly.png'
import { FaHome } from "react-icons/fa";
import '../index.css'
import { FaRobot } from "react-icons/fa6";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { FaFileExcel } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";
import { useDrawer } from "./Store/Provider";
import PopoverMe from "./SmallChunks/PiyushPopover";
import AboutMe from "./SmallChunks/PiyushPopover";
const DrawerComp = () => {
    const { open, setOpen } = useDrawer();
    const handleClose = () => setOpen(false);
    return (
        <>
            <Drawer open={open} onClose={handleClose} className="w-[220px]" style={{ overflowX: 'hidden', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
                <div className="flex flex-col justify-between">
                    <Drawer.Items>
                        <Sidebar
                            aria-label="Sidebar with multi-level dropdown example"
                            className="[&>div]:bg-transparent [&>div]:p-0"
                        >
                            <div className="flex h-full flex-col justify-between py-2">
                                <div>
                                    <Sidebar.Items className="gap-2">
                                        <Sidebar.ItemGroup >
                                            <Sidebar.Item href="/" icon={() => <FaHome color="#007373" className="text-[16px]" />}>
                                                Home
                                            </Sidebar.Item>
                                            <Sidebar.Item href="/gen-ai" icon={() => <FaRobot color="#007373" className="text-[16px]" />}>
                                                Generative AI
                                            </Sidebar.Item>
                                            <Sidebar.Item href="/estimation" icon={() => <FaFileExcel color="#007373" className="text-[16px]" />}>
                                                Estimate Efforts
                                            </Sidebar.Item>
                                            <Sidebar.Item href="/timesheet" icon={() => <BiSolidSpreadsheet color="#007373" className="text-[16px]" />}>
                                                TimeSheet
                                            </Sidebar.Item>
                                        </Sidebar.ItemGroup>
                                    </Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/team-indore" icon={() => <><img src={logo} className="h-4" /></>}>
                                            Our Team
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                </div>
                            </div>
                        </Sidebar>

                    </Drawer.Items>
                    <AboutMe />
                </div>
            </Drawer>
        </>
    )
}

export default DrawerComp