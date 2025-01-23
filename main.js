window.addEventListener('DOMContentLoaded', () => {
    const birthDate = new Date('2003-09-11');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const isBeforeBirthday = today.getMonth() < birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
    if (isBeforeBirthday) age--;
    document.getElementById('age').textContent = `${age}歳`;
});
