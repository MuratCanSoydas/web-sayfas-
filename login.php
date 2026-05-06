<?php
// Senin bilgilerini buraya tanımlıyoruz
$dogru_mail = "b2412100001@sakarya.edu.tr"; // Kendi numaranla değiştir
$dogru_sifre = "b2412100001"; // Kendi numaranla değiştir

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gelen_mail = $_POST['user_email'];
    $gelen_sifre = $_POST['user_pass'];

    if ($gelen_mail == $dogru_mail && $gelen_sifre == $dogru_sifre) {
        // Başarılı giriş: Hoşgeldiniz mesajı
        echo "<h1>Hoşgeldiniz " . $dogru_sifre . "</h1>";
        echo "<p>Başarıyla giriş yaptınız.</p>";
        echo "<a href='index.html'>Siteye Git</a>";
    } else {
        // Hatalı giriş: Mesaj ver ve geri gönder[cite: 1]
        echo "<script>alert('Hatalı kullanıcı adı veya şifre!'); window.location.href='login.html';</script>";
    }
}
?>