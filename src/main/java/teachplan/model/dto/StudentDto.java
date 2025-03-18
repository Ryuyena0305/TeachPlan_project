package teachplan.model.dto;

import lombok.*;
@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {

        private int stnum;
        private String stname;
        private String stphone;
        private String pphone;
        private String stschool;
        private int stgrade;
        private int tnum;
        private boolean ststate;
        private String stnote;
        private String tname;

}
