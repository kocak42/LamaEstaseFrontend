import useLamaEstaseFetchApi from "../../axiosCustomHooks/useLamaEstaseFetchApi";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homepage.scss";

function Homepage() {
  const [data, isLoading, isError, error] = useLamaEstaseFetchApi();
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Find Real Estate & Get Your Dream Place Find Real Estate & Get Your 
     Dream Place</h1>
          <p>Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Odit voluptate quia doloremque, 
      blanditiis, id illo dignissimos adipisci minus repellat
      laborum libero saepe aspernatur rerum perferendis sit voluptatem cum 
      doloribus odio.</p>
          <SearchBar data={data}/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>years of Experiance</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
             <h1>2000+</h1>
             <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Homepage;
