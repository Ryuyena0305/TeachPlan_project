package teachplan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import teachplan.model.dto.HomeworkDto;
import teachplan.model.dto.LectureDto;
import teachplan.model.mapper.LectureMapper;

import java.util.List;

@Service
public class LectureService {
    @Autowired
    private LectureMapper lectureMapper;


    public int onPost(LectureDto lectureDto){
        System.out.println("LectureService.onPost");
        System.out.println("lectureDto = " + lectureDto);
        return lectureMapper.onPost(lectureDto);
    }

    public List<LectureDto> teacherGet(int tnum){
        System.out.println("LectureService.teacherGet");
        return lectureMapper.teacherGet(tnum);
    }


    public List<LectureDto> teacherWeekGet(int tnum){
        System.out.println("LectureService.teacherWeekGet");
        return lectureMapper.teacherWeekGet(tnum);
    }
    public List<LectureDto> teacherlectureGet(int tnum, boolean lecturetype){
        System.out.println("LectureService.teacherlectureGet");
        return lectureMapper.teacherlectureGet(tnum,lecturetype);
    }

    public List<LectureDto> allGet(){
        System.out.println("LectureController.allGet");
        return lectureMapper.allGet();
    }

    public LectureDto lectureGet( int lnum){
        System.out.println("HomeworkController.homeworkGet");
        return lectureMapper.lectureGet(lnum);
    }

    public int onUpdate( LectureDto lectureDto){
        System.out.println("LectureController.onUpdate");
        System.out.println("lectureDto = " + lectureDto);
        return lectureMapper.onUpdate(lectureDto);
    }

    public int onDelete(int lnum){
        System.out.println("LectureService.onDelete");
        return lectureMapper.onDelete(lnum);
    }

}
