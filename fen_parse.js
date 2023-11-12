

(function(){

	$$('form#fen input').value = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";// dbg

	function newPieceDiv(piecename){
		
		/* p n b r q k P N B R Q K*/
		
		const piece = document.createElement('div');
		piece.setAttribute('class', `piece ${piecename}`);
		
		const pieceIcon = document.createElement('img');
		pieceIcon.setAttribute('src', `pieces/${piecename}.svg`);
		
		piece.appendChild(pieceIcon);
		
		return piece;
	}


	$$('form#fen').onsubmit = function(e){ e.preventDefault(); }
	
	
	$$('button#parse').onclick = function(){
		
		const pos = $$('input#fenstr').value.split(' ')[0].trim().split('/');
		
		
		/* validation */
		
		if(pos.length < 8){
			alert('Invalid FEN!');
			return;
		}
		
		for(let row of pos){
		
			let total = 0;

			for(let s of row){
			
				if( !('pnbrqk'.includes(s.toLowerCase()) || parseInt(s)) ){
					alert(`Invalid FEN character: ${s}`);
					return;
					// if other char besides num or piece letter, invalid FEN
				}
			
				total += parseInt(s) || 1;
				// NaN (falsy) if parseint letter
			}
			
			if(total !== 8){
				alert('Invalid FEN');
				return;
			}
		}

		
		/* clearing previous board position */
		
		$$$('.square').forEach(function(square){
			square.innerHTML = '';
		});
		
		
		/* putting pieces on the board */ 
		
		let curr_row = 8;
		
		for(let row of pos){
		
			let past_cols = 0;
		
			for(let square of row){
				if(!parseInt(square)){
	
					$$(`#${'abcdefgh'[past_cols]}${curr_row}`)
					.appendChild(newPieceDiv(square));
					
					past_cols += 1;
					continue;
				}	
				past_cols += parseInt(square);
			}
			
			curr_row -= 1;
		}


	}

})();








