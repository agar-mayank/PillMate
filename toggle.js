function openModal(type) {
    const modalId = type === 'login' ? 'loginModal' : 'signupModal';
    document.getElementById(modalId).classList.add('active');
        }

function closeModal(type) {
    const modalId = type === 'login' ? 'loginModal' : 'signupModal';
    document.getElementById(modalId).classList.remove('active');
        }



document.addEventListener('click', function(e) {
    if (e.target.classList.contains('toggle-switch')) {
    e.target.classList.toggle('active');
            }
        });


window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
    e.target.classList.remove('active');
    }
        });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        }
});
});