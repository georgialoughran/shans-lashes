import { Component } from '@angular/core';
import { LashServiceService } from 'src/services/lash-services/lash-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listOfServices: any;

  constructor(public lashService:LashServiceService) {
    //this.listOfServices=lashService.getService();
    //console.log(this.listOfServices);
  }

  public ngOnInit() {
    this.listOfServices=this.lashService.getService();
    console.log(this.listOfServices);
  }

}
