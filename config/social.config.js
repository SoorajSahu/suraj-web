import { FiInstagram, FiGithub, FiYoutube, FiMail } from "react-icons/fi";
import { FaLinkedin, FaMedium } from "react-icons/fa";
export  {socialMedia};


let socialMedia = [{
    icon: <FiGithub className='text-4xl ' />,
    text: 'Github',
    color: 'hover:text-black',
    link: '#'
  }, {
    icon: <FaLinkedin className='text-4xl' />,
    text: 'Linkedin',
    color: 'hover:text-blue-600',
    link: '#'
  }, {
    icon: <FaMedium className='text-4xl' />,
    text: 'Medium',
    color: ' hover:text-black ',
    link: '#'
  }, {
    icon: <FiInstagram className='text-4xl' />,
    text: 'Instagram',
    color: ' hover:text-pink-500',
    link: '#'
  }, {
    icon: <FiYoutube className='text-4xl' />,
    text: 'Youtube',
    color: 'hover:text-red-600',
    link: '#'
  }, {
    icon: <FiMail className='text-4xl' />,
    text: 'Mail',
    color: 'hover:text-red-600',
    link: '#'
  }];
