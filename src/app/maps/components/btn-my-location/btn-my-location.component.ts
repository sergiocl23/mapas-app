import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { LngLatLike } from 'mapbox-gl';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ){}

  goToMyLocation(){

    if (!this.placesService.useLocation) throw new Error('No hay ubicación de usuario');
    if (!this.mapService.isMapReady) throw new Error('El mapa no esta inicializado');

    this.mapService.flyTo( this.placesService.useLocation! );
  }

}
