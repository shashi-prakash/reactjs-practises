import { useState, useEffect } from "react";
import countryJson from "./json/countryJson.json";
export default function CountryCode() {
  const [getContry, setCountry] = useState([]);
  const [countryId, setCountryId] = useState('');

  useEffect(() => {
    setCountry(countryJson);
  });
console.log(getContry)
  const handleCountry = (e) =>{
    const getCountryid = e.target.value;
    setCountryId(getCountryid)
  }
  const style = {
    display: "flex",
  };

  return (
    <>
      <div className="contry-code-container">
        <div className="row" style={style}>
          <div className="left-item">
            <label htmlFor="">Selct Country</label>
            <select name="" id="" onChange={(e)=>handleCountry(e)}>
              {getContry.map((countryData, index) => {
                return (
                  <option value= {countryData.name} key={index}>
                    {countryData.name}
                  </option>
                );
              })}
            </select>
            
          </div>
          <div className="right-item">
            <label htmlFor="">Country Code</label>
            <input type="text" />
           
          </div>
        </div>
      </div>
    </>
  );
}
