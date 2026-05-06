<?php
// Form verilerini POST yöntemiyle çekiyoruz
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ad = $_POST['ad'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $konu = $_POST['konu'];
    $cinsiyet = isset($_POST['cinsiyet']) ? $_POST['cinsiyet'] : "Belirtilmedi";
    $onay = isset($_POST['onay']) ? "Kabul Edildi" : "Kabul Edilmedi";

    // Proje Kuralı: Gelen tüm verileri düzenli bir şekilde ekrana yazdır
    echo "<h2>Form Gönderim Detayları</h2>";
    echo "<hr>";
    echo "<p><strong>Ad Soyad:</strong> " . htmlspecialchars($ad) . "</p>";
    echo "<p><strong>E-posta:</strong> " . htmlspecialchars($email) . "</p>";
    echo "<p><strong>Telefon:</strong> " . htmlspecialchars($tel) . "</p>";
    echo "<p><strong>Konu:</strong> " . htmlspecialchars($konu) . "</p>";
    echo "<p><strong>Cinsiyet:</strong> " . htmlspecialchars($cinsiyet) . "</p>";
    echo "<p><strong>Onay Durumu:</strong> " . $onay . "</p>";
    
    echo "<br><a href='index.html'>Ana Sayfaya Dön</a>";
} else {
    // Eğer sayfaya doğrudan girilmeye çalışılırsa geri gönder
    header("Location: iletisim.html");
}
?>