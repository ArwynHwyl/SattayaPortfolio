// Interactive hover effect for send message button
document.querySelector('.send-message').addEventListener('mouseenter', function () {
    this.style.background = '#000';
    this.style.color = '#fff';
});

document.querySelector('.send-message').addEventListener('mouseleave', function () {
    this.style.background = '#b30335';
    this.style.color = '#fff';
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

// Interactive hover effect for nav items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.querySelector('.nav-link').style.color = '#DDB967';
    });

    item.addEventListener('mouseleave', function () {
        this.querySelector('.nav-link').style.color = '#fff';
    });
});

// Interactive hover effect for social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.2)';
        this.querySelector('i').style.color = '#DDB967';
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.querySelector('i').style.color = '#fff';
    });
});

// Portfolio item hover effect
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.querySelector('.portfolio-content').style.backgroundColor = '#f8f8f8';
    });

    item.addEventListener('mouseleave', function () {
        this.querySelector('.portfolio-content').style.backgroundColor = 'transparent';
    });
});