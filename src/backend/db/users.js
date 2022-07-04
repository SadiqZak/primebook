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
    avatar:'https://res.cloudinary.com/dkt3e5bmz/image/upload/v1649577153/cld-sample.jpg',
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
    avatar:'https://res.cloudinary.com/dkt3e5bmz/image/upload/v1656964101/mrnags_mrxiir.jpg',
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
    avatar:'https://res.cloudinary.com/dkt3e5bmz/image/upload/v1656964101/shubhamsoni_q7kk6l.jpg',
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
    avatar:'https://res.cloudinary.com/dkt3e5bmz/image/upload/v1656964100/supercoder_rcuvbj.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Karthik',
    lastName: 'Surya',
    username: 'karthik',
    password: 'kk2016',
    bookmarks: [],
    bio: 'Call me KK.',
    website: 'https://KK.netlify.app',
    avatar:'https://res.cloudinary.com/dkt3e5bmz/image/upload/v1656964101/Karthik_hjhcho.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
