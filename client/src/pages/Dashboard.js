import React from 'react';
import {
    Typography,
    Breadcrumbs,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";


const Dashboard = () => {

    return (
        <div>
                        <Typography variant="h2" >Dashboard</Typography>
            <Breadcrumbs
                separator={
                    <ArrowLongRightIcon className="h-4 w-4 text-white" strokeWidth={2.5} />
                }
                className="rounded-full border border-white bg-gradient-to-tr from-gray-900 to-gray-800 p-1"
            >
                <a
                    href="www.google.com"
                    className="rounded-full  bg-white px-3 py-1 font-medium text-gray-900"
                >
                    Home
                </a>
                <a
                    href="www.google.com"
                    className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
                >
                    Dashboard
                </a>
            </Breadcrumbs>

            
        </div>

    )
}

export default Dashboard