function menuInit() {
	if (document.querySelector(".icon-menu")) {
		document.addEventListener("click", function (e) {
			if (e.target.closest('.icon-menu')) {
				document.documentElement.classList.toggle("menu-open");
			}
			if (e.target.closest('.menu') && document.documentElement.classList.contains("menu-open")) {
				document.documentElement.classList.remove("menu-open");
			}
		});
	}
}
menuInit();

// Video play
const video = document.getElementById("video");
const playButton = document.querySelector(".hero__button--play");
const pauseButton = document.querySelector(".hero__button--pause");

function toggleButtons(isPlaying) {
	playButton.style.display = isPlaying ? "none" : "flex";
	pauseButton.style.display = isPlaying ? "flex" : "none";
}
function playVideo() {
	video.play();
	toggleButtons(true);
}
function pauseVideo() {
	video.pause();
	toggleButtons(false);
}
function onVideoEnd() {
	video.load();
	toggleButtons(false);
}
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
video.addEventListener("ended", onVideoEnd);