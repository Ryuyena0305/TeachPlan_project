import React, { use, useEffect, useState } from "react";
import axios from "axios";
import "../css/Studentview.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Teacher(props) {
    // stnum int unsigned auto_increment,
    // stname varchar(20) not null,
    //     stphone varchar(13) unique not null,
    // pphone varchar(13) unique not null,
    // stschool varchar(20),
    // stgrade int ,
    // tnum int unsigned,
    // ststate boolean default 1,
    // stnote varchar(1000),

    const [ searchParams ] = useSearchParams();
    const searchStnum = searchParams.get('stnum');

    const[teacher, setTeacher] = useState({stname:'', stphone:'',pphone:'',stschool:'',stgrade:'',tnum:'',ststate:'',stnote:''});

    const navigate = useNavigate();

    useEffect(()=>{
        onView();
    },[searchStnum])

    const onView = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/api/students/${searchTid}`)
            setTeacher(response.data);
            console.log(response);
        }catch(error){
            console.log(error)
        }
    }
    const onValueChange =(e) =>{
        setTeacher({...teacher,[e.target.name]:e.target.value})
    }

    return(

        <div id ='container'>
            <h1>학원강사 상세 조회</h1>
            <div className="tview">
                {teacher&&(<>
                <div className='subTit'>이름</div>
                <input type="text" className="subCont" name="tname" value={teacher.tname} onChange={onValueChange}/>
                
                <div className='subTit'>연락처</div>
                <input type="text" className="subCont" name="tphone" value={teacher.tphone} onChange={onValueChange}/>
                
                <div className='subTit'>생년월일</div>
                <input type="text" className="subCont" name="tbirth" value={teacher.tbirth} onChange={onValueChange}/>

                <div className='subTit'>메모</div>
                <input type="textarea" className="subCont" name="tnote" value={teacher.tnote} onChange={onValueChange}/>

 
                    

               
                    



                </>)
                }

            </div>
        </div>
    );

};