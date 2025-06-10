package teachplan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import teachplan.model.dto.StudentDto;
import teachplan.model.mapper.StudentMapper;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentMapper studentMapper;

    public int onPost(StudentDto studentDto){
        System.out.println("StudentController.onPost");
        return studentMapper.onPost(studentDto);
    }

    public List<StudentDto> allGet(){
        System.out.println("StudentService.allGet");
        return studentMapper.allGet();
    }

    public List<StudentDto> printGroups( int tnum){
        System.out.println("StudentService.printGroups");
        System.out.println("tnum = " + tnum);
        return studentMapper.printGroups(tnum);
    }

    public StudentDto  studentGet( int stnum){
        System.out.println("StudentService.studentGet");
        System.out.println("stnum = " + stnum);
        return studentMapper.studentGet(stnum);
    }


    public int onUpdate( StudentDto studentDto){
        System.out.println("StudentController.onUpdate");
        System.out.println("studentDto = " + studentDto);
        return studentMapper.onUpdate(studentDto);
    }
}
