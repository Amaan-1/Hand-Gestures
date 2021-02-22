p_1 = "";
p_2 = "";

Webcam.set({
    width: 300,
    height: 200,
    image_format: "png",
    png_quality: 200
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("snap").innerHTML =
            "<img id='capture' src='" + data_uri + "'>";
    });
}

console.log("ml5.version", ml5.version);

classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/ApVTraoIX/model.json",
    modelLoaded
);

function modelLoaded() {
    console.log("Model Loaded . . .");
}

function predict() {
    image = document.getElementById("capture");
    classifier.classify(image, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("put_gesture").innerHTML = results[0].label;
        document.getElementById("put_gesture_2").innerHTML = results[1].label;
        p_1 = results[0].label;
        p_2 = results[1].label;
        speak();
        if (p_1 == "Clap") {
            document.getElementById("new_gesture").innerHTML = "&#x1F44F;&#x1F3FB;";
        }
        if (p_1 == "Rock") {
            document.getElementById("new_gesture").innerHTML = "&#x1F918;&#x1F3FB;";
        }
        if (p_1 == "Thumbs UP") {
            document.getElementById("new_gesture").innerHTML = "&#128077;&#127995;";
        }
        if (p_1 == "Hi!") {
            document.getElementById("new_gesture").innerHTML = "&#128400;&#127995;";
        }
        if (p_1 == "Bye") {
            document.getElementById("new_gesture").innerHTML = "&#128075;&#127995;";
        }
        if (p_1 == "Amazing") {
            document.getElementById("new_gesture").innerHTML = "&#128076;&#127995;";
        }
        if (p_1 == "Bad") {
            document.getElementById("new_gesture").innerHTML = "&#128078;&#127995;";
        }
        if (p_1 == "Point") {
            document.getElementById("new_gesture").innerHTML = "&#x1F448;&#x1F3FB;";
        }
        if (p_1 == "Punch") {
            document.getElementById("new_gesture").innerHTML = "&#x1F91B;&#x1F3FB;";
        }
        //////////////////////////////////////////////////////////////////////
        if (p_2 == "Clap") {
            document.getElementById("new_gesture_2").innerHTML = "&#x1F44F;&#x1F3FB;";
        }
        if (p_2 == "Rock") {
            document.getElementById("new_gesture_2").innerHTML = "&#x1F918;&#x1F3FB;";
        }
        if (p_2 == "Thumbs UP") {
            document.getElementById("new_gesture_2").innerHTML = "&#128077;&#127995;";
        }
        if (p_2 == "Hi!") {
            document.getElementById("new_gesture_2").innerHTML = "&#128400;&#127995;";
        }
        if (p_2 == "Bye") {
            document.getElementById("new_gesture_2").innerHTML = "&#128075;&#127995;";
        }
        if (p_2 == "Amazing") {
            document.getElementById("new_gesture_2").innerHTML = "&#128076;&#127995;";
        }
        if (p_2 == "Bad") {
            document.getElementById("new_gesture_2").innerHTML = "&#128078;&#127995;";
        }
        if (p_2 == "Point") {
            document.getElementById("new_gesture_2").innerHTML = "&#x1F448;&#x1F3FB;";
        }
        if (p_2 == "Punch") {
            document.getElementById("new_gesture_2").innerHTML = "&#x1F91B;&#x1F3FB;";
        }
    }
}

function speak() {
    var synth = window.speechSynthesis;
    var s_1;
    var s_2;
    speakdata_1 = s_1;
    speakdata_2 = s_2;
    var utterThis = new SpeechSynthesisUtterance(speakdata_1 + "or" + speakdata_2);
    synth.speak(utterThis);
}