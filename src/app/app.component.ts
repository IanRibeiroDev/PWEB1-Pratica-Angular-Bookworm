import { Component } from '@angular/core';
import { Book } from "./shared/model/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bookworm';
  books: Book[] = [];
  bookToRegister: Book = new Book("", "", "");
  editorMode = false;

  insertBook(): void {
    if(this.editorMode) {
      this.editorMode = false;
      this.bookToRegister = new Book("", "", "");
    } else {
      this.books.push(this.bookToRegister);
      this.bookToRegister = new Book("", "", "");
    }
  }

  deleteBook(bookToDelete : Book) : void {
    const index = this.books.findIndex(book => book == bookToDelete);
    this.books.splice(index, 1);
  }

  editBook(bookToEdit : Book) {
    this.editorMode = true;
    this.bookToRegister = bookToEdit;
  }

}
