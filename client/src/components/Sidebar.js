import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
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
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { useCookies } from 'react-cookie'

export function SidebarWithLogo() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const [cookies, setCookie, removeCookie] = useCookies(null)

    const signOut = () => {
        console.log('signOut')
        removeCookie('Email')
        removeCookie('AuthToken')
        window.location.reload()
    }

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
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Dashboard
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ListBulletIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Properties
                        </Typography>
                    </ListItem>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <ClipboardDocumentIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Contracts
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Bank
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Location
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <ListItem>
                        <ListItemPrefix>
                            <PaperClipIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Attachements
                        </Typography>
                    </ListItem>
                <hr className="my-2 border-blue-gray-50" />
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem onClick={signOut} className="hover:bg-red-500/10 hover:text-red-500 focus:bg-red-500/10 active:bg-red-500/10">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
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
