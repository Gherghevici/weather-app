
export const CityApiCall = async (city:string,units:string)=>{
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1c0119c8e5e66d188ac381efbfe14b67&units=${units}`);
    const data = await resp.json();
    return data;
}

export const LatLongApiCall = async(lat:number,long:number,units:string)=>{
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1c0119c8e5e66d188ac381efbfe14b67&units=${units}`);
    const data = await resp.json();
    return data;
}

export const CityApiCallFor5Days=async(city:string,units:string)=>{
    const resp = await fetch(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1c0119c8e5e66d188ac381efbfe14b67&units=${units}`);
    const data = await resp.json();
    return data;
}