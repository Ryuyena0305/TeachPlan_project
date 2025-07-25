package teachplan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import teachplan.model.dto.StudentDto;
import teachplan.service.StudentService;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin("http://localhost:5173")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping
    public int onPost(@RequestBody StudentDto studentDto){
        System.out.println("StudentController.onPost");
        return studentService.onPost(studentDto);
    }

    @GetMapping("")
    public List<StudentDto> allGet(){
        System.out.println("StudentController.allGet");
        return studentService.allGet();
    }

    @GetMapping("/teach/{tnum}")
    public List<StudentDto> printGroups(@PathVariable("tnum") int tnum){
        System.out.println("StudentController.printGroups");
        return studentService.printGroups(tnum);
    }

    @GetMapping("/{stnum}")
    public StudentDto  studentGet(@PathVariable("stnum") int stnum){
        System.out.println("StudentController.teachGet");
        return studentService.studentGet(stnum);
    }
    @PutMapping("")
    public int onUpdate(@RequestBody StudentDto studentDto){
        System.out.println("StudentController.onUpdate");
        return studentService.onUpdate(studentDto);
    }

}
