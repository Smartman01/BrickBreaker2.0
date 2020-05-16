#pragma strict

var restartDelay : float;
private var restartTimer : float;
//var particle : GameObject;

function Start () {

}

function Update () {
    restartTimer += Time.deltaTime;
    if(restartTimer >= restartDelay) {
        Destroy(gameObject);
    }
}