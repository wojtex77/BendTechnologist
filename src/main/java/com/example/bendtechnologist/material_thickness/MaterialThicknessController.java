package com.example.bendtechnologist.material_thickness;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaTypeEditor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("materialThickness")
@Slf4j
@CrossOrigin
public class MaterialThicknessController {

    private final MaterialThicknessRepository repository;

    public MaterialThicknessController(MaterialThicknessRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<MaterialThickness> saveMaterialThickness(@RequestBody MaterialThickness materialThickness){

      log.info("saving material thickness");
      repository.save(materialThickness);

      return new ResponseEntity<>(materialThickness, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<MaterialThickness>> getAllMaterialThickness(){

        log.info("exposing all materialThickness");
        List<MaterialThickness> materialThicknesses = repository.findAll(Sort.by(Sort.Direction.ASC, "thickness"));

        return new ResponseEntity<>(materialThicknesses, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<MaterialThickness> deleteThickness(@PathVariable("id") Long id){

        log.info("removing thickness");
        repository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
