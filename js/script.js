// ==========================================
// 1. NATIVE JAVASCRIPT İLE FORM DOĞRULAMA
// ==========================================
function validateNative() {
    // Form elemanlarını ID'leri üzerinden çekiyoruz ve sağındaki/solundaki boşlukları temizliyoruz (trim)
    const ad = document.getElementById('ad').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const konu = document.getElementById('konu').value;
    const mesaj = document.getElementById('mesaj').value.trim(); // YENİ EKLENEN MESAJ ALANI
    const erkek = document.getElementById('erkek').checked;
    const kadin = document.getElementById('kadin').checked;
    const onay = document.getElementById('onay').checked;

    // 1. Boş Alan Kontrolü
    if (ad === "" || email === "" || tel === "" || konu === "" || mesaj === "") {
        alert("Native JS Hata: Lütfen ad, e-posta, telefon, konu ve mesaj alanlarını eksiksiz doldurunuz.");
        return;
    }

    // 2. Email Formatı Kontrolü (Regular Expression / Düzenli İfade)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Native JS Hata: Lütfen geçerli bir e-posta adresi giriniz. (Örn: isim@domain.com)");
        return;
    }

    // 3. Telefon Sadece Rakam Kontrolü
    const telRegex = /^[0-9\s]+$/;
    if (!telRegex.test(tel)) {
        alert("Native JS Hata: Telefon numarası sadece rakamlardan oluşmalıdır.");
        return;
    }

    // 4. Radio Button (Cinsiyet) Kontrolü
    if (!erkek && !kadin) {
        alert("Native JS Hata: Lütfen cinsiyet seçiminizi yapınız.");
        return;
    }

    // 5. Checkbox (Onay) Kontrolü
    if (!onay) {
        alert("Native JS Hata: Formu göndermek için kişisel verilerin işlenmesi şartını onaylamalısınız.");
        return;
    }

    // Tüm testler geçildiyse formu arka plandaki PHP'ye gönder
    document.getElementById('contactForm').submit();
}

// ==========================================
// 2. VUE.JS İLE FORM DOĞRULAMA
// ==========================================
const { createApp } = Vue;

createApp({
    data() {
        return {
            // HTML içindeki v-model özelliklerinin bağlandığı veri ambarı
            form: {
                ad: '',
                email: '',
                tel: '',
                konu: '',
                mesaj: '', // YENİ EKLENEN MESAJ ALANI
                cinsiyet: '',
                onay: false
            }
        }
    },
    methods: {
        validateVue() {
            // 1. Boş Alan Kontrolü
            if (!this.form.ad || !this.form.email || !this.form.tel || !this.form.konu || !this.form.mesaj) {
                alert("Vue.js Hata: Lütfen tüm metin ve mesaj alanlarını doldurunuz.");
                return;
            }

            // 2. Email Formatı Kontrolü
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.form.email)) {
                alert("Vue.js Hata: Lütfen geçerli bir e-posta formatı kullanınız.");
                return;
            }

            // 3. Telefon Rakam Kontrolü
            const telRegex = /^[0-9\s]+$/;
            if (!telRegex.test(this.form.tel)) {
                alert("Vue.js Hata: Telefon numarasında harf bulunamaz, sadece rakam giriniz.");
                return;
            }

            // 4. Radio (Cinsiyet) Kontrolü
            if (!this.form.cinsiyet) {
                alert("Vue.js Hata: Lütfen cinsiyet seçiniz.");
                return;
            }

            // 5. Checkbox (Onay) Kontrolü
            if (!this.form.onay) {
                alert("Vue.js Hata: Devam etmek için onay kutusunu işaretlemelisiniz.");
                return;
            }

            // Tüm testler geçildiyse formu manuel olarak tetikle ve PHP'ye yolla
            document.getElementById('contactForm').submit();
        }
    }
}).mount('#app');