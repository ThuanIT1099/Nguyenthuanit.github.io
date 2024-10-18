const users = [
    { username: 'a', password: 'aa', redirect: 'https://example.com/page1' },
    { username: 'a', password: 'bb', redirect: 'https://example.com/page2' },
    { username: 'user3', password: 'pass3', redirect: 'https://example.com/page3' },
    { username: 'user4', password: 'pass4', redirect: 'https://example.com/page4' },
    { username: 'user5', password: 'pass5', redirect: 'https://example.com/page5' },
    { username: 'user6', password: 'pass6', redirect: 'https://example.com/page6' },
    { username: 'user7', password: 'pass7', redirect: 'https://example.com/page7' },
    { username: 'user8', password: 'pass8', redirect: 'https://example.com/page8' },
    { username: 'user9', password: 'pass9', redirect: 'https://example.com/page9' },
    { username: 'user10', password: 'pass10', redirect: 'https://example.com/page10' }
];

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Hiện' : 'Ẩn';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(user => user.username === username && user.password === password);
    
    const messageDiv = document.getElementById('message');
    if (user) {
        messageDiv.textContent = 'Đăng Nhập Thành Công!';
        messageDiv.style.color = 'green';
        
        // Chuyển hướng đến link tương ứng
        window.location.href = user.redirect; // Chuyển hướng đến link cụ thể
    } else {
        messageDiv.textContent = 'Tên Tài Khoản hoặc Mật Khẩu Không Đúng!';
        messageDiv.style.color = 'red';
    }
});