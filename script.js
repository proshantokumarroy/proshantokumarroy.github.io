// DOM elements গুলোকে সিলেক্ট করা
const themeToggleButton = document.getElementById('theme-toggle');
const backToTopButton = document.getElementById('backToTopBtn');
const body = document.body;

// --- ধাপ ৪.১: পেজ লোড হওয়ার সাথে সাথে সেভ করা থিম চেক এবং প্রয়োগ করা ---
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// --- ধাপ ৪.২: থিম টগল বাটন ক্লিক করলে থিম পরিবর্তন এবং সেভ করা ---
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // বর্তমান অবস্থাটি localStorage এ সেভ করা
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


// --- 'Back to Top' বাটনের কার্যকারিতা (এটি আগের মতোই থাকবে) ---
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
