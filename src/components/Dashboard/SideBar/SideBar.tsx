import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { userRole } from "@/types";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  //   const drawer = (
  //     <div>
  //       <List>
  //         {drawerItems("admin" as userRole).map((item, index) => (
  //           <ListItem key={index} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>
  //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //               </ListItemIcon>
  //               <ListItemText primary={item.title} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {["All mail", "Trash", "Spam"].map((text, index) => (
  //           <ListItem key={text} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>
  //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </div>
  //   );
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingTop: "5px",
          marginTop: "10px",
        }}
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} alt="logo" width={30} height={30} />
        <Typography variant="h6" component="h1" sx={{}}>
          Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems("admin" as userRole).map((item, index) => (
          <SidebarItem key={index} index={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
