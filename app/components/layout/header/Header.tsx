"use client";

import { UserButton } from "@clerk/nextjs";
import { FC } from "react";
type Props = {};

export const Header: FC<Props> = () => {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};
