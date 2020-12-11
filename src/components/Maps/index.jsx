import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Container, Header, ImgLogo } from './styles'
import 'leaflet/dist/leaflet.css'
import Logo from '../../assets/logo.svg'

function Maps({showSide, setShowSide}) {
    return (
        <Container>
            <Header>
                <ImgLogo src={Logo} />
                <i className="fas fa-plus" onClick={() => setShowSide(!showSide)}></i>
            </Header>
            <MapContainer 
            center={[-16.6875047,-49.2885101,17]}
            zoom={15} 
            style={{ width: '100%', height: '100%', margin: '0', padding: '0', zIndex: '5'}}
            >
              <TileLayer 
              url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
            </MapContainer>
        </Container>
    )
}

export default Maps