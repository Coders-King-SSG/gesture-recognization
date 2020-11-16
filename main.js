//? https://teachablemachine.withgoogle.com/models/5LswAqV8c/model.json

var cam = document.getElementById('cam');
Webcam.set({
    'width':360,
    'height':250,
    'image_format': 'png',
    'png_quality':90
});

Webcam.attach(cam);

function snap() {
    Webcam.snap(function (data_uri) {
        document.getElementById('result').innerHTML = `<img src='${data_uri}' id='output'>`;
    })
}

console.log('The version of ML5.js is\t'+ml5.version);

// let classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/A_93zEuKT/model.json', modelLoaded);

// function modelLoaded() {
//     console.log('loaded');
// }

// function identifyImg() {
//     var img = document.getElementById('output');
//     classifier.classify(img, gotResults)
// }

// function gotResults(error, results) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(results);
//         console.log(results[0].label)
//         var acry = Number(results[0].confidence)*100;
//         document.getElementById('object').innerHTML = results[0].label;
//         document.getElementById('acry').value = acry;
//     }
// }