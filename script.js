// Smooth scroll untuk semua link internal
document.querySelectorAll('.nav-links a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const hash = this.getAttribute('href');
        if(hash && hash.startsWith('#') && hash !== '#'){
            const targetId = hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement){
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                history.pushState(null, null, hash);
            }
        }
    });
});

// Data kontak untuk WhatsApp, Instagram, Gmail, No Telepon
// Gunakan data sesuai nama anshar salsaraja tinggal di aceh
const kontak = {
    whatsapp: "https://wa.me/6285213682592?text=Halo%20Anshar%2C%20saya%20tertarik%20dengan%20portfolio%20Anda.",
    instagram: "https://instagram.com/anshar.aceh",
    gmail: "mailto:ansharsalsaraja123@gmail.com",
    telepon: "tel:"
};

// Pasang event untuk masing-masing kontak
const waBtn = document.getElementById('waLink');
const igBtn = document.getElementById('igLink');
const emailBtn = document.getElementById('emailLink');
const phoneBtn = document.getElementById('phoneLink');

if(waBtn) {
    waBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(kontak.whatsapp, '_blank');
    });
}
if(igBtn) {
    igBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(kontak.instagram, '_blank');
    });
}
if(emailBtn) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = kontak.gmail;
    });
}
if(phoneBtn) {
    phoneBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = kontak.telepon;
    });
}