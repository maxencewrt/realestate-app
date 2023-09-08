import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  Avatar,
  Input,
  IconButton,
} from "@material-tailwind/react";

import { useCookies } from 'react-cookie'
 
function Profile() {
 
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </Button>
      </MenuHandler>
    </Menu>
  );
}
 
export function ComplexNavbar() {

    const [cookies, setCookie, removeCookie] = useCookies(null)

    const signOut = () => {
        console.log('signOut')
        removeCookie('Email')
        removeCookie('AuthToken')
        window.location.reload()
      }


  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
    <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          RealEstateApp
        </Typography>

        {/* Barre de recherche
        <div className="relative flex items-center justify-center flex-grow">
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
        </div> */}


        <Profile />
        <Button
        variant="gradient"
        color="red"
        size="sm"
        className="hidden lg:inline-block"
        onClick={signOut}>
            <span>SignOut</span>
        </Button>
      </div>
    </Navbar>
  );
}
