import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

const Left = ()=>{

    return (
        <section className='bg-gray-100 w-1/3 rounded-l-xl flex flex-col justify-between px-6 py-10'>
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="pt-1"/>
                    <input className="w-2/3 bg-transparent outline-none" placeholder="Search for places..."/>
                </div>
                <FontAwesomeIcon icon={faLocationCrosshairs} />
            </div>
            <p>img</p>

            <div>
                <p>grade</p>
                <div>
                    <p>zi</p>
                    <p>ora</p>
                </div>
            </div>
            <div >
                <div className="flex"><p>icon</p><p>Soare</p></div>
                <div className="flex"><p>icon</p><p>Umiditate</p></div>
            </div>
            <p>
                poza?
            </p>
        </section>
    );
}

export default Left;