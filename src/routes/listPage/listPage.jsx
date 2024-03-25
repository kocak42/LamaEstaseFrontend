import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";
import useLamaEstaseFetchApi from "../../axiosCustomHooks/useLamaEstaseFetchApi";
import { useLocation } from "react-router-dom";


function ListPage() {
  const location = useLocation();
  const filteredData = location.state && location.state.filteredData ? location.state.filteredData : [];

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        {filteredData.map((item, index)=>(
          <Card key={index} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={filteredData}/>
    </div>
  </div>;
}

export default ListPage;
