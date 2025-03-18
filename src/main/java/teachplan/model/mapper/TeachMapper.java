package teachplan.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import teachplan.model.dto.TeachDto;

import java.util.List;

@Mapper
public interface TeachMapper {
    //{"tnum":"3","tname":"원장선생님2", "tbirth":"1990-01-01", "tphone":"010-2344-2341","id":"teacher1","pwd":"teach"}
    @Insert("insert into teacher (tname, tbirth, tphone,id,pwd) values (#{tname},#{tbirth}, #{tphone},#{id},#{pwd})")
    public int onPost( TeachDto teachDto);

    @Select("select * from teacher")
    public List<TeachDto> allGet();

    @Select("select * from teacher where tnum=#{tnum}")
    public TeachDto teachGet(int tnum);

    @Update("update teacher set tname = #{tname}, tbirth = #{tbirth}, tphone = #{tphone}, id = #{id}, pwd = #{pwd} WHERE tnum = #{tnum}")
    public int onUpdate( TeachDto teachDto );
}
