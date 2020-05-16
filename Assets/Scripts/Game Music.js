#pragma strict

public var SoundClip : AudioClip;
private var SoundSource : AudioSource;
private static var created : boolean = false;


function Awake()
{
    if (!created) {
        // this is the first instance - make it persist
        DontDestroyOnLoad(this.gameObject);
        created = true;
    } else {
        // this must be a duplicate from a scene reload - DESTROY!
        Destroy(this.gameObject);
    } 
    //DontDestroyOnLoad(gameObject);
    SoundSource = gameObject.AddComponent(AudioSource);
}


function Start()
{
    SoundSource.clip = SoundClip;
    SoundSource.Play(); 
    SoundSource.loop = true;
}