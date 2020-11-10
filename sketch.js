// // let mobilenet;
// // let label = 'loading' ;
// // let video;
// // let classifier ;
// // let ukeButton ;
// // let markerButton ;
// // let trainButton ;

// // function modelReady()
// // {
// // 	console.log('Our model is ready!!!');
// // 	classifier.load('model.json', customModelReady);
// // 	//mobilenet.predict(gotResults);
// // }

// // function customModelReady()
// // {
// // 	console.log('custom model is ready ! ')
// // 	label = 'model ready';
// // 	classifier.classify(gotResults);
// // }

// // function videoReady()
// // {
// // 	console.log('video is ready!!!');
// // 	classifier.classify(gotResults);
// // }

// // function whileTraining(loss)
// // {
// // 	if(loss == null)
// // 	{
// // 		console.log('Training Completed!!!')
// // 		classifier.classify(gotResults);
// // 	}
// // 	else
// // 	{
// // 		console.log(loss);
// // 	}
	
// // }

// // function gotResults(error, result)
// // {
// // 	if(error)
// // 	{
// // 		console.error(error) ;
// // 	}
// // 	else
// // 	{
// // 		//console.log(result) ;
// // 		label = result ;
// // 		//let prob = results[0].probability ;
// // 		classifier.classify(gotResults);
// // 		// mobilenet.predict(gotResults);
// // 		// fill(0) ;
// // 		// textSize(64);
// // 		// text(label, 10, height - 100) ;
// // 		// createP(label) ;
// // 		// createP(prob) ;

// // 	}
// // }

// // function imageReady()
// // {
// // 	image(penguin, 0,0, width, height);
// // }


// function setup()
// {
// 	createCanvas(640, 544);
// 	//penguin = createImg('images/penguin.jpg', imageReady);
// 	video = createCapture(VIDEO) ;
// 	video.hide();
// 	background(0);

// 	// mobilenet = ml5.imageClassifier('MobileNet', video ,modelReady);
// 	mobilenet = ml5.featureExtractor('MobileNet', modelReady);
// 	classifier = mobilenet.classification(video, videoReady) ;
  

// 	// ukeButton = createButton('ukelele');
// 	// ukeButton.mousePressed(function(){
// 	// 	classifier.addImage('ukelele') ; 
// 	// })

// 	// markerButton = createButton('marker');
// 	// markerButton.mousePressed(function(){
// 	// 	classifier.addImage('marker') ; 
// 	// })

// 	// trainButton = createButton('train');
// 	// trainButton.mousePressed(function(){
// 	// 	classifier.train(whileTraining); 
// 	// })

// 	// saveButton = createButton('save');
// 	// saveButton.mousePressed(function(){
// 	// 	classifier.save(); 
// 	// })

// 	// loadButton = createButton('train');
// 	// trainButton.mousePressed(function(){
// 	// 	classifier.train(whileTraining); 
// 	// })

// }

// function draw()
// {
// 	background(0);
// 	image(video, 0, 0) ;
// 	fill(255) ;
// 	textSize(32);
// 	text(label, 10, height - 20) ;
// }


let mobilenet;
let classifier;
let video;
let label = 'training model';
// let happyButton;
// let sadButton;
// let trainButton;
// let kakkiButton;
// let chuuButton;
let AButton;
let BButton;
let CButton;
let DButton;

function modelReady() {
  console.log('Model is ready!!!');
  // classifier.load('model.json', customModelReady);
}

// function customModelReady() {
//   console.log('Custom Model is ready!!!');
//   label = 'model ready';
//   classifier.classify(gotResults);
// }

function videoReady() {
  console.log('Video is ready!!!');
}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  AButton = createButton('Letter A') ;
  AButton.mousePressed(function(){
  	classifier.addImage('LetterA');
  });

  BButton = createButton('LetterB') ;
  BButton.mousePressed(function(){
  	classifier.addImage('LetterB');
  });

  CButton = createButton('LetterC') ;
  CButton.mousePressed(function(){
  	classifier.addImage('LetterC');
  });

  // DButton = createButton('LetterD') ;
  // DButton.mousePressed(function(){
  // 	classifier.addImage('LetterD');
  // });

  // happyButton = createButton('happy');
  // happyButton.mousePressed(function() {
  //   classifier.addImage('happy');
  // });

  // sadButton = createButton('sad');
  // sadButton.mousePressed(function() {
  //   classifier.addImage('sad');
  // });

  // kakkiButton = createButton('kakki');
  // kakkiButton.mousePressed(function() {
  //   classifier.addImage('kakki');
  // });

  // chuuButton = createButton('chuu');
  // chuuButton.mousePressed(function() {
  //   classifier.addImage('chuu');
  // });

  trainButton = createButton('train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });

  saveButton = createButton('save');
  saveButton.mousePressed(function() {
    classifier.save();
  });
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}

function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    // updated to work with newer version of ml5
    // label = result;
    label = result[0].label;
    classifier.classify(gotResults);
  }
}