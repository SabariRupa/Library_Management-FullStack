import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import BookService from '../Service/BookService';

function Add() {
  const nav=useNavigate();
  const[bookid,setid]=useState('');
  const[bookname,setname]=useState('');
  const[bauthor,setauthor]=useState('');
  const[price,setprice]=useState('');
  const {id} = useParams();
    const saveOrUpdatebook = (e) => {
      e.preventDefault();
      if(bookname.length==0||bookid.length==0||bauthor.length==0||price.length==0){
        alert("Enter All fields")
      }
      else{
      if (window.confirm("Confirm Book Details!") == true) {
        e.preventDefault();
          const book = { bookid,bookname, bauthor,price}
          if(bookid){
              BookService.updateBook(bookid,book).then((response) => {
                  nav('/home')
              }).catch(error => {
                  console.log(error)
              })
  
          }else{
            BookService.createBook(book).then((response) =>{
                  console.log(response.data)
                  nav('/home');
              }).catch(error => {
                  console.log(error)
              })
          }
        }
      }
    } 
      useEffect(() => {
        BookService.getBookById(id).then((response) =>{
          setid(response.data.bookid)
              setname(response.data.bookname)
              setauthor(response.data.bauthor)
              setprice(response.data.price)
          }).catch(error => {
              console.log(error)
          })
      }, [])
      const title = () => {

        if(id){
            return <h1>Update Book</h1>
        }else{
            return <h1>Add Book</h1>
        }
    }
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
       {title()}
        <p>Enter Book Details</p>
      </div>
      <form>
        <div className="input">
          <input type="text" value={bookid} placeholder="Book Id" onChange={(e)=>setid(e.target.value)}  />
        </div>
        <div className="input">
          <input type="text" placeholder="Book Name"  pattern="[0-9]+"
                   maxLength="10" value={bookname}  onChange={(e)=>setname(e.target.value)} />
        </div>
        <div className="input">
          <input type="text"  value={bauthor} placeholder="Book Author" onChange={(e)=>setauthor(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" value={price} placeholder="Book Price" pattern="[0-9]+"   onChange={(e)=>setprice(e.target.value)} />
        </div>
        <input onClick={saveOrUpdatebook} className="signup-btn" type="submit" value="Submit" />
        <Link to="/home">  <button className="e-cancel-btn" >Cancel </button></Link>
       
        </form>
    </div>
  </div>
    </div>
  )
}

export default Add