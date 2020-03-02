import { Component, OnInit } from '@angular/core';
import { DaataService } from '../Services/daata.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentData: any = [];
  weatherData: any = [];
  constructor(private service: DaataService) { }

  ngOnInit(): void {
    this.service.GetStudentData().subscribe(
      (data) => {
        this.studentData = data.students;
        console.log(this.studentData);
      }
    );
  

  this.service.GetWeatherData().subscribe(
    (data) => {
      this.weatherData = data.weather;
      console.log(this.weatherData);
    }
  );
}

}
