const params = new URLSearchParams(window.location.search);
const service = params.get("service");

const services = {
  "Beyaz Eşya Servisi": {
    title: "Beyaz Eşya Servisi | Teknik Destek",
    desc: "Beyaz eşyalarınız için uzman teknik destek sağlıyoruz."
  },
  "Buzdolabı": {
    title: "Buzdolabı Servisi | Soğutucu Onarım",
    desc: "Buzdolabı arızalarınız için hızlı ve güvenilir çözümler sunuyoruz."
  },
  "Çamaşır Makinesi": {
    title: "Çamaşır Makinesi Servisi | Teknik Hizmet",
    desc: "Çamaşır makineleriniz için teknik servisimiz hizmetinizde."
  },
  "Bulaşık Makinesi": {
    title: "Bulaşık Makinesi Servisi | Temizlik Güvencemiz",
    desc: "Bulaşık makinelerinizin tamiri ve bakımı bizden sorulur."
  },
  "Fırın": {
    title: "Fırın Servisi | Profesyonel Destek",
    desc: "Fırın arızaları ve bakım işlemleri uzman ekibimizce yapılır."
  },
  "Klima": {
    title: "Klima Servisi | Montaj ve Bakım",
    desc: "Klima montajı, bakımı ve tamiri için bizimle iletişime geçin."
  },
  "Kombi": {
    title: "Kombi Servisi | Isı Sistemleri Desteği",
    desc: "Kombi arızaları ve yıllık bakımlarda profesyonel destek veriyoruz."
  },
  "Televizyon": {
    title: "Televizyon Servisi | Görüntü Sorunları",
    desc: "Televizyon arızalarınızda ekran değişimi dahil çözüm sunuyoruz."
  }
};

const titleElem = document.getElementById("service-title");
const descElem = document.getElementById("service-desc");

if (service && services[service]) {
  document.title = services[service].title;
  titleElem.textContent = services[service].title;
  descElem.textContent = services[service].desc;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", services[service].desc);
} else {
  document.title = "Hizmet Bulunamadı | Beyaz Eşya Teknik Servisi";
  titleElem.textContent = "Hizmet Bulunamadı";
  descElem.textContent = "Belirtilen hizmet türü desteklenmiyor.";
}
