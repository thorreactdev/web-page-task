import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import blue_logo from "../assets/lejhro_logo_blue.png";
import CloseIcon from "@mui/icons-material/Close";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Sidebar({ open, toggleSidebar }) {
  const list = () => (
    <Box
      sx={{ width: 380 }}
      role="presentation"
      onClick={toggleSidebar(false)}
      onKeyDown={toggleSidebar(false)}
    >
      <div className="flex items-center justify-evenly">
        <figure className="flex items-center justify-center py-8">
          <img src={blue_logo} alt="" className="w-[200px]" />
        </figure>
        
        <div className="h-[30px] w-[30px] border border-black p-5 cursor-pointer rounded-full inline-flex items-center justify-center">
        <CloseIcon  />
        </div>

      </div>
      <Divider />

      <div className="flex gap-6 flex-col text-xl font-semibold pl-10 py-3">
        <p>Innovations</p>
        <p>Bootcamp</p>
        <p>Bussiness Services</p>
        <p>Financial Services</p>
        <p>About</p>
        <p>Contact Us</p>
        <p>Blogs</p>
        <div className="flex gap-5 text-xl md:text-3xl cursor-pointer">
            <FaTwitter className="hover:text-blue-400" />
            <FaFacebook className="hover:text-blue-400" />
            <FaLinkedin className="hover:text-blue-400" />
            <FaYoutube className="hover:text-blue-400" />
          </div>
      </div>
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={toggleSidebar(false)}>
      {list()}
    </Drawer>
  );
}
