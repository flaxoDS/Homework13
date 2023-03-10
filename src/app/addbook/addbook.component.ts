
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../book';
import { BookstoreService } from '../bookstore.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
book: Book = new Book();
constructor(private bookService: BookstoreService, private _route:Router) { }
      id = '';
      name = 'Test';
      author = '';
      pyear = '';
      price = '';

  addbookFormSubmit() {
      this.book.name = this.name;
      this.book.year = Number(this.pyear);
      this.book.author = this.author;
      this.book.price = Number(this.price);
      this.bookService.addBookToServer(this.book).subscribe(res => {
        console.log(res);
      });
      this._route.navigate(['/viewbooks'])
    }
}