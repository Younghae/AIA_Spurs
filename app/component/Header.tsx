"use client";

import React from "react";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { signIn, signOut, useSession } from "next-auth/react";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { routes } from "./routes";

const paths = routes;

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#001B3F",
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DisplayMenu = (menu: string, path: string) => {
  return (
    <Typography key={path} sx={{ fontSize: 14 }} color="#fafafa" align="center">
      <Link color="#fafafa" href={path} underline="none">
        {menu}
      </Link>
    </Typography>
  );
};

const Header = () => {
  const { data: session } = useSession();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const DisplayLogo = (
    <Grid item xs={2} container justifyContent="center">
      <Item>
        <Link href="/">
          <Image src="/logo.png" alt="Partner Logo" width={80} height={64} />
        </Link>
      </Item>
    </Grid>
  );

  const DisplayItems = (
    <Grid
      item
      xs={8}
      sx={{ display: { xs: "none", md: "flex" } }}
      container
      justifyContent="center">
      <Item>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={{ md: 3, lg: 4, xl: 5 }}>
          {paths.map(({ name, link }) => DisplayMenu(name, link))}
        </Stack>
      </Item>
    </Grid>
  );

  const DisplayLogin = (
    <Grid item xs={2} container justifyContent="center">
      <Item>
        <MenuItem
          onClick={() => {
            if (session) {
              signOut();
              window.alert("로그아웃이 실행됩니다.");
            } else {
              signIn();
            }
          }}>
          <Typography sx={{ fontSize: 14 }} color="#fafafa">
            {session ? "LOGOUT" : "LOGIN"}
          </Typography>
        </MenuItem>
      </Item>
    </Grid>
  );

  return (
    <Grid
      sx={{ bgcolor: "#001B3F" }}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center">
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          onClick={handleOpenNavMenu}
          sx={{ color: "#fafafa" }}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}>
          {paths.map(({ name, link }) => (
            <MenuItem key={link}>
              <Link
                href={link}
                style={{ textDecoration: "none", color: "#001B3F" }}>
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: 12,
                  }}>
                  {name}{" "}
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {DisplayLogo}
      {DisplayItems}
      {DisplayLogin}
    </Grid>
  );
};

export default Header;
