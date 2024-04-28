import { Component } from '@angular/core';
import { SubscriberService } from '../Services/subscriber.service';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {
  getSubscription(){
    let subscribe = new SubscriberService();
    subscribe.onSubscribe('monthly');
  }
}
