#pragma strict

/*var brick1 : GameObject;
var brick2 : GameObject;
var brick3 : GameObject;
var brick4 : GameObject;*/
//var spawnValues : Vector3;
//var brickCount : int;
public var bricks : GameObject[];
var spawnWait : float;
var startWait : float;
var waveWait : float;

function Start () {
    SpawnWaves ();
}

function SpawnWaves () {
    yield WaitForSeconds (startWait);
    while (true)
    {
        for ( var i : int= 0; i < bricks.length; i++)
        {
             //var spawnPosition : Vector3= new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
             //var spawnRotation : Quaternion= Quaternion.identity;
            Instantiate(bricks[i]);
            yield WaitForSeconds (spawnWait);
        }
    yield WaitForSeconds (waveWait);
}
}