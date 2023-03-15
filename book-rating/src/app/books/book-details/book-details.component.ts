import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, mergeMap, Observable, share, shareReplay, switchMap } from 'rxjs';
import { Book } from '../shared/book';
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
    switchMap(isbn => this.bs.getSingleBook(isbn)),
  )
}
