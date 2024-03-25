import { useState } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom";
import useProfileAxiosApi from "../../axiosCustomHooks/useProfileAxiosApi";

export default function Navbar(){
const [open,setOpen]=useState(false)
const [profileData, profileIsLoading, profileIsError, profileError] = useProfileAxiosApi();
const user=true;
if (!profileData || profileData.length === 0) {
  return <div>Loading...</div>; // veya başka bir şey döndürebilirsiniz
}
  return (
    <nav>
    <div className="left">
      <a href="/" className="logo">
        <img src="/logo.png" alt=""/>
        <span>LamaEstase</span>
      </a>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
      <a href="/">Agents</a>
    </div>
    <div className="right">
     {user ? ( 
     <div className="user">
      <img src={profileData[0].image} alt="" />
      <span>{profileData[0].name}</span>
      <Link to="/profile" className="profile">
        <div className="notification">3</div>
       <Link to={"/profile"}> <span>Profile</span></Link> 
        </Link>
       </div>
     ):(
      <> 
      <a href="/">Sign in</a>
      <a href="/" className="register">Sign up</a>
     </>
     )}
     <div className="menuIcon">
      <img src="/menu.png" alt="" 
      onClick={()=> setOpen((prev)=>!prev)}
      />
     </div>
     <div className={open ? "menu active" : "menu"}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contect</a>
        <a href="">Agents</a>
        <a href="">Sign in</a>
        <a href="">Sign up</a>

      </div>
    </div>
  </nav>
  )

}