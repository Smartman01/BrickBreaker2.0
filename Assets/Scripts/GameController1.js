#pragma strict

var scoreText : GUIText;
//var highScoreText : GUIText;
private var score : int;
/*private var hiScore : int;
var highScoreKey : String = "HighScore";*/
var winText : GUIText;
var ball : GameObject;
var loseText : GUIText;
//var restartDelay : float = 2f;
//var restartDelay1 : float = 2f;
//private var restartTimer : float;
//var wait : GUIText;
var btm : GameObject;
var restart : GameObject;
//var next : GameObject;
var bronze : GameObject;
var silver : GameObject;
var gold : GameObject;
/*var powerUp : GameObject;
var spawnValues : Vector3;
var powerUpCount : int;
var spawnWait : float;
var startWait : float;
var waveWait : float;*/
var waves : GameObject;
public var counterText : GUIText;
public var seconds : float = 0;
var on : System.Boolean;

function Start () {
    score = 0;
    //hiScore = PlayerPrefs.GetInt(highScoreKey,0);
    UpdateScore ();
    winText.text = " ";
    loseText.text = " ";
    counterText.text = " ";
    //wait.text = " ";
    //SpawnWaves();
    /*if(PlayerPrefs.GetInt("HighScore") != null) {
        hiScore = PlayerPrefs.GetInt(highScoreKey);
    }*/
 }

function AddScore (newScoreValue : int) {
    score += newScoreValue;
    /*hiScore = score;
    PlayerPrefs.SetInt(highScoreKey, score);
    PlayerPrefs.Save();*/
    UpdateScore ();
}

    function UpdateScore () {
        scoreText.text = "Score: " + score;
        //highScoreText.text + "High Score: " + hiScore;

}

    function Update () {
        if(on == true) {
            seconds += Time.deltaTime;
            counterText.text = "Timer " + ": " + Mathf.Round(seconds);
        }
    if(score >= 1000000000) {
        gold.SetActive(true);
        winText.text = "You Completed the Challenge";
        ball.GetComponent.<Rigidbody2D>().constraints = RigidbodyConstraints2D.FreezePosition;
        waves.SetActive(false);
        //restartTimer += Time.deltaTime;
        //if(restartTimer >= restartDelay1) {
            //btm.SetActive(true);
           // next.SetActive(true);
        //}
    }
    Lose();
    //stars();
}

function Lose() {
    if (ball == null) {
        loseText.text = "You Lose";
        btm.SetActive(true);
        restart.SetActive(true);
        waves.SetActive(false);
        on = false;
        //wait.text = "Restarting in 3 seconds";
        //restartTimer += Time.deltaTime;
       // if(restartTimer >= restartDelay) {
            //then reload the currently loaded level.
            
        //}
    }
}

function stars() {
    if(score >= 100000) {
        bronze.SetActive(true);
    }
    if(score >= 10000000) {
        silver.SetActive(true);
    }
}

/*function SpawnWaves () {
    yield WaitForSeconds (startWait);
    while (true) {
        for ( var i : int= 0; i < powerUpCount; i++) {
            var spawnPosition : Vector3= new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
            var spawnRotation : Quaternion= Quaternion.identity;
            Instantiate (powerUp, spawnPosition, spawnRotation);
            yield WaitForSeconds (spawnWait);
        }
        yield WaitForSeconds (waveWait);
    }
}*/