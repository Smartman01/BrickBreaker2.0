#pragma strict


/*function OnCollisionEnter2D(coll: Collision2D) {
    Destroy (gameObject);
}*/

var scoreValue : int;
var gameController : GameController;
var brickParticle : Transform;
public var SoundClip : AudioClip;
private var SoundSource : AudioSource;

function Start () {
    var gameControllerObject : GameObject = GameObject.FindWithTag ("GameController");
    if (gameControllerObject != null) {
        gameController = gameControllerObject.GetComponent (GameController);
    }
    if (gameController == null) {
        Debug.Log ("Cannot find 'GameController' script");
    }
    SoundSource = gameObject.AddComponent(AudioSource);
    SoundSource.clip = SoundClip;
}

function OnCollisionEnter2D(coll : Collision2D) {
    
    SoundSource.Play();
    gameController.AddScore (scoreValue);
    Instantiate(brickParticle, transform.position, transform.rotation);
    Destroy(gameObject);
}