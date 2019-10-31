import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
`;

const user = {
		locationLatitude: 40.770510,
		locationLongitude: -73.965242
	};

const customIcon = L.icon({
		iconUrl: '../assets/sunset.jpg',
		iconSize: [38, 95],
		iconAnchor: [22, 94],
		popUpAnchor: [-3, -76]
	});

export default class Map extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			latitude: 40.760610,
			longitude: -73.935242,
		}
	}

	componentDidMount() {
		this.map = L.map('map', {
			center:[this.state.latitude, this.state.longitude],
			zoom: 12,
			scrollWheelZoom: false,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		});

		L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', 
			{
				detectRetina: true,
				maxZoom: 20,
				maxNativeZoom: 17
			}).addTo(this.map);

		L.marker([user.locationLatitude, user.locationLongitude], {
				icon: customIcon
		}).addTo(this.map)
			.bindPopup('<strong>First Last.</strong> <br/>"Find out my recs!"')
			.openPopup();

	}

	render() {
		return <Wrapper width="100%" height="520px" id="map" />
	}
}