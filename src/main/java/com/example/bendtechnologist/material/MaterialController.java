package com.example.bendtechnologist.material;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.websocket.server.PathParam;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
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
@RequestMapping("material")
@CrossOrigin
@Slf4j
public class MaterialController implements MaterialOperations {

    private final MaterialRepository materialRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public MaterialController(MaterialRepository materialRepository) {
        this.materialRepository = materialRepository;
    }

    @GetMapping(path = "{materialId}")
    @Override
    public ResponseEntity<Material> getMaterialById(@PathVariable("materialId") Long id) {

        Optional<Material> material = materialRepository.findById(id);
        return material.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    @Override
    public ResponseEntity<List<Material>> getMaterials() {

        List<Material> material = materialRepository.findAll();
        log.info("returning all materials");
        return new ResponseEntity<>(material, HttpStatus.OK);
    }

    @PostMapping
    @Override
    public ResponseEntity<Material> addMaterial(@RequestBody Material material) {

        Material savedMaterial = materialRepository.save(material);
        entityManager.clear();
        Material materialFromDb = materialRepository.findById(savedMaterial.getId()).get();

        log.info("saved material:" + savedMaterial.toString());
        return new ResponseEntity<>(materialFromDb, HttpStatus.OK);
    }

    @DeleteMapping("{materialId}")
    @Override
    public ResponseEntity<Material> deleteMaterial(@PathVariable("materialId") Long id) {

        if (materialRepository.findById(id).isPresent()) {
            materialRepository.deleteById(id);
            log.info("removed material by id: " + id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        log.error("Removing material by id: " + id + " failed");
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    @GetMapping("byName")
    public ResponseEntity<List<Material>> findByAnyName(@PathParam("name") String name) {

        List<Material> materialByAnyName = materialRepository.findMaterialByAnyName(name);

        if (CollectionUtils.isNotEmpty(materialByAnyName)) {
            return new ResponseEntity<>(materialByAnyName, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
