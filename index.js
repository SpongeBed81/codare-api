module.exports= {
EnSonKoduAl: async function(kategori) {
var kategoriselector = null
  if(!kategori) {
    kategoriselector = "js"
  } else {
    if(!(kategori.toLowerCase() == "js" || kategori.toLowerCase() == "py" || kategori.toLowerCase() == "html" || kategori.toLowerCase() == "diger" || kategori.toLowerCase() == "js+" || kategori.toLowerCase() == "altyapi" || kategori.toLowerCase() == "booster")) {
      throw new TypeError("Kategori Parametreleri: js,js+,altyapi,booster,py,diger ve html'dir Bunlardan Başka Parametre Seçilemez! Eğer Hiçbir Parametre Girilmezse Kategori Otomatik Olarak JavaScript Olacak Şekilde Ayarlanır")
    } else {
      kategoriselector = kategori.toLowerCase()
    }
  } 
 
var fetch = require("node-fetch")
  return fetch("https://codare.fun/kategori/" + kategoriselector).then(async (body) => {
const source = await body.text()
var satırlar = []

const arr = source.toString().replace(/\r\n/g,'\n').split('\n');

if(satırlar.length === 0) {
  for(let i of arr) {
    satırlar.push(i)
  }
}
var anan = 0
var indexilkal = null
var geçebilirsin = "geçersin"
for(let element of satırlar) {
  if(geçebilirsin == "geçersin") {
    anan++
    if(element.includes(`<h6 class="card-title" style="color: #d6d6d6">`)) {
      indexilkal = anan
      geçebilirsin = "geçemezsin"
    }
  }
}



var baseisim = satırlar[indexilkal]
var isimrep = baseisim.replace(`</h6>`, "")
var isim = isimrep.replace(`</h5>`, "")
var basedesc = satırlar[indexilkal + 1]
var basekalp = satırlar[indexilkal + 3]
var kalprep = basekalp.replace(`<span style="color:#FF3C41;float:right;position:relative;top:20px;left:10px;font-weight:500" class="fas fa-heart"><span style="color: white;margin-left: 5px;float:right">`, "")
var baserep = basedesc.replace(`<p class="card-text" style="color: #d6d6d6">`, "")
var kalp = kalprep.replace(`</span></span>`, "")
var desc = baserep.replace(`</p>`, "")
var basegörüntülenme = satırlar[indexilkal + 4]
var görüntülenmerep = basegörüntülenme.replace(`<span style="color:white;float:right;position:relative;top:20px;right:10px" class="far fa-eye"><span style="color: white;margin-left: 5px;float:right">`, "")
var görüntülenme = görüntülenmerep.replace(`</span></span>`, "")
var baseyorum = satırlar[indexilkal + 5]
var yorumrep = baseyorum.replace(`<span style="color:white;float:right;position:relative;top:20px;right:30px" class="far fa-comment"><span style="color: white;margin-left: 5px;float:right">`, "")
var yorumlar = yorumrep.replace(`</span></span>`, "")
var jsonret = {Isim: isim, Aciklama: desc, Kalpler: kalp, Goruntulenme: görüntülenme, Yorumlar: yorumlar}
var baban = JSON.stringify(jsonret)
var ananbaban = JSON.parse(baban)
//console.log(basegörüntülenme)
return ananbaban

  })
},



Verialv2: async function(keyword, kategori) {


if(!keyword) throw new TypeError("Paylaşılan Kodlarda Aratmak İçin Bir Anahtar Kelime Girmelisiniz!")

var kategoriselector = null
  if(!kategori) {
    kategoriselector = "js"
  } else {
    if(!(kategori.toLowerCase() == "js" || kategori.toLowerCase() == "py" || kategori.toLowerCase() == "html" || kategori.toLowerCase() == "diger" || kategori.toLowerCase() == "js+" || kategori.toLowerCase() == "altyapi" || kategori.toLowerCase() == "booster")) {
      throw new TypeError("Kategori Parametreleri: js,js+,altyapi,booster,py,diger ve html'dir Bunlardan Başka Parametre Seçilemez! Eğer Hiçbir Parametre Girilmezse Kategori Otomatik Olarak JavaScript Olacak Şekilde Ayarlanır")
    } else {
      kategoriselector = kategori.toLowerCase()
    }
  } 

  verialmasatırları = []
  var anan = 0
  var fetch = require("node-fetch")

//console.log(keyword.toLowerCase())

  return fetch("https://codare.fun/kategori/" + kategoriselector).then(async (body) => {
    var source = await body.text()

    const arr = source.toString().replace(/\r\n/g,'\n').split('\n');
    
    for(let i of arr) {
verialmasatırları.push(i)
    }

  //  console.log(verialmasatırları)
var geçmeizni = "geçebilirsin"
var adindex = null
var descindex = null
var kalplerindex = null
var görüntülenmeindex = null
var yorumindex = null

for(let element of verialmasatırları) {
  if(geçmeizni == "geçebilirsin") {
    anan++
    if(element.toLowerCase().includes(keyword.toLowerCase())) {
      if(element.toLowerCase().includes(`</h5>`)) {
    //    console.log("ELEMENTNNNNTNTN: " + element)
        adindex = anan - 1
        descindex = anan
        kalplerindex = anan + 2
        görüntülenmeindex = anan + 3
        yorumindex = anan + 4
geçmeizni = "geçemezsin"
      }

      if(element.toLowerCase().includes(`<p class="card-text" style="color: #d6d6d6">`)) {
  descindex = anan - 1
  adindex = anan - 2
  kalplerindex = anan + 1
  görüntülenmeindex = anan + 2
  yorumindex = anan + 3
  geçmeizni = "geçemezsin"
      }
    }
  
  }
}

    if(verialmasatırları[adindex] == undefined) throw new TypeError("Böyle Bir Komut Adı Veya Açıklaması Bulunamadı!")


   // console.log(verialmasatırları[adindex])
    var isimbase = verialmasatırları[adindex].replace(`</h5>`, "")
    var descbase = verialmasatırları[descindex].replace(`<p class="card-text" style="color: #d6d6d6">`, "")
    var desc = descbase.replace(`</p>`, "")
    var kalpbase = verialmasatırları[kalplerindex].replace(`<span style="color:#FF3C41;float:right;position:relative;top:20px;left:10px;font-weight:500" class="fas fa-heart"><span style="color: white;margin-left: 5px;float:right">`, "")
    var kalpler = kalpbase.replace(`</span></span>`, "")
    var görüntülenmebase = verialmasatırları[görüntülenmeindex].replace(`<span style="color:white;float:right;position:relative;top:20px;right:10px" class="far fa-eye"><span style="color: white;margin-left: 5px;float:right">`, "")
    var görüntülenme = görüntülenmebase.replace(`</span></span>`, "")
    var yorumbase = verialmasatırları[yorumindex].replace(`<span style="color:white;float:right;position:relative;top:20px;right:30px" class="far fa-comment"><span style="color: white;margin-left: 5px;float:right">`, "")
    var yorum = yorumbase.replace(`</span></span>`, "")
    var jsonret = {Ad: isimbase, Aciklama: desc, Kalp_Sayisi: kalpler, Goruntulenme_Sayisi: görüntülenme, Yorum_Sayisi: yorum}
    var jsonretconvert = JSON.stringify(jsonret)
    var jsonuparsela = JSON.parse(jsonretconvert)
  // console.log("İsim: " + isimbase + " | Açıklama: " + desc + " | Kalpler: " + kalpler + " | Görüntülenme: " + görüntülenme + " | Yorum Sayısı: " + yorum)
  return jsonuparsela
})
},


KullaniciBilgiv2: async function(kullaniciid) {
if(!kullaniciid) throw new TypeError("Geçerli Bir Kullanıcı ID'si Girmelisiniz!")
if(isNaN(kullaniciid)) {
  throw new TypeError("Kullanıcı ID'leri Sadece Rakamlardan Oluşmalıdır!")
}



satırlar = []
var fetch = require("node-fetch")

//console.log(keyword.toLowerCase())

return fetch("https://codare.fun/profil/" + kullaniciid).then(async (body) => {
  var source = await body.text()

  var badges = []
  const arr = source.toString().replace(/\r\n/g,'\n').split('\n');
  
  if(satırlar.length === 0) {
    for(let i of arr) {
     satırlar.push(i)
    }
    }
    var sayisay = 0
    for(let i of satırlar) {
      sayisay++
     if(i.includes("cdn.glitch")) {
     // console.log(satırlar[sayisay - 1])
     // await satırlar.splice(i, 1)
     }
     }
     
    var anan = 0
    var indexyardim = null
    var indexpaylasim = null
    var indextarih = null
    var indexkullaniciad = null
    var indexdiscrim = null
    var indextag = null
    var indexavatar = null

    for(let element of satırlar) {
      anan++
    //  if(element.includes)
       if(element.includes(`div class="card-body">`)) {
       // indexyardim = anan + 10
       // indexpaylasim = anan + 9
        indextarih = anan
        indexkullaniciad = anan + 1
        indexdiscrim = anan + 2
        indextag = anan - 12
        indexavatar = anan - 13
       }
       if(element.includes(`Yardım Ettiği`)) {
         indexyardim = anan - 1
       }
       if(element.includes("Paylaştığı")) {
         indexpaylasim = anan - 1
       }
    }


     
    
    
    
    var tarihsatir = satırlar[indextarih]
    if(tarihsatir === undefined) throw new TypeError("Bu ID'ye Sahip Bir Kullanıcı Bulunamadı")
    var tarihreplace = tarihsatir.replace(`<h4 class="small font-weight-bold">Hesap Oluşturma Tarihi<span class="float-right">`, "")
    var hesapoluşturulma = tarihreplace.replace(`</span></h4>`, "")
    var kullanicisatir = satırlar[indexkullaniciad]
    var kullaniciadireplace = kullanicisatir.replace(`<h4 class="small font-weight-bold">Kullanıcı Adı<span class="float-right">`, "")
    var kullaniciadi = kullaniciadireplace.replace(`</span></h4>`, "")
    var discrimbase = satırlar[indexdiscrim]
    var discrimrep = discrimbase.replace(`<h4 class="small font-weight-bold">Discrim<span class="float-right">`, "")
    var discrim = discrimrep.replace(`</span></h4>`, "")
    var avatarbase = satırlar[indexavatar]
    var avatarrep = avatarbase.replace(`<img draggable="false" class="rounded-circle mb-3 mt-4" src="`, "")
    var avatarurl = avatarrep.replace(`" width="160" height="160">`, "")
    var tagbase = satırlar[indextag]
    var tagrep = tagbase.replace(`<div class="mb-3"><a>`, "")
    var tag = tagrep.replace(`</a></div>`, "")
    
    
    
    var paylaştığıkodsayı = satırlar[indexpaylasim]
    var defkodsayi = 0
    if(paylaştığıkodsayı) {
    if(paylaştığıkodsayı.includes("Paylaştığı Kod Sayısı")) {
      var paylaşmarep = paylaştığıkodsayı.replace(`<h4 class="small font-weight-bold">Paylaştığı Kod Sayısı<span class="float-right">`, "")
      var paylaşmasayısı = paylaşmarep.replace(`</span></h4>`, "")
      defkodsayi = parseInt(paylaşmasayısı)
    }
  }
    
    var yardımettiğikodsayı = satırlar[indexyardim]
    var defyardımsayı = 0
    if(yardımettiğikodsayı) {
    if(yardımettiğikodsayı.includes(`Yardım Ettiği Kod Sayısı`)) {
      var yardımettiğikodrep = yardımettiğikodsayı.replace(`<h4 class="small font-weight-bold">Yardım Ettiği Kod Sayısı<span class="float-right">`, "")
      var yardımettiğikodsayısı1 = yardımettiğikodrep.replace(`</span></h4>`, "")
      defyardımsayı = parseInt(yardımettiğikodsayısı1)
    }
  }
    var jsonreturning = {Kullanici_Adi: kullaniciadi, Discrim: discrim, Tag: tag, ID: kullaniciid, Hesap_Olusturulma: hesapoluşturulma, AvatarURL: avatarurl, Paylasim_Sayisi: defkodsayi,  YardimSayisi: defyardımsayı}
    var jsonret = JSON.stringify(jsonreturning)
    var parsejson = JSON.parse(jsonret)
    return parsejson
})
  },
Yetkililer: async function(filtrele) {
  var filtrelememodu = "filtrele"
    if(!(filtrele == "leader" || filtrele == "Admin" || filtrele == "Senior Moderator" || filtrele == "Moderator" || filtrele == "Code Sharer" || filtrele == "Support Team" || filtrele == "Sponsor" || filtrele == "Booster" || filtrele == "Rol İle Çek" || filtrele == "Rol Olmadan Çek" || filtrele == "Trial Moderator")) {
      throw new TypeError("Yetkiye göre filtreleme parametleri girdiğiniz parametre ile uyuşmuyor girebileceğiniz parametreler şunlardır: leader,Admin,Senior Moderator,Moderator,Trial Moderator,Code Sharer,Support Team,Sponsor,Booster,Rol İle Çek,Rol Olmadan Çek")
    }
  

  

  var fetch = require("node-fetch")
  return fetch("https://codare.fun/yetkililer").then(async (body) => {

    function countOccurences(string, word) {
      return string.split(word).length - 2;
   }

   function leaderfunc(string, word) {
    return string.split(word).length - 1;
 }

    var source = await body.text()
    var satırlar = []
    const arr = source.toString().replace(/\r\n/g,'\n').split('\n');
    for(let i of arr) {
     satırlar.push(i)
    }
 var arrayforstoringusers = []  
 var anan2 = countOccurences(source,"Booster")
 var seniormod = leaderfunc(source, "Senior Moderator")
 var admin = leaderfunc(source, "Admin")
 var leaders = leaderfunc(source,"leader")
 var sponsor = leaderfunc(source,"Sponsor")
 var supportteam = leaderfunc(source,"Support Team")
 var codesharer = leaderfunc(source,"Code Sharer")
 var yetkililerarray = []
 var moderator = countOccurences(source,"Moderator")
 var trialmod = leaderfunc(source, "Trial Moderator")
var anan = 0
    for(let element of satırlar) {
      anan++
if(filtrelememodu == "filtrele") {
  if(element.includes(filtrele)) {
    if(filtrele == "Moderator") {
      if(element.includes(`<h2 style="color: #67cca3">`)) {
        arrayforstoringusers.push(satırlar[anan - 2].replace(`</h1>`, "").replace(`<h1>`, ""))
        var jsonret = await JSON.stringify(arrayforstoringusers)
   if(arrayforstoringusers.length === moderator) {
 return jsonret
   }
      }
    } else {
      if(filtrele == "Booster") {
        if(element.includes(`Booster`)) {
          if(element.includes(`<h2>`)) {
          arrayforstoringusers.push(satırlar[anan - 2].replace(`</h1>`, "").replace(`<h1>`, ""))
          var jsonret = await JSON.stringify(arrayforstoringusers)
     if(arrayforstoringusers.length === anan2) {
   return jsonret
     }
    }
        }
      } else {
if(filtrele == "leader") {
  if(element.includes(`leader`)) {
arrayforstoringusers.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
var jsonret = await JSON.stringify(arrayforstoringusers)

if(arrayforstoringusers.length === leaders) {
  return jsonret
}
  }
} else {
  if(filtrele === "Senior Moderator") {
if(element.includes(`Senior Moderator`)) {
  arrayforstoringusers.push(satırlar[anan -2].replace(`<h1>`, "").replace(`</h1>`, ""))
  var jsonret = await JSON.stringify(arrayforstoringusers)

  if(arrayforstoringusers.length === seniormod) {
    return jsonret
  }

}
  } else {
    if(filtrele === "Admin") {
      if(element.includes(`Admin`)) {
        arrayforstoringusers.push(satırlar[anan -2].replace(`<h1>`, "").replace(`</h1>`, ""))
        var jsonret = await JSON.stringify(arrayforstoringusers)
      
        if(arrayforstoringusers.length === admin) {
          return jsonret
        }
      
      }
    } else {
      if(filtrele === "Sponsor") {
        if(element.includes(`Sponsor`)) {
          arrayforstoringusers.push(satırlar[anan -2].replace(`<h1>`, "").replace(`</h1>`, ""))
          var jsonret = await JSON.stringify(arrayforstoringusers)
        
          if(arrayforstoringusers.length === sponsor) {
            return jsonret
          }
        
        }
      } else {
        if(filtrele === "Support Team") {
          if(element.includes(`Support Team`)) {
            arrayforstoringusers.push(satırlar[anan -2].replace(`<h1>`, "").replace(`</h1>`, ""))
            var jsonret = await JSON.stringify(arrayforstoringusers)
          
            if(arrayforstoringusers.length === supportteam) {
              return jsonret
            }
          
          }
        } else {
          if(filtrele === "Code Sharer") {
            if(element.includes(`Code Sharer`)) {
              arrayforstoringusers.push(satırlar[anan -2].replace(`<h1>`, "").replace(`</h1>`, ""))
              var jsonret = await JSON.stringify(arrayforstoringusers)
            
              if(arrayforstoringusers.length === codesharer) {
                return jsonret
              }
            
            }
          } else {
            if(filtrele === "Trial Moderator") {
              if(element.includes(`Trial Moderator`)) {
                arrayforstoringusers.push(satırlar[anan -2].replace(`<h1>`, "").replace(`</h1>`, ""))
                var jsonret = await JSON.stringify(arrayforstoringusers)

                if(arrayforstoringusers.length === trialmod) {
                  return jsonret
                }
              }
            }
          }
        }
      }
    }
  }
}
      }
    }
  }
} 
if(filtrele == "Rol Olmadan Çek") {
 
  
    Array.prototype.remove = function() {
      var what, a = arguments, L = a.length, ax;
      while (L && this.length) {
          what = a[--L];
          while ((ax = this.indexOf(what)) !== -1) {
              this.splice(ax, 1);
          }
      }
      return this;
  };


    if(element.includes(`leader`)) {
      yetkililerarray.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    }
    if(element.includes(`Admin`)) {
      yetkililerarray.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    }
    if(element.includes(`Senior Moderator`)) {
      yetkililerarray.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    }
    if(element.includes(`Moderator`)) {
      if(element.includes(`<h2 style="color: #67cca3">`)) {
      yetkililerarray.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
      }
    }
    if(element.includes(`Trial Moderator`)) {
      yetkililerarray.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    }
    if(element.includes(`Code Sharer`)) {
      yetkililerarray.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    }
    if(element.includes(`Support Team`)) {
      yetkililerarray.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    }
    if(element.includes(`Sponsor`)) {
      yetkililerarray.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    }
    if(element.includes(`Booster`)) {
      if(filtrele === "Rol İle Çek") {
        yetkililerarray.push("Booster:" + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
      }
      yetkililerarray.push(satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    }
  

    var toplamaişlemiiçinawait = anan2 + seniormod + admin + leaders + sponsor + supportteam + codesharer + moderator + trialmod
   if(yetkililerarray.length == toplamaişlemiiçinawait) {
   yetkililerarray.shift()
   const index = yetkililerarray.indexOf(`<div class="user">`);
   if (index > -1) {
     yetkililerarray.splice(index, 1);
   }
   var stringifyyap = JSON.stringify(yetkililerarray)
     return stringifyyap
   }

  
}

if(filtrele == "Rol İle Çek") {
 
  
  Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};



  if(element.includes(`leader`)) {
    yetkililerarray.push("leader: " + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
  }
  if(element.includes(`Admin`)) {
    yetkililerarray.push("Admin: " + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
  }
  if(element.includes(`Senior Moderator`)) {
    yetkililerarray.push("Senior Moderator: " + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
  }
  if(element.includes(`Moderator`)) {
    if(element.includes(`<h2 style="color: #67cca3">`)) {
    yetkililerarray.push("Moderator: " + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    }
  }
  if(element.includes(`Trial Moderator`)) {
    yetkililerarray.push("Trial Moderator: " + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
  }
  if(element.includes(`Code Sharer`)) {
  //  console.log("code sharer " + satırlar[anan - 2])
    yetkililerarray.push("Code Sharer: " + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
  }
  if(element.includes(`Support Team`)) {
  //  console.log("support team " + satırlar[anan - 2])
    yetkililerarray.push("Support Team: " + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
  }
  if(element.includes(`Sponsor`)) {
  //  console.log("sponsor " + satırlar[anan - 2])
    yetkililerarray.push("Sponsor: " + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
  }
  if(element.includes(`Booster`)) {
   
      yetkililerarray.push("Booster: " + satırlar[anan - 2].replace(`<h1>`, "").replace(`</h1>`, ""))
    
  // cosole.log(satırlar[anan - 2])
       // arrayforstoringusers.push(satırlar[anan -2].replace(`<h1>`, "").replace(`</h1>`, ""))

  }

  var toplamaişlemiiçinawait = anan2 + seniormod + admin + leaders + sponsor + supportteam + codesharer + moderator + trialmod
 if(yetkililerarray.length == toplamaişlemiiçinawait) {
 //  console.log("yarra")
 yetkililerarray.shift()
// var kesme = yetkililerarray.remove('<div class=\"user"\>"')
const index = yetkililerarray.indexOf(`Booster: <div class="user">`);
if (index > -1) {
  yetkililerarray.splice(index, 1);
}
 var stringifyyap = JSON.stringify(yetkililerarray)
 //var stringifyyap2 = stringifyyap.remove(`<div class=user>`)
 


 
 //console.log(output)
   return stringifyyap
 }


}
    }
})
}  
  }

