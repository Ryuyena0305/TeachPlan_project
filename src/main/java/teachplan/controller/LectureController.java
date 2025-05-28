package teachplan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import teachplan.model.dto.HomeworkDto;
import teachplan.model.dto.LectureDto;
import teachplan.model.dto.StudentDto;
import teachplan.service.LectureService;

import java.util.List;

@RestController
@RequestMapping("/api/lectures")
@CrossOrigin("http://localhost:5173")
public class LectureController {
    @Autowired
    private LectureService lectureService;

    //{"stnum":"1","week":"월","starttime":"19:00:00","endtime":"21:00:00","lecturetype":1}

    @PostMapping
    public int onPost(@RequestBody LectureDto lectureDto){
        System.out.println("LectureController.onPost");
        return lectureService.onPost(lectureDto);
    }


    @GetMapping("/teacher")
    public List<LectureDto> teacherGet(@RequestParam("tnum") int tnum){
        System.out.println("LectureController.teacherGet");
        return lectureService.teacherGet(tnum);
    }
    @GetMapping("/teacherweek")
    public List<LectureDto> teacherWeekGet(@RequestParam("tnum") int tnum, @RequestParam("week")String week){
        System.out.println("LectureController.teacherGet");
        return lectureService.teacherWeekGet(tnum,week);
    }

    @GetMapping("/teachertype")
    public List<LectureDto> teacherlectureGet(@RequestParam("tnum")int tnum, @RequestParam("lecturetype") boolean lecturetype){
        System.out.println("LectureController.teacherlectureGet");
        return lectureService.teacherlectureGet(tnum,lecturetype);
    }


    @GetMapping
    public List<LectureDto> allGet(){
        System.out.println("LectureController.allGet");
        return lectureService.allGet();
    }
    @GetMapping("/view")
    public LectureDto lectureGet(@RequestParam("lnum") int lnum){
        System.out.println("LectureController.lectureGet");
        return lectureService.lectureGet(lnum);
    }

    @PutMapping("")
    public int onUpdate(@RequestBody LectureDto lectureDto){
        System.out.println("LectureController.onUpdate");

        return lectureService.onUpdate(lectureDto);
    }
    @DeleteMapping
    public int onDelete(@RequestParam("lnum") int lnum){
        System.out.println("LectureController.onDelete");
        return lectureService.onDelete(lnum);
    }
}
