package com.example.bendtechnologist.material;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MaterialRepository extends JpaRepository<Material, Long> {
    @Query("""
            select m from Material m
            where upper(m.en10088) like upper(concat('%', :symbol, '%')) or upper(m.pn) like upper(concat('%', :symbol, '%')) or upper(m.aisi) like upper(concat('%', :symbol, '%')) or upper(m.din) like upper(concat('%', :symbol, '%')) or upper(m.gost) = upper(:symbol)""")
    List<Material> findMaterialByAnyName(@Param("symbol") String symbol);


}
