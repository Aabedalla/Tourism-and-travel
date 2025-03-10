const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isopen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class" , isopen ? "ri-close-line" : "ri-menu-line")
});

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(div => div.classList.add('d-none'));
    document.getElementById(tabName).classList.remove('d-none');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('btn-primary'));
    event.target.classList.add('btn-primary');
}

document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    document.getElementById(tabId).classList.remove('hidden');
}