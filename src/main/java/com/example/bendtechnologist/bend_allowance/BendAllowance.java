package com.example.bendtechnologist.bend_allowance;

import com.example.bendtechnologist.material_group.MaterialGroup;
import com.example.bendtechnologist.material_thickness.MaterialThickness;
import com.example.bendtechnologist.shared.AuditedEntity;
import com.example.bendtechnologist.tool_set.ToolSet;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "BEND_ALLOWANCE")
@Entity
@Slf4j
public class BendAllowance extends AuditedEntity {

    @ManyToOne
    @JoinColumn(name = "THICKNESS_ID")
    private MaterialThickness materialThickness;

    @ManyToOne
    @JoinColumn(name = "MATERIAL_GROUP_ID")
    private MaterialGroup materialGroup;

    @ManyToOne
    @JoinColumn(name = "TOOL_SET_ID")
    private ToolSet toolSet;

    @Column(name = "ALLOWANCE_90_DEGREE")
    private Float bendAllowance;

    @Column(name = "K_FACTOR")
    @JsonProperty("kFactor")
    private Float kFactor;

    @PrePersist
    @PreUpdate
    public void calculateKFactor() {
        kFactor = ((4*(getToolSet().getPunchRadius()+ getMaterialThickness().getThickness())) - (2*bendAllowance) - ((float) Math.PI * getToolSet().getPunchRadius()))/( (float) Math.PI * getMaterialThickness().getThickness());
        if (kFactor > 1) kFactor = Float.valueOf(1);
        if (kFactor <= 0) throw new IncorrectKFactorValueException("K Factor <= 0");
        log.info("Preupdate action" + kFactor);
    }
}
