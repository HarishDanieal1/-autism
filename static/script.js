const video = document.getElementById('video');
const emotionOutput = document.getElementById('emotionOutput');
const captureBtn = document.getElementById('captureBtn');

// Get user media
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => { video.srcObject = stream; })
    .catch(err => { console.error("Camera access error:", err); });

captureBtn.onclick = () => {
    // Simulate random emotion for now
    const emotions = ["😊 Happy", "😐 Neutral", "😢 Sad", "😠 Angry", "😨 Anxious"];
    const random = Math.floor(Math.random() * emotions.length);
    emotionOutput.textContent = emotions[random];
};
