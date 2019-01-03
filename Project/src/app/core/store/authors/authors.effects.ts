import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';

// rxjs
import {Observable} from 'rxjs/internal/Observable';
import {switchMap} from 'rxjs/operators';

import * as AuthorsActions from './authors.actions';
import {AuthorsService} from '../../../pages/video-courses-page/components/authors/authors.service';

@Injectable()
export class AuthorsEffects {

  constructor(private actions$: Actions, private authorsService: AuthorsService) {
  }

  @Effect()
  getAuthors$: Observable<Action> = this.actions$.pipe(
    ofType<AuthorsActions.GetAuthors>(AuthorsActions.AuthorsActionTypes.GET_AUTHORS),
    switchMap((action: AuthorsActions.GetAuthors) =>
      this.authorsService
        .getAuthors()
        .then(authors => new AuthorsActions.GetAuthorsSuccess(authors))
        .catch(err => new AuthorsActions.GetAuthorsError(err)))
  );
}
