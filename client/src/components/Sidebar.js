import React, { useState } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Alert,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    BuildingOffice2Icon,
    ListBulletIcon,
    ClipboardDocumentIcon,
    PaperClipIcon,
} from "@heroicons/react/24/solid";
import {
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { useCookies } from 'react-cookie'

const SidebarWithLogo = () => {
    const [openAlert, setOpenAlert] = useState(true);

    const [cookies, setCookie, removeCookie] = useCookies(null)

    const signOut = () => {
        console.log('signOut')
        removeCookie('Email')
        removeCookie('AuthToken')
        window.location.reload()
    }

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <PresentationChartBarIcon className="h-5 w-5" />,
            onclick: signOut
        },
        {
            path: "/",
            name: "Properties",
            icon: <ListBulletIcon className="h-5 w-5" />
        },
        {
            path: "/",
            name: "Contracts",
            icon: <ClipboardDocumentIcon className="h-5 w-5" />
        },
        {
            path: "/",
            name: "Attachments",
            icon: <PaperClipIcon className="h-5 w-5" />
        },
        {
            hr: true
        },
        {
            path: "/",
            name: "Profile",
            icon: <UserCircleIcon className="h-5 w-5" />
        },
        {
            path: "/",
            name: "Settings",
            icon: <Cog6ToothIcon className="h-5 w-5" />
        },
        {
            path: "/",
            name: "LogOut",
            icon: <PowerIcon className="h-5 w-5" />,
            onclick: signOut
        },
    ]

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 flex items-center gap-4 p-4">
                <BuildingOffice2Icon className="h-8 w-8" />
                <Typography variant="h5" color="blue-gray">
                    Real Estate App
                </Typography>
            </div>
            <hr className="my-2 border-blue-gray-50" />
            <List>
                {
                    menuItem.map((item, index) => (
                        // Vérifiez si l'élément est une ligne hr et affichez-la
                        // Sinon, affichez l'élément de menu
                        item.hr ? (
                            <hr className="my-2 border-blue-gray-50" key={`hr-${index}`} />
                        ) : (
                            <ListItem onClick={item.onclick} className={`${item.name === "LogOut"
                                ? "hover:bg-red-500/10 hover:text-red-500 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`} key={`item-${index}`}>
                                <ListItemPrefix>{item.icon}</ListItemPrefix>
                                <Typography className="mr-auto font-normal">{item.name}</Typography>
                            </ListItem>
                        )
                    ))
                }
            </List>
            <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                <CubeTransparentIcon className="mb-4 h-12 w-12" />
                <Typography variant="h6" className="mb-1">
                    Upgrade to PRO | BUSINESS
                </Typography>
                <Typography variant="small" className="font-normal opacity-80">
                    Upgrade to RealEstatePro or RealEstateBusiness to unlock Properties limit and get access to advanced features.
                </Typography>
                <div className="mt-4 flex gap-3">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-medium opacity-80"
                        onClick={() => setOpenAlert(false)}
                    >
                        Dismiss
                    </Typography>
                    <Typography as="a" href="#" variant="small" className="font-medium">
                        Upgrade Now
                    </Typography>
                </div>
            </Alert>
        </Card>
    );
}

export default SidebarWithLogo;
