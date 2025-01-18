import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";

const Insert = () => {

  const [input, setInput] = useState({});


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }))
    console.log(input);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/user/usersave";
    axios.post(api, input).then(() => {
      alert("You are succesfully registered!!!");
    })
  }


  return (
    <>
      <h1>Insert User Detail</h1>
      <Form style={{ width: "500px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Authorname</Form.Label>
          <Form.Control type="text" name="authorname" value={input.authorname} onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Book Title</Form.Label>
          <Form.Control type="text" name="booktitle" value={input.booktitle} onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Book Price</Form.Label>
          <Form.Control type="text" name="bookprice" value={input.bookprice} onChange={handleInput} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Insert;