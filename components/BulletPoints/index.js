import Deliveryone from "../../public/Deliveryone.png";
import Deliverytwo from "../../public/Deliverytwo.png";
import Deliverythree from "../../public/Deliverythree.png";
import Deliveryfour from "../../public/Deliveryfour.png";
import Deliveryfive from "../../public/Deliveryfive.png";
import Deliverysix from "../../public/Deliverysix.png";

const standardData = [
  {
    id: 1,
    title: "SANITIZATION STANDARDS",
    content:
      "Every Food Package is picked up and delivered without any contact with the Home Chef and Customer. We follow a Contactless delivery policy.",
    image: "/Deliveryone.png",
  },
  {
    id: 1,
    title: "CONTACTLESS DELIVERY",
    content:
      "Every Food Package is picked up and delivered without any contact with the Home Chef and Customer. We follow a Contactless delivery policy.",
    image: "/Deliverytwo.png",
  },
  {
    id: 1,
    title: "RIDER SUPERVISION",
    content:
      "All the Delivery Riders are supervised daily for their temperature readings and conformity to Wearing a Mask, Hygiene and social distancing norms.",
    image: "/Deliverythree.png",
  },
];
const standardData2 = [
  {
    id: 1,
    title: "CLEANING & SANITIZATION",
    content:
      "Every Home chef ensures that hands are washed regularly every 15 minutes and their Home Kitchen is cleaned and sanitized 2 times daily.",
    image: "/Deliveryfour.png",
  },
  {
    id: 1,
    title: "MASK & SOCIAL DISTANCING",
    content:
      "All the Home Chefs usually don’t move of their homes. They wear a Mask and maintain social distancing of 6 Feet if they meet anyone.",
    image: "/Deliveryfive.png",
  },
  {
    id: 1,
    title: "HEATHY & FRESHLY PREPARED",
    content:
      "Food is freshly prepared by home chefs when they get an order. All the ingredients used are Fresh and Top quality to ensure food served is Healthy.",
    image: "/Deliverysix.png",
  },
];

const getdata = () => {
  return standardData;
};
const getdata2 = () => {
  return standardData2;
};
export { getdata, getdata2 };
