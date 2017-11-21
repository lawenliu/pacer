import { Component, OnInit, Input,
 Output, EventEmitter  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  @Input() clients: Observable<any[]>;
	@Output() activity: EventEmitter<any> = new EventEmitter();
  constructor() {
    
  }
  ngOnInit() {
    
  }

  activityClicked(client) {
    this.activity.emit(client);
  }

}
