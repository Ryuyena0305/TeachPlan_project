package teachplan.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import teachplan.model.dto.StudentDto;

import java.util.List;

@Mapper
public interface StudentMapper {
    //{"stnum":"8","stname":"김학생", "stphone":"010-5647-3333","pphone":"010-2344-1111","stschool":"설화중","stgrade":2,"tnum":"1","ststate":0,"stnote":""}
    @Insert("insert into student (stname,stphone,pphone,stschool,stgrade,tnum,ststate,stnote,tnum) " +
            "values (#{stname},#{stphone},#{pphone},#{stschool},#{stgrade},#{tnum},1,#{stnote},#{tnum})")
    public int onPost(StudentDto studentDto);

    @Select("SELECT s.*, t.tname FROM student s JOIN teacher t ON s.tnum = t.tnum;")
    public List<StudentDto> allGet();

    @Select("select * from student where stnum=#{stnum}")
    public StudentDto  studentGet( int stnum);

    @Update("update student set stname=#{stname},stphone=#{stphone},pphone=#{pphone},stschool=#{stschool},stgrade=#{stgrade},tnum=#{tnum},ststate=#{ststate},stnote=#{stnote} where stnum=#{stnum}")
    public int onUpdate( StudentDto studentDto);
}
