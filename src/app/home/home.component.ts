import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';
import { TotalPipe } from '../total.pipe';
import { Projects } from '../projects';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  readonly ROOT_URL = 'http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/';
  //readonly USER = 'http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/user/5a44df9aa2cd8d001954d925';

  itemCount: number = 0;

  projects: any;
  profile: any;
  term: any;
  filter: string = '';

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(this.ROOT_URL + 'project?page=0');
  }

  countLikes(i) {
    i.timesViewed += 1;
  }


  ngOnInit() {

    this.getProjects()
    .subscribe(resp => {
      this.projects = resp;
      this.projects.likes = 0;
      //console.log(this.projects);
    })
    //console.log(this.projects);

    //this.projects = this.http.get(this.ROOT_URL + 'project?page=0');
    //this.profile = this.http.get(this.USER);
    //console.log(this.projects.source);

  }

}
