
(function(){

	const cols = 'abcdefgh';

	for(let j=8; j>=1; j--){
		
		//const row = document.createElement('div');
		
		//row.setAttribute('class', `row ${j}`);
		//row.setAttribute('id', j);
		
		for(let i=0; i<8; i++){
			
			const square = document.createElement('div');
			
			const squareColor = (i + j) % 2 == 0 ? 'light' : 'dark';
			
			square.setAttribute('class', `square ${squareColor}`);
			square.setAttribute('id', `${cols[i]}${j}`);
			
			$$('#board').appendChild(square);
		}
	}

})();

