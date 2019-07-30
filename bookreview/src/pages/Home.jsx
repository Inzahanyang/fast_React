import React from "react";
import { Button } from "antd";
import * as axios from "axios";
import { Link } from "react-router-dom";

function Book(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default class Home extends React.Component {
  state = {
    books: []
  };

  async componentDidMount() {
    const { token } = this.props;
    try {
      const response = await axios.get("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      this.setState({
        books: response.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <div>
          <Button onClick={this._logout}>Logout</Button>
        </div>
        <Link to="/newbook">
          <Button> 책 추가 </Button>
        </Link>
        <h1>Home</h1>
        {books.map(book => (
          <Book {...book} key={book.bookId} />
        ))}
      </div>
    );
  }

  _logout = () => {
    const { history } = this.props;
    localStorage.removeItem("token");
    history.push("/");
  };
}
