import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,
              private route: ActivatedRoute,
              public afAuth: AngularFireAuth,
              public af: AngularFireDatabase,
              private db: AngularFirestore,) {
  }
}