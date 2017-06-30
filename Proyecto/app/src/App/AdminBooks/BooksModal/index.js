import React, {Component} from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';

class BookModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            book: props.book || {label: ''},
            status: 'init',
            error: null
        };
    }

    componenWillReceiveProps(nextProps){
        const {book} = nextProps;

        this.setState(prevState => ({
            ...prevState,
            book: book || { label: '' }
        }));
    }

    handleChange(e, key) {
        const value = e.target.value;

        this.setState(prevState => ({
            ...prevState,
            book: {
                ...prevState.book,
                [key]: value
            }
        }));
    }

    handleSave(){
        const { book } = this.state;
        book.id ? this.update(book) : this.save(book);
    }

    save(book){
        const { onSave } = this.props;

        this.setState(prevState => ({
            ...prevState,
            status: 'loading'
        }));

        fetch('http://localhost:3500/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(book => {
                console.log('book');
                console.log(book);
                this.setState(prevState => ({
                    ...prevState,
                    status: 'init',
                    error: null
                }));
                onSave(book);
            })
            .catch(err => this.setState(prevState => ({
                ...prevState,
                status: 'failure',
                error: null
            })));
    }
    update(book){
        const{ onSave } = this.props;
        
        this.setState(prevState => ({
            ...prevState,
            status: 'loading'
        }));

        fetch(`http://localhost:3500/books/${book.id}`, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(book => {
                this.setState(prevState => ({
                ...prevState,
                    status: 'init',
                    error: null
                }));
                onSave(book);
            })
            .catch(err => this.setState(prevState => ({
                ...prevState,
                status: 'failure',
                error: null
            })));
    }

    render(){
        const { onCancel, show } = this.props;
        const { book, status, error } = this.setState;
        const edit = book && book.id;
        const title = edit ? 'Edit book' : 'Create Book';


    }
}