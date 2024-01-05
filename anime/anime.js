window.onload = function() {
    // Lấy phần tử đầu tiên trong class 'part' và 'anime'
    var firstPart = document.querySelector('.part');
    var firstAnime = document.querySelector('.anime');
    var firstAnimesrv = document.querySelector('.anime-srv');
    // Thay đổi màu nền thành màu đỏ
    firstPart.style.backgroundColor = 'red';
    firstAnimesrv.style.backgroundColor = 'red';
  };
  


// Lấy tất cả các phần tử có class 'anime'
let episodes = document.querySelectorAll('.anime');

// Lặp qua từng tập phim
episodes.forEach((episode) => {
  // Thêm sự kiện click cho mỗi tập
  episode.addEventListener('click', function() {
    // Reset màu nền cho tất cả các tập
    episodes.forEach((ep) => {
      ep.style.backgroundColor = '';
    });

    document.querySelector('.img-player').style.display = 'none';

    // Đặt màu nền của tập được click thành màu đỏ
    this.style.backgroundColor = 'red';

    // Thay đổi URL của iframe
    document.querySelector('.anime-player iframe').src = this.getAttribute('onclick').split("'")[1];
  });
});

// Lấy tất cả các phần tử có class 'part'
let seasons = document.querySelectorAll('.part');

// Lặp qua từng season
seasons.forEach((season) => {
  // Thêm sự kiện click cho mỗi season
  season.addEventListener('click', function() {
    // Reset màu nền cho tất cả các tập và season khi chuyển season
    episodes.forEach((episode) => {
      episode.style.backgroundColor = '';
    });
    seasons.forEach((se) => {
      se.style.backgroundColor = '';
    });

    // Đặt màu nền của season được click thành màu đỏ
    this.style.backgroundColor = 'red';

    // Thay đổi URL của iframe
    document.querySelector('.anime-player iframe').src = this.getAttribute('onclick').split("'")[1];

    // Hide season
    document.querySelector('.ss1').addEventListener('click', function() {
      document.querySelector('.anime-list').style.display = 'flex';
      document.querySelector('.anime-list-ss2').style.display = 'none';
      document.querySelector('.anime-list-ss3').style.display = 'none';
    });
    document.querySelector('.ss2').addEventListener('click', function() {
      document.querySelector('.anime-list-ss2').style.display = 'flex';
      document.querySelector('.anime-list').style.display = 'none';
      document.querySelector('.anime-list-ss3').style.display = 'none';
    });
    document.querySelector('.ss3').addEventListener('click', function() {
      document.querySelector('.anime-list-ss3').style.display = 'flex';
      document.querySelector('.anime-list').style.display = 'none';
      document.querySelector('.anime-list-ss2').style.display = 'none';
    });
    
  });
});