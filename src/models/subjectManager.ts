import { Subject } from 'rxjs'

export class SubjectManager<T> {
  private readonly subject = new Subject<T>()

  get getSubject (): any {
    return this.subject.asObservable()
  }

  // eslint-disable-next-line accessor-pairs
  set setSubject (value: T) {
    this.subject.next(value)
  }
}
