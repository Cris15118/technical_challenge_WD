import { Link, useNavigate } from "react-router-dom"
import{getAllPhone} from "../services/phone.services"
import { useEffect, useState } from "react"
import {HashLoader} from "react-spinners"

function PhoneList() {
    const navigate = useNavigate()
    const [allPhones, setAllPhones] = useState([])
    const [isLoading , setIsLoading]= useState(true)

    useEffect(()=> {
        getData()
    },[])
    const getData = async ()=>{
        try {
            const response = await getAllPhone()
            setAllPhones(response.data)
            setIsLoading(false)
            
        } catch (error) {
            console.log(error)
            navigate("/error")
        }
    }
    if(isLoading){
        return(
            <HashLoader style={{color: "#B22F2F"}}/>
        )
    }

  return (
    <div>
        <h3>Listado Telefonos</h3>
        <div>
        {allPhones.map((phone)=>{
            return(
                <div className="container-list" key={phone.id}>
                   <img src={phone.imageFileName} alt="phone" width={100}/> 
                    
                    <Link to={`/phones/${phone.id}`}>{phone.name}</Link>

                </div>
            )
        })}
        </div>
    </div>
  )
}

export default PhoneList