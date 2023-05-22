package com.example.bendtechnologist.bend_allowance;

import com.example.bendtechnologist.bend_allowance.entities.BendAllowance;
import com.example.bendtechnologist.bend_allowance.entities.BendAllowanceDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("bendAllowance")
@Slf4j
@CrossOrigin
public class BendAllowanceController {

    private final BendAllowanceRepository repository;
    private final BendAllowanceHelper helper;

    public BendAllowanceController(BendAllowanceRepository repository, BendAllowanceHelper helper) {
        this.repository = repository;
        this.helper = helper;
    }

    @PostMapping
    public ResponseEntity<BendAllowance> saveBendAllowance(@RequestBody BendAllowance bendAllowance) {

        log.info("savin bend allowance");
        BendAllowance savedAllowance = repository.save(bendAllowance);
        Optional<BendAllowance> dBAllowance = repository.findById(savedAllowance.getId());
        log.info(dBAllowance.get().toString());
        return new ResponseEntity<>(dBAllowance.get(), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<BendAllowance>> getAllAllowances() {

        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    @GetMapping("{thicknessId}/{materialGroupId}/{toolSetId}")
    public ResponseEntity<BendAllowance> getAllowanceByIds(@PathVariable Long thicknessId, @PathVariable Long materialGroupId, @PathVariable Long toolSetId) {

        Optional<BendAllowance> bendAllowanceByIds = repository.findBendAllowanceByIds(thicknessId, materialGroupId, toolSetId);

        return bendAllowanceByIds.map(bendAllowance -> new ResponseEntity<>(bendAllowance, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping("details/{id}")
    public ResponseEntity<BendAllowanceDetails> getDetails(@PathVariable("id") Long id){

        BendAllowance bendAllowance;
        Optional<BendAllowance> byId = repository.findById(id);
        if (byId.isPresent()){
            bendAllowance = byId.get();
            return new ResponseEntity<>(helper.calculateBendAllowanceDetails(bendAllowance), HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @GetMapping("{id}")
    public ResponseEntity<BendAllowance> getBendAllowanceById(@PathVariable("id") Long id){

        BendAllowance bendAllowance;
        Optional<BendAllowance> byId = repository.findById(id);
        if (byId.isPresent()){
            bendAllowance = byId.get();
            return new ResponseEntity<>(bendAllowance, HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
}
