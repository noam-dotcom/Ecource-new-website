export type Lang = "en" | "he" | "zh" | "es";

export const translations = {
  en: {
    nav: {
      problem: "The Problem",
      solution: "Our Solution",
      products: "Products",
      market: "Market",
      team: "Team",
      cta: "Request Pitch Deck",
      contactUs: "Contact Us",
    },
    hero: {
      badge: "Patent-Pending Technology · Israeli Innovation",
      headline1: "Doubling the Value",
      headline2: "of Every Fish.",
      description:
        "Ecource Ltd. has developed a breakthrough whole-fish processing technology that accepts wild-capture and aquaculture finfish of all species and sizes — converting double the quantity of each fish into premium food products.",
      subtext: "Registered in Israel · Seeking strategic investment partners",
      cta1: "Request Pitch Deck",
      cta2: "Discover the Technology",
      stat1Value: "2×",
      stat1Label: "Fish Yield Utilization",
      stat2Value: "100%",
      stat2Label: "Species & Size Compatibility",
      stat3Value: "Patent",
      stat3Label: "Pending Protection",
    },
    problem: {
      label: "The Problem",
      headline: "A Broken Food System",
      headlineSub: "Half of Every Animal We Produce Goes to Waste",
      description:
        "The world is running short of food — yet conventional seafood processing discards up to 65% of every fish. This is a structural crisis, not an operational one.",
      items: [
        {
          title: "Seafood Production Is ~50% Inefficient",
          description:
            "Traditional filleting recovers only 35–50% of each fish for human consumption. Bones, skin, head, fins, and viscera — comprising ~50% of the fish, equal to about 60 MT — are discarded, rendered for fishmeal, or used in pet food.",
        },
        {
          title: "Hunger & Food Scarcity",
          description:
            "733 million people are chronically hungry (FAO 2024). By 2050, the world will have 9.7B people. Existing production cannot close the gap with conventional methods — yet we discard enormous volumes of highly nutritious food every single day.",
        },
        {
          title: "Bycatch & Sorting Mortality",
          description:
            "9.1 MT/year of marine fish are discarded as bycatch (FAO 2024). Fish outside target sizes face >90% mortality after 20–30 minutes out of water — killed and discarded because of an arbitrary size threshold.",
        },
        {
          title: "Farm Mortality Before Harvest",
          description:
            "Farmed finfish globally loses 8–15 MT/year pre-harvest to disease, stress, and suboptimal conditions. Norwegian salmon alone: 15–20% mortality before slaughter. These fish die and never reach human consumption.",
        },
      ],
      bigStatLabel:
        "in annual fish biomass value is wasted or severely underutilized by conventional processing worldwide",
    },
    solution: {
      label: "Our Solution",
      headline1: "A Breakthrough in",
      headline2: "Fish Processing",
      para1:
        "Ecource has engineered a proprietary processing technology that fundamentally changes the economics of fish processing. Instead of discarding 50–60% of every fish, our system converts the full biomass into high-value food products — effectively doubling the yield from every tonne processed.",
      para2:
        "The technology is species-agnostic and size-independent, making it deployable across the full spectrum of global fisheries — from Norwegian salmon farms to artisanal trawlers in Southeast Asia.",
      linkText: "Request confidential technology overview →",
      features: [
        {
          title: "Whole-Fish Processing",
          description:
            "Our technology processes the entire fish — not just fillets. Every part is converted into a premium product with zero biomass wasted.",
        },
        {
          title: "All Species & Sizes",
          description:
            "Unlike rigid industrial lines, our system accepts any finfish species from any source — wild-capture or aquaculture — at any size.",
        },
        {
          title: "2× Yield Output",
          description:
            "By utilizing double the quantity of each fish, processors dramatically increase revenue per tonne without increasing their raw material costs.",
        },
        {
          title: "Patent-Pending Protection",
          description:
            "Our core processing methodology is protected by a pending patent, providing a durable competitive moat for Ecource and its partners.",
        },
      ],
      traditional: {
        label: "Traditional Processing",
        items: [
          "40–50% yield per fish",
          "Species & size specific equipment",
          "Significant biomass waste",
          "Commodity-grade outputs",
          "Thin, volume-dependent margins",
        ],
      },
      ecource: {
        label: "Ecource Technology",
        items: [
          "2× yield — full fish utilization",
          "Works with any species, any size",
          "Zero biomass waste",
          "Premium-grade food products",
          "Structurally superior margins",
        ],
      },
    },
    products: {
      label: "Premium Products",
      headline1: "One Whole-Fish Input.",
      headline2: "Eight Premium Product Categories.",
      description:
        "100% of every fish becomes premium human-grade food — clean label, halal/kosher, gluten-free options, naturally high in calcium, collagen & omega-3. Dramatically lower prices than conventional alternatives.",
      items: [
        {
          category: "Fish Cutlets",
          items: [
            "Premium natural whole-fish cutlets",
            "Finely processed with bones, skin & head",
            "High protein · Clean label · 140–175g retail SKUs",
          ],
          tag: "Core Product",
        },
        {
          category: "Fish Burgers",
          items: [
            "Whole-fish patties with superior texture and nutritional density",
            "Ready-to-cook & ready-to-eat formats",
            "Foodservice & retail",
          ],
          tag: "High Volume",
        },
        {
          category: "Breaded Products",
          items: [
            "Breaded fillets, nuggets, fish fingers",
            "Produced from whole-fish input",
            "Premium nutritional profile vs. conventional breaded fish",
          ],
          tag: "Consumer Staple",
        },
        {
          category: "Pasta & Noodles",
          items: [
            "Fish-enriched pasta and noodles",
            "Calcium-rich, high protein, gluten-free option",
            "Functional food for mainstream retail",
          ],
          tag: "Functional Food",
        },
        {
          category: "Pizza Dough",
          items: [
            "Fish-fortified pizza dough",
            "Added protein, omega-3 & calcium to a mass-market format",
            "Differentiated health-positioned SKU",
          ],
          tag: "Innovation",
        },
        {
          category: "Snacks",
          items: [
            "Protein-dense, calcium-rich whole-fish snacks",
            "Crisps, crackers, sticks — clean label",
            "High-growth snacking category",
          ],
          tag: "High Margin",
        },
        {
          category: "Imitation Rice",
          items: [
            "Fish-derived imitation rice",
            "Low-carb, high-protein, calcium-rich",
            "Novel functional ingredient for health-conscious consumers",
          ],
          tag: "Novel Format",
        },
        {
          category: "Gluten-Free Pasta & Pizza",
          items: [
            "$12.9B market in 2024, expanding to $33B by 2034",
            "Fish-enriched pasta and pizza with superior nutritional value",
            "Far surpasses plant-based alternatives",
          ],
          tag: "Fastest Growing",
        },
      ],
      note: "All products: clean label · halal/kosher · gluten-free option · naturally high calcium, collagen & omega-3.",
      noteLink: "Contact us to learn more →",
    },
    market: {
      label: "Market Opportunity",
      headline1: "A Multi-Billion Dollar",
      headline2: "Untapped Opportunity",
      description:
        "Finfish is the dominant segment of the global seafood market. Ecource sits at the intersection of food security, sustainability, and technology — targeting the entire finfish category.",
      metrics: [
        {
          value: "~$205B",
          label: "Global Finfish Market",
          sub: "2024 · Source: FAO SOFIA 2024",
        },
        {
          value: "~130 MT",
          label: "Finfish Production",
          sub: "Wild capture ~60 MT + aquaculture ~70 MT",
        },
        {
          value: "~50 MT",
          label: "Finfish Discarded / Year",
          sub: "Post-harvest processing waste",
        },
        {
          value: "8–15 MT",
          label: "Farm Mortality / Year",
          sub: "Pre-harvest loss — avoidable",
        },
      ],
      driversTitle: "Key Market Drivers",
      drivers: [
        "733 million people are chronically hungry — conventional methods cannot close the protein deficit",
        "Wild capture + aquaculture finfish production exceeds 130 MT/year with growing demand",
        "Regulatory pressure to reduce fish waste across EU, US, and Asian markets",
        "Consumer and institutional demand for clean-label, sustainable, high-nutrition seafood products",
        "ESG mandates and carbon credit frameworks reward measurable waste elimination at scale",
      ],
      whyNowTitle: "Why Now?",
      whyNow:
        "The convergence of global protein demand, sustainability mandates, and the collapse of traditional fishing margins has created a perfect window for disruptive processing technology. Ecource is production-ready.",
      whyEcourceTitle: "Why Ecource?",
      whyEcource:
        "We are the only company with a patent-pending technology capable of processing any finfish species and size into premium food products — at 5 tonnes per hour with zero waste. This is not an incremental improvement; it is a structural shift in how fish is processed.",
      callLink: "Schedule an investor call →",
    },
    team: {
      label: "The Team",
      headline1: "World-Class Expertise Across",
      headline2: "Seafood, FoodTech & Global Operations",
      description:
        "Ecource is built by a team with deep hands-on experience across global seafood operations, food engineering, regulatory compliance, and venture-scale growth.",
      members: [
        {
          name: "Noam Weinberg Sehayek",
          role: "Co-Founder & CEO",
          bio: "25+ years in global seafood & aquaculture. Built and managed fisheries and processing plants in China and Israel. Successfully led multiple global projects for innovative fish products.",
          initials: "NWS",
        },
        {
          name: "Joseph Green",
          role: "Co-Founder & COO",
          bio: "15+ years growing companies, raising funds, and building successful teams. Oversees Ecource's day-to-day operations, partner development, and international expansion.",
          initials: "JG",
        },
        {
          name: "Avner Rot",
          role: "Engineering & Chemistry",
          bio: "Extensive experience in food industry engineering. Ensures production lines meet all technical requirements and industry standards for multi-species whole-fish processing at scale.",
          initials: "AR",
        },
        {
          name: "Doron Cohen",
          role: "Food Commercialization",
          bio: "40+ years in R&D and commercialization of meat and fish products. Former Technology Director at Frutarom/IFF Israel. Leads product development and product-market fit strategy.",
          initials: "DC",
        },
        {
          name: "Dr. Edy Tal",
          role: "Food Safety & Regulations",
          bio: "Former Chief Veterinarian, Israeli Health Authority. 30+ years in food safety and global regulatory compliance — critical for international plant certification and market access.",
          initials: "ET",
        },
        {
          name: "Moshe (Bogie) Ya'alon",
          role: "Co-Founder & Business Dev.",
          bio: "Former Israel Defense Minister and IDF Commander in Chief. Extensive global government network enabling rapid market entry and regulatory engagement.",
          initials: "MY",
        },
      ],
      note: "Aligned with UN SDG 14 (Life Below Water) · SDG 12 (Responsible Consumption) · SDG 2 (Zero Hunger)",
    },
    contact: {
      label: "Investor Contact",
      headline1: "Let's Build the",
      headline2: "Future of Food.",
      description:
        "We are actively seeking investment partners who share our vision of a more efficient and sustainable global fish processing industry. Request our pitch deck or schedule a call.",
      location: "Israel · Available for global meetings",
      confidentialityNote:
        "Detailed technology information, financials, and partnership terms are shared under a mutual NDA. Submit the form to receive our executive summary.",
      confidentialityLabel: "Confidentiality note:",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "John Smith",
        emailLabel: "Email",
        emailPlaceholder: "john@fund.com",
        companyLabel: "Company / Fund",
        companyPlaceholder: "Acme Ventures",
        roleLabel: "Your Role",
        rolePlaceholder: "Managing Partner",
        interestLabel: "Investment Interest",
        interestDefault: "Select investment stage",
        interestOptions: [
          { value: "seed", label: "Seed / Early-Stage" },
          { value: "series-a", label: "Series A" },
          { value: "strategic", label: "Strategic Partnership" },
          { value: "other", label: "Other / Just Learning" },
        ],
        messageLabel: "Message",
        messagePlaceholder:
          "Tell us about your investment thesis or what you'd like to know about Ecource...",
        submitText: "Send Message & Request Pitch Deck",
        submittingText: "Sending...",
        privacyNote: "Your information is kept confidential and never shared.",
        successTitle: "Message received!",
        successDescription: "We'll be in touch within 24 hours.",
        errorTitle: "Something went wrong",
        errorDescription: "Please try again or email us directly.",
      },
    },
    about: {
      label: "About Us",
      headline: "Transforming the Future",
      headlineSub: "of Food",
      story: "Ecource Ltd. is an Israeli company with breakthrough, patent-pending whole-fish processing technology — accepting wild-capture and aquaculture finfish of all species and sizes, utilizing double the quantity of each fish into premium food products. Traditional processing uses only 35–50% of the fish. Ecource uses 100% — doubling food output from every ton of raw material, slashing effective raw material cost, and eliminating all waste-disposal expense.",
      missionTitle: "Our Mission",
      mission: "By using the entire animal — for human consumption — avoiding waste, pollution, and costs. Zero Waste. Zero Mortality. Zero Pollution. 100% Yield.",
      highlights: [
        { value: "~$205B", label: "Finfish Market" },
        { value: "100%", label: "Yield Utilization" },
        { value: "Patent", label: "Pending" },
        { value: "$5M", label: "Seed Round 2026" },
      ],
    },
    footer: {
      tagline: "Patent-Pending Whole-Fish Processing Technology",
      copyright: `© ${new Date().getFullYear()} Ecource Ltd. All rights reserved. | Registered in Israel`,
      contact: "Contact",
      technology: "Technology",
    },
  },

  // ─── HEBREW ────────────────────────────────────────────────────────────────
  he: {
    nav: {
      problem: "הבעיה",
      solution: "הפתרון שלנו",
      products: "מוצרים",
      market: "שוק",
      team: "הצוות",
      cta: "בקשת מצגת משקיעים",
      contactUs: "צור קשר",
    },
    hero: {
      badge: "טכנולוגיה בתהליך פטנט · חדשנות ישראלית",
      headline1: "מכפילים את הערך",
      headline2: "של כל דג.",
      description:
        "חברת Ecource פיתחה טכנולוגיה פורצת דרך לעיבוד דגים שלמים, המקבלת דגי ים פתוח ודגי מאגר מכל המינים והגדלים — וממירה כפל כמות מכל דג למוצרי מזון פרימיום.",
      subtext: "רשומה בישראל · מחפשת שותפי השקעה אסטרטגיים",
      cta1: "בקשת מצגת משקיעים",
      cta2: "גלה את הטכנולוגיה",
      stat1Value: "×2",
      stat1Label: "ניצול תפוקת הדג",
      stat2Value: "100%",
      stat2Label: "תאימות לכל מין וגודל",
      stat3Value: "פטנט",
      stat3Label: "בתהליך רישום",
    },
    problem: {
      label: "הבעיה",
      headline: "מערכת מזון שבורה",
      headlineSub: "חצי מכל בעל חיים שאנו מגדלים — הולך לפח",
      description:
        "העולם חסר מזון — ועיבוד ים מסורתי זורק עד 65% מכל דג. זהו משבר מבני, לא תפעולי.",
      items: [
        {
          title: "ייצור פירות ים — יעיל ב-50% בלבד",
          description:
            "פילוט מסורתי מחלץ רק 35–50% מכל דג לצריכה אנושית. עצמות, עור, ראש, סנפירים וקרביים — כ-50% מהדג, כ-60 מיליון טון בשנה — נזרקים, מיועדים לקמח דגים או למזון לחיות מחמד.",
        },
        {
          title: "רעב ומחסור במזון",
          description:
            "733 מיליון אנשים סובלים מרעב כרוני (FAO 2024). עד 2050 יהיו 9.7 מיליארד בני אדם. הייצור הקיים אינו יכול לסגור את הפער — ובמקביל אנחנו זורקים נפחי עצומים של מזון מזין מדי יום.",
        },
        {
          title: "תמותת ביקאץ' ומיון",
          description:
            "9.1 מיליון טון דגי ים בשנה נזרקים כביקאץ' (FAO 2024). דגים מחוץ לגדלי היעד סובלים מתמותה של למעלה מ-90% תוך 20–30 דקות מחוץ למים — נהרגים ונזרקים עקב סף גודל שרירותי.",
        },
        {
          title: "תמותה בחוות לפני הקציר",
          description:
            "דגי ים מגודלים ברחבי העולם מאבדים 8–15 מיליון טון בשנה לפני הקציר עקב מחלות, סטרס ותנאים לא מיטביים. סלמון נורווגי לבדו: 15–20% תמותה לפני השחיטה. דגים אלה מתים ולעולם לא הופכים למזון לצריכה אנושית.",
        },
      ],
      bigStatLabel:
        "בשווי ביומסת דגים שנתית מבוזבזת או מנוצלת בחסר על ידי עיבוד קונבנציונלי ברחבי העולם",
    },
    solution: {
      label: "הפתרון שלנו",
      headline1: "פריצת דרך בעיבוד",
      headline2: "הדגים",
      para1:
        "Ecource פיתחה טכנולוגיית עיבוד קניינית המשנה מהיסוד את הכלכלה של עיבוד דגים. במקום לזרוק 50–60% מכל דג, המערכת שלנו ממירה את הביומסה המלאה למוצרי מזון בעלי ערך גבוה — ובפועל מכפילה את התפוקה מכל טון שמעובד.",
      para2:
        "הטכנולוגיה אגנוסטית למין ועצמאית מגודל, מה שמאפשר פריסה על כל ספקטרום מדגיות העולם — ממשקי סלמון נורוויגיים ועד ספינות דיג אומנותיות בדרום-מזרח אסיה.",
      linkText: "← בקש סקירה טכנולוגית חסויה",
      features: [
        {
          title: "עיבוד דג שלם",
          description:
            "הטכנולוגיה שלנו מעבדת את הדג כולו — לא רק פילה. כל חלק מומר למוצר פרימיום ללא בזבוז ביומסה.",
        },
        {
          title: "כל המינים והגדלים",
          description:
            "בניגוד לקווים תעשייתיים נוקשים, המערכת שלנו מקבלת כל מין דג מכל מקור — דיג טבעי או מאגר — בכל גודל.",
        },
        {
          title: "תפוקה כפולה ×2",
          description:
            "על ידי ניצול כפול של כמות כל דג, מעבדים מגדילים דרמטית את ההכנסה לטון ללא הגדלת עלויות חומרי הגלם.",
        },
        {
          title: "הגנת פטנט בתהליך",
          description:
            "מתודולוגיית העיבוד המרכזית שלנו מוגנת על ידי פטנט בהמתנה, המספק חפיר תחרותי עמיד ל-Ecource ולשותפיה.",
        },
      ],
      traditional: {
        label: "עיבוד מסורתי",
        items: [
          "40–50% תפוקה לדג",
          "ציוד ספציפי למין וגודל",
          "בזבוז ביומסה משמעותי",
          "תפוקות ברמת סחורה",
          "שולי רווח דקים, תלויי נפח",
        ],
      },
      ecource: {
        label: "טכנולוגיית Ecource",
        items: [
          "×2 תפוקה — ניצול מלא של הדג",
          "עובד עם כל מין, כל גודל",
          "אפס בזבוז ביומסה",
          "מוצרי מזון ברמת פרימיום",
          "שולי רווח עדיפים מבנית",
        ],
      },
    },
    products: {
      label: "מוצרי פרימיום",
      headline1: "חומר גלם אחד — דג שלם.",
      headline2: "שמונה קטגוריות מוצר פרימיום.",
      description:
        "100% מכל דג הופך למזון אנושי מדרגה ראשונה — תוית נקייה, הלאל/כשר, אפשרות ללא גלוטן, עשיר באופן טבעי בסידן, קולגן ואומגה-3. מחירים נמוכים דרמטית מהחלופות הקונבנציונליות.",
      items: [
        {
          category: "קציצות דגים",
          items: [
            "קציצות דג שלם טבעיות פרימיום",
            "מעובד דק עם עצמות, עור וראש",
            "חלבון גבוה · תווית נקייה · SKU קמעוני 140–175 גרם",
          ],
          tag: "מוצר ליבה",
        },
        {
          category: "המבורגר דג",
          items: [
            "פטיז דג שלם עם מרקם ועושר תזונתי עליון",
            "פורמטים מוכנים לבישול ומוכנים לאכילה",
            "שירות מזון וקמעוני",
          ],
          tag: "נפח גבוה",
        },
        {
          category: "מוצרים מלוחים",
          items: [
            "פילה, נגטס, אצבעות דג — בציפוי",
            "מיוצר מחומר גלם דג שלם",
            "פרופיל תזונתי פרימיום לעומת מוצרים מלוחים קונבנציונליים",
          ],
          tag: "מצרך צרכני",
        },
        {
          category: "פסטה ואטריות",
          items: [
            "פסטה ואטריות מועשרות בדג",
            "עשיר בסידן, חלבון גבוה, אפשרות ללא גלוטן",
            "מזון פונקציונלי לקמעונאות כללית",
          ],
          tag: "מזון פונקציונלי",
        },
        {
          category: "בצק פיצה",
          items: [
            "בצק פיצה מועשר בדג",
            "מוסיף חלבון, אומגה-3 וסידן לפורמט מסה",
            "SKU בעל מיצוב בריאות מובדל",
          ],
          tag: "חדשנות",
        },
        {
          category: "חטיפים",
          items: [
            "חטיפי דג שלם עשירים בחלבון וסידן",
            "צ'יפס, קרקרים, מקלות — תווית נקייה",
            "קטגוריית חטיפים בצמיחה גבוהה",
          ],
          tag: "שולי רווח גבוהים",
        },
        {
          category: "אורז אימיטציה",
          items: [
            "אורז אימיטציה מבוסס דג",
            "דל פחמימות, עשיר בחלבון וסידן",
            "מרכיב פונקציונלי חדשני לצרכנים מודעים לבריאות",
          ],
          tag: "פורמט חדשני",
        },
        {
          category: "פסטה ופיצה ללא גלוטן",
          items: [
            "שוק של 12.9 מיליארד דולר ב-2024, יגיע ל-33 מיליארד עד 2034",
            "פסטה ופיצה מועשרות בדג עם ערך תזונתי עליון",
            "עולה על חלופות צמחיות במידה ניכרת",
          ],
          tag: "הצמיחה המהירה ביותר",
        },
      ],
      note: "כל המוצרים: תוית נקייה · הלאל/כשר · אפשרות ללא גלוטן · עשיר באופן טבעי בסידן, קולגן ואומגה-3.",
      noteLink: "← צרו קשר לפרטים נוספים",
    },
    market: {
      label: "הזדמנות שוק",
      headline1: "הזדמנות של מיליארדי דולרים",
      headline2: "שעדיין לא נוצלה",
      description:
        "דגי ים הם המגזר הדומיננטי בשוק פירות הים העולמי. Ecource נמצאת בצומת בין ביטחון מזון, קיימות וטכנולוגיה — ומכוונת לכל קטגוריית הדגים.",
      metrics: [
        {
          value: "~$205B",
          label: "שוק דגי ים עולמי",
          sub: "2024 · מקור: FAO SOFIA 2024",
        },
        {
          value: "~130 MT",
          label: "ייצור דגים עולמי",
          sub: "דיג טבעי ~60 MT + אקוואקולטורה ~70 MT",
        },
        {
          value: "~50 MT",
          label: "דגים שנזרקים בשנה",
          sub: "פסולת עיבוד לאחר הקציר",
        },
        {
          value: "8–15 MT",
          label: "תמותה בחוות בשנה",
          sub: "הפסד לפני הקציר — ניתן למניעה",
        },
      ],
      driversTitle: "מניעי שוק מרכזיים",
      drivers: [
        "733 מיליון אנשים רעבים כרונית — שיטות קונבנציונליות לא יכולות לסגור את הפער בחלבון",
        "ייצור דגים עולמי עולה על 130 מיליון טון בשנה עם ביקוש גדל",
        'לחץ רגולטורי להפחתת בזבוז דגים בשווקי האיחוד האירופי, ארה"ב ואסיה',
        "ביקוש צרכני ומוסדי לתוית נקייה, מוצרים בר-קיימא ועתירי תזונה",
        "מנדטי ESG ומסגרות קרדיטים פחמניים מתגמלים ביטול מדיד של פסולת בקנה מידה",
      ],
      whyNowTitle: "למה עכשיו?",
      whyNow:
        "ההתכנסות של ביקוש עולמי לחלבון, מנדטי קיימות וקריסת שולי הדיג המסורתי יצרה חלון מושלם לטכנולוגיית עיבוד מהפכנית. Ecource מוכנה לייצור.",
      whyEcourceTitle: "למה Ecource?",
      whyEcource:
        "אנחנו החברה היחידה עם טכנולוגיה בתהליך פטנט המסוגלת לעבד כל מין דג בכל גודל למוצרי מזון פרימיום — ב-5 טון לשעה עם אפס פסולת. זה לא שיפור מצטבר; זהו שינוי מבני באופן שבו דגים מעובדים.",
      callLink: "← קבע שיחת משקיעים",
    },
    team: {
      label: "הצוות",
      headline1: "מומחיות ברמה עולמית ב",
      headline2: "פירות ים, FoodTech ופעולות גלובליות",
      description:
        "Ecource בנויה על ידי צוות בעל ניסיון מעמיק בפעולות דיג עולמיות, הנדסת מזון, עמידה רגולטורית וצמיחה בקנה מידה.",
      members: [
        {
          name: "נועם וינברג שחייק",
          role: 'מייסד שותף ומנכ"ל',
          bio: "25+ שנות ניסיון בפירות ים ואקוואקולטורה עולמיים. בנה וניהל מדגות ומפעלי עיבוד בסין ובישראל. הוביל בהצלחה מספר פרויקטים גלובליים למוצרי דגים חדשניים.",
          initials: "NWS",
        },
        {
          name: "ג'וזף גרין",
          role: 'מייסד שותף ומנמ"כ',
          bio: "15+ שנות ניסיון בצמיחת חברות, גיוס הון ובניית צוותים מצליחים. מפקח על הפעילות היומיומית של Ecource, פיתוח שותפויות והתרחבות בינלאומית.",
          initials: "JG",
        },
        {
          name: "אבנר רוט",
          role: "הנדסה וכימיה",
          bio: "ניסיון נרחב בהנדסת תעשיית המזון. מבטיח שקווי הייצור עומדים בכל הדרישות הטכניות ותקני התעשייה לעיבוד דגים שלמים ממספר מינים בקנה מידה.",
          initials: "AR",
        },
        {
          name: "דורון כהן",
          role: "קומרציאליזציה של מזון",
          bio: "40+ שנות ניסיון במחקר, פיתוח וקומרציאליזציה של מוצרי בשר ודגים. מנהל טכנולוגיה לשעבר ב-Frutarom/IFF ישראל. מוביל אסטרטגיית התאמת מוצר-שוק.",
          initials: "DC",
        },
        {
          name: 'ד"ר עדי טל',
          role: "בטיחות מזון ורגולציות",
          bio: "וטרינר ראשי לשעבר ברשות הבריאות הישראלית. 30+ שנות ניסיון בבטיחות מזון ועמידה רגולטורית גלובלית — קריטי לאישור מפעלים בינלאומי וכניסה לשווקים.",
          initials: "ET",
        },
        {
          name: "משה (בוגי) יעלון",
          role: "מייסד שותף ופיתוח עסקי",
          bio: "שר הביטחון לשעבר של ישראל ורמטכ\"ל צה\"ל לשעבר. רשת ממשלתית עולמית נרחבת המאפשרת כניסה מהירה לשווקים ומעורבות רגולטורית.",
          initials: "MY",
        },
      ],
      note: "תואם עם יעדי פיתוח בר-קיימא של האו\"ם: SDG 14 · SDG 12 · SDG 2",
    },
    contact: {
      label: "פנייה למשקיעים",
      headline1: "בואו נבנה את",
      headline2: "עתיד המזון.",
      description:
        "אנחנו מחפשים באופן פעיל שותפי השקעה המשתפים את חזוננו לתעשיית עיבוד דגים עולמית יעילה וקיימת יותר. בקשו את מצגת המשקיעים שלנו או קבעו שיחה.",
      location: "ישראל · זמין לפגישות עולמיות",
      confidentialityNote:
        "מידע טכנולוגי מפורט, נתונים פיננסיים ותנאי שותפות משותפים תחת NDA הדדי. שלחו את הטופס לקבלת סיכום מנהלים.",
      confidentialityLabel: "הערת סודיות:",
      form: {
        nameLabel: "שם מלא",
        namePlaceholder: "ישראל ישראלי",
        emailLabel: "אימייל",
        emailPlaceholder: "israel@fund.com",
        companyLabel: "חברה / קרן",
        companyPlaceholder: "Acme Ventures",
        roleLabel: "תפקידך",
        rolePlaceholder: "שותף מנהל",
        interestLabel: "עניין השקעה",
        interestDefault: "בחר שלב השקעה",
        interestOptions: [
          { value: "seed", label: "סיד / שלב מוקדם" },
          { value: "series-a", label: "סדרה A" },
          { value: "strategic", label: "שותפות אסטרטגית" },
          { value: "other", label: "אחר / לומד בלבד" },
        ],
        messageLabel: "הודעה",
        messagePlaceholder:
          "ספר לנו על תזת ההשקעה שלך או מה שתרצה לדעת על Ecource...",
        submitText: "שלח הודעה ובקש מצגת משקיעים",
        submittingText: "שולח...",
        privacyNote: "המידע שלך נשמר בסודיות ולא נשותף.",
        successTitle: "ההודעה התקבלה!",
        successDescription: "ניצור איתך קשר תוך 24 שעות.",
        errorTitle: "משהו השתבש",
        errorDescription: "אנא נסה שוב או שלח אלינו אימייל ישירות.",
      },
    },
    about: {
      label: "אודותינו",
      headline: "משנים את עתיד",
      headlineSub: "המזון",
      story: "Ecource Ltd. היא חברה ישראלית עם טכנולוגיה פורצת דרך לעיבוד דגים שלמים בתהליך פטנט — מקבלת דגי ים פתוח ואקוואקולטורה מכל המינים והגדלים, ומנצלת פי שתיים מכל דג למוצרי מזון פרימיום. עיבוד מסורתי משתמש רק ב-35–50% מהדג. Ecource משתמשת ב-100% — מכפילה את תפוקת המזון מכל טון חומר גלם, מקטינה את עלות חומר הגלם האפקטיבית ומבטלת את כל הוצאות סילוק הפסולת.",
      missionTitle: "המשימה שלנו",
      mission: "על ידי שימוש בכל החיה — לצריכה אנושית — תוך הימנעות מבזבוז, זיהום ועלויות. אפס פסולת. אפס תמותה. אפס זיהום. תפוקה של 100%.",
      highlights: [
        { value: "~$205B", label: "שוק דגים" },
        { value: "100%", label: "ניצול תפוקה" },
        { value: "פטנט", label: "בתהליך" },
        { value: "$5M", label: "סיד 2026" },
      ],
    },
    footer: {
      tagline: "טכנולוגיה לעיבוד דג שלם בתהליך פטנט",
      copyright: `© ${new Date().getFullYear()} Ecource Ltd. כל הזכויות שמורות | רשומה בישראל`,
      contact: "צור קשר",
      technology: "טכנולוגיה",
    },
  },

  // ─── CHINESE (Simplified) ──────────────────────────────────────────────────
  zh: {
    nav: {
      problem: "问题",
      solution: "我们的解决方案",
      products: "产品",
      market: "市场",
      team: "团队",
      cta: "索取投资简报",
      contactUs: "联系我们",
    },
    hero: {
      badge: "专利申请中技术 · 以色列创新",
      headline1: "将价值翻倍",
      headline2: "每一条鱼的价值。",
      description:
        "Ecource Ltd. 开发了一项突破性的全鱼加工技术，可接受所有物种和尺寸的野生捕捞和水产养殖鱼类，将每条鱼的双倍数量转化为优质食品。",
      subtext: "在以色列注册 · 寻求战略投资伙伴",
      cta1: "索取投资简报",
      cta2: "了解技术",
      stat1Value: "2×",
      stat1Label: "鱼类产量利用率",
      stat2Value: "100%",
      stat2Label: "物种和尺寸兼容性",
      stat3Value: "专利",
      stat3Label: "申请保护中",
    },
    problem: {
      label: "问题",
      headline: "全球渔业",
      headlineSub: "正在损失一半的价值",
      description:
        "价值超过3000亿美元的全球海鲜产业建立在一个从根本上低效的流程上。颠覆的机会是巨大的。",
      items: [
        {
          title: "大量鱼类浪费",
          description:
            "传统加工方法仅利用每条鱼的40-50%。剩余的生物质——骨头、鱼头、鱼皮、内脏——被丢弃或以极低价值出售。",
        },
        {
          title: "野生种群减少",
          description:
            "全球野生捕捞渔业已达到或超过可持续限度。加工商必须从每次捕捞中提取最大价值才能保持经济可行性。",
        },
        {
          title: "物种和尺寸限制",
          description:
            "现有工业加工设备是为特定物种和尺寸范围设计的，使大量兼捕物和小鱼在商业上不可行。",
        },
        {
          title: "利润压力",
          description:
            "燃料、劳动力和合规成本上升压缩了加工商的利润空间。没有技术驱动的产量改善，盈利能力在结构上面临挑战。",
        },
      ],
      bigStatLabel:
        "每年的鱼类生物质价值被全球传统加工浪费或严重低利用",
    },
    solution: {
      label: "我们的解决方案",
      headline1: "鱼类加工领域的",
      headline2: "突破性技术",
      para1:
        "Ecource 开发了一种专有加工技术，从根本上改变了鱼类加工的经济性。我们的系统不是丢弃每条鱼的50-60%，而是将完整的生物质转化为高价值食品——有效地将每吨加工量的产量翻倍。",
      para2:
        "该技术与物种无关，与尺寸无关，可在全球渔业的整个范围内部署——从挪威三文鱼养殖场到东南亚的手工拖网渔船。",
      linkText: "申请保密技术概述 →",
      features: [
        {
          title: "全鱼加工",
          description:
            "我们的技术处理整条鱼——不仅仅是鱼片。每个部分都被转化为优质产品，生物质零浪费。",
        },
        {
          title: "所有物种和尺寸",
          description:
            "与僵化的工业生产线不同，我们的系统接受任何来源的任何鳍鱼物种——野生捕捞或水产养殖——任何尺寸。",
        },
        {
          title: "2倍产量输出",
          description:
            "通过利用每条鱼的双倍数量，加工商可以在不增加原材料成本的情况下显著提高每吨收入。",
        },
        {
          title: "专利申请保护",
          description:
            "我们的核心加工方法受到待申专利的保护，为Ecource及其合作伙伴提供持久的竞争护城河。",
        },
      ],
      traditional: {
        label: "传统加工",
        items: [
          "每条鱼40-50%产量",
          "物种和尺寸专用设备",
          "大量生物质浪费",
          "大宗商品级输出",
          "薄且依赖体量的利润",
        ],
      },
      ecource: {
        label: "Ecource技术",
        items: [
          "2倍产量 — 全鱼利用",
          "适用于任何物种、任何尺寸",
          "生物质零浪费",
          "优质食品产品",
          "结构性优越利润",
        ],
      },
    },
    products: {
      label: "优质产品",
      headline1: "一条鱼。",
      headline2: "多个优质收入流。",
      description:
        "Ecource的技术释放了每条鱼的全部商业潜力，从单一原材料投入创造多元化、高利润的产品组合。",
      items: [
        {
          category: "优质蛋白质",
          items: ["高品质鱼片", "分份海鲜切块", "增值鱼类产品"],
          tag: "核心收入",
        },
        {
          category: "功能性成分",
          items: ["海洋胶原蛋白肽", "鱼蛋白浓缩物", "富含欧米伽-3的鱼油"],
          tag: "高利润",
        },
        {
          category: "水产养殖饲料",
          items: ["优质鱼粉", "鱼类水解物", "专业水产饲料成分"],
          tag: "量的游戏",
        },
        {
          category: "营养保健品",
          items: ["海洋来源补充剂", "DHA/EPA浓缩物", "生物活性肽提取物"],
          tag: "未来管道",
        },
      ],
      note: "具体产品线和商业协议在NDA保密协议下披露。",
      noteLink: "联系我们了解更多 →",
    },
    market: {
      label: "市场机会",
      headline1: "数十亿美元的",
      headline2: "未开发机会",
      description:
        "全球鱼类加工行业已准备好接受颠覆。Ecource处于食品安全、可持续发展和技术的交汇处。",
      metrics: [
        {
          value: "$3000亿+",
          label: "全球海鲜市场",
          sub: "以3.6%的复合年增长率增长",
        },
        {
          value: "1.8亿",
          label: "年加工吨数",
          sub: "野生捕捞+水产养殖",
        },
        {
          value: "50%",
          label: "平均废弃率",
          sub: "行业范围的低效",
        },
        {
          value: "$900亿+",
          label: "可寻址机会",
          sub: "仅来自产量改善",
        },
      ],
      driversTitle: "主要市场驱动因素",
      drivers: [
        "由人口增长和中产阶级扩张驱动的全球蛋白质需求增长",
        "水产养殖是世界上增长最快的食品生产部门",
        "欧盟、美国和亚洲市场减少鱼类浪费的监管压力",
        "消费者和零售商对可持续来源优质海鲜产品的需求",
        "ESG授权使减少废弃物的技术对机构投资者具有吸引力",
      ],
      whyNowTitle: "为什么是现在？",
      whyNow:
        "全球蛋白质需求、可持续发展授权和传统捕鱼利润崩溃的融合，为颠覆性加工技术创造了完美的窗口。",
      whyEcourceTitle: "为什么选择Ecource？",
      whyEcource:
        "我们是唯一拥有专利申请技术的公司，能够将任何鳍鱼物种和尺寸加工成优质食品——在商业规模上。这不是渐进式改进；这是鱼类加工方式的结构性转变。",
      callLink: "安排投资者通话 →",
    },
    team: {
      label: "团队",
      headline1: "由专家领导",
      headline2: "食品技术与渔业",
      description:
        "Ecource由一支在鱼类加工、食品工程和创业规模运营方面拥有丰富实践经验的团队构建。",
      members: [
        {
          name: "Noam Weinberg Sehayek",
          role: "首席执行官",
          bio: "富有远见的企业家，领导Ecource颠覆全球鱼类加工的使命，在食品技术和业务发展方面拥有深厚专业知识。",
          initials: "NWS",
        },
        {
          name: "Joseph Green",
          role: "首席运营官",
          bio: "运营领导者，负责监督Ecource加工技术在全球市场的日常执行、供应链和规模扩展。",
          initials: "JG",
        },
        {
          name: "Avner Rot",
          role: "首席技术官",
          bio: "Ecource专利申请中全鱼加工系统背后的首席技术架构师，在工业工程和机械设计方面拥有深厚专业知识。",
          initials: "AR",
        },
        {
          name: "Doron Cohen",
          role: "食品技术",
          bio: "食品技术专家，推动Ecource创新加工解决方案的研发和产品开发。",
          initials: "DC",
        },
        {
          name: "Dr. Edy Tal",
          role: "食品安全与法规",
          bio: "食品安全标准和法规合规专家，确保Ecource符合最高国际认证和行业要求。",
          initials: "ET",
        },
        {
          name: "Moshe (Bogie) Ya'alon",
          role: "业务发展",
          bio: "与全球鱼类加工商和水产养殖运营商建立战略合作伙伴关系，充分利用广泛的国际网络。",
          initials: "MY",
        },
      ],
      note: "完整的团队介绍和个人简历可根据要求在NDA协议下提供。",
    },
    contact: {
      label: "投资者联系",
      headline1: "让我们共同构建",
      headline2: "食品的未来。",
      description:
        "我们正在积极寻求与我们共同愿景的投资伙伴，为全球鱼类加工行业带来更高效、更可持续的发展。申请我们的投资简报或安排通话。",
      location: "以色列 · 可进行全球会议",
      confidentialityNote:
        "详细的技术信息、财务数据和合作条款在相互保密协议下共享。提交表格以接收我们的执行摘要。",
      confidentialityLabel: "保密说明：",
      form: {
        nameLabel: "全名",
        namePlaceholder: "张伟",
        emailLabel: "电子邮件",
        emailPlaceholder: "zhang@fund.com",
        companyLabel: "公司/基金",
        companyPlaceholder: "Acme Ventures",
        roleLabel: "您的职位",
        rolePlaceholder: "管理合伙人",
        interestLabel: "投资意向",
        interestDefault: "选择投资阶段",
        interestOptions: [
          { value: "seed", label: "种子/早期阶段" },
          { value: "series-a", label: "A轮融资" },
          { value: "strategic", label: "战略合作" },
          { value: "other", label: "其他/仅了解" },
        ],
        messageLabel: "留言",
        messagePlaceholder: "请告诉我们您的投资理念或您想了解的Ecource信息...",
        submitText: "发送消息并索取投资简报",
        submittingText: "发送中...",
        privacyNote: "您的信息保密处理，不会对外共享。",
        successTitle: "消息已收到！",
        successDescription: "我们将在24小时内与您联系。",
        errorTitle: "出了点问题",
        errorDescription: "请重试或直接发送电子邮件给我们。",
      },
    },
    about: {
      label: "关于我们",
      headline: "改变食品",
      headlineSub: "的未来",
      story: "Ecource Ltd. 在以色列成立，肩负着一个大胆的使命：改变世界处理鱼类的方式。通过开发专利申请中的全鱼加工技术，我们使全球加工商能够从每条鱼中提取更多价值——无论物种或尺寸。",
      missionTitle: "我们的使命",
      mission: "通过实现每条鱼的全面商业利用，在全球范围内消除鱼类浪费——为子孙后代创造更高效、更可持续、更有利可图的海鲜产业。",
      highlights: [
        { value: "以色列", label: "总部" },
        { value: "深科技", label: "类别" },
        { value: "专利", label: "申请中" },
        { value: "$900亿+", label: "机会" },
      ],
    },
    footer: {
      tagline: "专利申请中的全鱼加工技术",
      copyright: `© ${new Date().getFullYear()} Ecource Ltd. 保留所有权利。| 在以色列注册`,
      contact: "联系我们",
      technology: "技术",
    },
  },

  // ─── SPANISH ───────────────────────────────────────────────────────────────
  es: {
    nav: {
      problem: "El Problema",
      solution: "Nuestra Solución",
      products: "Productos",
      market: "Mercado",
      team: "Equipo",
      cta: "Solicitar Presentación",
      contactUs: "Contáctenos",
    },
    hero: {
      badge: "Tecnología con Patente Pendiente · Innovación Israelí",
      headline1: "Duplicando el Valor",
      headline2: "de Cada Pez.",
      description:
        "Ecource Ltd. ha desarrollado una tecnología revolucionaria de procesamiento de peces enteros que acepta peces de captura silvestre y acuicultura de todas las especies y tamaños, convirtiendo el doble de la cantidad de cada pez en productos alimenticios premium.",
      subtext:
        "Registrada en Israel · Buscando socios de inversión estratégicos",
      cta1: "Solicitar Presentación",
      cta2: "Descubrir la Tecnología",
      stat1Value: "2×",
      stat1Label: "Utilización del Rendimiento",
      stat2Value: "100%",
      stat2Label: "Compatibilidad de Especies y Tamaños",
      stat3Value: "Patente",
      stat3Label: "Protección Pendiente",
    },
    problem: {
      label: "El Problema",
      headline: "La Industria Pesquera Global",
      headlineSub: "Está Dejando la Mitad del Valor Atrás",
      description:
        "Una industria pesquera global de más de $300B está construida sobre un proceso fundamentalmente ineficiente. La oportunidad de disrupción es enorme.",
      items: [
        {
          title: "Enorme Desperdicio de Peces",
          description:
            "Los métodos de procesamiento tradicionales utilizan solo el 40-50% de cada pez. La biomasa restante — huesos, cabezas, piel, vísceras — se descarta o se vende a un valor mínimo.",
        },
        {
          title: "Declive de Poblaciones Silvestres",
          description:
            "Las pesquerías de captura silvestre global están en o más allá de los límites sostenibles. Los procesadores deben extraer el máximo valor de cada captura para seguir siendo económicamente viables.",
        },
        {
          title: "Limitaciones de Especie y Tamaño",
          description:
            "El equipo de procesamiento industrial existente está diseñado para especies y rangos de tamaño específicos, dejando volúmenes vastamente inviables de captura incidental y peces pequeños.",
        },
        {
          title: "Presión en los Márgenes",
          description:
            "Los costos crecientes de combustible, mano de obra y cumplimiento comprimen los márgenes de los procesadores. Sin mejoras de rendimiento impulsadas por tecnología, la rentabilidad es estructuralmente desafiante.",
        },
      ],
      bigStatLabel:
        "en valor de biomasa de peces anual es desperdiciado o severamente subutilizado por el procesamiento convencional en todo el mundo",
    },
    solution: {
      label: "Nuestra Solución",
      headline1: "Un Avance en el",
      headline2: "Procesamiento de Peces",
      para1:
        "Ecource ha desarrollado una tecnología de procesamiento propietaria que cambia fundamentalmente la economía del procesamiento de peces. En lugar de descartar el 50-60% de cada pez, nuestro sistema convierte la biomasa completa en productos alimenticios de alto valor, duplicando efectivamente el rendimiento de cada tonelada procesada.",
      para2:
        "La tecnología es agnóstica a las especies e independiente del tamaño, lo que la hace desplegable en todo el espectro de las pesquerías globales, desde las granjas de salmón noruegas hasta los arrastreros artesanales en el Sudeste Asiático.",
      linkText: "Solicitar descripción técnica confidencial →",
      features: [
        {
          title: "Procesamiento de Pez Entero",
          description:
            "Nuestra tecnología procesa el pez completo — no solo filetes. Cada parte se convierte en un producto premium con cero biomasa desperdiciada.",
        },
        {
          title: "Todas las Especies y Tamaños",
          description:
            "A diferencia de las líneas industriales rígidas, nuestro sistema acepta cualquier especie de pez aleta de cualquier fuente — captura silvestre o acuicultura — de cualquier tamaño.",
        },
        {
          title: "Producción 2× de Rendimiento",
          description:
            "Al utilizar el doble de la cantidad de cada pez, los procesadores aumentan dramáticamente los ingresos por tonelada sin aumentar sus costos de materia prima.",
        },
        {
          title: "Protección de Patente Pendiente",
          description:
            "Nuestra metodología de procesamiento central está protegida por una patente pendiente, proporcionando una ventaja competitiva duradera para Ecource y sus socios.",
        },
      ],
      traditional: {
        label: "Procesamiento Tradicional",
        items: [
          "40-50% de rendimiento por pez",
          "Equipo específico para especie y tamaño",
          "Desperdicio significativo de biomasa",
          "Productos de calidad básica",
          "Márgenes delgados y dependientes del volumen",
        ],
      },
      ecource: {
        label: "Tecnología Ecource",
        items: [
          "2× rendimiento — utilización total del pez",
          "Funciona con cualquier especie, cualquier tamaño",
          "Cero desperdicio de biomasa",
          "Productos alimenticios de calidad premium",
          "Márgenes estructuralmente superiores",
        ],
      },
    },
    products: {
      label: "Productos Premium",
      headline1: "Un Pez.",
      headline2: "Múltiples Flujos de Ingresos Premium.",
      description:
        "La tecnología de Ecource desbloquea el pleno potencial comercial de cada pez, creando carteras de productos diversificadas y de alto margen a partir de una sola entrada de materia prima.",
      items: [
        {
          category: "Proteína Premium",
          items: [
            "Filetes de pescado de alta calidad",
            "Cortes de mariscos en porciones",
            "Porciones de pescado de valor agregado",
          ],
          tag: "Ingreso Principal",
        },
        {
          category: "Ingredientes Funcionales",
          items: [
            "Péptidos de colágeno marino",
            "Concentrado de proteína de pescado",
            "Aceites de pescado ricos en Omega-3",
          ],
          tag: "Alto Margen",
        },
        {
          category: "Alimento Acuícola",
          items: [
            "Harina de pescado premium",
            "Hidrolizado de pescado",
            "Ingredientes especiales para acuicultura",
          ],
          tag: "Juego de Volumen",
        },
        {
          category: "Nutracéuticos",
          items: [
            "Suplementos de origen marino",
            "Concentrados de DHA/EPA",
            "Extractos de péptidos bioactivos",
          ],
          tag: "Pipeline Futuro",
        },
      ],
      note: "Las líneas de productos específicas y los acuerdos comerciales se divulgan bajo NDA.",
      noteLink: "Contáctenos para saber más →",
    },
    market: {
      label: "Oportunidad de Mercado",
      headline1: "Una Oportunidad de",
      headline2: "Múltiples Millones Sin Aprovechar",
      description:
        "La industria global de procesamiento de peces está lista para la disrupción. Ecource se encuentra en la intersección de la seguridad alimentaria, la sostenibilidad y la tecnología.",
      metrics: [
        {
          value: "$300B+",
          label: "Mercado Global de Mariscos",
          sub: "Creciendo a 3.6% CAGR",
        },
        {
          value: "180M",
          label: "Toneladas Procesadas Anualmente",
          sub: "Captura silvestre + acuicultura",
        },
        {
          value: "50%",
          label: "Tasa Promedio de Desperdicio",
          sub: "Ineficiencia de toda la industria",
        },
        {
          value: "$90B+",
          label: "Oportunidad Direccionable",
          sub: "Solo de la mejora del rendimiento",
        },
      ],
      driversTitle: "Principales Impulsores del Mercado",
      drivers: [
        "Creciente demanda global de proteínas impulsada por el crecimiento de la población y la expansión de la clase media",
        "La acuicultura es el sector de producción de alimentos de más rápido crecimiento del mundo",
        "Presión regulatoria para reducir el desperdicio de peces en los mercados de la UE, EE.UU. y Asia",
        "Demanda de consumidores y minoristas de productos de mariscos premium de origen sostenible",
        "Los mandatos ESG hacen que la tecnología de reducción de desperdicios sea atractiva para los inversores institucionales",
      ],
      whyNowTitle: "¿Por qué ahora?",
      whyNow:
        "La convergencia de la demanda global de proteínas, los mandatos de sostenibilidad y el colapso de los márgenes tradicionales de pesca ha creado una ventana perfecta para la tecnología de procesamiento disruptivo.",
      whyEcourceTitle: "¿Por qué Ecource?",
      whyEcource:
        "Somos la única empresa con una tecnología con patente pendiente capaz de procesar cualquier especie de pez aleta y tamaño en productos alimenticios premium — a escala comercial. No es una mejora incremental; es un cambio estructural en cómo se procesan los peces.",
      callLink: "Programar una llamada con inversores →",
    },
    team: {
      label: "El Equipo",
      headline1: "Liderado por Expertos en",
      headline2: "Tecnología Alimentaria y Pesca",
      description:
        "Ecource está construida por un equipo con experiencia práctica en procesamiento de peces, ingeniería alimentaria y operaciones a escala de empresa emergente.",
      members: [
        {
          name: "Noam Weinberg Sehayek",
          role: "CEO",
          bio: "Empresario visionario que lidera la misión de Ecource de revolucionar el procesamiento global de peces, con profunda experiencia en tecnología alimentaria y desarrollo de negocios.",
          initials: "NWS",
        },
        {
          name: "Joseph Green",
          role: "COO",
          bio: "Líder operativo que supervisa la ejecución diaria, la cadena de suministro y la escalabilidad global de la tecnología de procesamiento de Ecource.",
          initials: "JG",
        },
        {
          name: "Avner Rot",
          role: "CTO",
          bio: "Arquitecto tecnológico principal detrás del sistema de procesamiento de pez entero con patente pendiente de Ecource, con profunda experiencia en ingeniería industrial.",
          initials: "AR",
        },
        {
          name: "Doron Cohen",
          role: "FoodTech",
          bio: "Especialista en tecnología alimentaria que impulsa la I+D y el desarrollo de productos innovadores de Ecource.",
          initials: "DC",
        },
        {
          name: "Dr. Edy Tal",
          role: "Seguridad Alimentaria y Regulación",
          bio: "Experto en estándares de seguridad alimentaria y cumplimiento normativo, asegurando que Ecource cumpla con las más altas certificaciones internacionales.",
          initials: "ET",
        },
        {
          name: "Moshe (Bogie) Ya'alon",
          role: "Desarrollo de Negocios",
          bio: "Construyendo asociaciones estratégicas con procesadores de peces globales y operadores de acuicultura, aprovechando una extensa red internacional.",
          initials: "MY",
        },
      ],
      note: "Los perfiles completos del equipo y las biografías están disponibles a pedido bajo NDA.",
    },
    contact: {
      label: "Contacto para Inversores",
      headline1: "Construyamos el",
      headline2: "Futuro de los Alimentos.",
      description:
        "Estamos buscando activamente socios de inversión que compartan nuestra visión de una industria global de procesamiento de peces más eficiente y sostenible. Solicite nuestro deck de inversión o programe una llamada.",
      location: "Israel · Disponible para reuniones globales",
      confidentialityNote:
        "La información técnica detallada, los estados financieros y los términos de asociación se comparten bajo un NDA mutuo. Envíe el formulario para recibir nuestro resumen ejecutivo.",
      confidentialityLabel: "Nota de confidencialidad:",
      form: {
        nameLabel: "Nombre Completo",
        namePlaceholder: "Juan García",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "juan@fondo.com",
        companyLabel: "Empresa / Fondo",
        companyPlaceholder: "Acme Ventures",
        roleLabel: "Su Cargo",
        rolePlaceholder: "Socio Director",
        interestLabel: "Interés de Inversión",
        interestDefault: "Seleccione la etapa de inversión",
        interestOptions: [
          { value: "seed", label: "Semilla / Etapa Temprana" },
          { value: "series-a", label: "Serie A" },
          { value: "strategic", label: "Asociación Estratégica" },
          { value: "other", label: "Otro / Solo Aprendiendo" },
        ],
        messageLabel: "Mensaje",
        messagePlaceholder:
          "Cuéntenos sobre su tesis de inversión o lo que le gustaría saber sobre Ecource...",
        submitText: "Enviar Mensaje y Solicitar Presentación",
        submittingText: "Enviando...",
        privacyNote:
          "Su información se mantiene confidencial y nunca se comparte.",
        successTitle: "¡Mensaje recibido!",
        successDescription: "Nos pondremos en contacto dentro de las 24 horas.",
        errorTitle: "Algo salió mal",
        errorDescription:
          "Por favor intente de nuevo o envíenos un correo electrónico directamente.",
      },
    },
    about: {
      label: "Sobre Nosotros",
      headline: "Transformando el",
      headlineSub: "Futuro de los Alimentos",
      story: "Ecource Ltd. fue fundada en Israel con una sola misión audaz: transformar cómo el mundo procesa el pescado. Al desarrollar una tecnología de procesamiento de pez entero con patente pendiente, permitimos a los procesadores de todo el mundo extraer mucho más valor de cada pez, independientemente de la especie o el tamaño.",
      missionTitle: "Nuestra Misión",
      mission: "Eliminar el desperdicio de peces a nivel mundial habilitando la plena utilización comercial de cada pez, creando una industria pesquera más eficiente, sostenible y rentable para las generaciones venideras.",
      highlights: [
        { value: "Israel", label: "Sede" },
        { value: "Deep-Tech", label: "Categoría" },
        { value: "Patente", label: "Pendiente" },
        { value: "$90B+", label: "Oportunidad" },
      ],
    },
    footer: {
      tagline:
        "Tecnología de Procesamiento de Pez Entero con Patente Pendiente",
      copyright: `© ${new Date().getFullYear()} Ecource Ltd. Todos los derechos reservados. | Registrada en Israel`,
      contact: "Contacto",
      technology: "Tecnología",
    },
  },
};

export type Translations = typeof translations.en;
