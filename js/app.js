function kategoriSec(butce) {
  const kategoriler = {
    paramVar: [
      "Sinema", "Restoran", "Alisveris", "Fifa", "Spa Gunu", "Konser", "ozel ders",
      "Tatil", "parti", "sokak", "internet", "Lunapark", "para", "spor", "Bilardo",
      "bowling", "Yat Turu", "Muzik Dinle", "Tiyatro", "Kahve ic", "Futbol Oyna",  "Bisiklete Bin",
      "korku", "go", "poligon", "Gece Kulubune Git", "Gezi Turu Yap", "Acik Hava Sinemasi", "Muze Turu",
      "Araba Kirala", "Tatli Ye", "Calistigin Kafede Vakit Gecir", "Balonla Gezi", "Tatil Koyunde Konakla", "sanal",
      "Bungee Jumping Yap", "Yelkenli Turu", "bar", "Trekking Yap", "Paintball Oyna", "Rafting Yap", "Canoe Turu"

    ],
    paramYok: [
      "Evde Film Izle",  "Kitap Oku", "Online Kursa Basla", "Evde Kal", "Kola Ic", "Gece Yuruyusu", "Muze Ziyareti",
      "Arkadaslarla Sohbet Et", "Kendin Yap Projeleri", "Zen Yap", "Yemek Pisir", "Gonullu Ol", "Meditasyon Yap",
      "Evde Yoga Yap", "Puzzle Coz", "Boya Yap", "Kendi Kitabini Yaz", "Film Cek", "Gunluk Tut", "Siir Yaz", "Yazi Yaz", "Sanal Gerceklik Oyna",
      "Online Oyun Oyna", "Kendi Web Siteni Yap", "Kendi Yatirimini Yap", "Kendi Filmini Yap", "Evde Dans Et", "Sarki Soyle", "Kendi Tarzini Olustur",
      "Kendi Cekimini Yap", "Evde Dizi Izle", "Deney Yap", "Bir Hobi Edin","ha","ba","da","na","sa","wa","ca","za"
    ]
  };

  const allButtons = document.querySelectorAll('.container button');
  allButtons.forEach(button => button.classList.remove('selected'));

  const secilenKategoriler = kategoriler[butce];

  const randomKategori = secilenKategoriler[Math.floor(Math.random() * secilenKategoriler.length)];

  kararVer(randomKategori);
}

