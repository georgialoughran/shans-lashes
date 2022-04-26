import { Component, OnInit } from '@angular/core';
import { Service } from 'src/model/service/service.model';
import { LashService } from 'src/services/lash-services/lash-service.service';

@Component({
  selector: 'app-services',
  templateUrl: 'services.page.html',
  styleUrls: ['services.page.scss']
})
export class ServicesPage implements OnInit {
  public listOfServices: Service[];

  constructor(public lashService: LashService) { }

  public ngOnInit(): void {
    this.lashService.getService()
    .subscribe((service: Service[]) => {
      this.listOfServices = service;
    });
  }

}
