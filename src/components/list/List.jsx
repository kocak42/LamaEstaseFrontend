import Card from '../card/Card'
import './list.scss'

import useLamaEstaseFetchApi from '../../axiosCustomHooks/useLamaEstaseFetchApi';

function List(){
  const[data,isLoading,isError,error]=useLamaEstaseFetchApi();
  console.log(data)
  return (
    <div className='list'>
      {data.map(item=>(
        <Card key={data.id} item={item}/>
      ))}
    </div>
  )
}

export default List