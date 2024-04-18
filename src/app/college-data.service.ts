// college-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { College } from './college';
import { COLLEGE_DATA } from './catalog-data'; // Ensure the path to catalog-data.ts is correct

@Injectable({
  providedIn: 'root'
})
export class CollegeDataService {
  private college: College = new College();

  constructor() {
    this.initializeCollege();
  }

  private initializeCollege(): void {
    this.college = CollegeDataService.jsonToCollege(COLLEGE_DATA);
  }

  private static jsonToCollege(collegeJson: any): College {
    return new College(
      collegeJson.name,
      collegeJson.type,
      collegeJson.established,
      collegeJson.students,
      collegeJson.image,
      collegeJson.location
    );
  }

  public getCollegeData(): Observable<College> {
    // This method returns an observable of the current college data
    return of(this.college);
  }
}
