#pragma strict

var mute : GameObject;
var unmute : GameObject;

function Start () {

}

function Update () {
    if(mute.activeSelf && unmute.activeSelf) {
        mute.SetActive(false);
        unmute.SetActive(false);
    }

}