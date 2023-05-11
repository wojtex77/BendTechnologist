package com.example.bendtechnologist.tool_set;

import jakarta.websocket.server.PathParam;
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

@RestController
@RequestMapping("toolSet")
@Slf4j
@CrossOrigin
public class ToolSetController {

    private final ToolSetRepository repository;

    public ToolSetController(ToolSetRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<List<ToolSet>> getAllToolSets() {

        log.info("getting all tool sets");
        List<ToolSet> allToolSets = repository.findAll();
        return new ResponseEntity<>(allToolSets, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ToolSet> saveToolSet(@RequestBody ToolSet toolSet) {

        ToolSet savedToolSet = repository.save(toolSet);
        return new ResponseEntity<>(savedToolSet, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<ToolSet> deleteToolSet(@PathVariable("id") Long id) {

        log.info("removing toolSet");
        repository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
