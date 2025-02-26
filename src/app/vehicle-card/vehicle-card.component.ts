import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {
  @Input() vehicle: any;
  
  bookNow() {
    alert(`Booking initiated for ${this.vehicle.name}`);
  }

}
