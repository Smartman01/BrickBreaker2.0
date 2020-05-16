#pragma strict


var ballInitialVelocity : float;
var rb : Rigidbody2D;



function Awake() {
    rb = GetComponent.<Rigidbody2D>();
}

function Update() {
    if (Input.GetButtonDown("Fire1"))
    {
        transform.parent = null;
        rb.isKinematic = false;
        rb.AddForce(new Vector3(ballInitialVelocity, ballInitialVelocity, 0));
    }
}
