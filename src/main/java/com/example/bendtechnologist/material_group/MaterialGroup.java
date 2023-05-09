package com.example.bendtechnologist.material_group;

import com.example.bendtechnologist.shared.AuditedEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "MATERIAL_GROUP")
@Data
public class MaterialGroup extends AuditedEntity {

    @Column(name = "SHORT_NAME")
    private String shortName;

    @Column(name = "FULL_NAME")
    private String fullName;

}
