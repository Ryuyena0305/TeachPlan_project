package teachplan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import teachplan.model.mapper.LectureMapper;

@Service
public class LectureService {
    @Autowired
    private LectureMapper lectureMapper;
}
