import { Component, OnInit } from '@angular/core';
import { SortPipe } from '../sort.pipe';
import { HathService } from './../hath.service';
import {SearchfilterPipe} from '../searchfilter.pipe'
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  mob = 9758892459;
  login_device = "mobile";
  dataUsage=[];
  constructor(private api: HathService) {

  }
 
  dataUsageObj =
    {
      'registered_mobile_no': 9758892459,
      'login_device': "web",
      'account_no': "1117757632",
      'start_date': "1516732200",
      'end_date': "1517157000"


    }
  ngOnInit() {
;
    // var fd=new FormData();
    // fd.append('registered_mobile_no',"9758892459");
    // fd.append('login_device',"mobile");
    // fd.append('account_no',"1117757632");
    // fd.append('start_date',"1516732200");
    // fd.append('end_date',"1517157000");
    this.api.dataUsageDetail(this.dataUsageObj).subscribe((data) => {
      // console.log(data)
      // this.dataUsage=JSON.parse(data.text()).data
    })
  }
  selectedField = 'date';
  // dataUsageDetail()
  // {

  //   var fd=new FormData();
  //   fd.append('registered_mobile_no',"9758892459");
  //   fd.append('login_device',"web");
  //   fd.append('account_no',"1117757632");
  //   fd.append('start_date',"1516732200");
  //   fd.append('end_date',"1517157000");
  //   this.api.dataUsageDetail(fd).subscribe((data)=>{

  //   })


  // }

  setFieldName(date) {
    if (this.selectedField === date) {
      this.selectedField = '-' + this.selectedField;
    } else {
      this.selectedField = date;
    }
  }
}
