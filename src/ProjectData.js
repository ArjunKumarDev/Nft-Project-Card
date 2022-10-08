import ImageOne from "./assets/image-1.jpg"
import ImageTwo from "./assets/image-2.jpg"
import ImageThree from "./assets/image-3.jpg"


export const ProjectData = [
  {
    id: 1,
    projectStatus: "Funding Ended",
    projectTitle: "Project1",
    projectImage: ImageOne,
    creatorName: "Rohit",
    creatorImage: "",
    fundsRequired: "1K USDC",
    fundStatus:1,
    metaList: {
      fund_1: "0 USDC",
      fund_2: "300 USDC",
      soft_cap: "Not Reached",
      investor_count: 0,
    },
  },

  {
    id: 2,
    projectStatus: "Funding Ended",
    projectTitle: "Project2",
    projectImage: ImageTwo,
    creatorName: "Arjun",
    creatorImage: "",
    fundsRequired: "2K USDC",
    fundStatus:2,
    metaList: {
      fund_1: "10 USDC",
      fund_2: "300 USDC",
      soft_cap: "Not Reached",
      investor_count: 0,
    },
  },

  {
    id: 3,
    projectTitle: "Project3",
    projectImage: ImageThree,
    creatorName: "YYY",
    creatorImage: "",
    fundsRequired: "5K USDC",
    fundStatus:1,
    metaList: {
      fund_1: "100 USDC",
      fund_2: "300 USDC",
      soft_cap: "Reached",
      investor_count: 3,
    },
  },
];
