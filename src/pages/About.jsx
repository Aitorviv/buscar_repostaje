import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const About = () => {
  return (
    <div style={{ padding: '2em' }}>
      <h1>Sobre la aplicación</h1>

      <h2>Nuestra misión</h2>
      <p>
        Esta aplicación ayuda a los usuarios a encontrar las mejores ubicaciones para repostar gasolina,
        optimizando tiempo, precio y distancia recorrida.
      </p>

      <h2>¿Cómo funciona?</h2>
      <p>
        Mostramos las gasolineras más cercanas a tu ubicación, incluyendo precios actualizados, 
        distancia estimada y servicios disponibles.
      </p>

      <h2>Ventajas para los usuarios</h2>
      <ul>
        <li>Ahorro de tiempo y dinero.</li>
        <li>Interfaz intuitiva y rápida.</li>
        <li>Visualización clara en mapas.</li>
      </ul>

      <h2>Ejemplo de ubicaciones</h2>
      <div style={{ height: '400px', marginBottom: '2em' }}>
        <MapContainer center={[43.2627, -2.9253]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          <Marker position={[43.2627, -2.9253]}>
            <Popup>Gasolinera Bilbao Centro<br />Precio: 1.589 €/L</Popup>
          </Marker>
          <Marker position={[43.2677, -2.9250]}>
            <Popup>Gasolinera Deusto<br />Precio: 1.575 €/L</Popup>
          </Marker>
          <Marker position={[43.2512, -2.9350]}>
            <Popup>Gasolinera San Mamés<br />Precio: 1.595 €/L</Popup>
          </Marker>
          <Marker position={[43.2569, -2.9333]}>
            <Popup>Gasolinera Indautxu<br />Precio: 1.599 €/L</Popup>
          </Marker>
          <Marker position={[43.2640, -2.9430]}>
            <Popup>Gasolinera Basurto<br />Precio: 1.582 €/L</Popup>
          </Marker>
          <Marker position={[43.2684, -2.9385]}>
            <Popup>Gasolinera Abando<br />Precio: 1.593 €/L</Popup>
          </Marker>
          <Marker position={[43.2731, -2.9367]}>
            <Popup>Gasolinera Campo Volantín<br />Precio: 1.611 €/L</Popup>
          </Marker>
          <Marker position={[43.2772, -2.9498]}>
            <Popup>Gasolinera Zorrotzaurre<br />Precio: 1.577 €/L</Popup>
          </Marker>
          <Marker position={[43.2601, -2.9515]}>
            <Popup>Gasolinera Rekalde<br />Precio: 1.590 €/L</Popup>
          </Marker>
          <Marker position={[43.2449, -2.9341]}>
            <Popup>Gasolinera Irala<br />Precio: 1.608 €/L</Popup>
          </Marker>
        </MapContainer>
      </div>

      <h2>Contacto</h2>
      <p>Puedes escribirnos a: <a href="mailto:info@buscarepostaje.com">info@buscarepostaje.com</a></p>
    </div>
  );
};

export default About;


