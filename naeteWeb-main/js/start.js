const main = document.querySelector("#main");
const qna = document.querySelector("#qna"); 
const result = document.querySelector("#result");
const viewResult = document.querySelector("#viewResult");
const endPoint = 12;
let select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function calResult(){
	var result = select.indexOf(Math.max(...select));
	return result;
}
	
function setResult(){
	let point = calResult();
	const resultName = document.querySelector('.resultname')
	resultName.innerHTML = infoList[point].name;

	var resultImg = document.createElement('img');
	const imgDiv = document.querySelector('#resultImg');
	var imgURL = 'img/image-'+ point + '.png';
	resultImg.src =  imgURL;
	resultImg.alt = point;
	resultImg.classList.add('img-fluid');

	imgDiv.appendChild(resultImg)

	const resultDesc = document.querySelector('.resultDesc');
	resultDesc.innerHTML = infoList[point].desc;
	resultDesc.classList.add('py-20');
	resultDesc.classList.add('pt-10');
}

function goResult(){
	viewResult.style.WebkitAniamtion = "fadeOut 1s";
	viewResult.style.animation = "fadeOut 1s"
	setTimeout(() => {
		result.style.WebkitAnimation = "fadeIn 1s";
		result.style.animation = "fadeIn 1s";
		setTimeout(() => {
			viewResult.style.display = "none";
			result.style.display = "block";
		}, 450)})
		console.log(select);	
		setResult();
}

function addAnswer(answerText, qIdx, idx){
	var a = document.querySelector('.answerBox');
	var answer = document.createElement('Button');
	answer.classList.add('answerList');
	answer.classList.add('my-3');
	answer.classList.add('py-3');	
	answer.classList.add('mx-auto');		
	a.appendChild(answer);
	answer.innerHTML = answerText;

	answer.addEventListener("click", function(){
		var children = document.querySelectorAll('.answerList');
		var target = qnaList[qIdx].a[idx].type;
		for (let i = 0; i < target.length; i++){
			select[target[i]] += 1;
		} 

		for (let i = 0; i < children.length; i++){
			children[i].style.display = 'none';
		}
		goNext(++qIdx);
	}, false);
}

function goNext(qIdx){
	if (qIdx === endPoint){
		setResultDisplay()
		return;
	}
	var q = document.querySelector('.qBox');
	q.innerHTML = qnaList[qIdx].q;
	for(let i in qnaList[qIdx].a){
		addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
	}
	var status = document.querySelector('.statusBar');
	status.style.width = (100/endPoint) * (qIdx+1) + '%';
}
function setResultDisplay(){
	qna.style.display = "none";
	viewResult.style.display = "block";
	document.getElementById('resultComment').innerHTML = infoList[select.indexOf(Math.max(...select))].name; 
}

function begin(){
	/*
	main.style.WebkitAniamtion = "fadeOut 1s";
	main.style.animation = "fadeOut 1s"
	setTimeout(() => {
		qna.style.WebkitAnimation = "fadeIn 1s";
		qna.style.animation = "fadeIn 1s";
		setTimeout(() => {
			main.style.display = "none"; 
			qna.style.display = "block";
		}, 450)
		let qIdx = 0;
		goNext(qIdx);
	}, 450);
	*/
	main.style.display = "none"; 
	qna.style.display = "block";
	let qIdx = 0;
	goNext(qIdx);
}
