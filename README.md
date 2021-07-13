**Codare API**

Codare API Codare Discord Sunucusunun Websitesi Üzerinden Bilgi Almanız İçin Oluşturulmuş Bir API Paketidir

**Not**

Paket Tam Bitmemiştir Buglar Olabilir Bugları Discord Üzerinden DM Yoluyla İletebilirsiniz Discord Adresim ! SıpançBet#9752'dir Aynı Şekilde Sorun Ve Sorununuz Olursa Bana Bu Adres Üzerinden Yazabilirsiniz.

**Örnekler**

Sitede Paylaşılan En Son Kodu Almak İçin Aşağıdaki Kodu Kullanabiliriz.


    async function  deneme() {
    const  api = require("codare-api")
    var  test =  await api.EnSonKoduAl() //=> Hiçbir Kategori Girilmez ise otomatik Javascript Kategorisinin En Son Kodunu Alır
    console.log(test)
    }
    
    deneme()

Adı Veya Açıklaması Belirtilen Kodun Bilgilerini Almak İçin Aşağıdaki Kodu Kullanabiliriz.


    async function  deneme() {
    const  api = require("codare-api")
    var  test =  await api.Verialv2("uyar", "py") //=> Hiçbir Kategori Girilmez ise otomatik Javascript Kategorisinde Arama Yapar
    console.log(test)
    }
    
    deneme()


ID'si Belirtilen Kullanıcının Profil Bilgilerini Almak İçin Aşağıdaki Kodu Kullanabiliriz.

     async function  deneme() {
    const  api = require("codare-api")
    var  test =  await api.KullaniciBilgiv2("ID")
    console.log(test)
    }
    
    deneme()

Codare'da Bulunan Yetkilileri Almak İçin Aşağıdaki Kodu Kullanabiliriz.

     async function  deneme() {
    const  api = require("codare-api")
    var  test =  await api.Yetkililer("Rol İle Çek") //=> Girebileceğiniz Tüm Parametreler: leader,Admin,Senior Moderator,Moderator,Trial Moderator,Code Sharer,Support Team,Sponsor,Booster,Rol İle Çek,Rol Olmadan Çek
    console.log(test)
    }
    
    deneme()


Made With ❤ By SpongeBed


