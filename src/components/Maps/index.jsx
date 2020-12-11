import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container, Header, ImgLogo, Img, Title, Description, PopupInfo } from './styles'
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet'
import Logo from '../../assets/logo.svg'
import Mark from '../../assets/point-map.png'

function Maps({ showSide, setShowSide }) {
  const mapIcon = Leaflet.icon({
    iconUrl: Mark,
    iconSize: [50, 44],
    iconAnchor: [25, 44],

  })

  const [points, setPoints] = useState([])

  useEffect(() => {
    axios.get('points').then(resp => {
      if (resp.data.success) {
        setPoints(resp.data.points)
      }
    })
  }, [])
  return (
    <Container>
        <ImgLogo src={Logo} />
        <i className="fas fa-plus" onClick={() => setShowSide(!showSide)}></i>
      {points.map(point => (
        <MapContainer
          key={point.id}
          center={[point.lat, point.lng]}
          zoom={15}
          style={{ width: '100%', height: '100%', margin: '0', padding: '0', zIndex: '5' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <Marker
            icon={mapIcon}
            position={[point.lat, point.lng]}>
            <Popup closeButton={false} minWidth={240} maxWidth={240}>
              <PopupInfo>
                <Img src={point.image} />
                <Title>{point.title}</Title>
                <Description>{point.guidance}</Description>
              </PopupInfo>
            </Popup>
          </Marker>
        </MapContainer>
      ))}
    </Container>
  )
}

export default Maps