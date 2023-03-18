import axios from 'axios'

const URL = 'http://localhost:8080/library';

class BookService{

    getAllBoooks(){
        return axios.get(URL)
    }

    createBook(Library){
        return axios.post(URL,Library)
    }

    getBookById(bookid){
        return axios.get(URL + '/' + bookid);
    }

    updateBook(bookid, Library){
        return axios.put(URL + '/' +bookid, Library);
    }

    deleteBook(bookid){
        return axios.delete(URL + '/' + bookid);
    }
    deleteAllBook(bookid){
        return axios.delete(URL);
    }
}

export default new BookService();