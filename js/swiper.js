// Swiper 초기화
const swiper = new Swiper(".mySwiper", {
  direction: "vertical", // 세로 방향 설정
  loop: true,            // 무한 반복 활성화
  mousewheel: true,      // 마우스 휠 스크롤 지원
  touchReleaseOnEdges: true, // 터치 스와이프 지원 (기본값)
  
  // 부드러운 움직임을 원할 경우 추가 옵션
  speed: 600,            // 전환 속도 (ms)
  freeMode: {
    enabled: true,       // 딱딱 끊기지 않고 자유롭게 스크롤
    sticky: true,        // 스크롤 후 가까운 슬라이드에 고정
  },
});