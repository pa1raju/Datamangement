import {Component, OnInit, ViewChild,OnDestroy} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { HttpClient } from '@angular/common/http';
import { interval, Subscription, Observable } from 'rxjs';
import { tap, map, filter, startWith, switchMap } from 'rxjs/operators';
import { Store } from "@ngrx/store";

import * as loadActions from "../store/entities.action";
@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})


export class EntitiesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email'];
  assetName:any;
  assetId:any;
  dataSubscription: Subscription;
  isShow:boolean = false;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;


  constructor(private http: HttpClient , private store:Store) { }

  ngOnInit() {
    console.log('--------->dispatching action')
   this.store.dispatch(new loadActions.loadEntities());
   this.store.subscribe(state => {
     console.log('-------------->store response')
    this.dataSource = new MatTableDataSource(state['entities'].entities);
    //this.dataSource = new MatTableDataSource(state['entities'].entities.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   })

  /*   this.http.get('http://dummy.restapiexample.com/api/v1/employees')
   .subscribe(res =>{
      // Assign the data to the data source for the table to render
      if(res !== null){
        this.dataSource = new MatTableDataSource(res['data']);
       // this.assetId = res.AssetId;
        //this.assetName = res.AssetName; 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }  
   }) */
     /*  this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; */
    
   
  }
 /*  callApi() {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe(data => {
        console.log(data);
      })
  } */

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}



export interface Topic {
  SensorName: string;
  SensorId: string;
  MostRecentValue: number;
  lastPingTime: any;
}

export interface SensorsData {
  topics: Topic[];
  AssetId: string;
  AssetName: string;
}

