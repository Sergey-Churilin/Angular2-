import { Component, OnInit } from '@angular/core';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  show: boolean = false;
  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.showLoading
      .subscribe((show) => this.show = show);
  }

}
