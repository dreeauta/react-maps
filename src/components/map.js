import React, {Component} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default class Map extends Component {
  render() {
    
    const mapContainer = <div style = {{height: '100%', width: '100%'}}> </div>
    
    return (
      <div> Map component 
        <div> 
          
          <GoogleMapLoader 
            containerElement = {mapContainer}
            googleMapElement = {
              <GoogleMap 
                  defaultZoom = {15}
                  defaultCenter= {this.props.center}
                  // onDragend={this.mapMove.bind(this)}
                  options={{streetViewControl:false, mapTypeControl: false}}>
              </GoogleMap>
              } />
        </div>
      </div>
    )
  }
}