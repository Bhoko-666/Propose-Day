// document.getElementById('proposeBtn').addEventListener('click', () => {
//     const surpriseMessage = document.getElementById('surpriseMessage');
//     surpriseMessage.textContent = "You make my world brighter every day! 💍💖";
//     surpriseMessage.style.display = "block";
//   });
  
document.getElementById('proposeBtn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'block';
});
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}