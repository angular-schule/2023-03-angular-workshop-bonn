import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, retry, switchMap } from 'rxjs';

import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  bs = inject(BookStoreService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      retry({
        count: 3,
        delay: 1000
      }),
      catchError((err: HttpErrorResponse) => of({
        title: 'FEHLER',
        isbn: '000',
        description: err.message
      })))
    )
  )
}
