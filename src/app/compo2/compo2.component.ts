import { Component, ViewEncapsulation } from '@angular/core';
import { SubscriberService } from '../Services/subscriber.service';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class Compo2Component {
    getSubscription(){
      let subscribe = new SubscriberService();
      subscribe.onSubscribe('monthly');
    }
}
