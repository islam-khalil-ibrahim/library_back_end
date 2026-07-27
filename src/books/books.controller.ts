import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/:value')
  searchBooks(@Param('value') value: string) {
    return this.booksService.searchBooks(value);
  }
}
