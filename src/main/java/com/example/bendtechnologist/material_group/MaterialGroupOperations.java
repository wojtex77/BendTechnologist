package com.example.bendtechnologist.material_group;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MaterialGroupOperations {

    ResponseEntity<MaterialGroup> getMaterialById(Long id);

    ResponseEntity<List<MaterialGroup>> getMaterials();

    ResponseEntity<MaterialGroup> addMaterial(MaterialGroup material);

    ResponseEntity<MaterialGroup> deleteMaterial(Long id);
}
