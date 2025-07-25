package teachplan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import teachplan.model.dto.StudentDto;
import teachplan.model.dto.TeachDto;
import teachplan.model.mapper.TeachMapper;

import java.util.List;

@Service
public class TeachService {
    @Autowired
    private TeachMapper teachMapper;


    public int onPost( TeachDto teachDto){
        System.out.println("TeachService.onPost");
        System.out.println("teachDto = " + teachDto);
        return teachMapper.onPost(teachDto);
    }

    public List<TeachDto > allGet(){
        System.out.println("TeachService.AllGet");
        return teachMapper.allGet();
    }



    public TeachDto  teachGet(int tnum){
        System.out.println("TeachService.teachGet");
        System.out.println("tnum = " + tnum);
        return teachMapper.teachGet(tnum);
    }

    public int onUpdate( TeachDto teachDto){
        System.out.println("TeachService.onUpdate");
        System.out.println("teachDto = " + teachDto);
        return teachMapper.onUpdate(teachDto);
    }



}
