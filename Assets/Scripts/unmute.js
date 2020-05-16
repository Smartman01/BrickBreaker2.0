#pragma strict

var Mute : GameObject;
var music : GameObject;
var playMusic : GameObject;

function Start () {

}

function Update () {
    Mute.SetActive(false);
    music.SetActive(true);
    playMusic.SetActive(true);
}