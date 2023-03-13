import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    description: new FormControl('', {
      nonNullable: true
    })
  });

  c = this.bookForm.controls;

  hasError(control: FormControl): boolean {
    return control.touched && control.invalid;
  }

  submitForm() {
    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    };

    console.table(newBook);
    // 1. Erstelle ein Event mit den Namen 'create'
    // 2. Versende das neue Buch per Event
    // 3. (Subscribe) dich im Dashboard auf das Event
    // 4. Füge das neue Buch dem Buch-Array hinzu!

    this.bookForm.reset();
  }
}
