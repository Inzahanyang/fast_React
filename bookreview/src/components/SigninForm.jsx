import React from "react";
import { Col } from "antd";
import styled from "styled-components";

const Page = styled(Col)`
  background-color: whiteSmoke;
`;

const Title = styled.div.attrs(() => ({
  type: "flex",
  align: "middle"
}))`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
`;

const Idpass = styled.div`
  margin-top: 30px;
  margin-left: 45px;
`;

const Input = styled.input.attrs(() => ({
  size: 40
}))`
  margin-top: 5px;
  margin-left: 45px;
  height: 40px;
`;

const SigninButton = styled.button`
  margin-top: 20px;
  margin-left: 45px;
  background-color: #191970;
  border: none;
  color: white;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const RecoveryButton = styled.button`
  margin-left: 77px;
  margin-bottom: 47px;
  background-color: white;
  color: #191970;
  border: 2px solid #191970;
`;

const OtherButton = styled.button`
  margin-left: 77px;
  background-color: white;
  color: #191970;
  border: 2px solid #191970;
`;

const Underline = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  margin-top: 30px;
  border-bottom: 1px solid silver;
`;

const Star = styled.span`
  color: red;
`;

export default function SigninForm() {
  return (
    <Page span={12}>
      <Title>log in. start searching.</Title>
      <Idpass>
        Email<Star>*</Star>
      </Idpass>
      <Input placeholder="   email@email.com" />
      <Idpass>
        Password<Star>*</Star>
      </Idpass>
      <Input placeholder="   *****" />
      <div>
        <SigninButton>SIGN IN</SigninButton>
      </div>
      <Underline />
      <Idpass>
        Need to create account?<OtherButton>SIGN UP</OtherButton>
      </Idpass>
      <Idpass>
        Forgot your password?<RecoveryButton>RECOVERY</RecoveryButton>
      </Idpass>
    </Page>
  );
}
