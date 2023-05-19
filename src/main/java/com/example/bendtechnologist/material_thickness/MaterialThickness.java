package com.example.bendtechnologist.material_thickness;

import com.example.bendtechnologist.shared.AuditedEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "MATERIAL_THICKNESS")
public class MaterialThickness extends AuditedEntity {

    @ToString.Include
    @Column(name = "THICKNESS", nullable = false)
    private Double thickness;

}
