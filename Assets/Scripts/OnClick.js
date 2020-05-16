#pragma strict

var LoadingImage : GameObject;


function LoadScene (level : String) {
		LoadingImage.SetActive(true);
		Application.LoadLevel (level);
}