function kararVer(kategori) {
  const detaylar = {
    "Sinema": "Vizyondaki filmlerden birini izlemek için sinemaya gidin.",
    "Restoran": "Yakındaki popüler restoranları deneyin.",
    "Alisveris": "Bugün alışveriş merkezine gitmek güzel olabilir.",
    "Fifa": "Fifaya gidin.",
    "Spa Gunu": "Rahatlamak için bir spa günü planlayın.",
    "Konser": "Sevdiğiniz bir sanatçının konserine gidin.",
    "ozel ders": "İlgi duyduğunuz bir konuda özel ders alabilirsiniz.",
    "Tatil": "Karaokeye'ye gidin!",
    "parti": "Partiye katılın.",
    "sokak": "Şehrinizdeki sokak lezzetlerini deneyimleyebilirsiniz.",
    "internet": "İnternet kafe olabilir.",
    "Lunapark": "Lunapark eğlencesine katılın.",
    "para": "Daha çok para kazanmak için çalış.",
    "spor": "Birkaç saatlik havuz ya da fitness salonu kullanımı için günlük bilet alabilirsiniz.",
    "Bilardo": "Bilardo salonunda vakit geçirin.",
    "bowling": "Bowling oynamaya gidebilirsiniz.",
    "Yat Turu": "Yat turu ile denizin keyfini çıkarın.",
    "Muzik Dinle": "Canlı müzik dinlemek için bir mekâna gidin.",
    "Tiyatro": "Bir tiyatro oyununa bilet alın ve izleyin.",
    "Kahve ic": "Sevdiğiniz bir kafede kahve içmeye gidin.",
    "Futbol Oyna": "Akşama halı saha ayarla.",
    "Bisiklete Bin": "Bisikletle doğa turu yapın.",
    "korku": "Korku evine git.",
    "go": "Go Kart'a git.",
    "poligon": "Poligona git.",
    "Gece Kulubune Git": "Gece kulübünde eğlenceli bir gece geçirin.",
    "Gezi Turu Yap": "Bir şehir turu yaparak keşiflerde bulunun.",
    "Acik Hava Sinemasi": "Açık hava sinemasında film izleyin.",
    "Muze Turu": "Bir müze gezisi yapın.",
    "Araba Kirala": "Bir araba kiralayarak kısa bir gezi yapın.",
    "Tatli Ye": "Tatlı bir şeyler yiyin.",
    "Calistigin Kafede Vakit Gecir": "Çalıştığınız kafede rahatça vakit geçirebilirsiniz.",
    "Balonla Gezi": "Bir balona binip şehri yukarıdan izleyin.",
    "Tatil Koyunde Konakla": "Bir tatil köyünde konaklayarak doğayla iç içe bir tatil yapın.",
    "sanal": "Sanal gerçekçilik oynamaya git.",
    "Bungee Jumping Yap": "Adrenalini yüksek bir deneyim için bungee jumping yapın.",
    "Yelkenli Turu": "Yelkenliyle denizde rahat bir tur yapın.",
    "bar": "Güzel bir bara gidin.",
    "Trekking Yap": "Doğayla iç içe bir yürüyüşe çıkın.",
    "Paintball Oyna": "Arkadaşlarınızla paintball oynayarak eğlenceli bir gün geçirin.",
    "Rafting Yap": "Adrenalini yüksek bir rafting deneyimi yaşayın.",
    "Canoe Turu": "Bir kano turuna çıkarak nehir veya gölette keyif yapın.",

    //
    "Evde Film Izle": "Evde rahatça izleyebileceğiniz bir film seçin.",
    "Kitap Oku": "İlginizi çeken bir kitap alıp okumaya başlayın.",
    "Online Kursa Basla": "Ilgi duyduğunuz bir konuda online kursa katılın.",
    "Evde Kal": "Evde dinlenip rahatlayabileceğiniz bir gün geçirin.",
    "Kola Ic": "Arkadaşlarınızla güreşin",
    "Gece Yuruyusu": "Gece yürüyüşüne çıkarak sakin bir atmosferde rahatlayın.",
    "Muze Ziyareti": "En yakın ücretsiz müzeye gidip tarihi eserleri keşfedin.",
    "Arkadaslarla Sohbet Et": "Uzun zamandır görmediğiniz arkadaşlarınızla sohbet edin.",
    "Kendin Yap Projeleri": "Kendi başınıza evde yapabileceğiniz yaratıcı projelerle vakit geçirin.",
    "Zen Yap": "Ev boşmu yapacağın en iyi şeyi biliyorsun :)",
    "Yemek Pisir": "Yeni bir tarif deneyerek mutfakta vakit geçirin.",
    "Gonullu Ol": "Bir sosyal sorumluluk projesinde gönüllü olarak yer alın.",
    "Meditasyon Yap": "Zihninizi rahatlatmak için meditasyon yapın.",
    "Evde Yoga Yap": "Evde Tabu oynayın.",
    "Puzzle Coz": "Zihninizi zorlayacak bir puzzle çözerek vakit geçirin.",
    "Boya Yap": "Parasız erkeği sadece annesi sever.",
    "Kendi Kitabini Yaz": "Hayalinizdeki hikayeyi yazın ve kendi kitabınızı oluşturun.",
    "Film Cek": "Kendi kısa filminizi çekerek yaratıcılığınızı gösterin.",
    "Gunluk Tut": "Günlük tutarak duygularınızı ve düşüncelerinizi yazıya dökün.",
    "Siir Yaz": "Kelimelerle duygularınızı ifade edebileceğiniz bir şiir yazın.",
    "Yazi Yaz": "Dogruluk mu Cesaret mi?",
    "Sanal Gerceklik Oyna": "Paran yoksa daha çok çalış.",
    "Online Oyun Oyna": "Arkadaşlarınızla veya tek başınıza online oyun oynayın.",
    "Kendi Web Siteni Yap": "Kendi web sitenizi tasarlayın ve online platformda yayınlayın.",
    "Kendi Yatirimini Yap": "Finansal özgürlüğünüz için yatırım yapmaya başlayın.",
    "Kendi Filmini Yap": "Kendi kısa filminizi çekip düzenleyerek paylaşın.",
    "Evde Dans Et": "Yakınınızdaki bir koşu ya da yürüyüş parkurunu keşfedin.",
    "Sarki Soyle": "Arkadaşlarınızla bilginizi yarıştırcak oyunlar oynayın.",
    "Kendi Tarzini Olustur": "Paran yoksa çok seçeneğin yok..",
    "Kendi Cekimini Yap": "Evden hazırladığınız yiyeceklerle yakınınızdaki bir parkta keyifli bir piknik yapabilirsiniz.",
    "Evde Dizi Izle": "Favori dizilerinizi izleyerek rahatlayın.",
    "Deney Yap": "Evde basit bilimsel deneyler yaparak eğlenin ve öğrenin.",
    "Bir Hobi Edin": "Yeni bir hobi edinerek boş vakitlerinizi değerlendirip keyif alın.",
    "ha": "Evde spor yapın.",
    "ba": "Arkadaşlarınızla toplanıp bir parkta futbol, voleybol ya da frizbi oynayın.",
    "da": "Evde sinema gecesi düzenleyerek sevdiklerinizle vakit geçirin.",
    "na": "Farklı şehirleri sanal turla keşfedin.",
    "sa": "Evde çalışabileceğiniz düzenli bir alan oluşturun.",
    "wa": "Araştırma yap.",
    "ca": "Hayal kurarak zihinsel bir kaçış yapın.",
    "za": "Kendi podcast'inizi kaydederek dinleyicilerle paylaşın."

  };

  if (kategori === "Evde Film Izle") {
    const filmTurleri = ["Aksiyon", "Komedi", "Dram", "Korku", "Bilim Kurgu", "Romantik", "Animasyon"];
    const turHTML = filmTurleri
      .map(tur => `<button onclick="filmTuruSec('${tur}')">${tur}</button>`)
      .join(" ");
    document.getElementById("secenekler").innerHTML = `
      <p>Film Turleri:</p>
      <div>${turHTML}</div>
    `;
    return;
  }

  document.getElementById("secenekler").innerHTML = `<p class="result">${detaylar[kategori]}</p>`;
}

