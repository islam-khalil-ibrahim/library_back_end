import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './books.dto';
import path from 'path';


//هون بدي اعمل pipع مستوى الكنترولر 
// @UsePipes( new ValidationPipe())
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // @Get('/:value')
  // searchBooks(@Param('value') value: string) {
  //   return this.booksService.searchBooks(value);
  // }

  // @Get("/: filteredBooksByName")
  // filteredBooksByName( @Query('price') price:string ,@Query('title') title:string ){
  //    return this.booksService.filteredBooks(Number(price), title);
  // }

   
  @Get('minMaxPrice')
  minMaxPrice(@Query('minPrice') minPrice: string, @Query('maxPrice') maxPrice: string) {
    return this.booksService.filteredByPrice(Number(maxPrice), Number(minPrice));
  }

  @Post('changePrice')
  changePrice(@Body() book: BookDto) {
    return this.booksService.changePrice(book);
  }
  // لو ع مستوى الميثود 
// @UsePipes( new ValidationPipe())

  @Post('addBook')
  addBook(@Body() book: BookDto) {
    return this.booksService.addBook(book);
  }


@Patch("editBook/:id")
editBook(@Param("id") id:number , @Body() book:BookDto){
  return this.booksService.editBook(id , book);
}


@Delete("deleteBook/:id")
deleteBook(@Param("id") id:string){
  return this.booksService.deleteBook(Number(id));
}

@Get("getAllBooks")
getAllBooks(){
  return this.booksService.getAllBooks();
}
}

// كيف نرسل نتوفيكشن عن طريق الويب سوكيتس 
//  authrization 
// كيف ابعت فيديو ويخزن ع aws 
// coustm pipe 
