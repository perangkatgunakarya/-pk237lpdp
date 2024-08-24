const audio = document.getElementById('playAudio');
const btnSound = document.getElementById("btnSound");

document.addEventListener('DOMContentLoaded', function () {
	function playAudio() {
		audio.play().then(() => {
			console.log('Audio started playing.');
			btnSound.classList.add('active');
			document.removeEventListener('click', playAudio); // Remove event listener after first interaction
		}).catch(error => {
			console.error('Failed to start audio:', error);
		});

	}

	// Add event listeners for the first user interaction
	document.addEventListener('click', playAudio);
	
	
	btnSound.addEventListener("click", function () {
		if (audio.paused) {
			this.classList.add('active');
			audio.play();
		} else {
			this.classList.remove('active');
			audio.pause();
		}
	})
	playAudio()
});


// Load the IFrame Player API code asynchronously.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create the YouTube player variable
let player;
// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: '-ASM7Waq0OI', // ID video yang ada di iframe
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}

// Detect play/pause state
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING) {
			audio.pause();
			btnSound.classList.remove('active');
	}
}