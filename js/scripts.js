// Hàm dừng tất cả các media (audio và video) đang phát
function stopAllMedia(currentElement) {
    // Dừng tất cả các audio đang phát
    const allAudio = document.querySelectorAll(".audio-player");
    allAudio.forEach((audio) => {
        if (audio !== currentElement) {
            audio.pause();
            audio.currentTime = 0; // Đặt lại thời gian về 0
        }
    });

    // Dừng tất cả các iframe video đang phát
    const allIframes = document.querySelectorAll(".button-item iframe");
    allIframes.forEach((iframe) => {
        if (iframe !== currentElement) {
            // Đặt lại src để dừng video đang phát
            const originalSrc = iframe.dataset.originalSrc || iframe.src.split("?")[0];
            iframe.src = originalSrc;
            iframe.dataset.originalSrc = originalSrc; // Lưu lại src gốc
        }
    });
}

// Hàm thiết lập nguồn audio và phát
function setAudioSource(audioElement, url) {
    stopAllMedia(audioElement); // Dừng tất cả media khác trước khi phát
    audioElement.src = url;
    audioElement.play();
    audioElement.setAttribute("download", url.split("/").pop().split("?")[0]);
}

// Hàm chuyển đổi lyrics
function toggleLyrics(checkbox) {
    const section = checkbox.closest(".section");
    const audioPlayer = section.querySelector(".audio-player");
    const buttons = section.querySelectorAll(".button-item button");
    buttons.forEach((button) => {
        const withLyricsUrl = button.dataset.url;
        const noLyricsUrl = button.dataset.noLyrics;
        button.onclick = () => setAudioSource(audioPlayer, checkbox.checked ? noLyricsUrl : withLyricsUrl);
    });
}

// Hàm bật/tắt section
function toggleSection(sectionId) {
    const sections = document.querySelectorAll(".section-content");
    sections.forEach((section) => {
        // Đóng tất cả các section khác
        if (section.id !== sectionId) {
            section.classList.remove("active");
        }
    });
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.toggle("active"); // Mở/đóng section được click
}

// Hàm bật/tắt menu trên mobile
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Sự kiện khi DOM được tải
document.addEventListener("DOMContentLoaded", () => {
    // Xử lý click cho tất cả các nút trong button-grid
    document.querySelectorAll(".button-item button").forEach((button) => {
        button.addEventListener("click", () => {
            const parentItem = button.closest(".button-item");
            const iframe = parentItem.querySelector("iframe");
            const audioPlayer = button.closest(".section").querySelector(".audio-player");

            if (iframe) {
                // Nếu có iframe, phát video
                const videoSrc = iframe.src.split("?")[0]; // Lấy src gốc
                stopAllMedia(iframe); // Dừng tất cả media khác, giữ lại iframe này
                iframe.src = `${videoSrc}?autoplay=1&rel=0&showinfo=0&modestbranding=1`; // Thêm autoplay
                iframe.dataset.originalSrc = videoSrc; // Lưu lại src gốc
            } else if (button.dataset.url) {
                // Nếu không có iframe nhưng có data-url, phát audio
                setAudioSource(audioPlayer, button.dataset.url);
            }
        });
    });

    // Lưu trữ src gốc của các iframe khi tải trang để có thể dừng chúng sau này
    document.querySelectorAll(".button-item iframe").forEach((iframe) => {
        iframe.dataset.originalSrc = iframe.src.split("?")[0];
    });
});

(function () {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement("script");
            d.innerHTML = "window.__CF$cv$params={r:'919578656d3fbd52',t:'MTc0MDc5ODcyMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
        }
    }
    if (document.body) {
        var a = document.createElement("iframe");
        a.height = 1;
        a.width = 1;
        a.style.position = "absolute";
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = "none";
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        if ("loading" !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener("DOMContentLoaded", c);
        else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
                e(b);
                "loading" !== document.readyState && ((document.onreadystatechange = e), c());
            };
        }
    }
})();

(function () {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement("script");
            d.innerHTML = "window.__CF$cv$params={r:'923e94b1cf87d9a1',t:'MTc0MjU3MTk3My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
        }
    }
    if (document.body) {
        var a = document.createElement("iframe");
        a.height = 1;
        a.width = 1;
        a.style.position = "absolute";
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = "none";
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        if ("loading" !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener("DOMContentLoaded", c);
        else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
                e(b);
                "loading" !== document.readyState && ((document.onreadystatechange = e), c());
            };
        }
    }
})();

(function () {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement("script");
            d.innerHTML = "window.__CF$cv$params={r:'923f052178e0ed8c',t:'MTc0MjU3NjU3OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
        }
    }
    if (document.body) {
        var a = document.createElement("iframe");
        a.height = 1;
        a.width = 1;
        a.style.position = "absolute";
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = "none";
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        if ("loading" !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener("DOMContentLoaded", c);
        else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
                e(b);
                "loading" !== document.readyState && ((document.onreadystatechange = e), c());
            };
        }
    }
})();
