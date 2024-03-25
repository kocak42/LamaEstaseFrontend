import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './searchBar.scss'

const types=["buy","rent"]
function SearchBar({data}){
  console.log(data)
  const [query,setQuery]=useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0,
  })
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { location,maxPrice,minPrice } = query;
    const filtered = data.filter(item => {
      return item.location.toLowerCase().includes(location.toLowerCase());
    });
    setFilteredData(filtered);
    navigate('/list', { state: { filteredData: filtered } });
    console.log("filtred data:::",filtered)
  };


    const switchType = (val)=>{
   setQuery((prev) => ({...prev,type:val}))
    }
  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type)=>(
        <button 
        key={type} 
        onClick={()=>switchType(type)} 
        className={query.type === type ? "active":""}>
          {type}
          </button>
        ))}
        
      </div>
      <form onSubmit={handleSubmit} >
        <input type="text" name='location' value={query.location} onChange={handleInputChange} placeholder='city Location' />
        <input type="number" name='minPrice' value={query.minPrice} onChange={handleInputChange} min={0} max={10000000} placeholder='Min Price' />
        <input type="number" name='maxPrice' value={query.maxPrice} onChange={handleInputChange} min={0} max={10000000} placeholder='Max Price' />
    
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>

      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            <p>Location: {item.location}</p>
            <p>Min Price: {item.minPrice}</p>
            <p>Max Price: {item.maxPrice}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default SearchBar