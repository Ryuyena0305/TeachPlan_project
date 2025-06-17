import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Studentview.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Studentview() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchStnum = searchParams.get('stnum');
    const [teachers, setTeachers] = useState([]);
    const [student, setStudent] = useState({
        stname: '', stphone: '', pphone: '', stschool: '', stgrade: '', tnum: '', ststate: '', stnote: ''
    });

    useEffect(() => {
        onView();
        onTeacherView();
    }, [searchStnum]);

    const onTeacherView = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/teachers");
            setTeachers(response.data);
        } catch (error) {
            console.error("Error fetching teachers:", error);
        }
    };

    const onView = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/students/${searchStnum}`);
            setStudent(response.data);
        } catch (error) {
            console.error("Error fetching student:", error);
        }
    };

    const onValueChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };



    const onUpdate = async () => {
    try {
        await axios.put(`http://localhost:8080/api/students`, student);
        alert("수정이 완료되었습니다.");
        navigate("/student"); // 필요한 경로로 이동
    } catch (error) {
        console.error(error);
        alert("수정 중 오류가 발생했습니다.");
    }
};


    return (
        <div id='container'>
            <h1>
                학생 상세 조회 - {student.stname}
                {student.ststate !== '' && (
                    <span style={{ marginLeft: '10px', fontSize: '16px', color: student.ststate ? 'green' : 'red' }}>
                        [{student.ststate ? "재원중" : "휴원중"}]
                    </span>
                )}
            </h1>

            <div className="tview">
                <div className='subTit'>이름</div>
                <input type="text" className="subCont" name="stname" value={student.stname} onChange={onValueChange} />

                <div className='subTit'>연락처</div>
                <input type="text" className="subCont" name="stphone" value={student.stphone} onChange={onValueChange} />

                <div className='subTit'>부모님 연락처</div>
                <input type="text" className="subCont" name="pphone" value={student.pphone} onChange={onValueChange} />

                <div className='subTit'>학교</div>
                <input type="text" className="subCont" name="stschool" value={student.stschool} onChange={onValueChange} />

                <div className='subTit'>학년</div>
                <input type="text" className="subCont" name="stgrade" value={student.stgrade} onChange={onValueChange} />

                <div className='subTit'>담당 강사</div>
                <select className="subCont" name="tnum" value={student.tnum} onChange={onValueChange}>
                    {teachers.map(teacher => (
                        <option key={teacher.tnum} value={teacher.tnum}>
                            {teacher.tname}
                        </option>
                    ))}
                </select>

                <div className='subTit'>메모</div>
                <textarea className="subCont" name="stnote" value={student.stnote} onChange={onValueChange} />


                <button className="update-btn" onClick={onUpdate}>수정</button>
            </div>
        </div>
    );
}
