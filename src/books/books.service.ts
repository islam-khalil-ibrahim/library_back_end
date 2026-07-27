import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

    private books=[
        { id: 1, title: 'Book 1', author: 'Author 1' ,price:20},
        { id: 2, title: 'Book 2', author: 'Author 2' ,price:25},]


        
searchBooks(value: String) {
    const findValue = this.books.find(
        (book) => { return book.title === value  || book.id === Number(value) }
    ); 

if (findValue) {
  return findValue;
 }
  else {
    return 'no book found';
  }
}
}