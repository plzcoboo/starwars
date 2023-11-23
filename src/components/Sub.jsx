import NavSlider from "./NavSlider";
import PeopleCon from "./PeopleCon";
import peopleImg from "../assets/api/peoples";
import Peoples from "../assets/api/people.json"
import './sub.scss'
import { useState } from "react";

const Sub = () => {
    const [peoplesInfo , setInfo] = useState(peopleImg)
    const [data , setPeoples] = useState(Peoples.results)
    const [conData, setConData] = useState({...peoplesInfo[0],name:"Luke Skywalker"})

    const conChange = (item,dataName,id) => {
        setConData({...item, name:dataName[item.id]})
        setInfo(peopleImg.map(item => item.id === id ? {...item , isOn:true}:{...item , isOn:false}))
    }

    let height = [] 
    let birthYear = []
    let gender = []
    data.map(item => height.push(item.height))
    data.map(item => birthYear.push(item.birth_year))
    data.map(item => gender.push(item.gender))

    return (
        <div className='inner'>
            <div className="con-box">
            <NavSlider peoplesInfo = {peoplesInfo} data ={data} conChange={conChange}/>
            <PeopleCon peoplesInfo = {peoplesInfo} data ={data} conData={conData} height={height} birthYear={birthYear} gender={gender}/>
            </div>
        </div>
    );
};

export default Sub;