// DOM থেকে বাটনটিকে 가져 আসা
const backToTopButton = document.getElementById("backToTopBtn");

// ব্যবহারকারী যখন নিচে স্ক্রল করবে, তখন কী হবে তার ফাংশন
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // যদি ব্যবহারকারী উপর থেকে 300px এর বেশি নিচে স্ক্রল করে, তাহলে বাটনটি দেখাও
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        // অন্যথায়, বাটনটি লুকিয়ে রাখো
        backToTopButton.style.display = "none";
    }
}

// ব্যবহারকারী যখন বাটনে ক্লিক করবে, তখন পেজের শুরুতে ফিরে যাওয়ার ফাংশন
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
