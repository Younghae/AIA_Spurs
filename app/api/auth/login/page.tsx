"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Login() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "80vh",
        width: "95vw",
      }}>
      <Grid item>
        <Image
          src="/logo_color.jpg"
          alt="Logo color"
          width={150}
          height={120}
          // sizes="30vw,"
          // style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid
        item
        sx={{
          marginBottom: 4,
        }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#001B3F" }}>
          AIA - SPURS에 오신 것을 환영합니다!
        </Typography>
      </Grid>
      <Grid
        item
        border="1px solid"
        borderColor="#001B3F"
        borderRadius="16px"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "300px",
          width: "300px",
        }}>
        <Grid>
          <Typography sx={{ fontWeight: "bold", color: "#001B3F" }}>
            SNS로그인 후 계속하기
          </Typography>
        </Grid>
        <Grid>
          <Button
            onClick={() =>
              signIn("google", { redirect: true, callbackUrl: "/" })
            }>
            <Image
              src="/google/google.png"
              alt="google_login"
              width={200}
              height={50}
              priority={true}
            />
          </Button>
        </Grid>
        <Grid>
          <Button
            onClick={() =>
              signIn("naver", { redirect: true, callbackUrl: "/" })
            }>
            <Image
              src="/naver/naver.png"
              alt="naver_login"
              width={200}
              height={50}
              priority={true}
            />
          </Button>
        </Grid>
        <Grid>
          <Button
            onClick={() =>
              signIn("kakao", { redirect: true, callbackUrl: "/" })
            }>
            <Image
              src="/kakao/kakao.png"
              alt="kakao_login"
              width={200}
              height={50}
              priority={true}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
