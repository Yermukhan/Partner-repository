import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from '../book';

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
  selectedBook: Book;
  OnSelect(book: Book): void {
    this.selectedBook = book; 
  }

  books = BOOKS;

  constructor() { }

  ngOnInit(): void {
  }

}
