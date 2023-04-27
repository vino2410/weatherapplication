import axios from "axios"
import { useEffect, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './WeatherPage.css'
import { Container, Nav, Navbar, NavLink } from "react-bootstrap"

function CityList(props)
{
    return (
        <div>
            <ul class="d">
                {
                    props.list.map((c)=>{return <li class="progress">{c}</li>})
                }
            </ul>
        </div>
    )
}

export const WeatherPage=()=>
{
    const [Cities, setCities]=useState([]);
    useEffect(
        async()=>{
            try{
                let response = await axios.get('https://weather-api18.azurewebsites.net/api/cities?code=5h-nLY-wvWGnXhONfktwqUvGfI53tPe6CHrEGnNWpbk7AzFuSp_zWg==')
                response = response.data;
                setCities(response);
            }
            catch (error){
                console.error(error);
            }
        }
        )
    return(
        <>
    <form id="header">
        <label for="search-q" >
            <input name="q" autocomplete="off" id="search-q" class="p" value="Search for Location.."/>
        </label>
        <CityList list={Cities}></CityList>
     </form>
        <Navbar class="navbar">
        <container>
            <div id="img" className="col-1">
                <img src="https://cdn-icons-png.flaticon.com/512/2849/2849457.png" height="90px" />
            </div>
            <div className="row justify-content-around col-3">
              <Navbar.Brand href="/" className=""><h5 className="text-light text-center">Indian Weather Forecast</h5></Navbar.Brand>
              </div>
        </container>
        </Navbar>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 col-sm-12 col-xs-12"> 
                   <div class="card p-4">    
                    
                       <div class="d-flex">
                           <h6 class="flex-grow-1">London</h6>
                           <h6>9.00</h6>
                       </div>
                        
                       <div class="d-flex flex-column temp mt-5 mb-3">
                           <h1 class="mb-0 font-weight-bold" id="heading"> 13&deg; C </h1>
                           <span class="small grey">Stormy</span>
                       </div>
                       
                       <div class="d-flex">
                           <div class="temp-details flex-grow-1">
                                <p class="my-1">
                                    <img src="https://i.imgur.com/B9kqOzp.png" height="17px"/>
            
                                   <span> 40 km/h  </span>
                                </p>

                                <p class="my-1"> 
                                
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_525988.png" height="17px"/>
                                
                                   <i class="fa fa-tint mr-4" aria-hidden="true"></i>
                                   <span> 84% </span> 
                                </p>

                                <p class="my-1"> 
                                    <img src="https://i.imgur.com/wGSJ8C5.png" height="17px"/>
                                    <span> 0.2h </span>
                                </p>
                           </div>
                           
                           <div>
                               <img src="https://i.imgur.com/Qw7npIg.png" width="100px"/>
                           </div>
                           
                           
                       </div>
                        
          
                    </div>
            </div>
        </div>


    </div>
        </>
    );
}