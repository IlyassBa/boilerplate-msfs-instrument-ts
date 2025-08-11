export default class RoundingUtils {
    /**
     * Rounds a number to one decimal place.
     */
    static roundToOne(value: number): number {
        return Math.round(value * 10) / 10;
    }

    /**
     * Rounds a number to two decimal places.
     */
    static roundToTwo(value: number): number {
        return Math.round(value * 100) / 100;
    }

    /** 
     * Rounds a number to three decimal places.
     */
    static roundToThree(value: number): number {
        return Math.round(value * 1000) / 1000;
    }

    /**
     * Removes everything after the decimal point (and the decimal point itself).
     * Example: 123.456 -> 123
     */
    static removeDecimals(value: number): number {
        return Math.trunc(value);
    }   
}
