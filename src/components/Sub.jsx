import NavSlider from "./NavSlider";
import PeopleCon from "./PeopleCon";
import peopleImg from "../assets/api/peoples";
import Peoples from "../assets/api/people.json"
import './sub.scss'
import { useState } from "react";

const Sub = () => {
    const [peoplesInfo , setInfo] = useState(peopleImg)
    const [data , setPeoples] = useState(Peoples.results)
    return (
        <div className='inner'>
            <div className="con-box">
            <NavSlider peoplesInfo = {peoplesInfo} data ={data}/>
            <PeopleCon />
            </div>
        </div>
    );
};

export default Sub;