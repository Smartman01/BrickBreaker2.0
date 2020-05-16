#pragma strict

var Mute : GameObject;
var music : GameObject;

function Start () {

}

function Update () {
    Mute.SetActive(true);
    music.SetActive(false);
}