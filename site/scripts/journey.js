(function () {
  "use strict";

  /* The five-stop journey: the homepage map, the stop bar at the top of each
     chapter page, mid-page hints, and the "next stop" push at the end of every
     page. The route is fixed so nobody reaches a dead end:
     home → BKS → Krishi Ratna League → Puja → Integrated Farming → Participate → visit. */

  var ORDER = ["krishak", "league", "puja", "ifs", "participate"];

  var STOPS = {
    krishak: { href: "#krishak", img: "assets/puja-2026/photo_2026-08-19_11-15-12.jpg", shape: "arch" },
    league: { href: "#league", img: "assets/stories/2026/protyabortan-banner.jpg", shape: "notch" },
    puja: { href: "#puja", img: "assets/puja-2025/aarti-procession-2025.jpg", shape: "circle" },
    ifs: { href: "#ifs", img: "assets/integrated-farming/ifs-reference.jpg", shape: "leaf" },
    participate: { href: "#participate", img: "assets/stories/2026/khuti-puja-4.jpg", shape: "block" }
  };

  var NEXT = {
    home: "krishak",
    krishak: "league",
    league: "puja",
    puja: "ifs",
    ifs: "participate",
    mission: "participate",
    participate: "visit"
  };

  var HINTS = {
    "krishak-league": { href: "#league", icon: "star" },
    "krishak-site": { href: "https://bkswbengal.org/", icon: "out", external: true },
    "league-site": { href: "https://krl-site.vercel.app/", icon: "out", external: true },
    "puja-stories": { href: "#memories", icon: "play" },
    "puja-ifs": { href: "#ifs", icon: "leaf" },
    "ifs-demo": { href: "#demo", icon: "pin" },
    "ifs-seed": { href: "#fund", icon: "seed" },
    "participate-nominate": { href: "#nominate", icon: "star" }
  };

  var COPY = {
    en: {
      mapKicker: "Your path",
      mapTitle: "Five stops. One Puja.",
      mapLede: "Start anywhere. Every stop ends by pointing you to the next, so you never hit a dead end.",
      stop: "Stop",
      of: "of",
      nextKicker: "Next stop",
      jump: "Or jump to",
      barLabel: "Your path through the Puja",
      stops: {
        krishak: { short: "BKS Bengal", title: "Bharatiya Krishak Samaj", line: "The farmers’ movement behind this Pujo, its West Bengal chapter, and why the Puja names the farmer.", cta: "Explore BKS Bengal" },
        league: { short: "Krishi Ratna League", title: "Krishi Ratna League", line: "Seven awards for the farmers Bengal does not photograph. Nominate a farmer, or yourself.", cta: "Explore the League" },
        puja: { short: "The Puja", title: "The Puja", line: "Worship, craft, dhak and homecoming. What the days mean, what we built in 2025, and how 2026 is being prepared.", cta: "Explore the Puja" },
        ifs: { short: "Integrated Farming", title: "Integrated Farming", line: "Crop, animals, water and market on one holding. See the loop, then the live farm in the East Kolkata Wetlands.", cta: "Explore Integrated Farming" },
        participate: { short: "Participate", title: "Participate", line: "Seed a village farm, sponsor, volunteer, or simply come to the pandal. Five doors in.", cta: "Find your door" }
      },
      next: {
        home: { title: "Start with the people behind it.", body: "Bharatiya Krishak Samaj is the farmers’ movement that holds this Puja. Meet it first." },
        krishak: { title: "Now meet the farmers it honours.", body: "The Krishi Ratna League puts unnamed farmers on the Puja stage." },
        league: { title: "See the gathering where they are honoured.", body: "Worship, craft and homecoming. The Puja is the stage." },
        puja: { title: "Behind the pandal, a farm is growing.", body: "Integrated Farming is the livelihood this Puja is seeding." },
        ifs: { title: "One farm needs one patron.", body: "Seed a village farm, sponsor, volunteer or nominate. Choose your door." },
        mission: { title: "A big goal starts with one door.", body: "Seed a village farm, sponsor, volunteer or nominate a farmer." },
        participate: { title: "You have seen the whole story. Now come.", body: "The pandal is open to everyone, free, on all days of the Puja.", cta: "Plan your visit", alt: "Watch the stories" }
      },
      league: {
        kicker: "Stop 02 · Recognition",
        h1: "Krishi Ratna League",
        lede: "Bharatiya Krishak Samaj Awards 2026. Seven categories, decided from nominations sent by farmers, families and communities across West Bengal. Winners are honoured on stage at the pandal during the Puja."
      },
      hints: {
        "krishak-league": { label: "Did you know", text: "BKS honours the farmers Bengal does not photograph, on stage during the Puja.", link: "See the Krishi Ratna League" },
        "krishak-site": { label: "Official website", text: "For the organisation itself, visit the official BKS West Bengal website.", link: "Visit bkswbengal.org" },
        "league-site": { label: "Full league", text: "The Krishi Ratna League Bengal also has its own website.", link: "Open the League site" },
        "puja-stories": { label: "In photographs", text: "Photographs from the 2026 ground and the 2025 Mahotsav play as stories.", link: "Open the stories" },
        "puja-ifs": { label: "Keep going", text: "The theme is sustainable agriculture. See how one farm loops crop, animals, water and market.", link: "Integrated Farming" },
        "ifs-demo": { label: "On the ground", text: "This model is being built as a working farm at the Puja venue in the East Kolkata Wetlands.", link: "See the live demo" },
        "ifs-seed": { label: "The seed", text: "₹1 lakh is the proposed seed for one village farm. Nothing is collected on this website.", link: "How support works" },
        "participate-nominate": { label: "Know a farmer?", text: "Know a farmer who deserves the stage? Nominations have no entry fee.", link: "Nominate in the League" }
      }
    },
    bn: {
      mapKicker: "আপনার পথ",
      mapTitle: "পাঁচটি ধাপ। একটি পুজো।",
      mapLede: "যেকোনো জায়গা থেকে শুরু করুন। প্রতিটি ধাপের শেষে পরের ধাপের পথ দেখানো আছে।",
      stop: "ধাপ",
      of: "/",
      nextKicker: "পরের ধাপ",
      jump: "অথবা সরাসরি যান",
      barLabel: "পুজোর মধ্যে দিয়ে আপনার পথ",
      stops: {
        krishak: { short: "BKS বাংলা", title: "ভারতীয় কৃষক সমাজ", line: "এই পুজোর পেছনের কৃষক আন্দোলন, তার পশ্চিমবঙ্গ শাখা, আর কেন পুজো কৃষকের নাম নেয়।", cta: "BKS বাংলা দেখুন" },
        league: { short: "কৃষিরত্ন লিগ", title: "কৃষিরত্ন লিগ", line: "বাংলা যে কৃষকদের ছবি তোলে না, তাঁদের জন্য সাতটি পুরস্কার। একজন কৃষককে মনোনীত করুন, বা নিজেকে।", cta: "লিগ দেখুন" },
        puja: { short: "পুজো", title: "পুজো", line: "আরাধনা, কারুকাজ, ঢাক আর ঘরে ফেরা। দিনগুলোর অর্থ, ২০২৫-এ যা গড়েছি, আর ২০২৬-এর প্রস্তুতি।", cta: "পুজো দেখুন" },
        ifs: { short: "সমন্বিত চাষ", title: "সমন্বিত চাষ", line: "এক জমিতে ফসল, পশু, জল আর বাজার। চক্রটা দেখুন, তারপর পূর্ব কলকাতা জলাভূমির জীবন্ত খামার।", cta: "সমন্বিত চাষ দেখুন" },
        participate: { short: "অংশ নিন", title: "অংশ নিন", line: "একটি গ্রামের খামারের বীজ দিন, পৃষ্ঠপোষক হন, স্বেচ্ছাসেবক হন, বা শুধু প্যান্ডেলে আসুন। পাঁচটি দরজা।", cta: "আপনার দরজা খুঁজুন" }
      },
      next: {
        home: { title: "যাঁরা এর পেছনে, তাঁদের দিয়ে শুরু করুন।", body: "ভারতীয় কৃষক সমাজ এই পুজোর কৃষক আন্দোলন। আগে তাঁদের চিনুন।" },
        krishak: { title: "এবার চিনুন যে কৃষকদের সম্মান জানানো হয়।", body: "কৃষিরত্ন লিগ অচেনা কৃষকদের পুজোর মঞ্চে তোলে।" },
        league: { title: "দেখুন যে জমায়েতে তাঁরা সম্মানিত হন।", body: "আরাধনা, কারুকাজ, ঘরে ফেরা। পুজোই সেই মঞ্চ।" },
        puja: { title: "প্যান্ডেলের পেছনে একটি খামার গড়ে উঠছে।", body: "সমন্বিত চাষ সেই জীবিকা, যার বীজ এই পুজো বুনছে।" },
        ifs: { title: "একটি খামারের জন্য একজন পৃষ্ঠপোষক।", body: "খামারের বীজ দিন, পৃষ্ঠপোষক হন, স্বেচ্ছাসেবক হন বা মনোনয়ন দিন। আপনার দরজা বেছে নিন।" },
        mission: { title: "বড় লক্ষ্যের শুরু একটি দরজা দিয়ে।", body: "খামারের বীজ দিন, পৃষ্ঠপোষক হন, স্বেচ্ছাসেবক হন বা একজন কৃষককে মনোনীত করুন।" },
        participate: { title: "পুরো গল্পটা দেখলেন। এবার আসুন।", body: "পুজোর সব দিন প্যান্ডেল সবার জন্য খোলা, বিনামূল্যে।", cta: "আসার পরিকল্পনা করুন", alt: "গল্পগুলো দেখুন" }
      },
      league: {
        kicker: "ধাপ ০২ · স্বীকৃতি",
        h1: "কৃষিরত্ন লিগ",
        lede: "ভারতীয় কৃষক সমাজ পুরস্কার ২০২৬। পশ্চিমবঙ্গ জুড়ে কৃষক, পরিবার ও সম্প্রদায়ের পাঠানো মনোনয়ন থেকে সাতটি বিভাগ। বিজয়ীরা পুজোর সময় প্যান্ডেলের মঞ্চে সম্মানিত হন।"
      },
      hints: {
        "krishak-league": { label: "জানেন কি", text: "বাংলা যে কৃষকদের ছবি তোলে না, BKS পুজোর মঞ্চে তাঁদের সম্মান জানায়।", link: "কৃষিরত্ন লিগ দেখুন" },
        "krishak-site": { label: "অফিশিয়াল ওয়েবসাইট", text: "সংগঠনের নিজের কথা জানতে BKS পশ্চিমবঙ্গের অফিশিয়াল ওয়েবসাইটে যান।", link: "bkswbengal.org-এ যান" },
        "league-site": { label: "পুরো লিগ", text: "কৃষিরত্ন লিগ বাংলার নিজস্ব ওয়েবসাইটও আছে।", link: "লিগের সাইট খুলুন" },
        "puja-stories": { label: "ছবিতে", text: "২০২৬-এর মাঠ আর ২০২৫ মহোৎসবের ছবি গল্পের মতো চলে।", link: "গল্পগুলো খুলুন" },
        "puja-ifs": { label: "এগিয়ে চলুন", text: "থিম টেকসই কৃষি। দেখুন কীভাবে একটি খামারে ফসল, পশু, জল আর বাজার এক চক্রে বাঁধা।", link: "সমন্বিত চাষ" },
        "ifs-demo": { label: "মাঠে", text: "এই মডেল পুজোর স্থানে, পূর্ব কলকাতা জলাভূমিতে, একটি চালু খামার হিসেবে গড়ে উঠছে।", link: "লাইভ ডেমো দেখুন" },
        "ifs-seed": { label: "বীজ", text: "একটি গ্রামের খামারের প্রস্তাবিত বীজ ₹১ লক্ষ। এই ওয়েবসাইটে কোনো টাকা নেওয়া হয় না।", link: "সহায়তা কীভাবে কাজ করে" },
        "participate-nominate": { label: "কোনো কৃষককে চেনেন?", text: "মঞ্চের যোগ্য কোনো কৃষককে চেনেন? মনোনয়নে কোনো ফি নেই।", link: "লিগে মনোনয়ন দিন" }
      }
    },
    hi: {
      mapKicker: "आपका रास्ता",
      mapTitle: "पाँच पड़ाव। एक पूजा।",
      mapLede: "कहीं से भी शुरू करें। हर पड़ाव के अंत में अगले पड़ाव का रास्ता है।",
      stop: "पड़ाव",
      of: "/",
      nextKicker: "अगला पड़ाव",
      jump: "या सीधे जाएँ",
      barLabel: "पूजा में आपका रास्ता",
      stops: {
        krishak: { short: "BKS बंगाल", title: "भारतीय कृषक समाज", line: "इस पूजा के पीछे का किसान आंदोलन, उसकी पश्चिम बंगाल शाखा, और पूजा किसान का नाम क्यों लेती है।", cta: "BKS बंगाल देखें" },
        league: { short: "कृषि रत्न लीग", title: "कृषि रत्न लीग", line: "उन किसानों के लिए सात पुरस्कार जिनकी तस्वीर बंगाल नहीं खींचता। किसी किसान को नामित करें, या स्वयं को।", cta: "लीग देखें" },
        puja: { short: "पूजा", title: "पूजा", line: "आराधना, शिल्प, ढाक और घर वापसी। दिनों का अर्थ, 2025 में हमने क्या बनाया, और 2026 की तैयारी।", cta: "पूजा देखें" },
        ifs: { short: "समेकित कृषि", title: "समेकित कृषि", line: "एक ज़मीन पर फसल, पशु, जल और बाज़ार। चक्र देखें, फिर पूर्वी कोलकाता आर्द्रभूमि का जीवित खेत।", cta: "समेकित कृषि देखें" },
        participate: { short: "भाग लें", title: "भाग लें", line: "किसी गाँव के खेत को बीज दें, प्रायोजक बनें, स्वयंसेवक बनें, या बस पंडाल आएँ। पाँच द्वार।", cta: "अपना द्वार चुनें" }
      },
      next: {
        home: { title: "जो इसके पीछे हैं, उनसे शुरू करें।", body: "भारतीय कृषक समाज इस पूजा का किसान आंदोलन है। पहले उन्हें जानें।" },
        krishak: { title: "अब उन किसानों से मिलें जिनका सम्मान होता है।", body: "कृषि रत्न लीग अनजान किसानों को पूजा के मंच पर लाती है।" },
        league: { title: "वह जमावड़ा देखें जहाँ उनका सम्मान होता है।", body: "आराधना, शिल्प, घर वापसी। पूजा ही मंच है।" },
        puja: { title: "पंडाल के पीछे एक खेत बढ़ रहा है।", body: "समेकित कृषि वह आजीविका है जिसका बीज यह पूजा बो रही है।" },
        ifs: { title: "एक खेत को एक संरक्षक चाहिए।", body: "खेत को बीज दें, प्रायोजक बनें, स्वयंसेवक बनें या नामांकन करें। अपना द्वार चुनें।" },
        mission: { title: "बड़ा लक्ष्य एक द्वार से शुरू होता है।", body: "खेत को बीज दें, प्रायोजक बनें, स्वयंसेवक बनें या किसी किसान को नामित करें।" },
        participate: { title: "पूरी कहानी देख ली। अब आइए।", body: "पूजा के सभी दिनों में पंडाल सबके लिए खुला है, निःशुल्क।", cta: "आने की योजना बनाएँ", alt: "कहानियाँ देखें" }
      },
      league: {
        kicker: "पड़ाव 02 · सम्मान",
        h1: "कृषि रत्न लीग",
        lede: "भारतीय कृषक समाज पुरस्कार 2026। पश्चिम बंगाल भर के किसानों, परिवारों और समुदायों के भेजे नामांकनों से सात श्रेणियाँ। विजेताओं का पूजा के दौरान पंडाल के मंच पर सम्मान होता है।"
      },
      hints: {
        "krishak-league": { label: "क्या आप जानते हैं", text: "जिन किसानों की तस्वीर बंगाल नहीं खींचता, BKS पूजा के मंच पर उनका सम्मान करता है।", link: "कृषि रत्न लीग देखें" },
        "krishak-site": { label: "आधिकारिक वेबसाइट", text: "संगठन के बारे में और जानने के लिए BKS पश्चिम बंगाल की आधिकारिक वेबसाइट देखें।", link: "bkswbengal.org पर जाएँ" },
        "league-site": { label: "पूरी लीग", text: "कृषि रत्न लीग बंगाल की अपनी वेबसाइट भी है।", link: "लीग की साइट खोलें" },
        "puja-stories": { label: "तस्वीरों में", text: "2026 की ज़मीन और 2025 महोत्सव की तस्वीरें कहानियों की तरह चलती हैं।", link: "कहानियाँ खोलें" },
        "puja-ifs": { label: "आगे बढ़ें", text: "विषय टिकाऊ कृषि है। देखें कैसे एक खेत में फसल, पशु, जल और बाज़ार एक चक्र में जुड़ते हैं।", link: "समेकित कृषि" },
        "ifs-demo": { label: "ज़मीन पर", text: "यह मॉडल पूजा स्थल, पूर्वी कोलकाता आर्द्रभूमि में, एक चालू खेत के रूप में बन रहा है।", link: "लाइव डेमो देखें" },
        "ifs-seed": { label: "बीज", text: "एक गाँव के खेत के लिए प्रस्तावित बीज ₹1 लाख है। इस वेबसाइट पर कुछ भी एकत्र नहीं होता।", link: "सहायता कैसे काम करती है" },
        "participate-nominate": { label: "किसी किसान को जानते हैं?", text: "मंच के योग्य किसी किसान को जानते हैं? नामांकन का कोई शुल्क नहीं।", link: "लीग में नामांकन करें" }
      }
    }
  };

  var ICONS = {
    star: "<path d='M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z'/>",
    out: "<path d='M14 4h6v6M20 4l-9 9M18 14v6H4V6h6'/>",
    play: "<path d='M7 4.5v15l12-7.5z'/>",
    leaf: "<path d='M5 19c0-8 5-14 15-14 0 10-6 15-14 15'/><path d='M5 19l7-7'/>",
    pin: "<path d='M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z'/><circle cx='12' cy='9.5' r='2.5'/>",
    seed: "<path d='M12 21v-8'/><path d='M12 13c0-4.5-3-7-7-7 0 4.5 3 7 7 7z'/><path d='M12 13c0-4.5 3-7 7-7 0 4.5-3 7-7 7z'/>"
  };

  function lang() {
    var l = (document.documentElement.lang || "en").slice(0, 2);
    return COPY[l] ? l : "en";
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function num(i) {
    return (i < 9 ? "0" : "") + (i + 1);
  }

  function icon(name) {
    return "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" + (ICONS[name] || "") + "</svg>";
  }

  function renderMap(c) {
    var host = document.querySelector("[data-journey-map]");
    if (!host) return;
    var html =
      "<header class='journey__head'>" +
      "<p class='kicker'>" + esc(c.mapKicker) + "</p>" +
      "<h2 id='journey-h'>" + esc(c.mapTitle) + "</h2>" +
      "<p class='lede'>" + esc(c.mapLede) + "</p></header><ol class='journey__list'>";
    ORDER.forEach(function (id, i) {
      var s = STOPS[id];
      var t = c.stops[id];
      html +=
        "<li class='journey-stop journey-stop--" + s.shape + "'>" +
        "<a class='journey-stop__link journey-card' href='" + s.href + "' aria-label='" + esc(c.stop + " " + num(i) + ": " + t.title) + "'>" +
        "<span class='journey-card__pin' aria-hidden='true'></span>" +
        "<span class='journey-stop__frame'><img src='" + s.img + "' alt='' loading='lazy' decoding='async'></span>" +
        "<span class='journey-stop__body'>" +
        "<span class='journey-stop__num' aria-hidden='true'>" + num(i) + "</span>" +
        "<span class='journey-stop__title'>" + esc(t.title) + "</span>" +
        "<span class='journey-stop__line'>" + esc(t.line) + "</span>" +
        "<span class='journey-stop__cta'>" + esc(t.cta) + "</span>" +
        "</span></a></li>";
    });
    html += "</ol>";
    host.innerHTML = html;
  }

  function renderBars(c) {
    document.querySelectorAll("[data-journey-bar]").forEach(function (bar) {
      var current = bar.getAttribute("data-journey-bar");
      var idx = ORDER.indexOf(current);
      bar.setAttribute("aria-label", c.barLabel);
      var html = "<span class='journey-bar__count'>" + esc(c.stop) + " <b>" + num(idx) + "</b> " + esc(c.of) + " 05</span><ol class='journey-bar__list'>";
      ORDER.forEach(function (id, i) {
        var state = i < idx ? " is-done" : i === idx ? " is-current" : "";
        html +=
          "<li class='journey-bar__item" + state + "'><a href='" + STOPS[id].href + "'" + (i === idx ? " aria-current='step'" : "") + ">" +
          "<span class='journey-bar__num'>" + num(i) + "</span><span class='journey-bar__label'>" + esc(c.stops[id].short) + "</span></a></li>";
      });
      bar.innerHTML = html + "</ol>";
    });
  }

  function renderNext(c) {
    document.querySelectorAll("[data-next-stop]").forEach(function (box) {
      var from = box.getAttribute("data-next-stop");
      var to = NEXT[from];
      var copy = c.next[from] || {};
      var isVisit = to === "visit";
      var idx = ORDER.indexOf(to);
      var stop = STOPS[to];
      var href = isVisit ? "#visit" : stop.href;
      var cta = isVisit ? copy.cta : c.stops[to].cta;
      var kicker = isVisit ? c.nextKicker : c.nextKicker + " · " + num(idx) + " " + c.of + " 05";
      var img = isVisit ? "assets/stories/2026/khuti-puja-1.jpg" : stop.img;

      var track = "<ol class='next-stop__track' aria-label='" + esc(c.barLabel) + "'>";
      ORDER.forEach(function (id, i) {
        var cls = isVisit || i < idx ? " is-done" : i === idx ? " is-next" : "";
        track += "<li class='" + cls.trim() + "'><a href='" + STOPS[id].href + "' title='" + esc(c.stops[id].short) + "'" +
          (i === idx ? " aria-current='step'" : "") + "><span>" + num(i) + "</span>" +
          "<span class='sr-only'> " + esc(c.stops[id].short) + "</span></a></li>";
      });
      track += "</ol>";

      var jump = ORDER.filter(function (id) { return id !== to && id !== from; }).map(function (id) {
        return "<a href='" + STOPS[id].href + "'>" + esc(c.stops[id].short) + "</a>";
      });
      if (isVisit) jump.unshift("<a href='#memories'>" + esc(copy.alt) + "</a>");

      box.innerHTML =
        "<div class='next-stop__inner'>" +
        "<div class='next-stop__copy'>" + track +
        "<p class='next-stop__kicker'>" + esc(kicker) + "</p>" +
        "<h2 class='next-stop__title'>" + esc(copy.title) + "</h2>" +
        "<p class='next-stop__body'>" + esc(copy.body) + "</p>" +
        "<a class='next-stop__cta' href='" + href + "'><span>" + esc(cta) + "</span><span class='next-stop__arrow' aria-hidden='true'>→</span></a>" +
        "<p class='next-stop__jump'><span>" + esc(c.jump) + "</span>" + jump.join("") + "</p>" +
        "</div>" +
        "<a class='next-stop__visual' href='" + href + "' tabindex='-1' aria-hidden='true'><img src='" + img + "' alt='' loading='lazy' decoding='async'></a>" +
        "</div>";
    });
  }

  function renderHints(c) {
    document.querySelectorAll("[data-hint]").forEach(function (box) {
      var id = box.getAttribute("data-hint");
      var spec = HINTS[id];
      var copy = c.hints[id];
      if (!spec || !copy) return;
      var ext = spec.external ? " target='_blank' rel='noopener noreferrer'" : "";
      box.innerHTML =
        "<span class='hint__icon'>" + icon(spec.icon) + "</span>" +
        "<p class='hint__text'><span class='hint__label'>" + esc(copy.label) + "</span>" + esc(copy.text) + "</p>" +
        "<a class='hint__link' href='" + spec.href + "'" + ext + ">" + esc(copy.link) + "<span aria-hidden='true'>" + (spec.external ? " ↗" : " →") + "</span></a>";
    });
  }

  function renderLeagueHead(c) {
    var head = document.querySelector("[data-league-head]");
    if (!head) return;
    head.innerHTML =
      "<p class='kicker'>" + esc(c.league.kicker) + "</p>" +
      "<h1>" + esc(c.league.h1) + "</h1>" +
      "<p class='lede'>" + esc(c.league.lede) + "</p>";
  }


  /* ---------- Photos on the chapter pages (collage + moving strip) ---------- */
  var M = "assets/stories/museum-2025/";
  var S = "assets/stories/2026/";
  var MEM = "assets/memories-2025/";
  var MEDIA = [
    { key: "puja-gallery", kind: "gallery", after: "[data-view='puja'] > .page-head",
      imgs: [M + "pavilion-exterior.jpg", "assets/puja-2025/aarti-procession-2025.jpg", "assets/puja-2025/conch-aarti-2025.jpg"] },
    { key: "puja-strip", kind: "strip", before: "[data-view='puja'] > .glance",
      imgs: [M + "grand-courtyard.jpg", MEM + "mem-09.jpg", M + "bamboo-gateway.jpg", MEM + "mem-10.jpg", M + "red-lit-interior.jpg", MEM + "mem-11.jpg", M + "carved-bamboo-face.jpg", MEM + "mem-26.jpg", M + "museum-sign.jpg"] },
    { key: "ifs-gallery", kind: "gallery", after: "#ifs-body .bks-ifs__wrap > header",
      imgs: [S + "site-before-3.jpg", M + "museum-04.jpg", S + "invitation-page-2.jpg"] },
    { key: "ifs-strip", kind: "strip", after: "#ifs-body .bks-ifs__wrap > .bks-ifs__block:nth-of-type(3)",
      imgs: [M + "museum-01.jpg", S + "site-work-bamboo.jpg", M + "museum-02.jpg", M + "museum-06.jpg", S + "khuti-puja-2.jpg", M + "museum-09.jpg", M + "grand-courtyard.jpg", M + "museum-12.jpg"] },
    { key: "ifs-strip-2", kind: "strip", before: "[data-view='ifs'] > [data-hint='ifs-demo']",
      imgs: [S + "site-before-1.jpg", M + "museum-07.jpg", S + "site-before-2.jpg", M + "museum-10.jpg", S + "site-work-bamboo.jpg", M + "museum-05.jpg"] },
    { key: "participate-gallery", kind: "gallery", after: "#participate-body > .page-head",
      imgs: [S + "khuti-puja-1.jpg", S + "khuti-puja-4.jpg", S + "environment-day-2026.jpg"] },
    { key: "participate-strip", kind: "strip", before: "[data-view='participate'] > [data-slot='participate-b']",
      imgs: [S + "khuti-puja-2.jpg", "assets/puja-2026/photo_2026-08-19_11-15-12.jpg", S + "khuti-puja-3.jpg", MEM + "mem-13.jpg", "assets/puja-2026/photo_2026-08-19_11-15-15.jpg", MEM + "mem-06.jpg", S + "protyabortan-banner.jpg", S + "site-work-bamboo.jpg"] }
  ];

  function mediaHtml(spec) {
    var img = function (src, cls) { return "<img" + (cls ? " class='" + cls + "'" : "") + " src='" + src + "' alt='' loading='lazy' decoding='async'>"; };
    if (spec.kind === "gallery") {
      return "<span class='cg-tile cg-tile--a'>" + img(spec.imgs[0]) + "</span>" +
        "<span class='cg-tile cg-tile--b'>" + img(spec.imgs[1]) + "</span>" +
        "<span class='cg-tile cg-tile--c'>" + img(spec.imgs[2]) + "</span>";
    }
    var row = spec.imgs.map(function (src, i) { return "<span class='ps-item ps-item--" + (i % 3) + "'>" + img(src) + "</span>"; }).join("");
    return "<div class='ps-track'>" + row + row + "</div>";
  }

  function ensureMedia() {
    MEDIA.forEach(function (spec) {
      var ref = document.querySelector(spec.after || spec.before);
      if (!ref) return;
      var el = document.querySelector("[data-media='" + spec.key + "']");
      var sib = spec.after ? ref.nextElementSibling : ref.previousElementSibling;
      if (el && el === sib) return;
      if (el) el.remove();
      el = document.createElement("div");
      el.className = spec.kind === "gallery" ? "chapter-gallery" : "photo-strip";
      el.setAttribute("data-media", spec.key);
      el.setAttribute("aria-hidden", "true");
      el.innerHTML = mediaHtml(spec);
      ref.parentNode.insertBefore(el, spec.after ? ref.nextSibling : ref);
    });
  }

  var lastLang = "";
  function render() {
    var l = lang();
    if (l === lastLang) return;
    lastLang = l;
    var c = COPY[l];
    renderMap(c);
    renderBars(c);
    renderNext(c);
    renderHints(c);
    renderLeagueHead(c);
  }

  function boot() {
    render();
    ensureMedia();
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    // Page bodies are re-rendered on language change; put the photos back each time.
    var t = 0;
    new MutationObserver(function (list) {
      var ours = list.every(function (m) {
        return Array.prototype.every.call(m.addedNodes, function (n) { return n.nodeType === 1 && n.hasAttribute("data-media"); }) &&
          Array.prototype.every.call(m.removedNodes, function (n) { return n.nodeType === 1 && n.hasAttribute && n.hasAttribute("data-media"); });
      });
      if (ours) return;
      clearTimeout(t);
      t = setTimeout(ensureMedia, 80);
    }).observe(document.getElementById("main") || document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
