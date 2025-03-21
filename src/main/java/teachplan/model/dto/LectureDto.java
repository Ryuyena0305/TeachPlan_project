package teachplan.model.dto;

import lombok.*;
import org.springframework.stereotype.Service;

@Getter @Setter
@Builder @ToString
@NoArgsConstructor
@AllArgsConstructor
public class LectureDto {
    private int tnum ;
    private int lnum ;
    private int stnum ;
    private String week;
    private String starttime;
    private String endtime;
    private boolean lecturetype;
    private String stname;
    private String tname;
}
