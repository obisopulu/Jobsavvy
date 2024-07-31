import { FieldValue } from 'firebase/firestore';
import { ButtonProps } from '../types/common.type';

export const documentDefaults = () => ({
  body: "body",
  dateCreated: 'dateCreated',
  email: "email",
  keywordsExclude: "keywordsExclude",
  keywordsInclude: "keywordsInclude",
  name: "name",
  subject: "subject",
  userId: "userId",
  userLevel: ''
});

export const newDocumentDefaults = (name: string, email: string, uid: string, time: FieldValue) => ({
  body: 'Dear Hiring Manager,{newLine}{newLine}I am writing to apply for the position of {position} at {companyName}. I am excited about the opportunity to contribute my skills and experience to your team.\nThank you for considering my application. I have attached my resume for your review.{newLine}{newLine}Best regards,{newLine}{yourName}',
  dateCreated: time,
  email: email,
  keywordsExclude: 'Swift, Rust',
  keywordsInclude: 'Java, Python, JavaScript, C++, Ruby, Go, PHP, TypeScript',
  name: name,
  subject: 'Job Application for {position} at {companyName}',
  userId: uid,
  userLevel: ''
});

export const homeStackedListButtons = (onClick: () => void): ButtonProps[] => [
  {
    symbol: "apply",
    text: "Apply",
    onClick: onClick
  },
  {
    symbol: "save",
    text: "Save",
    onClick: onClick
  },
];

export const homeTabListButtons = (onClick: () => void): ButtonProps[] => [
  {
    symbol: "all",
    text: "All",
    onClick: onClick
  },
  {
    symbol: "save",
    text: "Saved",
    onClick: onClick
  },
  {
    symbol: "apply",
    text: "Applied",
    onClick: onClick
  },
]

export const dashboardTabListButtons = (onClick: (text: string) => void): ButtonProps[] => [
  {
    symbol: "boss",
    text: "Boss",
    onClick: () => onClick('boss')
  },
  {
    symbol: "manage",
    text: "Manage",
    onClick: () => onClick('manage')
  },
  {
    symbol: "settings",
    text: "Settings",
    onClick: () => onClick('settings')
  },
  {
    symbol: "saved",
    text: "Saved",
    onClick: () => onClick('saved')
  },
  {
    symbol: "applied",
    text: "Applied",
    onClick: () => onClick('applied')
  },
]

export const jobs = [
  {
    id: '1',
    companyName: 'TechSavvy Inc',
    position: 'Software Engineer',
    details: 'Passionate about building scalable web applications using modern technologies like JavaScript, React, Node.js, and Express. Experienced in designing and implementing RESTful APIs, optimizing database queries, and troubleshooting complex issues. Proficient in version control with Git and working in Agile development environments.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '3 days ago',
  },
  {
    id: '2',
    companyName: 'Innovate Solutions LLC',
    position: 'Data Scientist',
    details: 'Skilled in machine learning algorithms, statistical analysis, and data visualization techniques using Python, TensorFlow, and scikit-learn. Proficient in handling large datasets, creating predictive models, and deriving actionable insights. Experienced in deploying machine learning models into production environments and collaborating with cross-functional teams.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '3 days ago',
  },
  {
    id: '3',
    companyName: 'Vincent Enterprises',
    position: 'UX Designer',
    details: 'Creative and detail-oriented UX designer with a focus on user-centered design principles. Proficient in wireframing, prototyping, and creating interactive designs using tools like Sketch, Figma, and Adobe XD. Experienced in conducting user research, usability testing, and iterating designs based on feedback. Strong communication skills and ability to collaborate effectively with product managers and developers.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '1 day ago',
  },
  {
    id: '4',
    companyName: 'Walton Technologies',
    position: 'Product Manager',
    details: 'Experienced product manager with a proven track record of leading product development from ideation to launch. Skilled in defining product vision, prioritizing features, and creating product roadmaps. Proficient in market analysis, competitor research, and identifying customer needs. Strong leadership and project management skills, with the ability to collaborate effectively with cross-functional teams and stakeholders.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '3 days ago',
  },
  {
    id: '5',
    companyName: 'Henry Designs',
    position: 'Web Developer',
    details: 'Experienced web developer proficient in HTML, CSS, JavaScript, and various front-end frameworks such as React and Vue.js. Skilled in responsive design, cross-browser compatibility, and optimizing website performance. Strong understanding of web standards and best practices, with a focus on clean and maintainable code. Familiar with back-end technologies like Node.js and Express.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '3 days ago',
  },
  {
    id: '6',
    companyName: 'Cook Industries',
    position: 'Network Administrator',
    details: 'Seasoned network administrator with expertise in designing, implementing, and maintaining complex network infrastructures. Skilled in configuring routers, switches, firewalls, and VPNs to ensure network security and reliability. Proficient in troubleshooting network issues, optimizing network performance, and implementing disaster recovery solutions. Experienced in managing Active Directory, DNS, DHCP, and other network services.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '2 days ago',
  },
];