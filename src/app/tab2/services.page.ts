import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LashServiceService } from 'src/services/lash-services/lash-service.service';

@Component({
  selector: 'app-services',
  templateUrl: 'services.page.html',
  styleUrls: ['services.page.scss']
})
export class ServicesComponent implements OnInit {
  public listOfServices: Observable<any>[] = [];

  constructor(public lashService: LashServiceService) {
    //this.listOfServices=lashService.getService();
    //console.log(this.listOfServices);
  }

  public ngOnInit(): void {
    this.lashService.getService()
    .subscribe(service => {
      this.listOfServices = service;
    });
    console.log(this.listOfServices);
  }

}
