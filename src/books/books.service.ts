import { Inject, Injectable } from '@nestjs/common';
import { BookDto } from './books.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { books } from './book.entits';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(books) private readonly booksRepository: Repository<books>){}

getAllBooks(){
  return this.booksRepository.find();
}

addBook(body:any){
  const newBook = this.booksRepository.create({
    id:body.id,
    title:body.title,
    price:body.price,
    author:body.author,
  })
  return this.booksRepository.save(newBook);
}


//////////////////////////////
  private books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 10 },
    { id: 2, title: 'Book 1', author: 'Author 1', price: 20 },
    { id: 3, title: 'Book 2', author: 'Author 2', price: 25 },
    { id: 4, title: 'Book 3', author: 'Author 3', price: 30 },
  ];

  filteredBooks(price: Number, title: String) {
    const filtering = this.books.filter(
      // we used filter method not find method because we want to return all books that match the criteria , find method return just the first match
      (books) => { return books.title === title && books.price === price;}
    );

    if (filtering.length > 0) return filtering;
    else return 'no book found';
  }


  async searchBooks(id:number){
    const value= await this.booksRepository.findOneBy({id:id});
    if(!value) return "no book with this id"
    return value
  }
  // searchBooks(value: String) {
  //   const findValue = this.books.find((book) => {
  //     return book.title === value || book.id === Number(value);
  //   });

  //   if (findValue) {
  //     return findValue;
  //   } else {
  //     return 'no book found';
  //   }
  // }


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

async editBook(id:number , body:any){ 
}

// editBook(id:number , book:BookDto){
//   this.books[id -1]= book;
//   return this.books;
// }

async deleteBook(id:number){
  const result = await this.booksRepository.delete(id)
  if(result.affected === 0) return " "

}

// deleteBook(id:number){
//   const index= this.books.findIndex((book) => book.id === id);
//   if (index === -1) { // لو ما حطينا بكون مثلا id مش موجود بحذف اول عنصر بالصفيف وده غلط
//     return 'book not found';
//   }
//   const deletedBook = this.books.splice(index, 1);
//   return deletedBook;
// }



}