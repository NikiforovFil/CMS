import { Component, HostBinding } from "@angular/core";

// import { fadeStateTrigger } from '../shared/animations/fade.animation';

@Component({
  selector: "yh-auth",
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss'],
  // animations: [fadeStateTrigger]
})
export class AuthComponent {
  // @HostBinding('@fade') a = true;
  logoPath = "http://tvoydom24.com/api/logo.png";
}