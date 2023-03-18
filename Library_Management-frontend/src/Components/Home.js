import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookService from '../Service/BookService';

function Home() {
  function myFunction() {
    var x = document.getElementById("table");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  const[user,setUser]=useState('');
  const fetchData = () => {
      BookService.getAllBoooks().then((response)=>{
        setUser(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
  }
  useEffect(() => {
    fetchData();
  },[])
  const deleteBook = (bookid) => {
    if(window.confirm("Sure to Delete?")){
    BookService.deleteBook(bookid).then((response) =>{
      fetchData();
     }).catch(error =>{
         console.log(error);
     })
    }
  }
  return (
    <div id="container">
            <h1>MSDR LIBRARIES</h1>
    <Link to="/add"><button id="addbtn">Add Book</button></Link>
    <button id="viewbtn" onClick={myFunction} >View Books</button>
  
    <table id="table">
              <thead>
                <tr>
                  <th>Book Id</th>
                  <th>Book Name</th>
                  <th>Book Author</th>
                  <th>Price</th>            
                  <th>Actions</th>                </tr>
              </thead>
              <tbody>
    {user && user.length > 0 && user.map((userObj, index) => (
      <tr>
             <th>{userObj.bookid}</th>
             <th>{userObj.bookname}</th>
             <th>{userObj.bauthor}</th>
             <th>{userObj.price}</th>
             <th><Link  to={`/update/${userObj.bookid}`}><button id="actions">Update</button></Link> 
             <button id="actions"  onClick = {() => deleteBook(userObj.bookid)}
            > Delete!</button></th>
      </tr>
    ))}
              </tbody>
            </table>
        
    </div>
  )
}

export default Home