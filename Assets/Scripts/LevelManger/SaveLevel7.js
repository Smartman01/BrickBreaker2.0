#pragma strict

var lvl : GameObject;
var interactableb : UnityEngine.UI.Button;
var lock : GameObject;


function Awake () {
    interactableb.GetComponent.<UnityEngine.UI.Button>();
}

function Start () {
    PlayerPrefs.SetInt("NewLevel7Save", 1);
        interactableb.interactable = true;
        lock.SetActive(false);
}