function time(seconds)
{
    var hour = Math.floor(seconds / 3600);
    var min = Math.floor((seconds % 3600) / 60);
    var sec =seconds%60;

    return "Hour = " + hour + " Minute = " + min + "seconds=" + sec;
}
module.exports=time;