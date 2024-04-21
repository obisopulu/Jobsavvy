import { ButtonProps } from '../types/common.type';

import { useToggle } from '@/hooks/useToggle';

export const homeStackedListButtons: ButtonProps[] = [
  {
    symbol: "apply",
    text: "Apply",
    onClick: () => useToggle
  },
  {
    symbol: "save",
    text: "Save",
    onClick: () => useToggle
  },
]

export const homeTabListButtons: ButtonProps[] = [
  {
    symbol: "all",
    text: "All",
    onClick: () => useToggle
  },
  {
    symbol: "save",
    text: "Saved",
    onClick: () => useToggle
  },
  {
    symbol: "apply",
    text: "Applied",
    onClick: () => useToggle
  },
]

export const jobs = [
  {
    companyName: 'TechSavvy Inc',
    position: 'Software Engineer',
    details: 'Passionate about building scalable web applications using modern technologies like JavaScript, React, Node.js, and Express. Experienced in designing and implementing RESTful APIs, optimizing database queries, and troubleshooting complex issues. Proficient in version control with Git and working in Agile development environments.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '3 days ago',
  },
  {
    companyName: 'Innovate Solutions LLC',
    position: 'Data Scientist',
    details: 'Skilled in machine learning algorithms, statistical analysis, and data visualization techniques using Python, TensorFlow, and scikit-learn. Proficient in handling large datasets, creating predictive models, and deriving actionable insights. Experienced in deploying machine learning models into production environments and collaborating with cross-functional teams.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '3 days ago',
  },
  {
    companyName: 'Vincent Enterprises',
    position: 'UX Designer',
    details: 'Creative and detail-oriented UX designer with a focus on user-centered design principles. Proficient in wireframing, prototyping, and creating interactive designs using tools like Sketch, Figma, and Adobe XD. Experienced in conducting user research, usability testing, and iterating designs based on feedback. Strong communication skills and ability to collaborate effectively with product managers and developers.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '1 day ago',
  },
  {
    companyName: 'Walton Technologies',
    position: 'Product Manager',
    details: 'Experienced product manager with a proven track record of leading product development from ideation to launch. Skilled in defining product vision, prioritizing features, and creating product roadmaps. Proficient in market analysis, competitor research, and identifying customer needs. Strong leadership and project management skills, with the ability to collaborate effectively with cross-functional teams and stakeholders.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '3 days ago',
  },
  {
    companyName: 'Henry Designs',
    position: 'Web Developer',
    details: 'Experienced web developer proficient in HTML, CSS, JavaScript, and various front-end frameworks such as React and Vue.js. Skilled in responsive design, cross-browser compatibility, and optimizing website performance. Strong understanding of web standards and best practices, with a focus on clean and maintainable code. Familiar with back-end technologies like Node.js and Express.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '3 days ago',
  },
  {
    companyName: 'Cook Industries',
    position: 'Network Administrator',
    details: 'Seasoned network administrator with expertise in designing, implementing, and maintaining complex network infrastructures. Skilled in configuring routers, switches, firewalls, and VPNs to ensure network security and reliability. Proficient in troubleshooting network issues, optimizing network performance, and implementing disaster recovery solutions. Experienced in managing Active Directory, DNS, DHCP, and other network services.',
    firmImageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    datePosted: '2 days ago',
  },
];