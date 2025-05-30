// --- ধাপ ১: DOM এলিমেন্টগুলোকে সিলেক্ট করা ---
const themeToggleButton = document.getElementById('theme-toggle');
const backToTopButton = document.getElementById('backToTopBtn');
const preloader = document.getElementById('preloader');
const body = document.body;

// --- ধাপ ২: Preloader বা লোডিং অ্যানিমেশন ---
window.addEventListener('load', () => {
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500); // CSS ট্রানজিশনের সময় অনুযায়ী
});

// --- ধাপ ৩: থিম ম্যানেজমেন্ট ---
// পেজ লোড হওয়ার সাথে সাথে সেভ করা থিম চেক এবং প্রয়োগ করা
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // আইকন পরিবর্তন
} else {
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
}


// থিম টগল বাটন ক্লিক করলে থিম পরিবর্তন এবং সেভ করা
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // বর্তমান অবস্থাটি localStorage এ সেভ করা এবং আইকন পরিবর্তন
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
});


// --- ধাপ ৪: 'Back to Top' বাটনের কার্যকারিতা ---
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault(); // লিংকের ডিফল্ট আচরণ বন্ধ করা
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

