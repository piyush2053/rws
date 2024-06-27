import React, { useState } from "react";
import { Button, Drawer, Sidebar, SidebarLogo, TextInput } from "flowbite-react";
import {
    HiChartPie,
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiUsers,
} from "react-icons/hi";
import logo from '../assets/svg/rws-logo_no--whitespace_tcm228-236815.svg'
import excel from '../assets/excel.png'
import ai from '../assets/aiRWS.png'
import '../index.css'
import { useDrawer } from "./Store/Provider";
const DrawerComp = () => {
    const { open, setOpen } = useDrawer();
    const handleClose = () => setOpen(false);
    return (
        <>
            <Drawer open={open} onClose={handleClose} >
                <Drawer.Header title="RWS" titleIcon={() => <><img src={logo}/></>} />
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