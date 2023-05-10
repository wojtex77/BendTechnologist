package com.example.bendtechnologist.material;

import com.example.bendtechnologist.material_group.MaterialGroup;
import com.example.bendtechnologist.shared.AuditedEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "MATERIAL")
@Data
public class Material extends AuditedEntity {

    @Column(name = "EN_10088")
    private String en10088;

    @Column(name = "PN")
    private String pn;

    @Column(name = "AISI")
    private String aisi;

    @Column(name = "DIN")
    private String din;

    @Column(name = "GOST")
    private String gost;

    @Column(name = "DENSITY")
    private Float density;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "MATERIAL_GROUP_ID", nullable = false)
    private MaterialGroup materialGroup;

}
