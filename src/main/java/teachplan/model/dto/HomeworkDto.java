package teachplan.model.dto;

import lombok.*;

@Getter @Setter
@Builder @ToString
@NoArgsConstructor
@AllArgsConstructor
public class HomeworkDto {
    private int lognum;
    private int stnum;
    private String progress;
    private String textbook;
    private String page;
    private boolean done;
    private String stname;

}
