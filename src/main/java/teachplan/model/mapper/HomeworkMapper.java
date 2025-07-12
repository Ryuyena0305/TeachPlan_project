package teachplan.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.web.bind.annotation.PathVariable;
import teachplan.model.dto.HomeworkDto;
import teachplan.model.dto.StudentDto;

import java.util.List;

@Mapper
public interface HomeworkMapper {
    @Insert("insert into homework(stnum,progress,textbook,page,done) values " +
            "(#{stnum},#{progress},#{textbook},#{page},0)")
    public int onPost( HomeworkDto homeworkDto);

    @Select("select * from homework")
    public List<HomeworkDto> allGet();

    @Select("select student.stnum, student.stname,student.stschool,student.stgrade,(select progress from homework where homework.stnum=student.stnum order by lognum desc limit 1) as progress from student;")
    public List<HomeworkDto> studentGet();

    @Select("select * from homework where lognum = #{lognum}")
    public HomeworkDto homeworkGet( int lognum);


    @Select("select * from homework where stnum = #{stnum}")
    public List<HomeworkDto> progressGet( int stnum);

    @Update("update homework set stnum = #{stnum}, progress = #{progress}, textbook = #{textbook}, " +
            "page = #{page}, done = #{done} where lognum = #{lognum}")
    public int onUpdate(HomeworkDto homeworkDto);
}
