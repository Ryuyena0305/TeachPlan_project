package teachplan.model.dto;

import lombok.*;

@Getter @Setter
@Builder @ToString
@NoArgsConstructor
@AllArgsConstructor
public class TeachDto {
    private int tnum;
    private String tname;
    private String tbirth;
    private String tphone;
    private String id;
    private String pwd;

}
