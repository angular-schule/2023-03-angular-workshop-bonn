import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  bs = inject(BookStoreService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    map(isbn => this.bs.getSingleBook(isbn))
  )

  book?: Book;

  // Option A, damit es mit useDefineForClassFields funktioniert
  // $book$: Observable<any>;
  // constructor(route: ActivatedRoute) {
  //   this.$book$ = route.paramMap
  // }

  constructor(private route: ActivatedRoute) {

    route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn') || ''),
      map(isbn => this.bs.getSingleBook(isbn))
    ).subscribe(book$ => book$.subscribe(book => this.book = book))
  }

}
