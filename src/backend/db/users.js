import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bookmarks: [],
    bio: 'We can only be as strong as our WiFi signal.',
    website: 'https://adarshbalika.netlify.app',
    avatar:'',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Mr',
    lastName: 'Nags',
    username: 'mrnags',
    password: 'mrnags2016',
    bookmarks: [],
    bio: 'Waste your time wisely.',
    website: 'https://mrnags.netlify.app',
    avatar:'',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Shubham',
    lastName: 'Soni',
    username: 'shubhamsoni',
    password: 'shubhamcodes97',
    bookmarks: [],
    bio: 'Emotionally unavailable',
    website: 'https://shubhamsoni.netlify.app',
    avatar:'',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Super',
    lastName: 'Coder',
    username: 'supercoder',
    password: 'supercoder97',
    bookmarks: [],
    bio: 'Your friendly neighbourhood coder.',
    website: 'https://supercoder.netlify.app',
    avatar:'',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Karthik',
    lastName: 'Kapoor',
    username: 'karthik',
    password: 'kk2016',
    bookmarks: [],
    bio: 'Call me KK.',
    website: 'https://KK.netlify.app',
    avatar:'',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
