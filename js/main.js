function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

	// تحديث النص للوضع الليلي/النهاري
    const darkModeText = document.getElementById("dark-mode-text");
    const darkModeIcon = document.getElementById("dark-mode-icon");
    
    if (document.body.classList.contains("dark-mode")) {
        darkModeText.textContent = "الوضع الطبيعي"; // تغيير النص للوضع الطبيعي
        darkModeIcon.textContent = "🌞";  // تغيير الأيقونة إلى الشمس
    } else {
        darkModeText.textContent = "الوضع الليلي";  // النص للوضع الليلي
        darkModeIcon.textContent = "🌙";  // تغيير الأيقونة إلى القمر
    }

    // تغيير الشعار عند تفعيل الوضع الليلي
    const logoLight = document.getElementById("logo-light");
    const logoDark = document.getElementById("logo-dark");
    if (document.body.classList.contains("dark-mode")) {
        logoLight.style.display = "none";
        logoDark.style.display = "block";
    } else {
        logoLight.style.display = "block";
        logoDark.style.display = "none";
    }
};

const translations = {
    en: {
        listMain: "Home",
        listMainB: "Home",
        aboutLink: "About Us",
        aboutNav: "About Us",
        servicesLink: "Services",
        servicesNav: "Services",
        portfolioLink: "Portfolio",
        portfolioNav: "Portfolio",
        contactLink: "Contact Us",
        contactNav: "Contact Us",
        darkModeText: "Dark Mode",
        arabicLang: "Arabic",
        englishLang: "English",
        aboutTitle: "About Us",
        aboutDesc:
            "LOT is not just a marketing and design company, but a strategic partner to bring your vision to life and make a strong impact in the market. We excel in deeply understanding client needs and the culture of both local and global markets, enabling us to craft innovative marketing solutions and visual identities that inspire audiences and enhance your brand's position. We believe every brand has a story worth telling in an exceptional way, and we're here to help bring that story to life. Choose LOT to be your partner in creating a unique experience that makes a difference.",
		servicesTitle: "Our Services",
        service1Title: "Planning and Strategy",
        service1Desc: [
            "Developing comprehensive brand strategies.",
            "Preparing accurate and well-studied feasibility studies.",
            "Designing systems and integrated brand identities.",
            "Creating innovative and targeted marketing plans.",
            "Developing brands to enhance their presence."
        ],
        service2Title: "Design",
        service2Desc: [
            "Designing distinctive logos reflecting brand identity.",
            "Creating innovative interfaces and seamless user experiences.",
            "Graphic design that blends beauty and creativity.",
            "Designing impactful and visual content."
        ],
        service3Title: "Programming",
        service3Desc: [
            "Developing comprehensive websites.",
            "Building modern and functional e-commerce platforms."
        ],
        service4Title: "Digital Marketing",
        service4Desc: [
            "Accurate analysis of markets and competitors.",
            "Developing innovative digital marketing plans.",
            "Enhancing marketing performance for projects.",
            "Crafting creative content to meet marketing goals.",
            "Search Engine Optimization (SEO) for better visibility.",
            "Launching and managing well-planned advertising campaigns."
        ],
        service5Title: "Content Management",
        service5Desc: [
            "Managing social media accounts.",
            "Designing attractive social media posts and ads.",
            "Producing promotional videos reflecting project identity."
        ],
        service6Title: "Content Creation",
        service6Desc: [
            "Writing creative and refreshing content.",
            "Developing advertising and marketing texts.",
            "Creating targeted online content for websites.",
            "Writing marketing articles and product descriptions.",
            "Crafting creative video scripts."
        ],
		ourworkTitle: "Our Work",
        contactTitle: "Contact Us",
        contactDesc: "We are happy to hear from you for any inquiry or request.",
        phone: "Phone:",
        email: "Email:",
        address: "Address:",
        footerText: "© 2024 All Rights Reserved for LOT",
        socialLinks: {
            facebook: "Facebook",
            twitter: "WhatsApp",
            instagram: "Instagram",
		},
    
	},
    ar: {
        listMain: "الرئيسية",
        listMainB: "الرئيسية",
        aboutLink: "من نحن",
        aboutNav: "من نحن",
        servicesLink: "الخدمات",
        servicesNav: "الخدمات",
        portfolioLink: "الأعمال",
        portfolioNav: "الأعمال",
        contactLink: "تواصل معنا",
        contactNav: "تواصل معنا",
        darkModeText: "الوضع الليلي",
        arabicLang: "عربي",
        englishLang: "English",
        aboutTitle: "من نحن",
        aboutDesc:
            "شركة LOT ليست مجرد شركة تسويق وتصميم، بل شريك استراتيجي لإحياء رؤيتك وتحقيق تأثير قوي في السوق. نتميز بفهمنا العميق لاحتياجات العملاء وثقافة السوق المحلي والعالمي، مما يمكننا من تصميم حلول تسويقية مبتكرة وهويات بصرية تُلهم الجمهور وتعزز مكانة علامتك التجارية. نؤمن بأن كل علامة تجارية تحمل قصة تستحق أن تُروى بأسلوب استثنائي، ونحن هنا لنساعدك على جعل هذه القصة تنبض بالحياة. اختر LOT لنكون شريكك في بناء تجربة فريدة تُحدث الفارق.",
		servicesTitle: "خدماتنا",
        service1Title: "التخطيط والاستراتيجية",
        service1Desc: [
            "تطوير استراتيجيات متكاملة للعلامات التجارية.",
            "إعداد دراسات جدوى دقيقة ومدروسة.",
            "تصميم أنظمة وهوية متكاملة للعلامات التجارية.",
            "إنشاء خطط تسويقية مبتكرة وموجهة.",
            "تطوير العلامات التجارية لتعزيز حضورها."
        ],
        service2Title: "التصميم",
        service2Desc: [
            "تصميم شعارات متميزة تعبر عن هوية العلامة.",
            "إنشاء واجهات مبتكرة وتجربة مستخدم سلسة.",
            "تصميم جرافيكي يدمج بين الجمال والإبداع.",
            "تصميم محتوى مرئي ومؤثر."
        ],
        service3Title: "البرمجة",
        service3Desc: [
            "برمجة مواقع إلكترونية متكاملة.",
            "تطوير متاجر إلكترونية حديثة وعملية."
        ],
        service4Title: "التسويق الإلكتروني",
        service4Desc: [
            "تحليل الأسواق والمنافسين بدقة.",
            "إعداد خطط تسويقية إلكترونية مبتكرة.",
            "تحسين الأداء التسويقي للمشاريع.",
            "كتابة وصناعة محتوى إبداعي يخدم الأهداف التسويقية.",
            "تحسين محركات البحث (SEO) لضمان ظهور مميز.",
            "إطلاق حملات إعلانية مدروسة وإدارتها بكفاءة."
        ],
        service5Title: "إدارة المحتوى",
        service5Desc: [
            "إدارة حسابات وسائل التواصل الاجتماعي.",
            "تصميم إعلانات وبوستات جاذبة على السوشال ميديا.",
            "إنتاج فيديوهات إعلانية تعكس هوية المشروع."
        ],
        service6Title: "صناعة المحتوى",
        service6Desc: [
            "كتابة محتوى مبدع ومتجدد.",
            "تطوير نصوص إعلانية تسويقية.",
            "إنتاج محتوى إلكتروني موجه للمواقع.",
            "كتابة مقالات تسويقية ووصف المنتجات.",
            "صياغة سيناريوهات فيديوهات إبداعية."
        ],
		ourworkTitle: "أعمالنا",
        contactTitle: "تواصل معنا",
        contactDesc: "نسعد بتواصلكم معنا لتقديم أي استفسار أو طلب.",
        phone: "الهاتف:",
        email: "البريد الإلكتروني:",
        address: "العنوان:",
        footerText: "© 2024 جميع الحقوق محفوظة لـ LOT",
        socialLinks: {
            facebook: "فيسبوك",
            twitter: "واتساب",
            instagram: "انستقرام",
		},
    },
};

