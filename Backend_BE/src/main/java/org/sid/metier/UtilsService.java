package org.sid.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UtilsService {
    public String getPhoto(String fileName) ;

    public String modifyFileName(MultipartFile file) throws JsonParseException, JsonMappingException, IOException ;
}
