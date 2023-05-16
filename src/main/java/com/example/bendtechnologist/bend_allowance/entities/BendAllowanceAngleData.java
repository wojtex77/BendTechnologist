package com.example.bendtechnologist.bend_allowance.entities;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BendAllowanceAngleData {

    private Float angle;
    private Float bendAllowanceValue;
    private Float minimalBendLength;
}
