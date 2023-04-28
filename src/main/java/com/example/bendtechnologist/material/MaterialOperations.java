package com.example.bendtechnologist.material;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MaterialOperations {

    ResponseEntity<Material> getMaterialById(Long id);

    ResponseEntity<List<Material>> getMaterials();

    ResponseEntity<Material> addMaterial(Material material);

    ResponseEntity<Material> deleteMaterial(Long id);

    ResponseEntity<List<Material>> findByAnyName(String name);
}
