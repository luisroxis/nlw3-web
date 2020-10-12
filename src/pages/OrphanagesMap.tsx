import React from 'react';
import { Link } from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanage-map.css'

import mapmarkImg from '../images/map-mark.svg'


function OrphanagesMap() {
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapmarkImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão
                esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Salto</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map 
        center={[-23.1989118,-47.2801385]}
        zoom={14}
        style= {{ width:'100%', height:'100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap