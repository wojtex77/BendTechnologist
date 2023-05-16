package com.example.bendtechnologist.bend_allowance;

import com.example.bendtechnologist.bend_allowance.entities.BendAllowance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BendAllowanceRepository extends JpaRepository<BendAllowance, Long> {

    @Query("""
            select b from BendAllowance b
            where b.materialThickness.id = ?1 and b.materialGroup.id = ?2 and b.toolSet.id = ?3""")
    Optional<BendAllowance> findBendAllowanceByIds(Long thicknessId, Long materialGroupId, Long toolSetId);


}
