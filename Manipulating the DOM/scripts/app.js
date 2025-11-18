// Button 1: Change background color
document.getElementById('btn1').addEventListener('click', function () {
    document.body.style.backgroundColor = '#3498db';
});

// Button 2: Change heading text
document.getElementById('btn2').addEventListener('click', function () {
    document.querySelector('h1').textContent = 'Hello, DOM!';
});

// Button 3: Toggle a class
document.getElementById('btn3').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Button 4: Change font size
document.getElementById('btn4').addEventListener('click', function () {
    document.body.style.fontSize = '18px';
});

// Button 5: Hide/show an element
document.getElementById('btn5').addEventListener('click', function () {
    document.getElementById('content').style.display =
        document.getElementById('content').style.display === 'none' ? 'block' : 'none';
});

// Button 6: Change text color
document.getElementById('btn6').addEventListener('click', function () {
    document.body.style.color = '#e74c3c';
});

// Button 7: Add a border
document.getElementById('btn7').addEventListener('click', function () {
    document.body.style.border = '5px solid #2ecc71';
});

// Button 8: Change padding
document.getElementById('btn8').addEventListener('click', function () {
    document.body.style.padding = '20px';
});

// Button 9: Update paragraph content
document.getElementById('btn9').addEventListener('click', function () {
    document.querySelector('h4').innerHTML = '<strong>Updated content!</strong>';
});

// Button 10: Add opacity effect
document.getElementById('btn10').addEventListener('click', function () {
    document.body.style.opacity = '0.8';
});