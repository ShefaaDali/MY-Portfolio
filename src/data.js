import imag0 from'./images/My-Protfolio.png'
import emp0 from './images/employee-management-website.png'
import emp1 from './images/employee-management-website2.png'
import emp2 from './images/employee-management-website3.png'
import emp3 from './images/employee-management-website4.png'
import emp4 from './images/employee-management-website5.png'
import emp5 from './images/employee-management-website6.png'

import person1 from './images/person1.png'
import person2 from './images/person2.png'
import person3 from './images/person3.png'

import TMS0 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE.png'
import TMS1 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE1.png'
import TMS2 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE2.png'
import TMS3 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE3.png'
import TMS4 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE4.png'
import TMS5 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE5.png'
import TMS6 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE6.png'
import TMS7 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE7.png'
import TMS8 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE8.png'
import TMS9 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE9.png'
import TMS10 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE10.png'
import TMS11 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE11.png'
import TMS12 from './images/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE12.png'


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
        tags:["JSP","JDBC","Servlet","JSP","JAVA EE","JAVA SE","OOP","SQL"],
        desciption:"simple employee management websit created using javaEE (jsp & servlet), JDBC, MYSQL and netbeans IDE to manage company employee.",
        github:"https://github.com/ShefaaDali/employee-management-website"},
        {   
            id:2,
            images:[{Path:TMS0,Caption:""},{Path:TMS1,Caption:""},{Path:TMS2,Caption:""},{Path:TMS3,Caption:""},{Path:TMS4,Caption:""},{Path:TMS5,Caption:""},{Path:TMS6,Caption:""},{Path:TMS7,Caption:""},{Path:TMS8,Caption:""},{Path:TMS9,Caption:""},{Path:TMS10,Caption:""},{Path:TMS11,Caption:""},{Path:TMS12,Caption:""}],
            title:"Tawjihi Management System Website",
            tags:["React.js","Node.js","MongoDB","Express","CSS","HTML"],
            desciption:"A website has been developed using the MERN stack to provide students with a convenient and flexible way to access questions prepared by teachers. ",
            github:"https://github.com/ShefaaDali/TAWJIHI-MANAGEMENT-SYSTEM-WEBSITE"},


]
let testimonials=[
    {image:person1,
    name: "JANE DOE",
    jobTitle:"developer",
    text:"Working with Shefaa Dali was an absolute pleasure! Their dedication, creativity, and attention to detail truly impressed me. They took my project to the next level and delivered exceptional results on time. I highly recommend Shefaa Dali for any creative endeavor. Looking forward to collaborating again in the future!"
},
{image:person2,
    name: "Bharat Kunal",
    jobTitle:"Manager at xyz",
    text:"Working with Shefaa Dali was an absolute pleasure! Their dedication.Their dedication, creativity, and attention to detail truly impressed me. They took my project to the next level and delivered exceptional results on time."
},
{image:person3,
    name: "Bharat Kunal",
    jobTitle:"Manager at xyz",
    text:"Working with Shefaa Dali was an absolute pleasure! Their dedication.Their dedication, creativity, and attention to detail truly impressed me. They took my project to the next level and delivered exceptional results on time. I highly recommend Shefaa Dali for any creative endeavor"
},
]
    export {myProjects,testimonials}