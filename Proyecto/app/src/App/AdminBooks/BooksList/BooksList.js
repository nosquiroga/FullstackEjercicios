import React, { Component } from 'react';
import { Col, Table, Button, ButtonToolbar } from 'react-bootstrap';
import './BooksList.css';

const BooksList = ({ items, onSelect, onRemove }) => (
    <Col md={12}>
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td><img src={item.image}></img></td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>
                            <ButtonToolbar className="BooksList-toolbar">
                                <Button bsStyle="info" bsSize="xsmall">Edit</Button>
                                <Button bsStyle="danger" bsSize="xsmall">Remove</Button>
                            </ButtonToolbar>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Col>
);

export default BooksList;