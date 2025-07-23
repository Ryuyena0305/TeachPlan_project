package teachplan.model.mapper;

import org.apache.ibatis.annotations.*;
import teachplan.model.dto.LectureDto;

import java.util.List;

@Mapper
public interface LectureMapper {

    @Insert("insert into lecture(stnum,week,starttime,endtime,lecturetype) values" +
            "(#{stnum},#{week},#{starttime},#{endtime},#{lecturetype})")
    public int onPost(LectureDto lectureDto);

    @Select("SELECT lecture.lnum,lecture.stnum,lecture.week,lecture.starttime,lecture.endtime,lecture.lecturetype,student.stname,teacher.tname " +
            "FROM lecture " +
            "JOIN student ON lecture.stnum=student.stnum " +
            "JOIN teacher ON student.tnum=teacher.tnum " +
            "WHERE teacher.tnum = #{tnum} " +
            "ORDER BY lecture.week ")
    public List<LectureDto> teacherGet(int tnum);

    @Select("SELECT lecture.lnum,lecture.stnum,lecture.week,lecture.starttime,lecture.endtime,lecture.lecturetype,student.stname,teacher.tname " +
            "FROM lecture JOIN student ON lecture.stnum = student.stnum JOIN teacher ON student.tnum = teacher.tnum " +
            "WHERE teacher.tnum = #{tnum} ")
    public List<LectureDto> teacherWeekGet(int tnum);

    @Select("SELECT teacher.tname, lecture.week, lecture.starttime, lecture.endtime, lecture.lecturetype, student.stname " +
            "FROM lecture JOIN student ON lecture.stnum = student.stnum JOIN teacher ON student.tnum = teacher.tnum WHERE teacher.tnum = #{tnum} " +
            " AND lecture.lecturetype = #{lecturetype} " +
            "ORDER BY lecture.week")
    public List<LectureDto> teacherlectureGet(int tnum, boolean lecturetype);

    @Select("select * from lecture")
    public List<LectureDto> allGet();


    @Select("select * from lecture where lnum = #{lnum}")
    public LectureDto lectureGet( int lnum);

    @Update("update lecture set week = #{week}, starttime = #{starttime}, " +
            "endtime = #{endtime} , lecturetype = #{lecturetype} where lnum = #{lnum} ")
    public int onUpdate( LectureDto lectureDto);

    @Delete("delete from lecture where lnum = #{lnum}")
    public int onDelete(int lnum);

}
