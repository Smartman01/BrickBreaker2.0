#pragma strict


/*function OnCollisionEnter2D(coll: Collision2D) {
    Destroy (gameObject);
}*/

var scoreValue : int;
var gameController1 : GameController1;
var brickParticle : Transform;
//var brick : GameObject;
var box : BoxCollider2D;
//var restartDelay : float = 30f;
//private var restartTimer : float;

function Awake() {
    box = GetComponent.<BoxCollider2D>();
    box.enabled = true;
}
function Start () {
    var gameControllerObject : GameObject = GameObject.FindWithTag ("GameController1");
    if (gameControllerObject != null) {
        gameController1 = gameControllerObject.GetComponent (GameController1);
    }
    if (gameController1 == null) {
        Debug.Log ("Cannot find 'GameController1' script");
    }
}

function OnCollisionEnter2D(coll : Collision2D) {
    gameController1.AddScore (scoreValue);
    Instantiate(brickParticle, transform.position, transform.rotation);
    
    Destroy(gameObject);
}

    /*function Update() {
        Instantiate();
    }
    function Instantiate() {
        restartTimer += Time.deltaTime;
        if(restartTimer >= restartDelay) {
            for(var i = 0; i <= 10; i++) {
                Instantiate(brick, brick.transform.position, brick.transform.rotation);
            }
        }
    }*/