import React, { Component } from "react";
import { Grid, Row, Col, PageHeader, Button, Alert } from "react-bootstrap";
import BooksList from './BooksList';

class AdminBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      status: "init",
      error: null,
      showModal: false,
      selected: null,
      removeCandidate: null,
      removeStatus: "init",
      removeError: null
    };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.setState(prevState => ({
      ...prevState,
      status: "pending"
    }));

    fetch("http://localhost:3500/books")
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          status: "success",
          books: data
        }));
      })
      .catch(err => {
        this.setState(prevState => ({
          ...prevState,
          status: "failure",
          error: err.message
        }));
      });
  }

  requestConfirmation(book) {
    this.setState(prevState => ({
      ...prevState,
      removeCandidate: book
    }));
  }

  cancelRemove(book) {
    this.setState(prevState => ({
      ...prevState,
      removeCandidate: null
    }));
  }

  removeBook(book) {
    this.setState(prevState => ({
      ...prevState,
      removeCandidate: null,
      removeStatus: "pending"
    }));

    fetch(`http://localhost:3500/books/${book.id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(book => {
        this.setState(prevState => ({
          ...prevState,
          removeStatus: "init",
          books: prevState.books.filter(b => b.id !== book.id)
        }));
      })
      .catch(err => {
        this.setState(prevState => ({
          ...prevState,
          removeStatus: "failure",
          removeError: err.message
        }));
      });
  }

  updateBook(book){
    this.setState(prevState => ({
      ...prevState,
      showModal: true,
      selected: book
    }));
  }

  addBook(book){
    this.setState(prevState => ({
      ...prevState,
      showModal: true
    }));
  }

  hideModal(){
    this.setState(prevState => ({
      ...prevState,
      showModal: false,
      selected: null
    }));
  }

  handleSave(book){
    const {selected} = this.state;

    this.setState(prevState => ({
      ...prevState,
      showModal: false,
      selected: false,
      books: selected
      ? prevState.books.maps(b => b.id === book.id ? book : b)
      : [...prevState.books, book]
    }))
  }

  render() {
    const { books, status, error, showModal, selected, removeCandidate, removeStatus, removeError } = this.state;

    return (
      <Grid>
        <PageHeader>
          Books admin <small>Create, edit and remove books</small>
        </PageHeader>

        <Row>
          <Col md={12}>
            <div className="AdminBooks-mainAction">
              <Button bsStyle="primary" bsSize="xs">New Book</Button>
            </div>
          </Col>
        </Row>
        
        {removeStatus === 'failure' &&
        <Row>
          <Alert bsStyle="danger">
            <h4>There was an error trying to delete the book</h4>
            <p>{removeError}</p>
          </Alert>
        </Row>
        }
      
        <Row>
          {status === 'pending' && <Col md={12}>Loading...</Col>}

          {status === 'failure' && <div>Error: {error}</div>}

          {status === 'success' && 
          <BooksList
            items={books}
            onSelect={book => this.updateBook(book)}
            onRemove={book => this.requestConfirmation(book)} />}
        </Row>
      </Grid>
    );
  }
}

export default AdminBooks;
