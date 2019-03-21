import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,
AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) { }

  getUser(id: string): Observable<User> {
    this.userDoc = this.afs.doc<User>(`user-details/${id}`);
    this.user = this.userDoc.snapshotChanges().pipe(
      map(action => {
        if(action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as User;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.user;
  }
}
