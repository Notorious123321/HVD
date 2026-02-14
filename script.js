document.getElementById('surprise-btn').addEventListener('click', function() {
    const audio = document.getElementById('bg-music');
    audio.muted = false;  // Unmute the audio so it can play
    audio.play().catch(e => console.log('Audio play failed:', e));  // Handles any errors
    
    // Show the surprise alert
    alert('You are my everything! 💕');
});