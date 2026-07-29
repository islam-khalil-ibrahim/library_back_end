import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';

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
  changePrice(@Body('id') id: string, @Body('newPrice') newPrice: string) {
    return this.booksService.changePrice(id, Number(newPrice));
  }
}
