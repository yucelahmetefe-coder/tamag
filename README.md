# Tamag'dan Kaçış · mobil paket

Bu klasör, oyunun telefonda oynanan sürümünü ve onu dağıtmak için gereken her şeyi içerir:

- **Dokunmatik kontroller** eklenmiş oyun (`www/index.html`). Masaüstünde klavye ve fareyle eskisi gibi çalışır.
- **PWA**: tarayıcıdan açılıp ana ekrana eklenen, çevrimdışı çalışan sürüm.
- **Android projesi** (`android/`, Capacitor 8): APK üretir.
- **GitHub iş akışları**: projeyi GitHub'a gönderdiğinde APK'yı derler ve PWA'yı yayımlar. Bilgisayarına Android Studio kurman gerekmez.

> Bu pakette hazır bir APK yok. Hazırlandığı ortamda Android derleme araçları indirilemediği için APK burada derlenemedi; ilk APK'yı aşağıdaki GitHub adımı üretecek. Android projesi bu yüzden henüz hiç derlenmedi: ilk derlemede hata çıkarsa Actions sekmesindeki hata çıktısıyla düzeltilmesi gerekir.

---

## 1. GitHub'a yükle (bir kez)

1. github.com'da yeni bir depo aç (örnek ad: `tamag`). Arkadaşların APK'yı ve oyunun adresini giriş yapmadan açabilsin istiyorsan **Public** seç. Ücretsiz hesapta GitHub Pages yalnızca herkese açık depolarda çalışır.
2. Bu klasörün **içindekileri** depoya gönder. En kolayı [GitHub Desktop](https://desktop.github.com): *File > Add local repository* ile bu klasörü seç, *Publish repository* de.
   Tarayıcıdan sürükleyip bırakacaksan gizli `.github` klasörünün ve `.gitignore` dosyasının da gittiğinden emin ol; iş akışları `.github` içinde.
3. Depoda **Settings > Pages > Build and deployment > Source** ayarını **GitHub Actions** yap.
4. **Actions** sekmesini aç. İki iş akışı çalışır:
   - **Android APK** (5-10 dakika): bitince deponun **Releases** sayfasında `tamagdan-kacis.apk` belirir.
   - **PWA (GitHub Pages)** (1 dakika): oyun `https://KULLANICI-ADIN.github.io/DEPO-ADI/` adresinde yayına girer.

Pages ayarını 3. adımdan önce yapmadıysan PWA iş akışı ilk seferde kırmızı çarpı verir. Ayarı yapıp Actions sekmesinden *Re-run* de.

## 2. Telefona kur

**Android, APK ile**
1. Telefonun tarayıcısında deponun Releases sayfasını aç, `tamagdan-kacis.apk` dosyasını indir.
2. Dosyayı aç. Telefon "bilinmeyen kaynaklardan yükleme" izni ister; tarayıcı için izin ver.
3. Play Protect uyarırsa "Yine de yükle" de. Uygulama mağazadan gelmediği için bu uyarı beklenir.

**Android ya da iPhone, PWA ile**
- Android (Chrome): oyunun adresini aç, başlık ekranındaki **Ana ekrana ekle** düğmesine bas (ya da menüden "Ana ekrana ekle / Uygulamayı yükle").
- iPhone (Safari): adresi aç, **Paylaş > Ana Ekrana Ekle**. iPhone'da ekran döndürme kilidi kapalı olmalı.

APK ile PWA'nın kayıtları ayrıdır; ilerleme birinden ötekine geçmez.

## 3. Güncelleme

Bir dosyayı değiştirip GitHub'a gönderdiğinde iki iş akışı yeniden çalışır.

- **Denge ayarları**: `www/tamag-config.js` dosyasını düzenle (düşman canları, dalgalar, ekonomi, silahlar). Dosyanın başındaki açıklamalar geçerli.
- **Oyunun kendisi**: `www/index.html`.
- **PWA**: telefon çevrimiçiyse bir sonraki açılışta yeni sürüm gelir.
- **APK**: Releases sayfasından yenisini indirip kur. Eskisinin üstüne kurulur, kayıtlar kalır.

## 4. Kontroller

| | |
|---|---|
| **Sol başparmak** | Ekranın sol yarısında parmağını koyduğun yerde joystick belirir. |
| **Saldır** | Basılı tutunca saldırı sürer. Karakter menzildeki en uygun düşmana kendiliğinden döner. Düğmeyi basılı tutup dışına sürüklersen nişanı elle alırsın. |
| **Özel** | Parmağını kaldırınca atılır. Sürükleyip bırakırsan o yöne gider. |
| **Atıl** | Joystick'in yönüne atılır; joystick boştaysa baktığın yöne. |
| **Nara** | Çevrendekileri savurur. |
| **Etkileşim** | Kapı, tezgâh ya da ocak yanındayken sağda beliren düğme. |
| **Duraklat** | Sağ üstte. Android'de geri tuşu da duraklatır. |

Yürürken karakter gittiğin yöne bakar; Saldır ya da Özel'e bastığında hedefe döner. Öcü gibi "ona bakarken kıpırdamayan" düşmanlar bu yüzden telefonda da aynı mantıkla çalışır.

**Ayarlar** duraklatma ekranındadır ve cihazda saklanır: Ses, Müzik, Grafik (Otomatik / Yüksek / Düşük), Titreşim, Yakınlık, Düğme boyutu. "Grafik: Otomatik" kare hızı düşerse kaliteyi kendiliğinden indirir.

## 5. Bilgisayarda denemek

```
npm install
npm run serve
```

Sonra `http://localhost:8080` adresini aç. Chrome'da F12 > cihaz araç çubuğu (telefon simgesi) ile dokunmatiği taklit edebilirsin. `www/index.html` dosyasına çift tıklayarak da açılır; yalnız çevrimdışı önbellek o şekilde devreye girmez.

APK'yı kendi bilgisayarında derlemek istersen Android Studio ve JDK 21 kurulu olmalı: `npm install && npm run apk`. Çıktı `android/app/build/outputs/apk/debug/app-debug.apk`.

## 6. Bilinen sınırlar

- **Gerçek telefonda denenmedi.** Dokunmatik kontroller masaüstü Chrome'un telefon öykünmesinde (800×360, 667×375, 1180×820) sınandı. Parmak hissi, düğme yerleri ve kare hızı için telefonda deneyip ayar istemen beklenir.
- **Kayıt yalnızca cihazda.** Web sürümündeki hesaba bağlı bulut kaydı burada yok. Uygulamayı silersen ya da tarayıcı verisini temizlersen ilerleme gider.
- **Performans.** Eski ya da zayıf telefonlarda efekti yoğun yerlerde (özellikle Kara Diyar) kare düşebilir. "Grafik: Düşük" bunu hafifletir.
- **Yalnızca yatay ekran.** Dikey tutulunca oyun durur ve "yan çevir" uyarısı çıkar.
- **iPhone.** PWA olarak çalışır; App Store paketi yok. Tarayıcıda tam ekran ve yatay kilit iPhone'da desteklenmez, bu yüzden ana ekrana eklemek gerekir.

## 7. İleride mağazaya çıkmak istersen

- **Uygulama kimliği** şu an `com.tamagdankacis.oyun`. Mağazaya çıkmadan önce kendine ait bir kimlikle değiştir (`capacitor.config.json`, `android/app/build.gradle` ve `android/app/src/main/java/...` klasör yolu). Yayından sonra değiştirilemez.
- **İmza anahtarı.** `android/keystore/tamag-debug.keystore` depoda açık duran, şifresi bilinen bir anahtardır. Amacı, her derlemenin aynı imzayı taşıması ve güncellemelerin üst üste kurulabilmesidir. Depo herkese açıksa başkası da aynı imzayla APK üretebilir; arkadaşlarına yalnızca kendi Releases sayfandan indirmelerini söyle. Google Play için ayrı, gizli bir anahtar ve `release` derlemesi (AAB) gerekir.
- **Google Play**: geliştirici hesabı tek seferlik 25 $; yeni kişisel hesaplarda yayından önce 12 kişiyle 14 gün kapalı test şartı var.
- **App Store**: Mac, Xcode ve yıllık 99 $ Apple Developer üyeliği gerekir. iOS projesi `npm i @capacitor/ios && npx cap add ios` ile aynı `www` klasöründen üretilir.

## 8. Klasör yapısı

```
www/                    oyunun kendisi (tarayıcıda da, uygulamada da bu çalışır)
  index.html            oyun + dokunmatik katman
  tamag-config.js       denge ayarları
  manifest.webmanifest  PWA tanımı
  sw.js                 çevrimdışı önbellek
  fonts/  icons/        gömülü fontlar (SIL OFL) ve simgeler
android/                Android projesi (Capacitor)
.github/workflows/      APK ve PWA iş akışları
capacitor.config.json   uygulama adı, kimliği, tam ekran ayarı
```
