import { Injectable } from '@nestjs/common';
import { BookDto } from './books.dto';

@Injectable()
export class BooksService {
  private books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 10 },
    { id: 4, title: 'Book 1', author: 'Author 1', price: 20 },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 25 },
    { id: 3, title: 'Book 3', author: 'Author 3', price: 30 },
  ];

  filteredBooks(price: Number, title: String) {
    const filtering = this.books.filter(
      // we used filter method not find method because we want to return all books that match the criteria , find method return just the first match
      (books) => { return books.title === title && books.price === price;}
    );

    if (filtering.length > 0) return filtering;
    else return 'no book found';
  }

  searchBooks(value: String) {
    const findValue = this.books.find((book) => {
      return book.title === value || book.id === Number(value);
    });

    if (findValue) {
      return findValue;
    } else {
      return 'no book found';
    }
  }


filteredByPrice(priceMax: number, priceMin: number) {
  const pricee = this.books.filter(
    (book) => book.price >= priceMin && book.price <= priceMax
  );

  if (pricee.length > 0) {
    return pricee;
  } else {
    return 'no book found';
  }
}

changePrice(book:BookDto){
  this.books[book.id -1 ].price= book.price;
  return this.books;
}

addBook(book:BookDto){
  this.books.push(book);
  return this.books;
}



}
