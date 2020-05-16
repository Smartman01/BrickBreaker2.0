#pragma strict

public var scrollSpeed : float;

private var savedOffset : Vector2;

function Start () {
    savedOffset = GetComponent.<Renderer>().sharedMaterial.GetTextureOffset ("_MainTex");
}

function Update () {
     var y : float = Mathf.Repeat (Time.time * scrollSpeed, 1);
     var offset : Vector2 = new Vector2 (savedOffset.x, y);
    GetComponent.<Renderer>().sharedMaterial.SetTextureOffset ("_MainTex", offset);
}

function OnDisable () {
    GetComponent.<Renderer>().sharedMaterial.SetTextureOffset ("_MainTex", savedOffset);
}