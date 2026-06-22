function lengthconvert(value, unit) {
    if (unit == 1)
    {
        return value + " km = " + (value * 1000) + " m";
    }
    else if (unit == 2)
    {
        return value + " m = " + (value / 1000) + " km";
    }
}
module.exports = lengthconvert;