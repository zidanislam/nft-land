import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const useNavState = () => {
  let isTab = useMediaQuery({ query: "(max-width:768px)" });
  const [open, setOpen] = useState(isTab ? false : true);
  const Sidenav_animation = isTab
    ? {
        open: {
          x: 0,
          height:"100vh",
          width: "50vh",
          fontSize: "16px",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          height:"100vh",
          width: "0px",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          height:"100vh",
          width: "250px",
          fontSize: "18px",
          transition: {
            damping: 40,
          },
        },
      };
  return { Sidenav_animation, open, setOpen };
};

export default useNavState;
