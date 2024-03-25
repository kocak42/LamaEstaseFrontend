import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'

function Pin({ item }) {
  // Eğer item.latitude veya item.longitude değeri tanımsızsa, hata vermemesi için kontrol ediyoruz
  if (!item.latitude || !item.longitude) {
    return null; // ya da alternatif bir içerik döndürebilirsiniz
  }

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.imagePath} alt={item.title} />
          <div className="textContainer">
            <Link to={`/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
            <p>{item.bedroom} bedroom</p>
            <p>{item.bathroom} bathroom</p>
            <p>Size: {item.area} sqft</p>
            <b className='price'>${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
export default Pin