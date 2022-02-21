import React from 'react';
import { FaAddressCard } from '@react-icons/all-files/fa/FaAddressCard';
import { BiSupport } from '@react-icons/all-files/bi/BiSupport';
import { FaTruck } from '@react-icons/all-files/fa/FaTruck';

export const data = [
  {
    title: 'Licensed and insured company...',
    text: 'You are in good hands! We are autorized from Department of transport to operate all around United States... Your goods are fully protected and covered with insurance fulfilling all Department of Transport requirements...',
    icon: <FaAddressCard style={{ fontSize: '50px' }} />,
  },
  {
    title: 'Professional sales representatives team...',
    text: 'Our sales team is professional and oriented to finding fast and appropriate solutions for our clients... Call our number or fill out an online form on our website and you will got your quote ASAP...',
    icon: <BiSupport style={{ fontSize: '50px' }} />,
  },
  {
    title: 'Efficient and trained movers...',
    text: 'Our movers are professionally trained and experienced guys motivated to make your moving day easy... Our crews are efficient and always on time to take good care of your stuff and move them carefully...',
    icon: <FaTruck style={{ fontSize: '50px' }} />,
  },
  {
    title: 'Outstanding customer support...',
    text: 'For us you are not just the number! We provide special attention to each client putting the satisfaction of our clients on the first place... We stay connected with you through the entire moving process, serving you updates as needed and answering any questions.',
    icon: <BiSupport style={{ fontSize: '50px' }} />,
  },
];