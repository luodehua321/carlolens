// 页面加载时的淡入效果
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-content');
    const sections = document.querySelectorAll('.section');

    // 标题部分淡入
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);

    // 主内容部分的淡入效果
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 * (index + 1)); // 每个部分延迟300ms
    });
});