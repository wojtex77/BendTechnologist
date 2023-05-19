package com.example.bendtechnologist.bend_allowance.entities;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BendAllowanceAngleData {

    private Double angle;
    private Double bendAllowanceValue;
    private Double minimalBendLength;
}
