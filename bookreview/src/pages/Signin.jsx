import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import SigninBg from "../components/SigninBg";
import SigninForm from "../components/SigninForm";

const Page = styled(Row).attrs(() => ({
  type: "flex",
  align: "middle"
}))`
  height: 100vh;
`;

const Content = styled.div`
  width: 800px;
  margin-right: auto;
  margin-left: auto;
  /* background-color: red; */
`;

const Title = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  color: #642828;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Underline = styled.div`
  background: linear-gradient(to right, #803b32, #ddb49b);
  width: 200px;
  height: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
`;

const SigninArea = styled(Row)`
  margin-top: 50px;
`;

export default function Signin() {
  return (
    <Page>
      <Col span={24}>
        <Content>
          <Title>MARKTUBE REVIEW SERVICE FOR BOOKS</Title>
          <SubTitle>
            PLEASE SHARE YOUR OPINION ON WEB DEVELOPMENT BOOKS.
          </SubTitle>
          <Underline />
          <SigninArea>
            <SigninBg />
            <SigninForm />
          </SigninArea>
        </Content>
      </Col>
    </Page>
  );
}
