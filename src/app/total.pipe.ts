import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  count: any;

  transform(projects: any, term: any, count: number): any {
    if (term === undefined) {
      this.count = projects;
      return this.count.length;
    }


    this.count = projects.filter(function(project){
      return project.name.toLowerCase().includes(term.toLowerCase())
    })
  return this.count.length;
  }

}
