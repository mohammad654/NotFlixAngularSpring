import { Component ,OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

//  import { ActivatedRoute } from '@angular/router';
//  import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent  implements OnInit {

// genres: any[] = ['action','comedy','fantasy','crime','western','horror','drama'];

genreId?: any  ;

//   constructor(private route: ActivatedRoute) {}
//   ngOnInit(){
//          this.genreId = this.route.snapshot.paramMap.get('genreId');
//          console.log('ID:', this.genreId);
//            }
  ngOnInit(): void {
    this.fetchData();
  }
// get data
  movies: any;
  constructor(private dataService: DataService) { }
  fetchData(): void {
      this.dataService.fetchData().subscribe(
        (response) => {
          this.movies = response;
          console.log(this.movies );
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
}
