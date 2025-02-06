 // Interactive hover effect for send message button
 document.querySelector('.send-message').addEventListener('mouseenter', function () {
    this.style.background = '#000';
    this.style.color = '#fff';
});

document.querySelector('.send-message').addEventListener('mouseleave', function () {
    this.style.background = 'transparent';
    this.style.color = '#000';
});

// Interactive hover effect for experience items
document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateX(0)';
    });
});
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
    this.querySelector('.nav-link').style.color = '#DDB967';
    });

    item.addEventListener('mouseleave', function () {
    this.querySelector('.nav-link').style.color = '#fff';
    });
});
document.querySelector('.send-message').addEventListener('mouseenter', function () {
    this.style.background = '#fff';
    this.style.color = '#b30335';
});
document.querySelector('.send-message').addEventListener('mouseleave', function () {
    this.style.background = '#b30335';
    this.style.color = '#fff';
});