function filmTuruSec(tur) {
  const filmMesaji = `Secilen tur: ${tur}. Bir öneri!`;

  const filmOnerileri = {
    Aksiyon: ["Mad Max: Fury Road", "John Wick", "Avengers: Endgame"],
    Komedi: ["The Hangover", "Superbad", "Ted"],
    Dram: ["The Shawshank Redemption", "Forrest Gump", "The Pursuit of Happyness"],
    Korku: ["The Conjuring", "It", "A Quiet Place"],
    "Bilim Kurgu": ["Inception", "Interstellar", "The Matrix"],
    Romantik: ["The Notebook", "Pride and Prejudice", "La La Land"],
    Animasyon: ["Toy Story", "Finding Nemo", "The Lion King"]
  };

  const secilenFilmler = filmOnerileri[tur];
  const randomFilm = secilenFilmler[Math.floor(Math.random() * secilenFilmler.length)];

  document.getElementById("secenekler").innerHTML = `
    <p class="result">${filmMesaji}</p>
    <p><strong>Önerilen Film:</strong> ${randomFilm}</p>
  `;
}

function yemeksec(kategori) {
  const yemekler = {
    "Fiyat Performans": [
      "Lahmacun", "Çigkofte", "Mercimek", "Makarna", "Pizza", "Tantuni", "Nohut Durum", "Bulgur Pilavi",
      "Pide", "Kumpir", "Simit", "Izgara Tavuk", "Makarna", "Döner", "Mantı", "Kısır", "Saray Helvası",
      "Kumpir", "Çörek", "Kısır", "Mantar Çorbası","Adana durum","Urfa durum","Tost"
    ],
    "Zengin adam": [
      "Balik", "Antrikot", "Kavurma", "Lobster", "Kuzu Tandir", "Caviar", "Biftek", "Somon", "Avokadolu Salata",
      "Karides", "Kuzu Pirzola", "Steak", "Osmanli Kebabı", "Ispanyol Paella", "Truffle", "Foie Gras",
      "Fugu Baligi", "Kuzu Eti", "Kavurma", "Karidesli Salata", "Yengeç", "Izgara Somon", "Beyaz Peynirli Kısır"
    ]
  };

  const secilenYemekler = yemekler[kategori];

  if (secilenYemekler.length === 0) {
    document.getElementById("yemek").innerHTML = `<p class="result">Bu kategoride yemek secenegi bulunmamaktadir.</p>`;
    return;
  }

  const randomYemek = secilenYemekler[Math.floor(Math.random() * secilenYemekler.length)];

  yemekKararVer(randomYemek);
}

