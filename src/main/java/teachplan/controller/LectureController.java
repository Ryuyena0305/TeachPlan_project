package teachplan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import teachplan.service.LectureService;

@RestController
@RequestMapping("/api/lecture")
public class LectureController {
    @Autowired
    private LectureService lectureService;
}
