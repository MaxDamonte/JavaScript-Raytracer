function log (str) {
        document.getElementById("log").textContent += str + "\n";
    }
    function render () {
        var w = document.getElementById("width").value,
            h = document.getElementById("height").value,
            zone = document.getElementById("zone");
        zone.textContent = "";
        var time = (new Date()).getTime();
        log("started at " + time + " with w=" + w + ", h=" + h);
        RayTracer.traceTo(zone, w, h, scene);
        time = (new Date()).getTime() - time;
        log("time taken: " + time + "ms");
    }
/////////////////////////////////////////////////////////////
//***************Change stuff for scene here***************//
/////////////////////////////////////////////////////////////
    var scene = {
        background: [0, 0, 0],
        shapes:     [
            {
                id:       "infinity",
                type:     "plane",
                offset:   0,
                surface:  "checkerboard",
                normal:   [0, 1, 0],
            },
            {
                id:       "big-sphere",
                type:     "sphere",
                radius:   1.3,
                surface:  "shiny",
                centre:   [-1, 1.5, -1],
            },
            {
                id:       "lil-sphere",
                type:     "sphere",
                radius:   0.6,
                surface:  "shiny",
                centre:   [-1, 0.7, 1.5],
            },
        ],
        camera: {
            position: [3, 2, 4],
            lookAt:   [-1, 0.5, 0],
        },
        lights: [
            {
                position: [-2, 2.5, 0],
                color:   [0.49, 0.07, 0.07]
            },
            {
                position: [1.5, 2.5, 1.5],
                color:   [0.07, 0.07, 0.49]
            },
            {
                position: [1.5, 2.5, -1.5],
                color:   [0.07, 0.49, 0.07]
            },
            {
                position: [0, 3.5, 0],
                color:   [0.21, 0.21, 0.35]
            },
        ]
    };
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
