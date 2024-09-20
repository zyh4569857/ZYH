document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 背景图片轮播
    const heroElement = document.querySelector('.hero-bg');
    const imageFolder = 'file:///D:/cursor/imgs/'; // 使用 file:// 协议访问本地文件
    const imageNames = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
        // 添加 D:\cursor\imgs 文件夹中的所有图片文件名...
    ];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        heroElement.style.opacity = '0';
        setTimeout(() => {
            const imagePath = imageFolder + imageNames[currentImageIndex];
            heroElement.style.backgroundImage = `url('${imagePath}')`;
            heroElement.style.opacity = '1';
            currentImageIndex = (currentImageIndex + 1) % imageNames.length;
        }, 1000);
    }

    changeBackgroundImage(); // 初始化背景图片
    setInterval(changeBackgroundImage, 5000); // 每5秒切换一次图片

    // 添加错误处理
    heroElement.addEventListener('error', function(e) {
        console.error('背景图片加载失败:', e);
        // 可以在这里添加一个默认的背景图片
        this.style.backgroundImage = 'url("file:///D:/cursor/imgs/default.jpg")';
    }, true);
});