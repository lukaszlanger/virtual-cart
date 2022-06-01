import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  onToggleColorTheme(event)
  {
    if(event.detail.checked)
      document.body.setAttribute('color-theme','dark');
    else
      document.body.setAttribute('color-theme','light');
  }

  onToggleColor(event)
  {
    if(event.detail.ckecked)
    
    document.rootElement.setAttribute('color-group','green');
  }

}
