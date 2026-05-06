// --- 1. NATIVE JAVASCRIPT DOĞRULAMA SİSTEMİ ---
function validateNative() {
    // Form elemanlarını çekiyoruz
    const ad = document.getElementById('ad').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const konu = document.getElementById('konu').value;
    const onay = document.getElementById('onay').checked;

    // Hata kontrol algoritması
    if (ad === "" || email === "" || tel === "" || konu === "") {
        alert("Native JS: Lütfen tüm alanları doldurun!");
        return false;
    }

    // Email format kontrolü (Regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Native JS: Geçerli bir e-mail adresi giriniz!");
        return false;
    }

    // Telefon sadece rakam kontrolü (Sayısal mı?)
    if (isNaN(tel)) {
        alert("Native JS: Telefon numarası sadece rakamlardan oluşmalıdır!");
        return false;
    }

    if (!onay) {
        alert("Native JS: Lütfen onay kutusunu işaretleyin!");
        return false;
    }

    // Eğer her şey doğruysa formu gönder
    alert("Native JS: Denetim başarılı, form gönderiliyor...");
    document.getElementById('contactForm').submit();
}

// --- 2. VUE.JS DOĞRULAMA SİSTEMİ ---
const { createApp } = Vue;

createApp({
    data() {
        return {
            form: {
                ad: '',
                email: '',
                tel: '',
                konu: '',
                cinsiyet: '',
                onay: false
            }
        }
    },
    methods: {
        validateVue() {
            // Boş alan kontrolü
            if (!this.form.ad || !this.form.email || !this.form.tel || !this.form.konu) {
                alert("Vue.js: Form eksik! Tüm alanları doldurunuz.");
                return;
            }

            // Email format kontrolü
            if (!this.form.email.includes('@')) {
                alert("Vue.js: Geçersiz email formatı!");
                return;
            }

            // Telefon sadece rakam kontrolü
            const isNumeric = /^\d+$/.test(this.form.tel);
            if (!isNumeric) {
                alert("Vue.js: Telefon sadece rakam içermelidir!");
                return;
            }

            if (!this.form.onay) {
                alert("Vue.js: Onay kutusunu işaretlemediniz!");
                return;
            }

            alert("Vue.js: Denetim başarılı! Bilgiler PHP'ye iletiliyor...");
            document.getElementById('contactForm').submit();
        }
    }
}).mount('#app');