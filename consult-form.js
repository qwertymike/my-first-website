
// 무료상담 버튼 클릭 이벤트
document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault();

    // 상담 입력 섹션 표시
    const consultSection = document.getElementById('consultFormSection');
    consultSection.style.display = 'block';

    // 부드러운 스크롤 이동
    consultSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// 폼 제출 이벤트
document.getElementById('consultForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // 폼 데이터 수집
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    // Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwvo4qTKL6w8mqaP_aMNG-gdPW9Pt22PWcSDXqQ3JAr8AyQN_dsyiymAO6rd0h2bRPHQw/exec';

    // 데이터 전송
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('문의가 성공적으로 제출되었습니다!');
                document.getElementById('consultForm').reset();
            } else {
                alert('문의 제출 중 오류가 발생했습니다.');
            }
        })
        .catch(error => console.error('Error:', error));
    
    // 알림 메시지
    alert(`문의가 성공적으로 제출되었습니다!\n이름: ${formData.name}\n이메일: ${formData.email}\n연락처: ${formData.phone}\n내용: ${formData.message}`);
    
    // 폼 초기화
    document.getElementById('consultForm').reset();
});
