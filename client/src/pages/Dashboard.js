import React from 'react';
import {
    Navbar,
    Typography,

  } from "@material-tailwind/react";


const Dashboard = () => {
    return (

        <div className="fixed -m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              Dashboad
            </Typography>
        </div>
        </Navbar>
        </div>
    )
}

export default Dashboard