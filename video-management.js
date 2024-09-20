document.addEventListener('DOMContentLoaded', function() {
    const videoUploadForm = document.getElementById('videoUploadForm');
    const videoList = document.getElementById('videoList');

    // 模拟的视频数据（实际应用中这些数据应该从服务器获取）
    let videos = [
        { id: 1, title: 'Week 10: 一轮，起飞', description: '这是第10周的视频，展示了一轮的起飞过程。', src: 'shiping/week10，一轮，起飞.mp4' },
        { id: 2, title: 'Week 11: 规划规划规划', description: '本视频重点讨论规划的重要性和方法。', src: 'shiping/week11，规划规划规划.mp4' }
    ];

    // 渲染视频列表
    function renderVideos() {
        videoList.innerHTML = '';
        videos.forEach(video => {
            const videoElement = createVideoElement(video);
            videoList.appendChild(videoElement);
        });
    }

    // 创建单个视频元素
    function createVideoElement(video) {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-4';
        col.innerHTML = `
            <div class="video-container">
                <video controls width="100%">
                    <source src="${video.src}" type="video/mp4">
                    您的浏览器不支持 HTML5 视频。
                </video>
                <h3>${video.title}</h3>
                <p>${video.description}</p>
                <button class="btn btn-danger btn-sm delete-video" data-id="${video.id}">删除视频</button>
            </div>
        `;
        return col;
    }

    // 处理视频上传
    videoUploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('videoTitle').value;
        const description = document.getElementById('videoDescription').value;
        const file = document.getElementById('videoFile').files[0];

        // 这里应该发送文件到服务器，但现在我们只是模拟上传
        const newVideo = {
            id: Date.now(), // 使用时间戳作为临时ID
            title: title,
            description: description,
            src: URL.createObjectURL(file) // 创建一个临时URL来显示视频
        };

        videos.push(newVideo);
        renderVideos();
        videoUploadForm.reset();
    });

    // 处理视频删除
    videoList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-video')) {
            const videoId = parseInt(e.target.getAttribute('data-id'));
            videos = videos.filter(video => video.id !== videoId);
            renderVideos();
        }
    });

    // 初始渲染视频列表
    renderVideos();
});