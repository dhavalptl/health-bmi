enum BMIType {
    UNDER_WEIGHT = "Under Weight",
    NORMAL = "Normal",
    OVER_WEIGHT = "Over Weight",
    OBESE = "Obese",
    NORESULT = ""
}

/**
 * Calculate Metric BMI
 * @param weight `weight` in `kg`
 * @param height `height` in `cm`
 */
export function getMetricBMI(weight: number, height: number): number {
    return parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));
}

/**
 * Get BMI type based on weight and height
 * @param bmi calculated `bmi` value
 */
export function getBMIType(bmi: number): BMIType {
    if(bmi > 0 && bmi < 18.5) {
        return BMIType.UNDER_WEIGHT;
    } else if(bmi >= 18.5 && bmi < 25.0) {
        return BMIType.NORMAL;
    } else if(bmi >= 25 && bmi < 30.0) {
        return BMIType.OVER_WEIGHT;
    } else if(bmi >= 30) {
        return BMIType.OBESE;
    } else {
        return BMIType.NORESULT;
    }
}