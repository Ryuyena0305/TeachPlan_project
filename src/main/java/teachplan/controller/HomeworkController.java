package teachplan.controller;

import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import teachplan.model.dto.HomeworkDto;
import teachplan.model.dto.StudentDto;
import teachplan.service.HomeworkService;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin("http://localhost:5173")
public class HomeworkController {
    @Autowired
    private HomeworkService homeworkService;

    @PostMapping
    public int onPost(@RequestBody HomeworkDto homeworkDto){
        System.out.println("HomeworkController.onPost");
        return homeworkService.onPost(homeworkDto);
    }
    @GetMapping("")
    public List<HomeworkDto> allGet(){
        System.out.println("HomeworkController.allGet");
        return homeworkService.allGet();
    }

    @GetMapping("/student")
    public List<HomeworkDto> studentGet(){
        System.out.println("HomeworkController.studentGet");
        return homeworkService.studentGet();
    }
    @GetMapping("/{lognum}")
    public HomeworkDto homeworkGet(@PathVariable("lognum") int lognum){
        System.out.println("HomeworkController.homeworkGet");
        return homeworkService.homeworkGet(lognum);
    }


    @GetMapping("/stnum/{stnum}")
    public List<HomeworkDto>  progressGet(@PathVariable("stnum") int stnum){
        System.out.println("HomeworkController.progressGet");
        return homeworkService.progressGet(stnum);
    }
    @PutMapping("")
    public int onUpdate(@RequestBody HomeworkDto homeworkDto){
        System.out.println("HomeworkController.onUpdate");
        return homeworkService.onUpdate(homeworkDto);
    }


}
