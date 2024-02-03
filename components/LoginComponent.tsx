"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";

const LoginContainer = styled.div`
  background: #11a37f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignInButton = styled.button`
  color: white;
  font-weight: bold;
  font-size: 22px;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const LoginComponent = () => {
  return (
    <LoginContainer>
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <SignInButton onClick={() => signIn('google')}>
        Sign In to the AI Chat App
      </SignInButton>
    </LoginContainer>
  );
};

export default LoginComponent;
