import{UilEstate,UilUsersAlt,UilClipboardAlt,UilPackage,UilChart,UilUsdSquare,UilMoneyWithdrawal} from "@iconscout/react-unicons";

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
export const SidebarData=[
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUsersAlt,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },
    {
        icon: UilChart ,
        heading: "Analytics"
    }

];
export const CardsData=[
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value: "25,970",
        png:UilUsdSquare,
        series:[
            {
                name:"Sales",
                data: [31,40,25,52,41,105,98],
            },
        ],

    },
    {
        title: "Revenue",
        color:{
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow:"0px 10px 20px 0px #FDC0C7",
        },
        barValue:80,
        value: "14,770",
        png:UilMoneyWithdrawal,
        series:[
            {
                name:"Revenue",
                data: [10,120,55,74,80,35,48],
            },
        ],

    },
    {
        title: "Expenses",
       
 
        
 color:{
            backGround: "linear-gradient(rgb(248, 212, 154)-146.42%, rgb(255 202 113)-46.42%)",
            boxShadow:"0px 10px 20px 0px #F9D59B",
        },
        barValue:60,
        value: "4,370",
        png:UilClipboardAlt,
        series:[
            {
                name:"Expenses",
                data: [10,25,15,35,18,12,23],
            },
        ],

    },
]
export const UpdatesDate=[
    {
        img:img1,
        name:"John",
        note:"has ordered Apple Smart  Watch",
        time:"25 Second Ago",
    },
    {
        img:img2,
        name:"Thomas",
        note:"has ordered Samsung  TV",
        time:"30 Mintues Ago",
    },
    {
        img:img3,
        name:"Tamana",
        note:"has ordered LG  TV",
        time:"2 Hours Ago",
    },
];


