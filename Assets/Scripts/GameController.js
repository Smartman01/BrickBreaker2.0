#pragma strict

var scoreText : GUIText;
private var score : int;
var winText : GUIText;
var ball : GameObject;
var loseText : GUIText;
var restartDelay : float = 3f;
var restartDelay1 : float = 2f;
private var restartTimer : float;
var wait : GUIText;
var btm : GameObject;
var next : GameObject;
var bronze : GameObject;
var silver : GameObject;
var gold : GameObject;
var lvl : GameObject;
var interactableb : UnityEngine.UI.Button;
var lock : GameObject;
var ad : GameObject;
/*var powerUp : GameObject;
var spawnValues : Vector3;
var powerUpCount : int;
var spawnWait : float;
var startWait : float;
var waveWait : float;*/


function Awake () {
    interactableb.GetComponent.<UnityEngine.UI.Button>();
}

function Start () {
    score = 0;
    UpdateScore ();
    winText.text = " ";
    loseText.text = " ";
    wait.text = " ";
    //SpawnWaves();
}

function AddScore (newScoreValue : int) {
    score += newScoreValue;
    UpdateScore ();
}

function UpdateScore () {
    scoreText.text = "Score: " + score;
}

function Update () {
    if(score >= 150) {
        LVLMAN();
        gold.SetActive(true);
        winText.text = "Great Job";
        ball.GetComponent.<Rigidbody2D>().constraints = RigidbodyConstraints2D.FreezePosition;
        restartTimer += Time.deltaTime;
        if(restartTimer >= restartDelay1) {
            btm.SetActive(true);
            next.SetActive(true);
            if(Application.loadedLevelName == "lvl5" || Application.loadedLevelName == "lvl10" || Application.loadedLevelName == "lvl15" || Application.loadedLevelName == "lvl20" || Application.loadedLevelName == "lvl25" || Application.loadedLevelName == "lvl30" || Application.loadedLevelName == "lvl35" || Application.loadedLevelName == "lvl40" || Application.loadedLevelName == "lvl45"|| Application.loadedLevelName == "lvl50") {
                ad.SetActive(true);
            }
        }
    }
    Lose();
    stars();
}

function Lose() {
    if (winText && ball == null) {
        loseText.text = "You Lose";
        wait.text = "Restarting in 3 seconds";
        restartTimer += Time.deltaTime;
        if(restartTimer >= restartDelay) {
            //then reload the currently loaded level.
            Application.LoadLevel(Application.loadedLevel);
        }
    }
}

function stars() {
    if(score >= 50) {
        bronze.SetActive(true);
    }
    if(score >= 100) {
        silver.SetActive(true);
    }
}

function LVLMAN() {
    PlayerPrefs.SetInt("NewLevel2Save", 1);
    interactableb.interactable = true;
    lock.SetActive(false);
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