import useProfileAxiosApi from '../../axiosCustomHooks/useProfileAxiosApi'
import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import './profilePage.scss'

function ProfilePage(){
  const[data,isLoading,isError,error]=useProfileAxiosApi()
  
  console.log(data)
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
          
        <img src={""+data[0].image} alt="" />

            <span>UserName: <b>{data[0].name}</b></span>
            <span>E-Mail: <b>{data[0].email}</b></span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage