package com.example.bendtechnologist.bend_allowance;

import com.example.bendtechnologist.bend_allowance.entities.BendAllowance;
import com.example.bendtechnologist.bend_allowance.entities.BendAllowanceAngleData;
import com.example.bendtechnologist.bend_allowance.entities.BendAllowanceDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class BendAllowanceHelper {

    public BendAllowanceDetails calculateBendAllowanceDetails(BendAllowance bendAllowance) {

        BendAllowanceDetails data = new BendAllowanceDetails();

        data.setBendAllowance(bendAllowance);

        this.calculateAngles(data);

        return data;
    }

    private void calculateAngles(BendAllowanceDetails data) {

        float beginningAngle = 20F;
        float endingAngle = 175F;

        data.setBendAllowanceAngleDataList(new ArrayList<>());
        while (beginningAngle <= endingAngle) {
            data.getBendAllowanceAngleDataList().add(calculateBendAllowance(beginningAngle,
                    data.getBendAllowance().getKFactor(),
                    data.getBendAllowance().getMaterialThickness().getThickness(),
                    data.getBendAllowance().getToolSet().getPunchRadius()));
            beginningAngle += 5F;
        }


    }


    private BendAllowanceAngleData calculateBendAllowance(Float angle, Float kFactor, Float thickness, Float radius) {

        Float allowance = (((180F - angle) * (float) Math.PI) / (180F) * (radius + (kFactor * thickness)));

        BendAllowanceAngleData.BendAllowanceAngleDataBuilder builder = BendAllowanceAngleData.builder();
        builder.bendAllowanceValue(allowance);
        builder.angle(angle);
        builder.minimalBendLength(987F);

        return builder.build();

    }
}
