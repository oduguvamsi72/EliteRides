import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredVehicles: any[] = []; // Store vehicle data
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<any[]>('assets/vehicles.json').subscribe(
      (data) => {
        this.featuredVehicles = data;
      },
      (error) => {
        console.error('Error fetching vehicle data', error);
      }
    );
  }
  bookRide() {
    alert("Redirecting to booking page...");
  }
  bookVehicle(vehicleName: string) {
    alert(`Booking confirmed for ${vehicleName}`);
  }

}
