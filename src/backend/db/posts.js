import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "RCB hyaas won haarts yevry IPL",
    likes: {
      likeCount: 98,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "mrnags",
    createdAt: "2022-05-08T13:34:40",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Hey Guys, I just joined a new startup",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "shubhamsoni",
    createdAt: "2022-06-06T13:38:40",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Dhanush is an underrated singer!",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "karthik",
    createdAt: "2022-06-01T13:38:40",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 99,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "supercoder",
    createdAt: "2022-06-02T13:34:40",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Why is life so tough?",
    likes: {
      likeCount: 99,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "adarshbalika",
    createdAt: "2022-06-02T13:34:40",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "just completed 3 Macro Projects!",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "adarshbalika",
    createdAt: "2022-06-02T13:34:40",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I wish we could go back in time, from time to time",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "adarshbalika",
    createdAt: "2022-06-02T13:34:40",
    updatedAt: formatDate(),
  },
];



//"2022-09-10T23:34:40"