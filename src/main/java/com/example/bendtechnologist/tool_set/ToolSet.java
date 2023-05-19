package com.example.bendtechnologist.tool_set;

import com.example.bendtechnologist.shared.AuditedEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "TOOL_SET")
@Data
public class ToolSet extends AuditedEntity {

    @Column(name = "PUNCH_NAME")
    private String punchName;

    @Column(name = "DIE_NAME")
    private String dieName;

    @Column(name = "PUNCH_RADIUS")
    private Double punchRadius;

    @Column(name = "DIE_WIDTH")
    private Double dieWidth;

    @Column(name = "DESCRIPTION")
    private String description;
}
