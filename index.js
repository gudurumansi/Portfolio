document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

document.getElementById('emailButton').addEventListener('click', function (e) {
  e.preventDefault();
  const email = "gudurumansisagar@gmail.com";
  const subject = "Hello, Mansi!";
  const body = "I would like to connect with you regarding...";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});

document.getElementById('downloadButton').addEventListener('click', function() {
  var filePath = 'resume.pdf';
  var a = document.createElement('a');
  a.href = filePath;
  a.download = 'Resume.pdf';
  a.click();
});
