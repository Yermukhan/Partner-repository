import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  // book: Book = {
  //   id: 16,
  //   author: 'Warcada',
  //   title: 'Wacky'
  // }
  books: Book[] = BOOKS;
  selectedBook: Book = this.books[0];
  OnSelect(book: Book): void {
    this.selectedBook = book; 
  }


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

}
