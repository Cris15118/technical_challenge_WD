import service from "./config.services";

const getAllPhone = ()=>{
    return service.get("/phones")
}

const getDetailsPhone = (phoneId) =>{
    return service.get(`/phones/${phoneId}`)
}

export {getAllPhone,
getDetailsPhone}