// Change Language
function changeLanguage(lang) {
    document.getElementById("listMain").textContent = translations[lang].listMain;
    document.getElementById("listMainB").textContent = translations[lang].listMainB;
    document.getElementById("aboutLink").textContent = translations[lang].aboutLink;
    document.getElementById("aboutNav").textContent = translations[lang].aboutNav;
    document.getElementById("servicesLink").textContent = translations[lang].servicesLink;
    document.getElementById("servicesNav").textContent = translations[lang].servicesNav;
    document.getElementById("portfolioLink").textContent = translations[lang].portfolioLink;
    document.getElementById("portfolioNav").textContent = translations[lang].portfolioNav;
    document.getElementById("contactLink").textContent = translations[lang].contactLink;
    document.getElementById("contactNav").textContent = translations[lang].contactNav;
    document.getElementById("dark-mode-text").textContent = translations[lang].darkModeText;
    document.getElementById("arabicLang").textContent = translations[lang].arabicLang;
    document.getElementById("englishLang").textContent = translations[lang].englishLang;
	document.getElementById("aboutTitle").textContent = translations[lang].aboutTitle;
    document.getElementById("aboutDesc").textContent = translations[lang].aboutDesc;
    document.getElementById("servicesTitle").textContent = translations[lang].servicesTitle;
    document.getElementById("contactTitle").textContent = translations[lang].contactTitle;
    document.getElementById("contactDesc").textContent = translations[lang].contactDesc;
    document.getElementById("footerText").textContent = translations[lang].footerText;
    document.getElementById("dark-mode-text").textContent = translations[lang].darkModeText;

    // Update About Us section
    document.getElementById("aboutTitle").textContent = translations[lang].aboutTitle;
    document.getElementById("aboutDesc").textContent = translations[lang].aboutDesc;
	
	document.getElementById("servicesTitle").textContent = translations[lang].servicesTitle;

    // Update service 1
    document.getElementById("service1Title").textContent = translations[lang].service1Title;
    updateListItems("service1Desc", translations[lang].service1Desc);

    // Update service 2
    document.getElementById("service2Title").textContent = translations[lang].service2Title;
    updateListItems("service2Desc", translations[lang].service2Desc);

    // Update service 3
    document.getElementById("service3Title").textContent = translations[lang].service3Title;
    updateListItems("service3Desc", translations[lang].service3Desc);

    // Update service 4
    document.getElementById("service4Title").textContent = translations[lang].service4Title;
    updateListItems("service4Desc", translations[lang].service4Desc);

    // Update service 5
    document.getElementById("service5Title").textContent = translations[lang].service5Title;
    updateListItems("service5Desc", translations[lang].service5Desc);

    // Update service 6
    document.getElementById("service6Title").textContent = translations[lang].service6Title;
    updateListItems("service6Desc", translations[lang].service6Desc);

    document.getElementById("footerText").textContent = translations[lang].footerText;
    const footerLinks = document.querySelector(".footer-links");
    footerLinks.innerHTML = `
        <a href="https://www.facebook.com/profile.php?id=61569356821428&mibextid=ZbWKwL" target="_blank">${translations[lang].socialLinks.facebook}</a> | 
        <a href="https://wa.me/message/B4SJ3OOZV2DBE1" target="_blank">${translations[lang].socialLinks.twitter}</a> | 
        <a href="https://www.instagram.com/lot_media_?igsh=MXN0ZjRuNGFlZXgzOA==" target="_blank">${translations[lang].socialLinks.instagram}</a>
    `;
	
	// تحديث اتجاه النصوص واللغة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
	
	const sideMenu = document.getElementById('side-menu');
    if (sideMenu.classList.contains('active')) {
        // إذا كانت القائمة مفتوحة، تغيير الاتجاه فقط
        if (lang === "ar") {
            gsap.to(sideMenu, { right: '0', left: 'auto', duration: 0.0 });
        } else if (lang === "en") {
            gsap.to(sideMenu, { left: '0', right: 'auto', duration: 0.0 });
        }
    } else {
        // إذا كانت مغلقة، إعداد الموضع الافتراضي
        if (lang === "ar") {
            sideMenu.style.right = '-100%';
            sideMenu.style.left = 'auto';
        } else if (lang === "en") {
            sideMenu.style.left = '-100%';
            sideMenu.style.right = 'auto';
        }
    }
    
	    // Contact section
    document.getElementById("contactTitle").textContent = translations[lang].contactTitle;
    document.getElementById("contactDesc").textContent = translations[lang].contactDesc;
    document.getElementById("phone").innerHTML = `<strong>${translations[lang].phone}</strong> +967 774 710 797`;
    document.getElementById("email").innerHTML = `<strong>${translations[lang].email}</strong> lotmedia2024@gmail.com`;
    document.getElementById("address").innerHTML = `<strong>${translations[lang].address}</strong> صنعاء, اليمن`;
	
}
function updateListItems(listId, items) {
    const ul = document.getElementById(listId);
    ul.innerHTML = ""; // Clear current list items
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Initialize GSAP
document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".hero", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

    // خدماتنا Animation
    gsap.fromTo(".services", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // أعمالنا Animation
    gsap.fromTo(".portfolio", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
    );
	// About Us Animation
	gsap.fromTo(
		".about-us",
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
	);

	// Contact Us Animation
	gsap.fromTo(
		".contact-us",
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.2 }
	);

    // Fade-in for individual cards
    gsap.fromTo(
        ".service-card", 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.3, delay: 0.8 }
    );

    // Portfolio images hover effect
    document.querySelectorAll(".portfolio-gallery img").forEach((img) => {
        img.addEventListener("mouseover", () => {
            gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power1.out" });
        });
        img.addEventListener("mouseout", () => {
            gsap.to(img, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });
});

function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    const currentLang = document.documentElement.lang; // الحصول على اللغة الحالية

    if (sideMenu.classList.contains('active')) {
        if (currentLang === 'ar') {
            // إغلاق من اليمين
            gsap.to(sideMenu, { right: '-100%', duration: 0.5, ease: "power3.out" });
        } else if (currentLang === 'en') {
            // إغلاق من اليسار
            gsap.to(sideMenu, { left: '-100%', duration: 0.5, ease: "power3.out" });
        }
        sideMenu.classList.remove('active');
    } else {
        if (currentLang === 'ar') {
            // فتح من اليمين
            gsap.to(sideMenu, { right: '0', duration: 0.5, ease: "power3.out" });
        } else if (currentLang === 'en') {
            // فتح من اليسار
            gsap.to(sideMenu, { left: '0', duration: 0.5, ease: "power3.out" });
        }
        sideMenu.classList.add('active');
    }
}

