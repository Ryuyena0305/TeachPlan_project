package teachplan.service;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import teachplan.model.dto.HomeworkDto;
import teachplan.model.dto.StudentDto;
import teachplan.model.mapper.HomeworkMapper;

import java.util.List;

@Service
public class HomeworkService {
    @Autowired
    private HomeworkMapper homeworkMapper;

    public int onPost( HomeworkDto homeworkDto){
        System.out.println("HomeworkService.onPost");
        System.out.println("homeworkDto = " + homeworkDto);
        return homeworkMapper.onPost(homeworkDto);
    }
    public List<HomeworkDto> allGet(){
        System.out.println("HomeworkController.allGet");
        return homeworkMapper.allGet();
    }


    public HomeworkDto homeworkGet( int lognum){
        System.out.println("HomeworkService.homeworkGet");
        System.out.println("lognum = " + lognum);
        return homeworkMapper.homeworkGet(lognum);
    }

    public List<HomeworkDto> progressGet(int stnum){
        System.out.println("HomeworkService.progressGet");
        System.out.println("stnum = " + stnum);
        return homeworkMapper.progressGet(stnum);
    }

    public int onUpdate(HomeworkDto homeworkDto){
        System.out.println("HomeworkService.onUpdate");
        System.out.println("homeworkDto = " + homeworkDto);
        return homeworkMapper.onUpdate(homeworkDto);
    }
}
