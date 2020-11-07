//Frontend
import ReactLogo from "../../assets/reactLogo.png";
import HTML5Logo from "../../assets/html-5.svg";
import CSS3Logo from "../../assets/css3.svg";
import JavascriptLogo from "../../assets/javascript.svg";
import ReduxLogo from "../../assets/redux.svg";
import ReactRouterLogo from "../../assets/react-router.svg";
import ReactBootstrapLogo from "../../assets/react-bootstrap.svg";


//backend

import JavaLogo from "../../assets/javaLogo.png";
import ExpressLogo from "../../assets/express.png";
import NodejsLogo from "../../assets/nodejs.svg";
import RESTLogo from "../../assets/RESTLogo.png";
import SpringLogo from "../../assets/springLogo.png";
import HibernateLogo from "../../assets/hibernateLogo.png";


//mobile
import ReactNativeLogo from "../../assets/reactLogo.png";
import OutSystemslogo from "../../assets/outsystems.jpg";



//database- hosting-versioncntrol

import MysqlLogo from "../../assets/mysqlLogo.png";
import MongoDbLogo from "../../assets/mongodbLogo.png";
import HerokuLogo from "../../assets/heroku.svg";
import GitLogo from "../../assets/git-icon.svg";




export let allskills={
    "FrontEnd":[],
    "BackEnd":[],
    "Mobile Development":[],
    "Database":[],
    "Hosting Platform":[],
    "Version Control":[]
}

allskills.FrontEnd=[{
    name:"Reactjs",
    logo:ReactLogo,
    percentage: "94%"
},
{
    name:"javascript",
    logo:JavascriptLogo ,
    percentage: "95%"
},
{
    name:"HTML5",
    logo:HTML5Logo,
    percentage: "89%"
},
{
    name:"CSS3",
    logo:CSS3Logo ,
    percentage: "84%"
},
{
    name:"Redux",
    logo:ReduxLogo,
    percentage: "96%"
},
{
    name:"React-Router",
    logo:ReactRouterLogo,
    percentage: "96%"
},
{
    name:"React-Bootstrap",
    logo:ReactBootstrapLogo,
    percentage: "80%"
}];


allskills.BackEnd=[
    {
        name:"Nodejs",
        logo:NodejsLogo,
        percentage: "85%"
    },
    {
        name:"Express",
        logo:ExpressLogo,
        percentage: "83%"
    },
    {
        name:"Core Java",
        logo:JavaLogo,
        percentage: "89%"
    },
    {
        name:"Spring Boot",
        logo:SpringLogo,
        percentage: "89%"
    },
    {
        name:"REST API",
        logo:RESTLogo,
        percentage: "92%"
    },
    {
        name:"Hibernate",
        logo:HibernateLogo,
        percentage: "84%"
    }
]


allskills["Mobile Development"]=[
    {
        name:"ReactNative",
        logo:ReactNativeLogo,
        percentage: "84%"
    },
    {
        name:"OutSystems",
        logo:OutSystemslogo,
        percentage: "94%"
    }
]

allskills.Database=[
    {
        name:"Mongodb",
        logo:MongoDbLogo,
        percentage: "75%"
    },
    {
        name:"Mysql",
        logo:MysqlLogo,
        percentage: "74%"
    }
]


allskills["Hosting Platform"]=[
    {
        name:"Heroku",
        logo:HerokuLogo,
        percentage: "70%"
    },
    {
        name:"GitHub-Pages",
        logo:"../../assets/reactLogo.png",
        percentage: "84%"
    }
]

allskills["Version Control"]=[
    {
        name:"Git",
        logo:GitLogo,
        percentage: "90%"
    }
]