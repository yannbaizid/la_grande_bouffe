import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-call-friend',
  templateUrl: './call-friend.component.html',
  styleUrls: ['./call-friend.component.scss'],
})
export class CallFriendComponent implements OnInit {

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {}

  handleCallEvent() {
    console.log('salut!');
    this.callNumber.callNumber('18001010101', true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
}
