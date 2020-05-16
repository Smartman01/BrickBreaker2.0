#pragma strict

var paddlespeed : float;

var playerpos : Vector3 = new Vector3(0, -4f,0);

function Update() {
    if(Input.touchCount == 1) {
        var xpos : float = transform.position.x + (Input.touches[0].deltaPosition.x * paddlespeed);
        playerpos = new Vector3(Mathf.Clamp(xpos, -1.75f, 1.75f), -4f, 0f);
        transform.position = playerpos;
    }
}

/*function Update() {
    if(Input.touchCount == 1) {
        transform.Translate(Input.touches[0].deltaPosition.x * paddlespeed, 0f, 0f);
    }
}*/