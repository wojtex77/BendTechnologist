package com.example.bendtechnologist.bend_allowance.entities;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class BendAllowanceDetails {

    BendAllowance bendAllowance;
    List<BendAllowanceAngleData> bendAllowanceAngleDataList;
}
