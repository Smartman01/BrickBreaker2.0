#pragma strict
import UnityEngine.Advertisements; // Import the Unity Ads namespace.

#if !UNITY_ADS // If the Ads service is not enabled...
    public var gameId : "1081649"; // Set this value from the inspector.
    public var enableTestMode : boolean = true;
#endif

function Start () : IEnumerator
    {
        #if !UNITY_ADS // If the Ads service is not enabled...
            if (Advertisement.isSupported) { // If runtime platform is supported...
                Advertisement.Initialize(gameId, enableTestMode); // ...initialize.
            }
        #endif

        // Wait until Unity Ads is initialized,
        //  and the default ad placement is ready.
        while (!Advertisement.isInitialized || !Advertisement.IsReady()) {
            yield WaitForSeconds(0);
        }

        // Show the default ad placement.
        Advertisement.Show();
    }
