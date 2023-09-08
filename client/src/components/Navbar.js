import React from "react";
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Input,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    PowerIcon,
} from "@heroicons/react/24/outline";

import { useCookies } from 'react-cookie'

function ProfileMenu() {

    const [cookies, setCookie, removeCookie] = useCookies(null)

    const signOut = () => {
        console.log('signOut')
        removeCookie('Email')
        removeCookie('AuthToken')
        window.location.reload()
    }

    const userEmail = cookies.Email
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    // profile menu component
    const profileMenuItems = [
        {
            label: "My Profile",
            icon: UserCircleIcon,
        },
        {
            label: "Edit Profile",
            icon: Cog6ToothIcon,
        },
        {
            label: "Sign Out",
            icon: PowerIcon,
            onClick: () => {
                console.log("Sign Out button clicked");
                signOut();
            },
        },
    ];

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                <Typography className="font-bold">👋 Hey, {userEmail}</Typography>
                <hr className="border-blue-gray-50" />
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    const onClickSignOut = label === "Sign Out" ? signOut : closeMenu; // Condition pour l'action onClick

                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                                onClick={onClickSignOut}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// Search Bar
function NavSearch() {
    return (
        <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <Input
                type="search"
                label="Type here..."
                className="pr-20"
                containerProps={{
                    className: "min-w-[288px]",
                }}
            />
            <Button size="sm" className="!absolute right-1 top-1 rounded">
                Search
            </Button>
        </div>
    );
}

export function ComplexNavbar() {
    return (
        <Navbar className="fixed top-0 right-0 w-auto">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
            <ProfileMenu />
            <NavSearch className="flex items-center"/>
            </div>
        </Navbar>
    );
}