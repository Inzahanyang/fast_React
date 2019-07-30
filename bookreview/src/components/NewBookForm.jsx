import React from "react";
import { Input, Button, Col } from "antd";
import styled from "styled-components";
import * as axios from "axios";
import { withRouter } from "react-router-dom";

const Title = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
`;

const InputTitle = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: ${props => props.top || "40"}px;
  text-align: left;
  padding-left: 40px;
`;

const InputArea = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledInput = styled(Input)`
  width: 320px;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  margin-left: 40px;
  margin-right: 40px;
`;

const ButtonArea = styled.div`
  text-align: left;
  padding-left: 40px;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  border-color: #28546a;
  background-color: #28546a;
  text-transform: uppercase;
  border-radius: 1px;
  border-width: 2px;
  color: white;
  width: 120px;
  &:hover {
    background-color: #28546a;
    color: white;
  }
`;

const StyledSpan = styled.span.attrs(() => ({
  children: "*"
}))`
  color: #971931;
`;

class Newbook extends React.Component {
  _title = React.createRef();
  _message = React.createRef();
  _author = React.createRef();
  _url = React.createRef();

  state = {
    loading: false
  };

  render() {
    const { loading } = this.state;
    return (
      <Col
        span={12}
        style={{
          verticalAlign: "top"
        }}
      >
        <Title>새로운 책을 추가합니다.</Title>
        <InputTitle>
          책 제목
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput type="text" ref={this._title} />
        </InputArea>
        <InputTitle top={10}>
          감상평
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput type="text" ref={this._message} />
        </InputArea>
        <InputTitle top={10}>
          지은이
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput type="text" ref={this._author} />
        </InputArea>
        <InputTitle top={10}>
          구매링크
          <StyledSpan />
        </InputTitle>
        <InputArea>
          <StyledInput type="text" ref={this._url} />
        </InputArea>
        <ButtonArea>
          <StyledButton size="large" loading={loading} onClick={this._click}>
            추가하기
          </StyledButton>
        </ButtonArea>
      </Col>
    );
  }

  _click = async () => {
    const { history } = this.props;
    const title = this._title.current.state.value;
    const message = this._message.current.state.value;
    const author = this._author.current.state.value;
    const url = this._url.current.state.value;
    const token = localStorage.getItem("token");

    this.setState({
      loading: true
    });

    try {
      const response = await axios.post(
        "https://api.marktube.tv/v1/book",
        {
          title,
          message,
          author,
          url
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response);

      history.push("/");
    } catch (error) {
      console.log(error.response);
      this.setState({
        loading: false
      });
    }
  };
}

export default withRouter(Newbook);