function yemekKararVer(yemek) {
  document.getElementById("yemek").innerHTML = `<p class="result">${yemek}</p>`;
}

// Hava durumu API anahtari
const apiKey = "a1763f49907d425bad09327ad4a10944";

// Hava durumu alma fonksiyonu
function getWeather() {
  const city = document.getElementById("citySelect").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      document.getElementById("weatherResult").innerHTML = `
        <p><strong>Sehir:</strong> ${city}</p>
        <p><strong>Sicaklik:</strong> ${temperature}°C</p>
        <p><strong>Durum:</strong> ${description}</p>
      `;
    })
    .catch(error => console.error("Hata:", error));
}

function kiyafetKombinOnerisi(temperature, description) {
  let kombin = '';

  if (temperature <= 10) {
    kombin = "Soğuk hava için: Kalın bir mont, bere ve eldiven kullanmanızı öneririz.";
  } else if (temperature > 10 && temperature <= 20) {
    kombin = "Ilık hava için: Hafif bir ceket veya sweatshirt ile rahat edebilirsiniz.";
  } else if (temperature > 20 && temperature <= 30) {
    kombin = "Sıcak hava için: T-shirt ve şort idealdir.";
  } else {
    kombin = "Çok sıcak hava için: Hafif bir tişört ve şort, şapka ve güneş gözlüğü takmanızı öneririz.";
  }

  if (description.includes("rain") || description.includes("yağmur")) {
    kombin += " Ayrıca, yağmura karşı hazırlıklı olun! Şemsiye veya su geçirmez bir mont da alabilirsiniz.";
  } else if (description.includes("snow") || description.includes("kar")) {
    kombin += " Karla karşılaşabilirsiniz. Kar botu ve kalın kıyafetleri unutmayın!";
  }

  document.getElementById("clothingSuggestion").innerHTML = `<p><strong>Kıyafet Önerisi:</strong> ${kombin}</p>`;
}

// Hava durumu alma fonksiyonunun güncellenmiş hali
function getWeather() {
  const city = document.getElementById("citySelect").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      document.getElementById("weatherResult").innerHTML = `
        <p><strong>Şehir:</strong> ${city}</p>
        <p><strong>Sıcaklık:</strong> ${temperature}°C</p>
        <p><strong>Durum:</strong> ${description}</p>
      `;

      // Kıyafet önerisini al
      kiyafetKombinOnerisi(temperature, description);
    })
    .catch(error => console.error("Hata:", error));
}

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spinButton");

const segments = ["SPİDER-MAN", "IRON MAN", "HULK", "WOLVERİNE"];
const segmentColors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6"];
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = canvas.width / 2;

let angle = 0;
let isSpinning = false;

// Çarkı çizen fonksiyon
function drawWheel() {
  const segmentAngle = (2 * Math.PI) / segments.length;

  for (let i = 0; i < segments.length; i++) {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, i * segmentAngle, (i + 1) * segmentAngle);
    ctx.fillStyle = segmentColors[i];
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Yazı
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(i * segmentAngle + segmentAngle / 2);
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.font = "14px Arial";
    ctx.fillText(segments[i], radius / 2, 10);
    ctx.restore();
  }
}

// Çarkı döndüren fonksiyon
function spinWheel() {
  if (isSpinning) return;

  isSpinning = true;
  const spinDuration = 3000;
  const finalAngle = Math.random() * 2 * Math.PI;

  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;

    angle += (spinDuration - elapsed) / 1000; // Yavaşlayan dönüş
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);
    ctx.translate(-centerX, -centerY);
    drawWheel();
    ctx.restore();

    if (elapsed < spinDuration) {
      requestAnimationFrame(animate);
    } else {
      isSpinning = false;
      const winningSegment = segments[Math.floor(((angle + finalAngle) % (2 * Math.PI)) / ((2 * Math.PI) / segments.length))];
      alert("Kazanan: " + winningSegment);
    }
  }

  requestAnimationFrame(animate);
}

drawWheel();
spinButton.addEventListener("click", spinWheel);


