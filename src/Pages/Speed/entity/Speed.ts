export interface Speed {
    unit: SpeedUnit;
    speed: SimVarSpeedType
    getSpeed(): number;
    getSpeedWithUnit(): string;
}


export enum SpeedUnit {
    KNOTS = "knots",
    MACH = "mach",
    KPH = "kph",
    MPH = "mph"
}

// Enum for all types of speed SimVars in MSFS
export enum SimVarSpeedType {
    INDICATED = "AIRSPEED INDICATED",
    TRUE = "AIRSPEED TRUE",
    MACH = "AIRSPEED MACH",
    GROUND = "GROUND VELOCITY",
    VERTICAL = "VERTICAL SPEED",
    CALIBRATED = "AIRSPEED CALIBRATED",
    TRUE_CALIBRATED = "AIRSPEED TRUE CALIBRATED",
    SELECTED = "AIRSPEED SELECTED",
    MACH_MAX_OPERATING = "MACH MAX OPERATING",
    IAS_MAX_OPERATING = "IAS MAX OPERATING",
    TAS_MAX_OPERATING = "TAS MAX OPERATING",
    MACH_MAX = "MACH MAX",
    IAS = "IAS",
    TAS = "TAS",
    GS = "GS"
}