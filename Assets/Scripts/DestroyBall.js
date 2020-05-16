#pragma strict

var ball : GameObject;

function OnTriggerEnter2D (other : Collider2D) {
    Destroy(ball);
}