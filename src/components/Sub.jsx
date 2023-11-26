import NavSlider from "./NavSlider";
import PeopleCon from "./PeopleCon";
import peopleImg from "../assets/api/peoples";
import Peoples from "../assets/api/people.json"
import './sub.scss'
import { useEffect, useState } from "react";

const Sub = () => {
    const [cnt , setCnt] = useState(0)
    const [peoplesInfo , setInfo] = useState(peopleImg)
    const [data , setPeoples] = useState(Peoples.results)
    const [conData, setConData] = useState({...peoplesInfo[0],name:"Luke Skywalker"})
    let ConName =[]
    let height = [] 
    let birthYear = []
    let gender = []
    let time = ""
    data.map(item => height.push(item.height))
    data.map(item => birthYear.push(item.birth_year))
    data.map(item => gender.push(item.gender))
    data.map(item => ConName.push(item.name))


    const conChange = (item,dataName,id) => {
        setConData({...item, name:dataName[item.id]})
        setInfo(peopleImg.map(item => item.id === id ? {...item , isOn:true}:{...item , isOn:false}))
        setCnt(id)
    }

    const prev = () => {
        if(cnt <= 0) {setCnt(peopleImg.length-1)} else{setCnt(cnt-1)}
    }

    const next = () => {
        if(cnt === peopleImg.length-1) {setCnt(0)} else{setCnt(cnt+1)}        
    }

    
    useEffect(()=>{
        setConData({...peoplesInfo[cnt],name:ConName[cnt]})
        setInfo(peopleImg.map(item => item.id === cnt ? {...item , isOn:true}:{...item , isOn:false}))
    },[cnt])

    return (
        <div className='inner'>
            <div className="con-box">
            <NavSlider peoplesInfo = {peoplesInfo} data ={data} conChange={conChange} next={next} prev={prev}/>
            <PeopleCon peoplesInfo = {peoplesInfo} data ={data} conData={conData} height={height} birthYear={birthYear} gender={gender}/>
            </div>
        </div>
    );
};

export default Sub;