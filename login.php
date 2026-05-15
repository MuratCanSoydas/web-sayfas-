<?php
$dogru_mail = "b251210095@ogr.sakarya.edu.tr";
$dogru_sifre = "b251210095";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gelen_mail = $_POST['user_email'];
    $gelen_sifre = $_POST['user_pass'];

    // Büyük/küçük harf duyarlılığını ortadan kaldırmak için mailleri küçük harfe çevirerek karşılaştırıyoruz
    if (strtolower($gelen_mail) == strtolower($dogru_mail) && $gelen_sifre == $dogru_sifre) {
        
        // Başarılı giriş: Kişiselleştirilmiş karşılama ekranı
        echo "<div style='font-family: Arial, sans-serif; text-align: center; margin-top: 50px;'>";
        echo "<h1 style='color: #198754;'>Hoşgeldin Murat Can Soydaş</h1>";
        echo "<p>Sakarya Üniversitesi Bilgisayar Mühendisliği proje sistemine başarıyla giriş yaptınız.</p>";
        echo "<hr style='width: 50%;'>";
        echo "<br><a href='index.html' style='padding: 10px 20px; background-color: #0d6efd; color: white; text-decoration: none; border-radius: 5px;'>Siteye Devam Et</a>";
        echo "</div>";
        
    } else {
        // Hatalı giriş: JavaScript ile uyarı ver ve geri yolla
        echo "<script>
                alert('Hata: Öğrenci maili veya numarası yanlış!'); 
                window.location.href='login.html';
              </script>";
    }
} else {
    // Sayfaya URL'den direkt girmeye çalışanları engelle
    header("Location: login.html");
}
?>