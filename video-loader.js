document.addEventListener('DOMContentLoaded', function() {
    // 模拟从服务器获取视频列表
    const videos = [
        { title: 'Week 1: 介绍', src: 'shiping/week1_介绍.mp4' },
        { title: 'Week 2: 基础知识', src: 'shiping/week2_基础知识.mp4' },
        { title: 'Week 3: 进阶技巧', src: 'shiping/week3_进阶技巧.mp4' },
        // 添加更多视频...
    ];

    const videoList = document.getElementById('videoList');

    videos.forEach(video => {
        const videoElement = createVideoElement(video);
        videoList.appendChild(videoElement);
    });

    function createVideoElement(video) {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        col.innerHTML = `
            <div class="video-container">
                <video controls width="100%">
                    <source src="${video.src}" type="video/mp4">
                    您的浏览器不支持 HTML5 视频。
                </video>
                <h3>${video.title}</h3>
                <p>简短描述：这是 ${video.title} 的视频。</p>
            </div>
        `;
        return col;
    }
});