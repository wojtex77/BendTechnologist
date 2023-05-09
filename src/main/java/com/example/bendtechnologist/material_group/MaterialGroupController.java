package com.example.bendtechnologist.material_group;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
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
import java.util.Optional;

@RestController
@RequestMapping("materialGroup")
@CrossOrigin
@Slf4j
public class MaterialGroupController implements MaterialGroupOperations {

    private final MaterialGroupRepository materialGroupRepository;

    public MaterialGroupController(MaterialGroupRepository materialRepository) {
        this.materialGroupRepository = materialRepository;
    }

    @GetMapping(path = "{id}")
    @Override
    public ResponseEntity<MaterialGroup> getMaterialById(@PathVariable("id") Long id) {

        Optional<MaterialGroup> material = materialGroupRepository.findById(id);
        return material.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    @Override
    public ResponseEntity<List<MaterialGroup>> getMaterials() {

        List<MaterialGroup> material = materialGroupRepository.findAll();

        return new ResponseEntity<>(material, HttpStatus.OK);
    }

    @PostMapping
    @Override
    public ResponseEntity<MaterialGroup> addMaterial(@RequestBody MaterialGroup material) {

        log.info(material.toString());
        MaterialGroup savedMaterial = materialGroupRepository.save(material);

        return new ResponseEntity<>(savedMaterial, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    @Override
    public ResponseEntity<MaterialGroup> deleteMaterial(@PathVariable("id") Long id) {

        if (materialGroupRepository.findById(id).isPresent()) {
            materialGroupRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
