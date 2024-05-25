import { Component } from '@angular/core';
import { assetUrl } from "src/single-spa/asset-url";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})

export class AppComponent {
  title = 'my-renegotiations';
  imageUrl = assetUrl('images/everything-is-ok-icon.png');
}
