"use client";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Special() {
  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Box sx={{ m: 5, height: "100vh", bgcolor: "#daeba2" }}></Box>
    </Container>
  );
}
