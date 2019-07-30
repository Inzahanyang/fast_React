import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import SigninBg from "../components/SigninBg";
import NewBookForm from "../components/NewBookForm";

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

export default function Newbook() {
  return (
    <Page>
      <Col span={24}>
        <Content>
          <Title>책 추가하기</Title>
          <SubTitle>새로운 책을 추가하세요</SubTitle>
          <Underline />
          <SigninArea>
            <SigninBg />
            <NewBookForm />
          </SigninArea>
        </Content>
      </Col>
    </Page>
  );
}
