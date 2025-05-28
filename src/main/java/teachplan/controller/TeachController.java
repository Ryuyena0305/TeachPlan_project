package teachplan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import teachplan.model.dto.TeachDto;
import teachplan.service.TeachService;

import java.util.List;

@RestController
@RequestMapping("api/teachers")
@CrossOrigin("http://localhost:5173")
public class TeachController {
    @Autowired
    private TeachService teachService;

    @PostMapping("")
    public int onPost(@RequestBody TeachDto teachDto){
        System.out.println("TeachController.onPost");
        return teachService.onPost(teachDto);
    }

    @GetMapping("")
    public List<TeachDto > allGet(){
        System.out.println("TeachController.AllGet");
        return teachService.allGet();
    }
    @GetMapping("/{tnum}")
    public TeachDto  teachGet(@PathVariable("tnum") int tnum){
        System.out.println("TeachController.teachGet");
        return teachService.teachGet(tnum);
    }
    @PutMapping("")
    public int onUpdate(@RequestBody TeachDto teachDto){
        System.out.println("TeachController.onUpdate");
        return teachService.onUpdate(teachDto);
    }



}
