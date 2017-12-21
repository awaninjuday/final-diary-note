let process = {
	menu:function(){
		// let source_vid = 'https://www.youtube.com/watch?v=d-P7YUSKbpQ';
		    // <iframe src={source_vid} width="100%" height='300px'/>
		let content = <div>
			<audio id="audio">
				<source src="audio" type="audio/mp3" />
			</audio>
			<ul><center>
				<li><a href='home.jsx' onClick={process.page1}>Home</a></li>
				<li><a href='diaryapp.jsx' onClick={process.page2}>Diary</a></li>
				<li><a href='thankyou.jsx' onClick={process.page3}>Thankyou</a></li>
				</center>
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<audio id="audio">
					<source src="audio" type="audio/mp3" />
				</audio>
				<img src='img/image.jpg' width='300px' />
				this is page 1<br/><a href='home.jsx' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').play();
		// process.audio('audio_bomb').pause();
	},
	page2:function(){
		let content = <div>
				<audio id="audio">
					<source src="audio" type="audio/mp3" />
				</audio>
				
				this is page 2<br/><a href='diaryapp.jsx' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').play();
		// process.audio('audio_bomb').pause();
	},
	page3:function(){
		let content = <div>
				<audio id="audio_bomb">
					<source src="audio" type="audio/mp3" />
				</audio>
				
				this is page 3<br/><a href='thankyou.jsx' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').play();
		// process.audio('audio_bomb').pause();
	
	},
	loading:function(){
		let content = <div>
					<div className="progressbar-infinite"></div>
					<audio id="audio">
						<source src="audio" type="audio" />
					</audio>
					<div align='center'>
						<img src='img/diarypic.jpg' width='300px' />
						Loading...
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},1000);