import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailsPhone } from "../services/phone.services";
import { HashLoader } from "react-spinners";

function PhoneDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [phoneDetails, setPhoneDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getDetailsPhone(params.id);
      
      setPhoneDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isLoading) {
    return <HashLoader style={{ color: "#B22F2F" }} />;
  }
  const {
    name,
    manufacturer,
    description,
    price,
    processor,
    color,
    imageFileName,
  } = phoneDetails;
  return (
    <div>
      <h3>Detalles del Telefono</h3>
      <div className="container-details">
      <img src={imageFileName} alt="phone" width={100}/>
      <h3>{name}</h3>
      <p>Marca: {manufacturer}</p>
      <p className="description"> Descripcion: {description}</p>
      <p>Precio: {price}</p>
      <p> Procesador: {processor}</p>
      <p>Color: {color}</p>
      </div>
    </div>
  );
}

export default PhoneDetails;
