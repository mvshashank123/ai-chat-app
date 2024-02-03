"use client";

import styled from "styled-components";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

const ProfilePic = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const SideBar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col px-4 py-3 h-screen">
      <div className="flex-1">
        <NewChat />
        <div className="p-2">{/**Model selection */}</div>
      </div>

      {/* <ChatRow title="Test" /> */}

      {session && (
        <ProfilePic
          className="mx-auto mb-2"
          src={session.user?.image!}
          onClick={() => signOut()}
          alt="Profile Picture"
        />
      )}
    </div>
  );
};

export default SideBar;
