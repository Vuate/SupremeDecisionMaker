function kategoriSec(butce) {
  const kategoriler = {
    paramVar: [
      "Sinema", "Restoran", "Alisveris", "Kisa Tatil", "Spa Gunu", "Konsere Git", "Ozel Ders Al",
      "Tatil", "Yazlik Kirala", "Luks Arabayla Gezi", "Helikopterle Gezi"
    ],
    paramYok: [
      "Evde Film Izle", "Yuruyus Yap", "Kitap Oku", "Online Kursa Basla", "Ev", "Kola", "Gece Yuruyusu",
      "Muze Ziyareti", "Arkadaslarla Sohbet Et", "Kendin Yap Projeleri", "zen"
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
    "Sinema": "Vizyondaki filmlerden birini izlemek icin sinemaya gidin.",
    "Restoran": "Yakindaki populer restoranlari deneyin.",
    "Alisveris": "Bugün alisveris merkezine gitmek güzel olabilir.",
    "Kisa Tatil": "Yakinlarda bir hafta sonu kacamagi planlayabilirsiniz.",
    "Spa Gunu": "Rahatlamak icin bir spa günü planlayin.",
    "Konsere Git": "Sevdiginiz bir sanatcinin konserine gidin.",
    "Ozel Ders Al": "Ilgi duydugunuz bir konuda ozel ders alabilirsiniz.",
    "Tatil": "Guzel bir tatil yapmayi planlayin!",
    "Yazlik Kirala": "Tatil icin guzel bir yazlik kiralayin.",
    "Luks Arabayla Gezi": "Luks bir arac kiralayarak sehri gezebilirsiniz.",
    "Helikopterle Gezi": "Helikopterle sehri kusbakisi kesfedin.",
    "Evde Film Izle": "Netflix veya ucretsiz film platformlarini kullanabilirsiniz.",
    "Yuruyus Yap": "Parkta veya dogada vakit gecirin.",
    "Kitap Oku": "Elinizdeki kitabi bitirin ya da yeni bir kitap secin.",
    "Online Kursa Basla": "Yeni bir beceri ogrenmek icin ucretsiz kurslara goz atın.",
    "Ev": "Ev bos mu? Yapacaginiz en iyi seyi biliyorsunuz :)",
    "Kola": "Arkadaslarla Kola cekirdek yap",
    "Gece Yuruyusu": "Gece vakti bir yuruyus yaparak sakinlesebilirsiniz.",
    "Muze Ziyareti": "Yakindaki bir muze gidin.",
    "Arkadaslarla Sohbet Et": "Evde ya da disarida arkadaslarinizla keyifli bir sohbet edin.",
    "Kendin Yap Projeleri": "Yaratici bir kendin yap projesiyle vakit gecirin.",
    "zen": "Paran yoksa, daha cok calisin."
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
      "Kumpir", "Çörek", "Kısır", "Kısır", "Mantar Çorbası", "Dondurma"
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
