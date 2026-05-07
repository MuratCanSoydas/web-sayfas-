<?php
// gonder.php içeriği
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ad = htmlspecialchars($_POST['ad']);
    $email = htmlspecialchars($_POST['email']);
    $tel = htmlspecialchars($_POST['tel']);
    $konu = htmlspecialchars($_POST['konu']);
    $cinsiyet = isset($_POST['cinsiyet']) ? htmlspecialchars($_POST['cinsiyet']) : 'Belirtilmedi';
    $mesaj = htmlspecialchars($_POST['mesaj']); // YENİ EKLENEN MESAJ DEĞİŞKENİ
    $onay = isset($_POST['onay']) ? 'Kabul Edildi' : 'Reddedildi';

    echo "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background-color: #f9f9f9;'>";
    echo "<h2 style='color: #198754; text-align: center;'>Form Başarıyla Gönderildi!</h2>";
    echo "<hr>";
    echo "<p><strong>Ad Soyad:</strong> " . $ad . "</p>";
    echo "<p><strong>E-posta:</strong> " . $email . "</p>";
    echo "<p><strong>Telefon:</strong> " . $tel . "</p>";
    echo "<p><strong>Konu:</strong> " . $konu . "</p>";
    echo "<p><strong>Cinsiyet:</strong> " . $cinsiyet . "</p>";
    echo "<p><strong>Mesaj:</strong> " . nl2br($mesaj) . "</p>"; // EKRANA YAZDIRILIYOR
    echo "<p><strong>Onay Durumu:</strong> " . $onay . "</p>";
    echo "<br><div style='text-align: center;'><a href='iletisim.html' style='padding: 10px 20px; background-color: #0d6efd; color: white; text-decoration: none; border-radius: 5px;'>Geri Dön</a></div>";
    echo "</div>";
} else {
    header("Location: iletisim.html");
}
?>