import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import "./singlePage.scss";



import useSinglePostDataFetchApi from "../../axiosCustomHooks/useSinglePostDataFetchApi";
import { useParams } from "react-router-dom";
import useProfileAxiosApi from "../../axiosCustomHooks/useProfileAxiosApi";


function SinglePage() 
{
  const { postId } = useParams();
  const [profileData, profileIsLoading, profileIsError, profileError] = useProfileAxiosApi();
  const[data,isLoading,isError,error]=useSinglePostDataFetchApi(postId);
 
 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

console.log(data)

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
        <Slider images={data.imagePath} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{data.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{data.adress}</span>
                </div>
                <div className="price">$ {data.price}</div>
              </div>
              <div className="user">
                <img src={profileData[0].image} alt="" /> 
                 <span>{profileData[0].name}</span>
              </div>
            </div>
            <div className="bottom">{data.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>  pets {data.petPolicy}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have {data.income}x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{data.area} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{data.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{data.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{data.school} away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{data.busStop} away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{data.restaurant} away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[data]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
