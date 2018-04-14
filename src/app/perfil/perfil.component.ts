import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';
import { TotalPipe } from '../total.pipe';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  readonly PERFIL_URL = 'http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?page=0&query={"creator":"id"}';
  readonly PROFILE = 'http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/user/';

  id: any;
  projects: any;
  profile: any;
  term: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => this.id = res);
  }

  ngOnInit() {
    //this.perfil = this.http.get(this.PERFIL_URL.replace("id", this.id.id));
    this.getProfile()
    .subscribe(resp => {
      this.profile = resp;
    })

    this.getUserProjects()
    .subscribe(resp => {
      this.projects = resp;
    })

  }

  sendMeExplore() {
    this.router.navigate(['']);
  }

  getProfile() {
    return this.http.get(this.PROFILE + this.id.id);
  }

  getUserProjects() {
    return this.http.get(this.PERFIL_URL.replace("id", this.id.id));
  }

  countLikes(i) {
    i.timesViewed += 1;
  }

}
