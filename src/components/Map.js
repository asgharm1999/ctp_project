import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
`;

export default class Map extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			latitude: 40.800610,
			longitude: -73.935242,
		}
	}

	componentDidMount() {
		this.map = L.map('map', {
			center:[this.state.latitude, this.state.longitude],
			zoom: 10.5,
			scrollWheelZoom: false,
		});

		L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', 
			{
				detectRetina: true,
				maxZoom: 20,
				maxNativeZoom: 17
			}).addTo(this.map);
	}

	render() {
		return <Wrapper width="100%" height="520px" id="map" />
	}
}