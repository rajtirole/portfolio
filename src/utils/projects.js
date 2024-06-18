import proshop from '../assets/imgs/proshop.png'
import image from  '../assets/imgs/image (4).jpg'
import chatGptImage from '../assets/imgs/image.png'
import dashboardImage from '../assets/imgs/image (2).png'
export const projects = [
    {
        id: '1',
        projectTitle: 'Proshop 🛍️',
        projectImg: proshop,
        projectDescription: "Proshop, an e-commerce app, excels in product management, secure user authentication, and a dynamic shopping cart with a safe checkout process. Order management empowers administrators, maintaining a comprehensive history. The responsive design ensures a visually appealing experience across diverse devices.",
        projectSkills: ['React', 'Next.js','Redux', 'Node', 'Express', 'MongoDB', 'Javascript','AWS','G-Cloud'],
        projectGithub: 'https://github.com/rajtirole/proshop',
        projectLive: 'http://3.90.218.168:3000/'
    },
    {
        id: '2',
        projectTitle: 'SwipTory Share ✅',
        projectImg: image,
        projectDescription: "SwipTory a app where you can share your memories with others. It make a easy share link to your moments with others.you can also like and save posts.",
        projectSkills: ['React', 'Express', 'Mongodb', 'Node'],
        projectGithub: 'https://github.com/rajtirole/swiptory_client/',
        projectLive: 'https://swiptory-client.onrender.com/'
    },
    {
        id: '3',
        projectTitle: 'AskGpt-4o',
        projectImg: chatGptImage,
        projectDescription: "project is a clone of OpenAI's ChatGPT, leveraging various APIs and technologies to provide a robust conversational AI experience. The project integrates Assistant API, Vector Store, and File Search API, along with JWT authentication for secure user login.",
        projectGithub: 'https://github.com/rajtirole/assistantApiClient',
        projectLive: 'https://assistantapiclient.onrender.com'
    },
    {
        id: '4',
        projectTitle: 'Salestics Dashboard',
        projectImg:dashboardImage ,
        projectDescription: "The Sales Analytics Dashboard is a comprehensive web-based application designed to provide an insightful and interactive platform for analyzing sales data. This tool enables users to check statistics, visualize transactions through bar charts, and examine product performance through detailed tables and pie charts. It is tailored to help businesses monitor sales trends, understand product performance, and make informed decisions based on real-time data.",
        projectGithub: 'https://github.com/rajtirole/RoxilerAssignmentClient',
        projectLive: 'https://roxilerassignmentclient.onrender.com/'
    },
  
]