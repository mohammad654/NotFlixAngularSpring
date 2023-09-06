import { Component,OnInit } from '@angular/core';
// import { DataService } from './data.service';
import { DataService } from './data.service';
@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

getData(){
console.log("getData()");
}

// ----------------

data: any;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.fetchData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
showFullContent: boolean = false;

 toggleContent() {
    this.showFullContent = !this.showFullContent;
  }

}
