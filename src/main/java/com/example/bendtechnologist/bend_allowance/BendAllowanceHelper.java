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

        double angle = 20D;
        double endingAngle = 175D;

        data.setBendAllowanceAngleDataList(new ArrayList<>());
        while (angle <= endingAngle) {
            data.getBendAllowanceAngleDataList().add(createBendAllowance(angle,
                    data));
            angle += 5D;
        }


    }


    private BendAllowanceAngleData createBendAllowance(Double angle, BendAllowanceDetails data) {

        double allowance = calculateBendAllowance(angle,
                data.getBendAllowance().getKFactor(),
                data.getBendAllowance().getMaterialThickness().getThickness(),
                data.getBendAllowance().getToolSet().getPunchRadius());

        double minimalLength = getMinimalLength(angle,
                data.getBendAllowance().getToolSet().getDieWidth(),
                data.getBendAllowance().getMaterialThickness().getThickness(),
                data.getBendAllowance().getToolSet().getPunchRadius());

        BendAllowanceAngleData.BendAllowanceAngleDataBuilder builder = BendAllowanceAngleData.builder();
        builder.bendAllowanceValue(allowance);
        builder.angle(angle);
        builder.minimalBendLength(minimalLength);

        return builder.build();

    }

    private double getMinimalLength(Double angle, Double dieWidth, Double thickness, Double punchRadius) {

        double minimalLength = dieWidth / (2D * Math.sin(Math.toRadians(angle / 2D)));
        if (angle <= 90D) {
            double partialValue = (thickness + punchRadius) *
                    Math.tan(Math.toRadians((180D - angle) / 2D));
            minimalLength = minimalLength - (partialValue - thickness - punchRadius);
        }
        return minimalLength * 1.05D;
    }

    private double calculateBendAllowance(Double angle, Double kFactor, Double thickness, Double radius) {

        double firstPart = (radius + (thickness * kFactor)) * (Math.PI * 2) * (180 - angle) / 360;
        double secondPart;
        if (angle > 90D && angle <= 180D) {
            secondPart = (radius + thickness) * Math.tan(Math.toRadians((180 - angle) / 2));
        } else if (angle >= 10D && angle <= 90D) {
            secondPart = radius + thickness;
        } else secondPart = 0;

        return ((2 * secondPart) - firstPart);
    }
}
