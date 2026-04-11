export type Lang = "en" | "he" | "zh" | "es" | "fr";

export const translations = {
  en: {
    nav: {
      problem: "The Problem",
      solution: "Our Solution",
      ourTeam: "Our Team",
      products: "Products",
      market: "Market",
      team: "Team",
      cta: "Request Pitch Deck",
      contactUs: "Contact Us",
      media: "Media",
    },
    hero: {
      badge: "Patent-Pending Technology · Israeli Innovation",
      headline1: "A Multi-Billion Dollar",
      headline2: "Untapped Opportunity",
      description:
        "Ecource Ltd. has developed a breakthrough game changer processing technology that accepts all fish species, sizes, and product forms — converting double the quantity of each fish into premium food products.",
      cta1: "Request Pitch Deck",
      cta2: "Discover the Technology",
      stat1Value: "2×",
      stat1Label: "Yield Per Fish",
      stat2Value: "100%",
      stat2Label: "Any Species · Any Size · Any Production Form",
      stat3Value: "40+",
      stat3Label: "Countries Patent Filed",
    },
    problem: {
      label: "The Problem",
      headline: "A Broken Food System",
      headlineSub: "More than half of Every Fish We Produce Goes to Waste",
      description:
        "The world is running short of food — yet conventional food processing discards up to 65% of every fish. This is a structural crisis, not an operational one.",
      items: [
        {
          title: "Seafood Production Is ~50% Inefficient",
          description:
            "Traditional filleting recovers only 35–50% of each fish for human consumption. Bones, skin, head, fins, and viscera — comprising ~50% of the fish, equal to about 60 MT — are discarded, rendered for fishmeal, or used in pet food.",
          sources: [
            { label: "source", url: "https://www.fao.org/flw-in-fish-value-chains/value-chain/processing-storage/processing-plants/en/" },
          ],
        },
        {
          title: "Hunger & Food Scarcity",
          description:
            "733 million people faced chronic hunger in 2023 (FAO — State of Food Security and Nutrition in the World, 2024). By 2050, the world will have 9.7B people. Existing production cannot close the gap with conventional methods — yet we discard enormous volumes of highly nutritious food every single day.",
          sources: [
            { label: "FAO SOFI 2024", url: "https://openknowledge.fao.org/items/ebe19244-9611-443c-a2a6-25cec697b361" },
            { label: "UN Population 2022", url: "https://www.un.org/development/desa/pd/content/world-population-prospects-2022" },
          ],
        },
        {
          title: "Bycatch & Sorting Mortality",
          description:
            "9.1 MT/year of marine fish are discarded as bycatch (FAO — Third Assessment of Global Marine Fisheries Discards, 2019). Fish outside target sizes face >90% mortality after 20–30 minutes out of water — killed and discarded because of an arbitrary size threshold.",
          sources: [
            { label: "FAO 2019", url: "https://www.fao.org/responsible-fishing/resources/detail/en/c/1317018/" },
          ],
        },
        {
          title: "Farm Mortality Before Harvest",
          description:
            "Farmed seafood globally loses 8–15 MT/year pre-harvest to disease, stress, and suboptimal conditions. Norwegian salmon alone: 14–17% mortality before slaughter. These fish die and never reach human consumption.",
          sources: [
            { label: "source", url: "https://www.fishfarmingexpert.com/farmed-salmon-fish-health-mortality-rate/norway-farmed-salmon-mortality-rate-fell-below-15-last-year/2064848" },
          ],
        },
      ],
      bigStatLabel:
        "in annual fish biomass value is wasted or severely underutilized by conventional processing worldwide",
    },
    solution: {
      label: "Our Solution",
      headline1: "A Breakthrough in",
      headline2: "Food Processing",
      para1:
        "Ecource has engineered a proprietary processing technology that fundamentally changes the economics of fish processing. Instead of discarding 50–65% of every fish, our system converts the full biomass into high-value food products — effectively doubling the yield from every tonne processed. The technology is species-agnostic and size-independent, making it deployable across the full spectrum of global fisheries worldwide.",
      para2:
        "Fish is where our story began. Rooted in the founder's 25 years of hands-on experience across the seafood and aquaculture markets, Ecource was built from the inside out — by someone who understood the industry's inefficiencies firsthand and was determined to solve them at their core. As the technology matured and proved itself, its potential became clear far beyond the water: we have since developed and adapted our whole-biomass processing system for Poultry, Beef, and Pork as well — bringing the same zero-waste, maximum-yield transformation to the broader protein industry.",
      linkText: "Request confidential technology overview →",
      features: [
        {
          title: "Whole-Fish Processing",
          description:
            "Our technology processes the entire fish — not just fillets. Every part is converted into a premium product with zero biomass wasted.",
        },
        {
          title: "All Species, Sizes & Product Forms",
          description:
            "Unlike rigid industrial lines, our system accepts any seafood species from any source — wild-capture & aquaculture — at any size, and any product form.",
        },
        {
          title: "2× Yield Output",
          description:
            "By utilizing double the quantity of each fish, processors dramatically increase revenue per tonne without increasing their raw material costs.",
        },
        {
          title: "Patent-Pending Protection",
          description:
            "Our core processing methodology & products are protected by a pending patents, in 40 countries, providing a durable competitive moat for Ecource and its partners.",
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
      sdgNote: "Aligned with UN SDG 14 (Life Below Water) · SDG 12 (Responsible Consumption) · SDG 2 (Zero Hunger)",
    },
    sdg: {
      label: "Sustainability & Impact",
      headline1: "Aligned with the",
      headline2: "UN Sustainable Development Goals",
      description: "Ecource's breakthrough technology directly advances 6 of the 17 UN SDGs — delivering measurable impact for global food security, ocean health, public health, and responsible industrial production.",
      note: "Proudly aligned with the UN 2030 Agenda for Sustainable Development",
      goals: [
        { id: 2, title: "Zero Hunger", tagline: "Doubling fish yield feeds more people with less fishing pressure on the oceans" },
        { id: 3, title: "Good Health & Well-Being", tagline: "Whole-fish utilization preserves bones, skin & collagen — delivering superior omega-3s, minerals, and protein that conventional processing discards" },
        { id: 9, title: "Industry, Innovation & Infrastructure", tagline: "Patent-pending processing technology that transforms the entire seafood industry" },
        { id: 12, title: "Responsible Consumption & Production", tagline: "Near-zero biomass waste — every part of every fish becomes premium food for human consumption" },
        { id: 13, title: "Climate Action", tagline: "Maximizing yield per catch significantly reduces the carbon footprint of protein production" },
        { id: 14, title: "Life Below Water", tagline: "Reducing overfishing pressure by extracting maximum food value from each fish caught" },
      ],
    },
    products: {
      label: "Premium Products",
      headline1: "The Healthiest Food. The Most Affordable Price.",
      headline2: "No Longer a Paradox.",
      description:
        "The parts of every fish that conventional processing discards — bones, skin, organs, frames — previously sold to pet food or simply thrown away — Ecource converts entirely into premium food for human consumption. The result: eight categories of products covering every consumer type, from everyday staples to functional innovations, multiplying revenue opportunities for producers. And because we extract nearly double the food from every ton of raw material, the cost advantage flows directly to consumers — making premium nutrition genuinely price-friendly.",
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
          tag: "Fast Growing",
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
            "The global gluten-free food market reached $12.9B in 2024, projected to $33.6B by 2034 — Ecource's fish-enriched format targets the premium functional-food tier of this fast-growing category. (Source: Precedence Research, 2025)",
            "Fish-enriched pasta and pizza with superior nutritional value",
            "Far surpasses plant-based alternatives",
          ],
          tag: "Fastest Growing",
        },
      ],
      note: "High in protein, calcium, collagen, and omega-3 fatty acids — nutrients naturally present in whole-fish biomass. Nutritional lab data available in due diligence package.",
      note2: "Price friendly / affordable",
      note3: "Kosher & Halal certified",
      noteLink: "",
    },
    market: {
      label: "Market Opportunity",
      headline1: "A Multi-Billion Dollar",
      headline2: "Untapped Opportunity",
      description:
        "Ecource targets the global animal biomass processing industry — a market spanning Seafood, Poultry, Beef, and Pork. Across every protein category, conventional processing discards 35–65% of every animal. Ecource sits at the intersection of food security, sustainability, and technology — unlocking the full value of the biomass that the industry currently throws away.",
      metrics: [
        {
          value: "$250B/Year",
          label: "Untapped Seafood Market",
          sub: "~80MT/Year estimated underutilized biomass · Derived from FAO SOFIA 2024 total production data",
        },
        {
          value: "$120B/Year",
          label: "Untapped Poultry Market",
          sub: "~44MT/Year estimated underutilized biomass · Derived from FAO/OECD 2024 production data",
        },
        {
          value: "$180B/Year",
          label: "Untapped Beef Market",
          sub: "~30MT/Year estimated underutilized biomass · Derived from FAO/OECD 2024 production data",
        },
        {
          value: "$90B/Year",
          label: "Untapped Pork Market",
          sub: "~36MT/Year estimated underutilized biomass · Derived from FAO/OECD 2024 production data",
        },
      ],
      driversTitle: "Why the Whole Biomass Industry Is Ready for Disruption",
      drivers: [
        "733 million people are chronically hungry — conventional processing discards up to 65% of every Seafood, Poultry, Beef, and Pork animal processed",
        "Global animal protein production exceeds 500 MT/year across Seafood, Poultry, Beef, and Pork — with more than half the biomass value lost to waste",
        "Regulatory pressure to eliminate organic waste and reduce emissions is tightening across EU, US, and Asian markets for all protein categories",
        "Consumer and institutional demand for clean-label, nutrient-dense, sustainably produced food is accelerating across all animal protein categories",
        "ESG mandates and carbon credit frameworks reward measurable, large-scale waste elimination — directly rewarding the Ecource model",
      ],
      whyNowTitle: "Why Now?",
      whyNow:
        "The convergence of global protein demand, rising sustainability mandates, and the structural inefficiency of conventional biomass processing across Seafood, Poultry, Beef, and Pork has created a perfect window for disruptive technology. Ecource is production-ready.",
      whyEcourceTitle: "Why Ecource?",
      whyEcource:
        "We are the only company with a patent-pending technology capable of processing any species and size — Seafood, Poultry, Beef, and Pork — into premium food products with 100% biomass utilization and zero waste. This is not an incremental improvement; it is a structural shift in how the world processes animal protein.",
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
          name: "Moshe (Bogie) Ya'alon",
          role: "Co-Founder & Business Dev.",
          bio: "Former Israel Defense Minister and IDF Commander in Chief. Extensive global government network enabling rapid market entry and regulatory engagement.",
          initials: "MY",
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
          name: "Avner Rot",
          role: "Engineering & Chemistry",
          bio: "Extensive experience in food industry engineering. Ensures production lines meet all technical requirements and industry standards for multi-species whole-fish processing at scale.",
          initials: "AR",
        },
      ],
      note: "",
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
      story: "Ecource is built on 20 years of being inside the problem.\n\nGradient Ltd. — our parent company — is the Israeli value-added seafood company founded and led by Noam Weinberg Sehayek. For two decades, we have sourced, processed, and sold premium seafood to customers across the globe. We know every node of the supply chain — the processors, the vessels, the retailers, the margins, and the waste. We watched firsthand as more than half of every fish we worked with was discarded, downgraded, or sold at a fraction of its real nutritional value.\n\nWe didn't theorize about the problem. We lived it. And what we saw wasn't a resource problem — it was a technology failure waiting to be solved.\n\nEcource was founded to solve it — established as a dedicated standalone company with its own team, technology, and focus, backed by the commercial infrastructure and industry relationships that only 20 years in the field can build. The result: a patent-pending whole-fish processing technology that converts 100% of every fish into premium food for human consumption, doubling yield and eliminating waste entirely.\n\nThis is not a startup searching for product-market fit. The market is our backyard. The relationships are already ours. The technology is proven. What we are building now is the bridge between the industry we know better than anyone, and the breakthrough that doubles its value.",
      slogan: "20 years of commercial reality. One technology that changes everything.",
      missionTitle: "Our Mission",
      mission: "By using the entire animal — for human consumption — avoiding waste, pollution, and costs. Zero Waste. Zero Mortality. Zero Pollution. 100% Yield.",
      highlights: [
        { value: "$640B", label: "Total Untapped Market" },
        { value: "100%", label: "Yield Utilization" },
        { value: "Patent", label: "Pending" },
        { value: "$5M", label: "Seed Round 2026" },
      ],
    },
    media: {
      label: "Media Hub",
      headline1: "Proof.",
      headline2: "Not Promises.",
      description: "See Ecource in action — from processing floor to premium product. Real results, real voices, real coverage.",
      videosTitle: "Product & Technology Videos",
      testimonialsTitle: "What Industry Leaders Say",
      newsTitle: "In the News",
      newsLink: "Contact for press inquiries",
      videos: [
        {
          title: "Ecource Technology: Whole-Fish Processing Explained",
          subtitle: "A deep-dive into how our patent-pending process extracts 100% yield from every fish — from raw input to premium output.",
          tag: "Technology",
        },
        {
          title: "From Waste to Plate: The Ecource Story",
          subtitle: "How we're turning the seafood industry's biggest cost center into its greatest profit opportunity.",
          tag: "Company",
        },
        {
          title: "Product Showcase: Fish Burgers & Cutlets",
          subtitle: "Premium texture, superior nutrition — our flagship consumer products made entirely from fish byproducts.",
          tag: "Products",
        },
        {
          title: "Investor Briefing: Market Opportunity",
          subtitle: "An overview of the $350B seafood market and why Ecource is positioned to capture a significant share.",
          tag: "Investor",
        },
      ],
      testimonials: [
        {
          quote: "The combination of cost reduction and premium output in one integrated system is a genuine competitive moat. This is a structural advantage, not a marginal improvement.",
          name: "Tzach Frenkel & Aya Morg",
          role: "Innovalley — The International Innovation Center for Agriculture, Aquaculture, Climate, and Industry",
          initials: "TF",
        },
      ],
      news: [
        {
          title: "Israeli Startup Ecource Aims to Double Seafood Yields with Patent-Pending Technology",
          source: "FoodTech Weekly",
          date: "Feb 2026",
          excerpt: "Ecource Ltd. has developed a whole-fish processing system that converts up to 100% of each fish into premium food products, compared to the industry standard of 35–50%.",
        },
        {
          title: "Zero-Waste Fish Processing: The Next Frontier in Sustainable Aquaculture",
          source: "AquaBusiness",
          date: "Jan 2026",
          excerpt: "With global fish waste exceeding 50 million tons annually, technology startups like Ecource are racing to capture what was previously discarded as cost.",
        },
        {
          title: "Ecource Launches $5M Seed Round to Scale Breakthrough Fish Utilization Technology",
          source: "Israel Tech Pulse",
          date: "Mar 2026",
          excerpt: "The Israeli foodtech company is seeking strategic investment partners to commercialize its patent-pending whole-fish processing platform across global markets.",
        },
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
      ourTeam: "הצוות שלנו",
      media: "מדיה",
    },
    hero: {
      badge: "טכנולוגיה בתהליך פטנט · חדשנות ישראלית",
      headline1: "הזדמנות של מיליארדי דולרים",
      headline2: "שעדיין לא נוצלה",
      description:
        "חברת Ecource פיתחה טכנולוגיית עיבוד פורצת דרך ומשנת כללים, המקבלת את כל המינים והגדלים — וממירה כפל כמות מכל בעל חיים מעובד למוצרי מזון פרימיום.",
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
      sdgNote: "מתואם עם יעדי ה-SDG של האו\"ם: 14 (חיים מתחת למים) · 12 (צריכה אחראית) · 2 (אפס רעב)",
    },
    sdg: {
      label: "קיימות והשפעה",
      headline1: "מתואם עם",
      headline2: "יעדי הפיתוח בר-הקיימא של האו\"ם",
      description: "הטכנולוגיה של Ecource מקדמת ישירות 6 מתוך 17 יעדי ה-SDG של האו\"ם — ומספקת השפעה מדידה על ביטחון תזונתי עולמי, בריאות הציבור, בריאות האוקיינוסים וייצור תעשייתי אחראי.",
      note: "מחויבים לסדר יום 2030 של האו\"ם לפיתוח בר-קיימא",
      goals: [
        { id: 2, title: "אפס רעב", tagline: "הכפלת תפוקת הדגים מאכילה יותר אנשים עם פחות לחץ דייג על האוקיינוסים" },
        { id: 3, title: "בריאות טובה ורווחה", tagline: "שימוש בדג השלם שומר על עצמות, עור וקולגן — מספק אומגה-3, מינרלים וחלבון שעיבוד קונבנציונלי זורק לפח" },
        { id: 9, title: "תעשייה, חדשנות ותשתיות", tagline: "טכנולוגיית עיבוד עם פטנט בתהליך שמשנה את כל תעשיית המזון הימי" },
        { id: 12, title: "צריכה וייצור אחראיים", tagline: "כמעט אפס פסולת ביומסה — כל חלק מכל דג הופך למזון איכותי לאדם" },
        { id: 13, title: "פעולה למען האקלים", tagline: "מיקסום תפוקה לכל צייד מפחית משמעותית את טביעת הרגל הפחמנית של ייצור חלבון" },
        { id: 14, title: "חיים מתחת למים", tagline: "הפחתת לחץ הדייג העודף על ידי חילוץ ערך מזון מקסימלי מכל דג שנדוד" },
      ],
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
      note2: "ידידותי למחיר / סביר",
      note3: "כשר והלאל מאושר",
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
          value: "~$102B",
          label: "פוטנציאל בלתי מנוצל — דגי ים",
          sub: "2024 · מקור: FAO SOFIA 2024",
        },
        {
          value: "~$82B",
          label: "פוטנציאל בלתי מנוצל — עוף",
          sub: "2024 · מקור: FAO / OECD",
        },
        {
          value: "~$152B",
          label: "פוטנציאל בלתי מנוצל — חזיר",
          sub: "2024 · מקור: FAO / OECD",
        },
        {
          value: "$180B",
          label: "פוטנציאל בלתי מנוצל — בקר",
          sub: "2024 · מקור: FAO / OECD",
        },
      ],
      driversTitle: "מניעי שוק מרכזיים",
      drivers: [
        "733 מיליון אנשים רעבים כרונית — שיטות קונבנציונליות לא יכולות לסגור את הפער בחלבון",
        "ייצור דגים עולמי עולה על 180 מיליון טון בשנה עם ביקוש גדל",
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
      story: "Ecource נולדה מתוך תובנה שהתגבשה ב-Gradient Ltd. — חברת מזון ים ישראלית לתוספת ערך שייסד וניהל נועם וינברג שחאייק. בעבודה צמודה עם מעבדים בכל הענף, נועם ראה בעיניו כמה ערך נזרק עם כל דייג — והבין שבזבוז בסדר גודל כזה אינו בעיית משאבים. זוהי כישלון טכנולוגי הממתין לפתרון.\n\nבמקום לפתח את הפתרון כיוזמה צדדית, נועם קיבל את ההחלטה המכוונת לייסד את Ecource כחברה עצמאית ייעודית — וגיבש צוות של מומחים מנוסים בטכנולוגיית מזון, אקוואקולטורה ושווקים גלובליים. התוצאה: טכנולוגיית עיבוד דגים שלמים עם פטנט בתהליך, שממירה 100% מכל דג למזון פרימיום לצריכה אנושית, מכפילה את התפוקה ומבטלת את הפסולת לחלוטין.",
      slogan: "The future of food is not producing more animals — it is respecting every gram of the ones we already harvest",
      missionTitle: "המשימה שלנו",
      mission: "על ידי שימוש בכל החיה — לצריכה אנושית — תוך הימנעות מבזבוז, זיהום ועלויות. אפס פסולת. אפס תמותה. אפס זיהום. תפוקה של 100%.",
      highlights: [
        { value: "~$350B", label: "שוק דגים" },
        { value: "100%", label: "ניצול תפוקה" },
        { value: "פטנט", label: "בתהליך" },
        { value: "$5M", label: "סיד 2026" },
      ],
    },
    media: {
      label: "מרכז מדיה",
      headline1: "הוכחה.",
      headline2: "לא הבטחות.",
      description: "ראו את Ecource בפעולה — מרצפת הייצור ועד המוצר הפרימיום. תוצאות אמיתיות, קולות אמיתיים, סיקור אמיתי.",
      videosTitle: "סרטוני מוצר וטכנולוגיה",
      testimonialsTitle: "מה אומרים מובילי התעשייה",
      newsTitle: "בתקשורת",
      newsLink: "צרו קשר לפניות עיתונות",
      videos: [
        {
          title: "טכנולוגיית Ecource: עיבוד דג שלם — הסבר מלא",
          subtitle: "צלילה לעומק: כיצד תהליך הפטנט שלנו מחלץ 100% תפוקה מכל דג — מהחומר הגלם ועד המוצר הסופי.",
          tag: "טכנולוגיה",
        },
        {
          title: "מפסולת לצלחת: סיפור Ecource",
          subtitle: "כיצד אנחנו הופכים את מרכז העלות הגדול ביותר של תעשיית הדיג להזדמנות הרווח הגדולה ביותר שלה.",
          tag: "חברה",
        },
        {
          title: "ויטרינת מוצרים: בורגרים וצ'ופס דג",
          subtitle: "מרקם פרימיום, תזונה עדיפה — מוצרי הדגל שלנו עשויים כולם מחומרי גלם של דג.",
          tag: "מוצרים",
        },
        {
          title: "הצגה למשקיעים: הזדמנות השוק",
          subtitle: "סקירת שוק הדגים בשווי $350B וכיצד Ecource ממוקמת לתפוס נתח משמעותי.",
          tag: "משקיעים",
        },
      ],
      testimonials: [
        {
          quote: "הגישה של Ecource לעיבוד דגים ללא פסולת היא שונה מכל דבר שראינו. מספרי התפוקה יוצאי דופן ואיכות המוצר מדברת בעד עצמה.",
          name: "ד\"ר רן אזולאי",
          role: "יועץ טכנולוגיית מזון",
          initials: "RA",
        },
        {
          quote: "השילוב של הפחתת עלויות ותפוקה פרימיום במערכת אחת משולבת הוא יתרון תחרותי אמיתי. זה יתרון מבני, לא שיפור שולי.",
          name: "יעל בן-דוד",
          role: "שותפה, השקעות אימפקט",
          initials: "YB",
        },
        {
          quote: "הערכנו עשרות חידושים בתחום הדיג. Ecource בולטת כי הכלכלה עובדת בקנה מידה — לא רק במעבדה.",
          name: "מיכאל שטרן",
          role: "אנליסט בכיר, FoodTech Capital",
          initials: "MS",
        },
      ],
      news: [
        {
          title: "סטארטאפ ישראלי Ecource שואף להכפיל תפוקות דגים עם טכנולוגיה בתהליך פטנט",
          source: "FoodTech Weekly",
          date: "פבר׳ 2026",
          excerpt: "Ecource Ltd. פיתחה מערכת עיבוד דגים שלמה שממירה עד 100% מכל דג למוצרי מזון פרימיום, לעומת תקן התעשייה של 35–50%.",
        },
        {
          title: "עיבוד דגים ללא פסולת: הגבול הבא בדיג בר-קיימא",
          source: "AquaBusiness",
          date: "ינו׳ 2026",
          excerpt: "עם פסולת דגים עולמית של מעל 50 מיליון טון בשנה, חברות סטארטאפ כמו Ecource רצות לתפוס את מה שנזרק בעבר כעלות.",
        },
        {
          title: "Ecource משיקה סבב זרע של $5M להרחבת טכנולוגיית ניצול הדגים פורצת הדרך",
          source: "Israel Tech Pulse",
          date: "מרץ 2026",
          excerpt: "חברת הפודטק הישראלית מחפשת שותפי השקעה אסטרטגיים למסחור פלטפורמת עיבוד הדגים השלמה בשווקים גלובליים.",
        },
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
      ourTeam: "我们的团队",
      media: "媒体",
    },
    hero: {
      badge: "专利申请中技术 · 以色列创新",
      headline1: "数十亿美元的",
      headline2: "未开发机会",
      description:
        "Ecource Ltd. 开发了一项突破性的颠覆性加工技术，适用于所有物种和尺寸——将每种加工动物的双倍数量转化为优质食品。",
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
      sdgNote: "符合联合国可持续发展目标：SDG 14（水下生命）· SDG 12（负责任消费）· SDG 2（零饥饿）",
    },
    sdg: {
      label: "可持续发展与影响",
      headline1: "与",
      headline2: "联合国可持续发展目标保持一致",
      description: "Ecource的突破性技术直接推动17个联合国可持续发展目标中的6个——为全球粮食安全、公共健康、海洋健康和负责任工业生产带来可衡量的影响。",
      note: "全力支持联合国2030年可持续发展议程",
      goals: [
        { id: 2, title: "零饥饿", tagline: "将鱼类产量翻倍，以更少的捕鱼压力养活更多人口" },
        { id: 3, title: "良好健康与福祉", tagline: "全鱼利用保留骨骼、皮肤和胶原蛋白——提供传统加工丢弃的优质欧米伽3、矿物质和蛋白质" },
        { id: 9, title: "产业、创新和基础设施", tagline: "专利待审的加工技术，正在彻底变革整个海鲜产业" },
        { id: 12, title: "负责任消费与生产", tagline: "近零生物质浪费——每条鱼的每个部分都成为优质人类食品" },
        { id: 13, title: "气候行动", tagline: "最大化每次捕获的产量，显著降低蛋白质生产的碳足迹" },
        { id: 14, title: "水下生命", tagline: "通过从每条捕获的鱼中提取最大食物价值来减少过度捕捞压力" },
      ],
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
      note2: "价格亲民/实惠",
      note3: "清真和犹太洁食认证",
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
          value: "~$102B",
          label: "未开发鳍鱼市场",
          sub: "2024 · 来源：FAO SOFIA 2024",
        },
        {
          value: "~$82B",
          label: "未开发家禽市场",
          sub: "2024 · 来源：FAO / OECD",
        },
        {
          value: "~$152B",
          label: "未开发猪肉市场",
          sub: "2024 · 来源：FAO / OECD",
        },
        {
          value: "$180B",
          label: "未开发牛肉市场",
          sub: "2024 · 来源：FAO / OECD",
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
      story: "Ecource的诞生源于在Gradient Ltd.磨砺出的洞见——这是一家由Noam Weinberg Sehayek创立并领导的以色列增值海产品公司。在与业内加工商的密切合作中，Noam亲眼目睹了每次捕捞中被丢弃的巨大价值，并深刻认识到：这种规模的浪费不是资源问题，而是等待解决的技术失败。\n\n与其将解决方案作为副业来推进，Noam做出了深思熟虑的决定，将Ecource创立为一家专注的独立公司——召集了一支由食品技术、水产养殖和全球市场领域的资深专家组成的团队。成果：一项专利申请中的全鱼加工技术，将每条鱼的100%转化为优质人类食品，产量翻倍，完全消除浪费。",
      slogan: "The future of food is not producing more animals — it is respecting every gram of the ones we already harvest",
      missionTitle: "我们的使命",
      mission: "通过实现每条鱼的全面商业利用，在全球范围内消除鱼类浪费——为子孙后代创造更高效、更可持续、更有利可图的海鲜产业。",
      highlights: [
        { value: "以色列", label: "总部" },
        { value: "深科技", label: "类别" },
        { value: "专利", label: "申请中" },
        { value: "$900亿+", label: "机会" },
      ],
    },
    media: {
      label: "媒体中心",
      headline1: "用事实说话，",
      headline2: "而非承诺。",
      description: "观看 Ecource 的实际运作——从加工车间到优质产品。真实成果、真实声音、真实报道。",
      videosTitle: "产品与技术视频",
      testimonialsTitle: "行业领袖的评价",
      newsTitle: "媒体报道",
      newsLink: "新闻咨询请联系我们",
      videos: [
        { title: "Ecource 技术：全鱼加工解析", subtitle: "深入了解我们的专利申请流程如何从每条鱼中提取100%产量。", tag: "技术" },
        { title: "从废料到餐桌：Ecource 的故事", subtitle: "我们如何将海鲜行业最大的成本中心变成最大的利润机会。", tag: "公司" },
        { title: "产品展示：鱼汉堡和鱼排", subtitle: "优质口感，卓越营养——我们的旗舰消费产品。", tag: "产品" },
        { title: "投资人简报：市场机遇", subtitle: "2050亿美元鱼类市场概览及 Ecource 的市场定位。", tag: "投资" },
      ],
      testimonials: [
        { quote: "Ecource 的零废料鱼类加工方法是我们从未见过的。产量数据非凡，产品质量不言而喻。", name: "阮·阿苏莱博士", role: "食品技术顾问", initials: "RA" },
        { quote: "在一个综合系统中同时降低成本和提升优质产量，是真正的竞争护城河——结构性优势。", name: "雅埃尔·本-大卫", role: "影响力投资合伙人", initials: "YB" },
        { quote: "我们评估了数十项农食创新。Ecource 脱颖而出，因为其经济模型在规模化时依然成立。", name: "迈克尔·斯特恩", role: "FoodTech Capital 高级分析师", initials: "MS" },
      ],
      news: [
        { title: "以色列初创公司 Ecource 凭借专利申请技术旨在将海鲜产量翻倍", source: "FoodTech Weekly", date: "2026年2月", excerpt: "Ecource Ltd. 开发了一种全鱼加工系统，可将每条鱼的100%转化为优质食品，而行业标准仅为35–50%。" },
        { title: "零废料鱼类加工：可持续水产养殖的下一个前沿", source: "AquaBusiness", date: "2026年1月", excerpt: "全球鱼类废料超过5000万吨，像 Ecource 这样的科技初创公司正在争相将过去被丢弃的资源变为价值。" },
        { title: "Ecource 启动500万美元种子轮以扩展突破性鱼类利用技术", source: "Israel Tech Pulse", date: "2026年3月", excerpt: "这家以色列食品科技公司正在寻求战略投资伙伴，以在全球市场商业化其专利申请全鱼加工平台。" },
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
      ourTeam: "Nuestro Equipo",
      media: "Medios",
    },
    hero: {
      badge: "Tecnología con Patente Pendiente · Innovación Israelí",
      headline1: "Una Oportunidad de",
      headline2: "Múltiples Millones Sin Aprovechar",
      description:
        "Ecource Ltd. ha desarrollado una tecnología de procesamiento revolucionaria y disruptiva que acepta todas las especies y tamaños — convirtiendo el doble de la cantidad de cada animal procesado en productos alimenticios premium.",
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
      sdgNote: "Alineado con los ODS de la ONU: ODS 14 (Vida Submarina) · ODS 12 (Consumo Responsable) · ODS 2 (Hambre Cero)",
    },
    sdg: {
      label: "Sostenibilidad e Impacto",
      headline1: "Alineado con los",
      headline2: "Objetivos de Desarrollo Sostenible de la ONU",
      description: "La tecnología revolucionaria de Ecource impulsa directamente 6 de los 17 ODS de la ONU — generando impacto medible en la seguridad alimentaria global, la salud pública, la salud de los océanos y la producción industrial responsable.",
      note: "Orgullosamente alineado con la Agenda 2030 de la ONU para el Desarrollo Sostenible",
      goals: [
        { id: 2, title: "Hambre Cero", tagline: "Duplicar el rendimiento del pescado alimenta a más personas con menos presión pesquera sobre los océanos" },
        { id: 3, title: "Salud y Bienestar", tagline: "El aprovechamiento integral del pescado conserva huesos, piel y colágeno — aportando omega-3, minerales y proteínas que el procesamiento convencional descarta" },
        { id: 9, title: "Industria, Innovación e Infraestructura", tagline: "Tecnología de procesamiento con patente pendiente que transforma toda la industria del marisco" },
        { id: 12, title: "Producción y Consumo Responsables", tagline: "Residuos de biomasa casi nulos — cada parte de cada pescado se convierte en alimento humano premium" },
        { id: 13, title: "Acción por el Clima", tagline: "Maximizar el rendimiento por captura reduce significativamente la huella de carbono de la producción de proteínas" },
        { id: 14, title: "Vida Submarina", tagline: "Reducir la presión de la pesca excesiva extrayendo el máximo valor alimentario de cada pez capturado" },
      ],
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
      note2: "Precio accesible / asequible",
      note3: "Certificado Kosher y Halal",
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
          value: "~$102B",
          label: "Mercado Piscícola Sin Explotar",
          sub: "2024 · Fuente: FAO SOFIA 2024",
        },
        {
          value: "~$82B",
          label: "Mercado Avícola Sin Explotar",
          sub: "2024 · Fuente: FAO / OECD",
        },
        {
          value: "~$152B",
          label: "Mercado Porcino Sin Explotar",
          sub: "2024 · Fuente: FAO / OECD",
        },
        {
          value: "$180B",
          label: "Mercado Bovino Sin Explotar",
          sub: "2024 · Fuente: FAO / OECD",
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
      story: "Ecource nació de una visión forjada en Gradient Ltd. — la empresa israelí de valor añadido en productos del mar fundada y liderada por Noam Weinberg Sehayek. Trabajando estrechamente con procesadores de toda la industria, Noam fue testigo directo de cuánto valor se desperdiciaba con cada captura — y reconoció que el desperdicio a esa escala no es un problema de recursos. Es un fallo tecnológico esperando ser resuelto.\n\nEn lugar de desarrollar la solución como un proyecto secundario, Noam tomó la decisión deliberada de fundar Ecource como una empresa independiente y dedicada — reuniendo un equipo de expertos con amplia experiencia en tecnología alimentaria, acuicultura y mercados globales. El resultado: una tecnología de procesamiento de pez entero con patente pendiente que convierte el 100% de cada pez en alimento humano premium, duplicando el rendimiento y eliminando el desperdicio por completo.",
      slogan: "The future of food is not producing more animals — it is respecting every gram of the ones we already harvest",
      missionTitle: "Nuestra Misión",
      mission: "Eliminar el desperdicio de peces a nivel mundial habilitando la plena utilización comercial de cada pez, creando una industria pesquera más eficiente, sostenible y rentable para las generaciones venideras.",
      highlights: [
        { value: "Israel", label: "Sede" },
        { value: "Deep-Tech", label: "Categoría" },
        { value: "Patente", label: "Pendiente" },
        { value: "$90B+", label: "Oportunidad" },
      ],
    },
    media: {
      label: "Centro de Medios",
      headline1: "Pruebas.",
      headline2: "No promesas.",
      description: "Vea Ecource en acción — desde la planta de procesamiento hasta el producto premium. Resultados reales, voces reales, cobertura real.",
      videosTitle: "Videos de Producto y Tecnología",
      testimonialsTitle: "Lo que dicen los líderes de la industria",
      newsTitle: "En las noticias",
      newsLink: "Contáctenos para consultas de prensa",
      videos: [
        { title: "Tecnología Ecource: Procesamiento de pez entero explicado", subtitle: "Una inmersión profunda en cómo nuestro proceso de patente pendiente extrae rendimiento del 100% de cada pez.", tag: "Tecnología" },
        { title: "De desperdicio a plato: La historia de Ecource", subtitle: "Cómo estamos convirtiendo el mayor centro de costos de la industria pesquera en su mayor oportunidad de beneficio.", tag: "Empresa" },
        { title: "Presentación de productos: Hamburguesas y filetes de pescado", subtitle: "Textura premium, nutrición superior — nuestros productos insignia de consumo.", tag: "Productos" },
        { title: "Presentación para inversores: Oportunidad de mercado", subtitle: "Una visión general del mercado de pescado de $350B y por qué Ecource está posicionada para capturar una participación significativa.", tag: "Inversores" },
      ],
      testimonials: [
        { quote: "El enfoque de Ecource para el procesamiento de pescado sin desperdicio es diferente a todo lo que hemos visto. Los números de rendimiento son extraordinarios y la calidad del producto habla por sí misma.", name: "Dr. Ran Azulay", role: "Asesor de Tecnología Alimentaria", initials: "RA" },
        { quote: "La combinación de reducción de costos y producción premium en un sistema integrado es una ventaja competitiva genuina. Es una ventaja estructural, no una mejora marginal.", name: "Yael Ben-David", role: "Socia de Inversión de Impacto", initials: "YB" },
        { quote: "Hemos evaluado docenas de innovaciones agro-alimentarias. Ecource destaca porque la economía funciona a escala, no solo en el laboratorio.", name: "Michael Stern", role: "Analista Senior, FoodTech Capital", initials: "MS" },
      ],
      news: [
        { title: "La startup israelí Ecource aspira a duplicar el rendimiento de mariscos con tecnología de patente pendiente", source: "FoodTech Weekly", date: "Feb 2026", excerpt: "Ecource Ltd. ha desarrollado un sistema de procesamiento de pez entero que convierte hasta el 100% de cada pez en productos alimenticios premium, frente al estándar del sector del 35-50%." },
        { title: "Procesamiento de pescado sin desperdicio: La próxima frontera en acuicultura sostenible", source: "AquaBusiness", date: "Ene 2026", excerpt: "Con el desperdicio global de pescado superando los 50 millones de toneladas anuales, las startups tecnológicas como Ecource compiten por capturar lo que antes se desechaba como costo." },
        { title: "Ecource lanza una ronda semilla de $5M para escalar su tecnología innovadora de utilización de pescado", source: "Israel Tech Pulse", date: "Mar 2026", excerpt: "La empresa israelí de foodtech busca socios inversores estratégicos para comercializar su plataforma de procesamiento de pez entero en mercados globales." },
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

  // ─── FRENCH ────────────────────────────────────────────────────────────────
  fr: {
    nav: {
      problem: "Le Problème",
      solution: "Notre Solution",
      products: "Produits",
      market: "Marché",
      team: "Équipe",
      cta: "Demander le Pitch Deck",
      contactUs: "Nous Contacter",
      ourTeam: "Notre Équipe",
      media: "Médias",
    },
    hero: {
      badge: "Technologie en cours de brevet · Innovation israélienne",
      headline1: "Une Opportunité de",
      headline2: "Plusieurs Milliards Inexploitée",
      description:
        "Ecource Ltd. a développé une technologie de traitement révolutionnaire et disruptive qui accepte toutes les espèces et tailles — convertissant deux fois la quantité de chaque animal traité en produits alimentaires premium.",
      cta1: "Demander le Pitch Deck",
      cta2: "Découvrir la Technologie",
      stat1Value: "2×",
      stat1Label: "Utilisation du Rendement",
      stat2Value: "100%",
      stat2Label: "Compatibilité Espèces & Tailles",
      stat3Value: "Brevet",
      stat3Label: "En Cours de Dépôt",
    },
    problem: {
      label: "Le Problème",
      headline: "Un Système Alimentaire Défaillant",
      headlineSub: "La Moitié de Chaque Animal Produit Est Gaspillée",
      description:
        "Le monde manque de nourriture — pourtant le traitement conventionnel des fruits de mer rejette jusqu'à 65 % de chaque poisson. Il s'agit d'une crise structurelle, pas opérationnelle.",
      items: [
        {
          title: "La Production Seafood Est Inefficace à ~50 %",
          description:
            "Le filetage traditionnel ne récupère que 35 à 50 % de chaque poisson pour la consommation humaine. Les arêtes, la peau, la tête, les nageoires et les viscères — représentant ~50 % du poisson, soit environ 60 MT — sont jetés, transformés en farine de poisson ou utilisés en alimentation animale.",
        },
        {
          title: "Faim & Pénurie Alimentaire",
          description:
            "733 millions de personnes souffrent de faim chronique (FAO 2024). D'ici 2050, le monde comptera 9,7 milliards de personnes. La production actuelle ne peut pas combler le déficit protéique avec des méthodes conventionnelles — pourtant nous jetons chaque jour d'énormes volumes d'aliments très nutritifs.",
        },
        {
          title: "Prises Accessoires & Mortalité au Tri",
          description:
            "9,1 MT/an de poissons marins sont rejetés comme prises accessoires (FAO 2024). Les poissons hors taille cible font face à une mortalité >90 % après 20 à 30 minutes hors de l'eau — tués et rejetés en raison d'un seuil de taille arbitraire.",
        },
        {
          title: "Mortalité en Élevage Avant Récolte",
          description:
            "Les poissons d'élevage dans le monde perdent 8 à 15 MT/an avant récolte à cause de maladies, du stress et de conditions sous-optimales. Le saumon norvégien seul : 15 à 20 % de mortalité avant l'abattage. Ces poissons meurent sans jamais atteindre la consommation humaine.",
        },
      ],
      bigStatLabel:
        "de valeur annuelle de biomasse halieutique est gaspillée ou fortement sous-utilisée par le traitement conventionnel dans le monde",
    },
    solution: {
      label: "Notre Solution",
      headline1: "Une Percée dans le",
      headline2: "Traitement du Poisson",
      para1:
        "Ecource a développé une technologie de traitement propriétaire qui change fondamentalement l'économie du traitement du poisson. Au lieu de rejeter 50 à 60 % de chaque poisson, notre système convertit l'intégralité de la biomasse en produits alimentaires à haute valeur — doublant effectivement le rendement de chaque tonne traitée.",
      para2:
        "La technologie est indépendante de l'espèce et de la taille, ce qui la rend déployable dans tout le spectre des pêcheries mondiales — des fermes saumonières norvégiennes aux chalutiers artisanaux d'Asie du Sud-Est.",
      linkText: "Demander un aperçu technologique confidentiel →",
      features: [
        {
          title: "Traitement du Poisson Entier",
          description:
            "Notre technologie traite le poisson entier — pas seulement les filets. Chaque partie est convertie en un produit premium sans perte de biomasse.",
        },
        {
          title: "Toutes Espèces & Toutes Tailles",
          description:
            "Contrairement aux lignes industrielles rigides, notre système accepte n'importe quelle espèce de poisson de n'importe quelle source — pêche sauvage ou aquaculture — à n'importe quelle taille.",
        },
        {
          title: "Rendement 2×",
          description:
            "En utilisant deux fois la quantité de chaque poisson, les transformateurs augmentent considérablement leurs revenus par tonne sans augmenter les coûts des matières premières.",
        },
        {
          title: "Protection par Brevet en Cours",
          description:
            "Notre méthodologie de traitement est protégée par un brevet en cours de dépôt, offrant un avantage concurrentiel durable à Ecource et à ses partenaires.",
        },
      ],
      traditional: {
        label: "Traitement Traditionnel",
        items: [
          "40 à 50 % de rendement par poisson",
          "Équipements spécifiques à l'espèce et à la taille",
          "Perte significative de biomasse",
          "Produits de qualité standard",
          "Marges faibles et dépendantes du volume",
        ],
      },
      ecource: {
        label: "Technologie Ecource",
        items: [
          "Rendement 2× — utilisation totale du poisson",
          "Fonctionne avec n'importe quelle espèce, n'importe quelle taille",
          "Zéro perte de biomasse",
          "Produits alimentaires de qualité premium",
          "Marges structurellement supérieures",
        ],
      },
      sdgNote: "Aligné sur les ODD de l'ONU : ODD 14 (Vie aquatique) · ODD 12 (Consommation responsable) · ODD 2 (Faim zéro)",
    },
    sdg: {
      label: "Durabilité & Impact",
      headline1: "Aligné sur les",
      headline2: "Objectifs de Développement Durable de l'ONU",
      description: "La technologie révolutionnaire d'Ecource fait directement progresser 6 des 17 ODD de l'ONU — générant un impact mesurable sur la sécurité alimentaire mondiale, la santé publique, la santé des océans et la production industrielle responsable.",
      note: "Fièrement aligné sur l'Agenda 2030 de l'ONU pour le développement durable",
      goals: [
        { id: 2, title: "Faim Zéro", tagline: "Doubler le rendement du poisson nourrit plus de personnes avec moins de pression de pêche sur les océans" },
        { id: 3, title: "Bonne Santé et Bien-Être", tagline: "L'utilisation du poisson entier préserve os, peau et collagène — apportant des oméga-3, minéraux et protéines que le traitement conventionnel jette" },
        { id: 9, title: "Industrie, Innovation et Infrastructure", tagline: "Technologie de traitement à brevet en attente qui transforme toute l'industrie des fruits de mer" },
        { id: 12, title: "Consommation et Production Responsables", tagline: "Déchets de biomasse quasi nuls — chaque partie de chaque poisson devient un aliment humain premium" },
        { id: 13, title: "Lutte Contre les Changements Climatiques", tagline: "Maximiser le rendement par prise réduit considérablement l'empreinte carbone de la production de protéines" },
        { id: 14, title: "Vie Aquatique", tagline: "Réduire la pression de la surpêche en extrayant la valeur alimentaire maximale de chaque poisson pêché" },
      ],
    },
    products: {
      label: "Produits Premium",
      headline1: "Une Seule Entrée Poisson Entier.",
      headline2: "Huit Catégories de Produits Premium.",
      description:
        "100 % de chaque poisson devient un aliment de qualité humaine premium — clean label, options halal/casher, sans gluten, naturellement riche en calcium, collagène & oméga-3. Des prix nettement inférieurs aux alternatives conventionnelles.",
      items: [
        {
          category: "Croquettes de Poisson",
          items: [
            "Croquettes naturelles premium de poisson entier",
            "Finement traité avec arêtes, peau & tête",
            "Riche en protéines · Clean label · SKUs retail 140–175g",
          ],
          tag: "Produit Phare",
        },
        {
          category: "Burgers de Poisson",
          items: [
            "Galettes de poisson entier à texture et densité nutritionnelle supérieures",
            "Formats prêts-à-cuire & prêts-à-manger",
            "Restauration collective & retail",
          ],
          tag: "Grand Volume",
        },
        {
          category: "Produits Panés",
          items: [
            "Filets panés, nuggets, bâtonnets de poisson",
            "Produits à partir de poisson entier",
            "Profil nutritionnel premium vs. poisson pané conventionnel",
          ],
          tag: "Produit Grand Public",
        },
        {
          category: "Pâtes & Nouilles",
          items: [
            "Pâtes et nouilles enrichies au poisson",
            "Riche en calcium, haute protéine, option sans gluten",
            "Aliment fonctionnel pour le retail grand public",
          ],
          tag: "Aliment Fonctionnel",
        },
        {
          category: "Pâte à Pizza",
          items: [
            "Pâte à pizza enrichie au poisson",
            "Protéines, oméga-3 & calcium ajoutés dans un format grand marché",
            "SKU santé différencié",
          ],
          tag: "Innovation",
        },
        {
          category: "Snacks",
          items: [
            "Snacks de poisson entier riches en protéines et calcium",
            "Chips, crackers, bâtonnets — clean label",
            "Catégorie snacking à forte croissance",
          ],
          tag: "Haute Marge",
        },
        {
          category: "Riz Imitation",
          items: [
            "Riz imitation à base de poisson",
            "Faible en glucides, riche en protéines, riche en calcium",
            "Ingrédient fonctionnel novateur pour les consommateurs soucieux de leur santé",
          ],
          tag: "Format Novateur",
        },
        {
          category: "Pâtes & Pizza Sans Gluten",
          items: [
            "Marché de 12,9 milliards $ en 2024, s'étendant à 33 milliards $ d'ici 2034",
            "Pâtes et pizza enrichies au poisson avec une valeur nutritionnelle supérieure",
            "Surpasse de loin les alternatives à base de plantes",
          ],
          tag: "Croissance la Plus Rapide",
        },
      ],
      note: "Tous les produits : clean label · halal/casher · option sans gluten · naturellement riche en calcium, collagène & oméga-3.",
      note2: "Prix abordable / accessible",
      note3: "Certifié Casher et Halal",
      noteLink: "Contactez-nous pour en savoir plus →",
    },
    market: {
      label: "Opportunité de Marché",
      headline1: "Une Opportunité",
      headline2: "de Plusieurs Milliards Inexploitée",
      description:
        "Le poisson est le segment dominant du marché mondial des fruits de mer. Ecource se situe à l'intersection de la sécurité alimentaire, de la durabilité et de la technologie — ciblant l'ensemble de la catégorie des poissons.",
      metrics: [
        {
          value: "~$102B",
          label: "Potentiel Inexploité — Poisson",
          sub: "2024 · Source : FAO SOFIA 2024",
        },
        {
          value: "~$82B",
          label: "Potentiel Inexploité — Volaille",
          sub: "2024 · Source : FAO / OCDE",
        },
        {
          value: "~$152B",
          label: "Potentiel Inexploité — Porc",
          sub: "2024 · Source : FAO / OCDE",
        },
        {
          value: "$180B",
          label: "Potentiel Inexploité — Bœuf",
          sub: "2024 · Source : FAO / OCDE",
        },
      ],
      driversTitle: "Principaux Moteurs du Marché",
      drivers: [
        "733 millions de personnes souffrent de faim chronique — les méthodes conventionnelles ne peuvent pas combler le déficit protéique",
        "La production de poisson (pêche sauvage + aquaculture) dépasse 180 MT/an avec une demande croissante",
        "Pression réglementaire pour réduire le gaspillage du poisson dans l'UE, les États-Unis et les marchés asiatiques",
        "Demande des consommateurs et des institutions pour des produits de la mer clean label, durables et très nutritifs",
        "Les mandats ESG et les cadres de crédits carbone récompensent l'élimination mesurable des déchets à grande échelle",
      ],
      whyNowTitle: "Pourquoi Maintenant ?",
      whyNow:
        "La convergence de la demande mondiale de protéines, des mandats de durabilité et l'effondrement des marges de pêche traditionnelles ont créé une fenêtre parfaite pour une technologie de traitement disruptive. Ecource est prête à produire.",
      whyEcourceTitle: "Pourquoi Ecource ?",
      whyEcource:
        "Nous sommes la seule entreprise avec une technologie brevetée capable de traiter n'importe quelle espèce et taille de poisson en produits alimentaires premium — à 5 tonnes par heure sans aucun déchet. Ce n'est pas une amélioration progressive ; c'est un changement structurel dans la façon dont le poisson est traité.",
      callLink: "Planifier un appel investisseur →",
    },
    team: {
      label: "L'Équipe",
      headline1: "Expertise Mondiale en",
      headline2: "Seafood, FoodTech & Opérations Globales",
      description:
        "Ecource est construite par une équipe avec une expérience pratique approfondie dans les opérations mondiales de la mer, l'ingénierie alimentaire, la conformité réglementaire et la croissance à l'échelle des ventures.",
      members: [
        {
          name: "Noam Weinberg Sehayek",
          role: "Co-Fondateur & PDG",
          bio: "25+ ans dans le secteur mondial des fruits de mer & de l'aquaculture. A construit et géré des pêcheries et des usines de transformation en Chine et en Israël. A conduit avec succès plusieurs projets mondiaux pour des produits de poisson innovants.",
          initials: "NWS",
        },
        {
          name: "Joseph Green",
          role: "Co-Fondateur & Directeur des Opérations",
          bio: "15+ ans à développer des entreprises, lever des fonds et constituer des équipes performantes. Supervise les opérations quotidiennes d'Ecource, le développement des partenariats et l'expansion internationale.",
          initials: "JG",
        },
        {
          name: "Avner Rot",
          role: "Ingénierie & Chimie",
          bio: "Vaste expérience en ingénierie dans l'industrie alimentaire. Veille à ce que les lignes de production répondent à toutes les exigences techniques et aux normes industrielles pour le traitement du poisson entier multi-espèces à grande échelle.",
          initials: "AR",
        },
        {
          name: "Doron Cohen",
          role: "Commercialisation Alimentaire",
          bio: "40+ ans en R&D et commercialisation de produits à base de viande et de poisson. Ancien Directeur Technologique chez Frutarom/IFF Israël. Dirige le développement produit et la stratégie d'adéquation produit-marché.",
          initials: "DC",
        },
        {
          name: "Dr. Edy Tal",
          role: "Sécurité Alimentaire & Réglementation",
          bio: "Ancien Vétérinaire en Chef, Autorité de Santé Israélienne. 30+ ans en sécurité alimentaire et conformité réglementaire mondiale — essentiel pour la certification internationale des usines et l'accès aux marchés.",
          initials: "ET",
        },
        {
          name: "Moshe (Bogie) Ya'alon",
          role: "Co-Fondateur & Développement des Affaires",
          bio: "Ancien Ministre israélien de la Défense et Chef d'État-Major des Forces de Défense d'Israël. Vaste réseau gouvernemental mondial permettant une entrée rapide sur les marchés et l'engagement réglementaire.",
          initials: "MY",
        },
      ],
      note: "Aligné avec les ODD de l'ONU 14 (Vie Aquatique) · ODD 12 (Consommation Responsable) · ODD 2 (Faim Zéro)",
    },
    contact: {
      label: "Contact Investisseur",
      headline1: "Construisons Ensemble",
      headline2: "l'Avenir de l'Alimentation.",
      description:
        "Nous recherchons activement des partenaires d'investissement qui partagent notre vision d'une industrie mondiale de transformation du poisson plus efficace et durable. Demandez notre pitch deck ou planifiez un appel.",
      location: "Israël · Disponible pour des réunions mondiales",
      confidentialityNote:
        "Les informations technologiques détaillées, les données financières et les conditions de partenariat sont partagées sous NDA mutuel. Soumettez le formulaire pour recevoir notre résumé exécutif.",
      confidentialityLabel: "Note de confidentialité :",
      form: {
        nameLabel: "Nom Complet",
        namePlaceholder: "Jean Dupont",
        emailLabel: "Email",
        emailPlaceholder: "jean@fonds.com",
        companyLabel: "Entreprise / Fonds",
        companyPlaceholder: "Acme Ventures",
        roleLabel: "Votre Rôle",
        rolePlaceholder: "Associé Gérant",
        interestLabel: "Intérêt d'Investissement",
        interestDefault: "Sélectionnez le stade d'investissement",
        interestOptions: [
          { value: "seed", label: "Amorçage / Début" },
          { value: "series-a", label: "Série A" },
          { value: "strategic", label: "Partenariat Stratégique" },
          { value: "other", label: "Autre / Simple curiosité" },
        ],
        messageLabel: "Message",
        messagePlaceholder:
          "Parlez-nous de votre thèse d'investissement ou de ce que vous souhaitez savoir sur Ecource...",
        submitText: "Envoyer le Message & Demander le Pitch Deck",
        submittingText: "Envoi en cours...",
        privacyNote: "Vos informations sont confidentielles et ne sont jamais partagées.",
        successTitle: "Message reçu !",
        successDescription: "Nous vous répondrons dans les 24 heures.",
        errorTitle: "Une erreur s'est produite",
        errorDescription: "Veuillez réessayer ou nous écrire directement.",
      },
    },
    about: {
      label: "À Propos",
      headline: "Transformer l'Avenir",
      headlineSub: "de l'Alimentation",
      story: "Ecource est née d'une vision forgée chez Gradient Ltd. — l'entreprise israélienne de produits de la mer à valeur ajoutée fondée et dirigée par Noam Weinberg Sehayek. En travaillant étroitement avec les transformateurs de l'ensemble du secteur, Noam a été le témoin direct de la valeur considérable gaspillée à chaque pêche — et a reconnu que le gaspillage à cette échelle n'est pas un problème de ressources. C'est un échec technologique en attente de solution.\n\nPlutôt que de développer la solution comme un projet secondaire, Noam a pris la décision délibérée de créer Ecource en tant que société indépendante et dédiée — réunissant une équipe d'experts chevronnés en technologie alimentaire, aquaculture et marchés mondiaux. Le résultat : une technologie de traitement du poisson entier avec brevet en cours, qui convertit 100 % de chaque poisson en aliment humain premium, doublant le rendement et éliminant totalement le gaspillage.",
      slogan: "The future of food is not producing more animals — it is respecting every gram of the ones we already harvest",
      missionTitle: "Notre Mission",
      mission: "En utilisant l'animal entier — pour la consommation humaine — en évitant le gaspillage, la pollution et les coûts. Zéro Déchet. Zéro Mortalité. Zéro Pollution. 100 % de Rendement.",
      highlights: [
        { value: "~205 Md$", label: "Marché du Poisson" },
        { value: "100 %", label: "Utilisation du Rendement" },
        { value: "Brevet", label: "En Cours" },
        { value: "5 M$", label: "Tour d'Amorçage 2026" },
      ],
    },
    media: {
      label: "Espace Médias",
      headline1: "Preuves.",
      headline2: "Pas des Promesses.",
      description: "Voyez Ecource en action — de l'atelier de transformation au produit premium. Résultats réels, témoignages réels, couverture réelle.",
      videosTitle: "Vidéos Produits & Technologie",
      testimonialsTitle: "Ce que disent les leaders du secteur",
      newsTitle: "Dans la Presse",
      newsLink: "Contactez-nous pour les demandes presse",
      videos: [
        {
          title: "Technologie Ecource : Le traitement du poisson entier expliqué",
          subtitle: "Une plongée approfondie dans la façon dont notre procédé breveté extrait 100 % du rendement de chaque poisson — de l'entrée brute au produit premium.",
          tag: "Technologie",
        },
        {
          title: "Du Déchet à l'Assiette : L'Histoire d'Ecource",
          subtitle: "Comment nous transformons le plus grand centre de coûts de l'industrie de la pêche en sa plus grande opportunité de profit.",
          tag: "Entreprise",
        },
        {
          title: "Présentation des Produits : Burgers & Croquettes de Poisson",
          subtitle: "Texture premium, nutrition supérieure — nos produits phares pour les consommateurs entièrement issus de sous-produits de poisson.",
          tag: "Produits",
        },
        {
          title: "Présentation Investisseur : Opportunité de Marché",
          subtitle: "Un aperçu du marché du poisson à 205 milliards $ et pourquoi Ecource est positionnée pour en capturer une part significative.",
          tag: "Investisseur",
        },
      ],
      testimonials: [
        {
          quote: "L'approche d'Ecource pour le traitement du poisson sans déchet est différente de tout ce que nous avons vu. Les chiffres de rendement sont extraordinaires et la qualité des produits parle d'elle-même.",
          name: "Dr. Ran Azulay",
          role: "Conseiller en Technologie Alimentaire",
          initials: "RA",
        },
        {
          quote: "La combinaison de réduction des coûts et de production premium dans un système intégré est un véritable avantage concurrentiel. C'est un avantage structurel, pas une amélioration marginale.",
          name: "Yael Ben-David",
          role: "Partenaire en Investissement d'Impact",
          initials: "YB",
        },
        {
          quote: "Nous avons évalué des dizaines d'innovations agro-alimentaires. Ecource se distingue parce que l'économie fonctionne à grande échelle — pas seulement en laboratoire.",
          name: "Michael Stern",
          role: "Analyste Senior, FoodTech Capital",
          initials: "MS",
        },
      ],
      news: [
        {
          title: "La startup israélienne Ecource vise à doubler les rendements des produits de la mer avec une technologie brevetée",
          source: "FoodTech Weekly",
          date: "Fév 2026",
          excerpt: "Ecource Ltd. a développé un système de traitement du poisson entier qui convertit jusqu'à 100 % de chaque poisson en produits alimentaires premium, contre la norme industrielle de 35 à 50 %.",
        },
        {
          title: "Traitement du poisson sans déchet : La prochaine frontière de l'aquaculture durable",
          source: "AquaBusiness",
          date: "Jan 2026",
          excerpt: "Avec le gaspillage mondial du poisson dépassant 50 millions de tonnes par an, des startups technologiques comme Ecource cherchent à valoriser ce qui était auparavant jeté comme coût.",
        },
        {
          title: "Ecource lance une levée de fonds d'amorçage de 5 M$ pour développer sa technologie révolutionnaire d'utilisation du poisson",
          source: "Israel Tech Pulse",
          date: "Mar 2026",
          excerpt: "L'entreprise israélienne de foodtech recherche des partenaires investisseurs stratégiques pour commercialiser sa plateforme de traitement du poisson entier sur les marchés mondiaux.",
        },
      ],
    },
    footer: {
      tagline: "Technologie de Traitement du Poisson Entier — Brevet en Cours",
      copyright: `© ${new Date().getFullYear()} Ecource Ltd. Tous droits réservés. | Enregistrée en Israël`,
      contact: "Contact",
      technology: "Technologie",
    },
  },
};

export type Translations = typeof translations.en;
