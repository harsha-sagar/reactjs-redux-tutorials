import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render(){
        if(this.props.count === 0){
            return <div>Loading...</div>
        } else if(!this.props.book){
            return <div>Select a book to get started...</div>
        }
        return (
            <div>
                <h3>Book Detail!</h3>
                <div>{this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }    
}

function mapStateToProps(state){
    return {
        book: state.activeBook,
        count: state.books.length
    }
}

export default connect(mapStateToProps)(BookDetail);
