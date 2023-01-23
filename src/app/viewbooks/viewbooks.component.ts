import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
  books: Array<Book> = [];
  selectedBook: Book = new Book();

  constructor(private _service: BookstoreService,private _route:Router) { }

  ngOnInit(): void {
      this.getbooks();

    }

  getbooks() {

    this._service.getBooksFromServer().subscribe(
            data => this.books = data,
    )
  }

  RedirectToAddBook() {
    this._route.navigate(['/addbook'])
  }

  deleteBook(id: number) {
      this._service.deleteBookFromServer(id).subscribe(res => {
          console.log(res);
          // Refresh the books list
          this.getbooks();
      });
  }

  getsOldestBook(){
      this._service.getOldestBook().subscribe((book) => {
          this.selectedBook = book;
      }, (error) => {
          console.log(error)
      });
  }

  getsNewestBook(){
        this._service.getNewestBook().subscribe((book) => {
            this.selectedBook = book;
        }, (error) => {
            console.log(error)
        });
    }
}