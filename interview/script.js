// プロフィールの表示・非表示
document.getElementById('profileImage').addEventListener('click', function () {
    const details = document.getElementById('profileDetails');
    details.classList.toggle('hidden');
    details.classList.toggle('visible');
});

// インタビュー内容の表示・非表示
const toggles = document.querySelectorAll('.toggle');
toggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const answer = document.getElementById(targetId);
        answer.classList.toggle('hidden');
        answer.classList.toggle('visible');
    });
});
