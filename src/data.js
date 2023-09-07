import imag0 from'./images/My-Protfolio.png'
import emp0 from './images/employee-management-website.png'
import emp1 from './images/employee-management-website2.png'
import emp2 from './images/employee-management-website3.png'
import emp3 from './images/employee-management-website4.png'
import emp4 from './images/employee-management-website5.png'
import emp5 from './images/employee-management-website6.png'


import TMS0 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE.png'

let myProjects =[{
    id:0,
    images:[{Path:imag0,Caption:""}],
    title:"My Prtfolio",
    tags:["React.js","Bootstrap","CSS","HTML","fontawesome"],
    desciption:"responsive design for my portfolio using React.js and Bootstrap.",
    github:"https://github.com/ShefaaDali/MY-Portfolio"
},
    {
        id:1,
    images:[{Path:emp0,Caption:""},{Path:emp1,Caption:""},{Path:emp2,Caption:""},{Path:emp3,Caption:""},{Path:emp4,Caption:""},{Path:emp5,Caption:""}],
        title:"Employee Management Website",
        tags:["JSP","JDBC","Servlet","JSP","JAVA EE","JAVA SE","OPP","SQL"],
        desciption:"simple employee management websit created using javaEE (jsp & servlet), JDBC, MYSQL and netbeans IDE to manage company employee.",
        github:"https://github.com/ShefaaDali/employee-management-website"},
        {   
            id:2,
            images:[{Path:TMS0,Caption:""}],
            title:"Tawjihi Management System Website",
            tags:["React.js","Node.js","MongoDB","Express","CSS","HTML"],
            desciption:"A website has been developed using the MERN stack to provide students with a convenient and flexible way to access questions prepared by teachers. ",
            github:"https://github.com/ShefaaDali/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE"},


]

    export default myProjects