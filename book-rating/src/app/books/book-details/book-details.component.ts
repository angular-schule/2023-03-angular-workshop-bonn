import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
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

  // Option A, damit es mit useDefineForClassFields funktioniert
  // $book$: Observable<any>;
  // constructor(route: ActivatedRoute) {
  //   this.$book$ = route.paramMap
  // }

}
