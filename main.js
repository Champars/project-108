function click() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JLemgLzrj/model.json', modelloaded);
}

function modelloaded() {
    classifier.classify(gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        document.getElementById("ich").innerHTML = "I can hear - " + results[0].label;

        if (results[0].label == "meowing") {
            document.getElementById("images").src = "cat.jpeg";
        } else if (results[0].label == "barking") {
            document.getElementById("images").src = "dog.jpeg";
        } else if (results[0].label == "trumpeting") {
            document.getElementById("images").src = "elephant.j;peg"
        } else if (results[0].label == "roaring") {
            document.getElementById("images").src = "lion.jpeg";
        }
    }
}