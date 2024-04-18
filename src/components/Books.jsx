import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  function checkStatus() {
    return window.confirm("Are you sure you want to delete this book?");
  }

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://rohitchavan-bookstore-backend-lb-348951761.us-east-1.elb.amazonaws.com/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    if(checkStatus()) {
      try {
        await axios.delete(`http://rohitchavan-bookstore-backend-lb-348951761.us-east-1.elb.amazonaws.com/books/${id}`);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };
  
  return (
    <div>
      <h1>Goodreads Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>Rs. {book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;
