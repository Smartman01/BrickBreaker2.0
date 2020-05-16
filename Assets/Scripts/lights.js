#pragma strict

// Interpolate light color between two colors back and forth
var duration : float = 5.0;
var color0 : Color = Color.red;
var color1 : Color = Color.blue;

var lt: Light;

function Start () {
    lt = GetComponent.<Light>();
}


function Update () {
    // set light color
    var t : float = Mathf.PingPong(Time.time, duration) / duration;
    lt.color = Color.Lerp(color0, color1, t);
}