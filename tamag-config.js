// ════════════════════════════════════════════════════════════════════
//  TAMAG'DAN KAÇIŞ · AYAR DOSYASI
//
//  Bu dosyayı oyunun HTML dosyasıyla AYNI KLASÖRDE tut. Oyun açılırken
//  buradaki değerleri okur; değiştirdikten sonra sayfayı yenilemen yeter.
//
//  • Yalnız sayıları, true/false değerlerini ve listeleri değiştir;
//    anahtar adlarına (can, hiz, guc ...) dokunma.
//  • Bir satırı silersen o değer için oyunun kendi varsayılanı kullanılır.
//  • Hatalı yazılmış bir değer (sayı yerine yazı gibi) yok sayılır ve
//    tarayıcı konsoluna "tamag-config: ... yok sayıldı" uyarısı düşer.
//  • Dosya hiç yoksa oyun, HTML'in içindeki aynı varsayılanlarla çalışır.
//    Sayfayı tek dosya olarak yayımlıyorsan HTML'in başındaki AYARLAR
//    bloğunu düzenle; içeriği bu dosyayla aynıdır.
// ════════════════════════════════════════════════════════════════════
window.TAMAG_CONFIG = {
  // ══════════════════════════════════════════════════════════════════
  //  DÜŞMANLAR
  //  can       : taban can (oda ilerledikçe "zorluk.odaBasiCan" kadar artar)
  //  hiz       : yürüme hızı (0 = yürümez; Ubır ve Baga kendi yollarıyla gelir)
  //  guc       : vuruş hasarı çarpanı (1 = taban hasar, 1.5 = %50 daha sert)
  //  kalkan    : canın önündeki kalkan (0 = yok). Kalkan durdukça düşman savrulmaz
  //              ve saldırısı kesilmez; kalkan kırılınca darbeler yine keser.
  //  sersemler : true  = kalkansızken yediği darbe saldırısını yarıda keser
  //              false = saldırısı hiçbir zaman kesilmez
  //  bedel     : dalga bütçesinden düştüğü pay (büyüdükçe dalgada daha az yer tutar)
  //  enCok     : tek dalgada en fazla kaç tane çıkabilir (0 = sınır yok)
  //  akce      : [düşürme olasılığı 0-1, en az, en çok]
  // ══════════════════════════════════════════════════════════════════
  dusmanlar: {
    kormos:       { can: 52,  hiz: 3.5, guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 1,    enCok: 0, akce: [0.85, 2, 5] },
    cor:          { can: 23,  hiz: 4.3, guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 0.55, enCok: 0, akce: [0.6, 1, 2] },
    yek:          { can: 38,  hiz: 2.9, guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 1.2,  enCok: 0, akce: [0.85, 2, 5] },
    abra:         { can: 100, hiz: 2.3, guc: 1.25, kalkan: 34, sersemler: true,  bedel: 2,    enCok: 2, akce: [1, 3, 6] },
    albasti:      { can: 72,  hiz: 2.6, guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 2.4,  enCok: 2, akce: [1, 3, 6] },
    hortlak:      { can: 160, hiz: 2.1, guc: 1.25, kalkan: 55, sersemler: true,  bedel: 1.8,  enCok: 2, akce: [1, 3, 6] },
    karakoncolos: { can: 90,  hiz: 3.1, guc: 1.25, kalkan: 36, sersemler: true,  bedel: 1.6,  enCok: 0, akce: [0.85, 2, 5] },
    arcura:       { can: 58,  hiz: 2.7, guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 1.4,  enCok: 0, akce: [0.85, 2, 5] },
    ayaz:         { can: 50,  hiz: 2.9, guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 1.3,  enCok: 0, akce: [0.85, 2, 5] },
    suiyesi:      { can: 80,  hiz: 2.6, guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 2.2,  enCok: 2, akce: [1, 3, 6] },
    golge:        { can: 58,  hiz: 4.0, guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 1.3,  enCok: 0, akce: [0.85, 2, 5] },
    ubir:         { can: 64,  hiz: 0,   guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 1.5,  enCok: 2, akce: [0.85, 2, 5] },
    odiyesi:      { can: 29,  hiz: 3.8, guc: 1.25, kalkan: 0,  sersemler: false, bedel: 0.8,  enCok: 3, akce: [0.6, 1, 2] },
    baga:         { can: 72,  hiz: 0,   guc: 1.25, kalkan: 26, sersemler: true,  bedel: 1.5,  enCok: 2, akce: [0.85, 2, 5] },
    buzeri:       { can: 112, hiz: 2.2, guc: 1.25, kalkan: 0,  sersemler: false, bedel: 2,    enCok: 2, akce: [1, 3, 6] },
    suyilani:     { can: 66,  hiz: 1.7, guc: 1.25, kalkan: 0,  sersemler: true,  bedel: 1.6,  enCok: 2, akce: [0.85, 2, 5] },
    ocu:          { can: 80,  hiz: 5.6, guc: 1.25, kalkan: 28, sersemler: true,  bedel: 1.7,  enCok: 2, akce: [0.85, 2, 5] },
    karakam:      { can: 90,  hiz: 2.5, guc: 1.25, kalkan: 32, sersemler: true,  bedel: 2.2,  enCok: 1, akce: [1, 3, 6] },
  },

  // ══════════════════════════════════════════════════════════════════
  //  BOSS'LAR   (saldırıları kesilmez, savrulmazlar)
  //  can · hiz · guc: verdiği bütün hasarın çarpanı · akce: düşürdüğü toplam akçe
  // ══════════════════════════════════════════════════════════════════
  bosslar: {
    tepegoz:  { can: 1100, hiz: 2.4, guc: 1, akce: 24 },
    temir:    { can: 1700, hiz: 2.5, guc: 1, akce: 24 },
    yelbegen: { can: 2200, hiz: 2.6, guc: 1, akce: 24 },
    abasi:    { can: 2700, hiz: 2.5, guc: 1, akce: 24 },
    yutpa:    { can: 3200, hiz: 3.0, guc: 1, akce: 24 },
    karas:    { can: 3700, hiz: 3.0, guc: 1, akce: 24 },
    erlik:    { can: 4800, hiz: 2.8, guc: 1, akce: 24 },
  },

  // ══════════════════════════════════════════════════════════════════
  //  KARŞILAŞMALAR
  //  Her dövüş odası, bulunduğu diyarın listesinden bir karşılaşma seçer ve
  //  bütün dalgalarını o kadrodan kurar. Aynı karşılaşma üst üste gelmez.
  //  ad       : odada sağ üstte görünen ad
  //  sira     : diyarın kaçıncı odalarından itibaren çıkabileceği
  //             (0 = ilk odadan, 1 = üçüncü odadan, 2 = yalnız son odada)
  //  dusmanlar: [tür, ağırlık] — ağırlık büyüdükçe o tür dalgada daha çok yer alır
  // ══════════════════════════════════════════════════════════════════
  diyarlar: {
    mezar: [
      { ad: 'Körmös sürüsü',          sira: 0, dusmanlar: [['kormos', 3], ['cor', 2]] },
      { ad: 'Çor baskını',            sira: 0, dusmanlar: [['cor', 5], ['kormos', 1]] },
      { ad: 'Yekler ve muhafızları',  sira: 1, dusmanlar: [['yek', 3], ['kormos', 2]] },
      { ad: 'Mezardan çıkanlar',      sira: 1, dusmanlar: [['ubir', 3], ['cor', 2]] },
      { ad: 'Mezar bekçileri',        sira: 2, dusmanlar: [['hortlak', 2], ['yek', 2], ['ubir', 1]] },
      { ad: 'Diriliş',                sira: 2, dusmanlar: [['hortlak', 2], ['ubir', 2], ['kormos', 2]] },
    ],
    kor: [
      { ad: 'Koçbaşları ve okçular',  sira: 0, dusmanlar: [['abra', 2], ['yek', 3]] },
      { ad: 'Kor yağmuru',            sira: 0, dusmanlar: [['odiyesi', 4], ['yek', 2]] },
      { ad: 'Ocak ateşi',             sira: 0, dusmanlar: [['odiyesi', 3], ['kormos', 3]] },
      { ad: 'Demirci çırakları',      sira: 1, dusmanlar: [['abra', 2], ['karakoncolos', 2], ['cor', 2]] },
      { ad: 'Yangın yeri',            sira: 1, dusmanlar: [['odiyesi', 3], ['abra', 2]] },
      { ad: 'Ağır dövenler',          sira: 2, dusmanlar: [['hortlak', 2], ['karakoncolos', 2], ['odiyesi', 2]] },
    ],
    batak: [
      { ad: 'Ağu yağdıranlar',        sira: 0, dusmanlar: [['arcura', 3], ['cor', 3]] },
      { ad: 'Sıçrayanlar',            sira: 0, dusmanlar: [['baga', 3], ['cor', 2]] },
      { ad: 'Bataklık pususu',        sira: 0, dusmanlar: [['baga', 2], ['arcura', 2]] },
      { ad: 'Ezenler',                sira: 1, dusmanlar: [['hortlak', 2], ['baga', 2]] },
      { ad: 'Albastı yuvası',         sira: 1, dusmanlar: [['albasti', 2], ['cor', 3]] },
      { ad: 'Dönenler ve ağu',        sira: 1, dusmanlar: [['karakoncolos', 3], ['arcura', 2]] },
      { ad: 'Çamur ve boynuz',        sira: 2, dusmanlar: [['abra', 2], ['baga', 2], ['arcura', 1]] },
    ],
    buz: [
      { ad: 'Kalkan duvarı',          sira: 0, dusmanlar: [['buzeri', 2], ['ayaz', 3]] },
      { ad: 'Ayaz okçuları',          sira: 0, dusmanlar: [['ayaz', 3], ['kormos', 2]] },
      { ad: 'Tipi sürüsü',            sira: 0, dusmanlar: [['kormos', 3], ['cor', 3]] },
      { ad: 'Buz ve boynuz',          sira: 1, dusmanlar: [['buzeri', 2], ['abra', 2]] },
      { ad: 'Donmuş muhafızlar',      sira: 1, dusmanlar: [['buzeri', 2], ['hortlak', 2], ['ayaz', 1]] },
      { ad: 'Kar fırtınası',          sira: 2, dusmanlar: [['karakoncolos', 3], ['ayaz', 2]] },
    ],
    gol: [
      { ad: 'Kamçı ve diş',           sira: 0, dusmanlar: [['suyilani', 2], ['cor', 4]] },
      { ad: 'Su iyeleri',             sira: 0, dusmanlar: [['suiyesi', 2], ['yek', 2]] },
      { ad: 'Kıyı ateşi',             sira: 0, dusmanlar: [['arcura', 2], ['yek', 2], ['suyilani', 1]] },
      { ad: 'Çek ve vur',             sira: 1, dusmanlar: [['suyilani', 2], ['abra', 2]] },
      { ad: 'Girdap oyunu',           sira: 1, dusmanlar: [['karakoncolos', 2], ['suiyesi', 2]] },
      { ad: 'Göl halkı',              sira: 2, dusmanlar: [['suiyesi', 2], ['suyilani', 2], ['arcura', 2]] },
    ],
    kara: [
      { ad: 'Gölge sürüsü',           sira: 0, dusmanlar: [['golge', 4], ['cor', 2]] },
      { ad: 'Arkandakiler',           sira: 0, dusmanlar: [['ocu', 2], ['golge', 2]] },
      { ad: 'Işınlananlar',           sira: 0, dusmanlar: [['albasti', 2], ['ocu', 2]] },
      { ad: 'Karanlıkta dönenler',    sira: 1, dusmanlar: [['karakoncolos', 3], ['golge', 2]] },
      { ad: 'Kör dövüş',              sira: 1, dusmanlar: [['hortlak', 2], ['ocu', 2]] },
      { ad: 'Kâbus',                  sira: 2, dusmanlar: [['albasti', 2], ['golge', 3], ['ocu', 1]] },
    ],
    saray: [
      { ad: 'Kam ve müritleri',       sira: 0, dusmanlar: [['karakam', 1], ['kormos', 3], ['cor', 2]] },
      { ad: 'Saray okçuları',         sira: 0, dusmanlar: [['yek', 2], ['ayaz', 2], ['abra', 2]] },
      { ad: 'Işınlananlar',           sira: 0, dusmanlar: [['albasti', 2], ['suiyesi', 2]] },
      { ad: 'Kam ve muhafızları',     sira: 1, dusmanlar: [['karakam', 1], ['hortlak', 2], ['karakoncolos', 2]] },
      { ad: 'Gölge alayı',            sira: 1, dusmanlar: [['golge', 3], ['albasti', 1], ['karakam', 1]] },
      { ad: "Erlik'in seçkinleri",    sira: 2, dusmanlar: [['abra', 2], ['hortlak', 2], ['yek', 2], ['karakam', 1]] },
      { ad: 'Son savunma',            sira: 2, dusmanlar: [['karakoncolos', 2], ['suiyesi', 1], ['ayaz', 2], ['karakam', 1]] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  ZORLUK EĞRİSİ
  // ══════════════════════════════════════════════════════════════════
  zorluk: {
    tabanCan: 1.15,          // bütün düşman ve boss canlarının taban çarpanı
    tabanHasar: 1.1,         // oyuncunun yediği bütün hasarın taban çarpanı
    kaliciGucCan: 0.012,     // alınan her kalıcı güç seviyesi için düşman canına eklenen pay
    kaliciGucHasar: 0.008,   // alınan her kalıcı güç seviyesi için yenen hasara eklenen pay
    gazapCan: 0.12,          // Erlik'in Gazabı'nın her kademesi için can payı
    gazapHasar: 0.08,        // Erlik'in Gazabı'nın her kademesi için hasar payı
    odaBasiCan: 0.06,        // sıradan düşmanların canı her odada bu kadar artar (0.06 = %6)
    odaBasiHasar: 0.022,     // yenen hasar her odada bu kadar artar
    seckin: {                // seçkin (altın halkalı) düşmanlar
      olasilik: 0.4,         // son dalgada seçkin çıkma olasılığı (ilk diyar)
      diyarArtisi: 0.08,     // her diyarda olasılığa eklenen pay
      can: 2.4,              // can çarpanı
      hasar: 1.25,           // hasar çarpanı
      kalkan: 0.25,          // canının bu oranı kadar kalkanla gelir
      akce: [8, 11],         // düşürdüğü akçe [en az, en çok]
    },
  },

  // ══════════════════════════════════════════════════════════════════
  //  DALGALAR
  //  Bir dalganın bütçesi = (butce + oda*odaBasiButce + dalgaSirasi*dalgaBasiButce) * çarpan
  //  Bütçe, düşmanların "bedel"leriyle harcanır.
  // ══════════════════════════════════════════════════════════════════
  dalgalar: {
    butce: 2.4,
    odaBasiButce: 0.14,
    dalgaBasiButce: 0.4,
    gazapButce: 0.3,         // Gazap kademesi başına ek bütçe
    enCokDusman: 7,          // tek dalgadaki düşman sayısı üst sınırı (büyük dalgalarda biraz esner)
    // Oda düzenleri: agirlik = seçilme sıklığı, carpanlar = her dalganın bütçe çarpanı.
    // Dalga sayısı, carpanlar listesinin uzunluğudur. mesaj odaya girince gösterilir.
    duzenler: [
      { ad: 'uc',    agirlik: 36, carpanlar: [1, 1, 1],            mesaj: '' },
      { ad: 'artan', agirlik: 18, carpanlar: [0.65, 1, 1.5],       mesaj: 'Dalgalar giderek büyüyor.' },
      { ad: 'iki',   agirlik: 18, carpanlar: [1.35, 1.6],          mesaj: 'İki büyük dalga.' },
      { ad: 'tek',   agirlik: 14, carpanlar: [2.6],                mesaj: 'Tek dalga: hepsi birden geliyor.' },
      { ad: 'dort',  agirlik: 14, carpanlar: [0.7, 0.7, 0.8, 0.9], mesaj: 'Dört kısa dalga.' },
    ],
    // Zorlu oda: kapıda kırmızı yıldızla işaretlenir.
    zorlu: {
      olasilik: 0.35,        // iki kapıdan birinin zorlu olma olasılığı
      butce: 1.4,            // dalga bütçesi çarpanı
      araDalgaSeckin: 0.5,   // son dalga dışındaki dalgalarda seçkin çıkma olasılığı (son dalgada kesin çıkar)
      akce: 20,              // temizleyince verilen ek akçe
      yada: 1,               // temizleyince verilen ek yada taşı
    },
  },

  // ══════════════════════════════════════════════════════════════════
  //  EKONOMİ
  // ══════════════════════════════════════════════════════════════════
  ekonomi: {
    kupAkceOlasilik: 0.33,   // kırılan küpten akçe çıkma olasılığı
    kupAkce: [1, 2],         // küpten çıkan akçe [en az, en çok]
    kupCanOlasilik: 0.08,    // kırılan küpten can çıkma olasılığı
    akceKesesi: 35,          // "Akçe kesesi" oda ödülü
    altBossOdulu: 32,        // diyar boss'unu yenince verilen akçe
    gucKalmadiAkce: 40,      // tanrıların verecek gücü kalmadığında verilen akçe
    fiyatDiyarArtisi: 0.12,  // dükkân fiyatları her diyarda bu kadar artar
    yadaVerenOdalar: [1, 3],    // diyarın hangi dövüş odaları yada taşı verir (0 = ilk oda, 3 = son oda)
    yadaSeckin: 1,           // seçkin düşman başına yada
    yadaBoss: 4,             // diyar boss'u başına yada
    yadaErlik: 12,           // Erlik'i yenince yada
  },

  // ══════════════════════════════════════════════════════════════════
  //  OYUNCU VE SİLAHLAR
  // ══════════════════════════════════════════════════════════════════
  oyuncu: {
    can: 100,
    hiz: 5.4,
    naraHasar: 28,
    naraBekleme: 5,          // saniye
    atilmaBekleme: 0.6,      // saniye
  },
  silahlar: {
    kilic: {
      darbeler: [20, 20, 42],  // üç darbelik kombonun hasarları
      hamle: 34,               // atılmanın ardından gelen darbe
      ozel: { hasar: 18, bekleme: 1.6, kalkanCarpani: 4 }, // Kalkan Kıran: kalkana 4 kat hasar
    },
    yay: {
      oklar: [15, 15, 30],     // üçüncü ok ağırdır: bir düşmanı delip geçer, saldırı keser
      hamle: 13,               // atılmanın ardından üçlü yelpaze; ok başına hasar
      okHizi: 16,
      ozel: { hasar: 34, bekleme: 2.2 },                   // Delici Ok: önündeki herkesi deler
    },
  },
};
