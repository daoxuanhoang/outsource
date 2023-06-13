import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const ItemMenu = (Menu: any[]) => {
  return (
    <List component="nav">
      {Menu?.map((i: any, index: number) => {
        let selected = window.location.pathname === i.href;
        
        const sub = window.location.pathname.split("]")[1];
        if (typeof sub !== "undefined") {
          selected =
            (!sub.length && i.href === "/") ||
            (window.location.pathname.indexOf(i.href) > -1 && i.href !== "/");
        }
        return (
          <NavLink to={i.href} key={index} style={{textDecoration: 'none', color: '#000'}}>
            <ListItemButton selected={selected}>
              <ListItemIcon>{i.icon}</ListItemIcon>
              <ListItemText primary={i.label} />
            </ListItemButton>
          </NavLink>
        );
      })}
    </List>
  );
};

export default ItemMenu;
