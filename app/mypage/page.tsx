"use client";

import React from "react";
import Mypage from "./Mypage";
import Login from "../login/page";
import { useSession } from "next-auth/react";

const page: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main>
      {session && <Mypage />}
      {!session && <Login />}
    </main>
  );
};

export default page;