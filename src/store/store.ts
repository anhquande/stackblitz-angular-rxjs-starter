import { BehaviorSubject, Observable, distinctUntilChanged, distinctUntilKeyChanged, map } from "rxjs";

export class Store<T> {

  private _store: BehaviorSubject<any>;
  
  constructor(initialState: T) {
    this._store = new BehaviorSubject<T>(initialState);
  }

  public patchState(state: T): void {

  }

  public selectState(key: string) {
    this._store.pipe(
      map(state => state[key])
    )
  }

  public stateChanges(): Observable<any> {
    return this._store.asObservable();
  }
}