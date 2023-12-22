function changePart(newVideoUrl, index) {
    var list = document.getElementsByClassName('part')
    Array.from(list).forEach(element => {
        element.classList.remove('selected')
        list[index-1].classList.add('selected')
    });
    var iframe = document.getElementById('myIframe');
    var iframeSrc = iframe.src;

    // Tách phần query string từ đường link cũ
    var queryString = iframeSrc.split('?')[1];

    // Tạo đường link mới với video mới và giữ nguyên các tham số khác (nếu có)
    var newIframeSrc = newVideoUrl + (queryString ? '?' + queryString : '');

    // Cập nhật đường link của iframe
    iframe.src = newIframeSrc;
}

function changeVideo(newVideoUrl, index) {
    var list = document.getElementsByClassName('anime')
    Array.from(list).forEach(element => {
        element.classList.remove('selected')
        list[index-1].classList.add('selected')
    });
    var iframe = document.getElementById('myIframe');
    var iframeSrc = iframe.src;

    // Tách phần query string từ đường link cũ
    var queryString = iframeSrc.split('?')[1];

    // Tạo đường link mới với video mới và giữ nguyên các tham số khác (nếu có)
    var newIframeSrc = newVideoUrl + (queryString ? '?' + queryString : '');

    // Cập nhật đường link của iframe
    iframe.src = newIframeSrc;
}


