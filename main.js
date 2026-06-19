/*
   YALA CANDLES - Premium Luxury E-Commerce Application Script
   Interactive Design System & Canvas Frame Player
   Built with Vanilla JS & GSAP ScrollTrigger
*/

// --- 1. Product Data ---
const products = [
  {
    id: "luxury_fresh_spring",
    name: "Luxury Fresh Spring",
    category: "luxury",
    categoryLabel: { en: "Luxury Candle", es: "Vela de Lujo" },
    aroma: "spring",
    aromaLabel: { en: "Fresh Spring", es: "Primavera Fresca" },
    aromaColor: "#7bb660",
    price: 35,
    image: "assets/products/10-producto-1.webp",
    thumbnails: [
      "assets/products/10-producto-1.webp",
      "assets/details/11-flores-1.webp",
      "assets/details/16-urna-1.webp",
      "assets/details/15-base.webp"
    ],
    desc: {
      en: "A refreshing, editorial-grade handcrafted candle bringing the scent of crisp spring air, dew-kissed petals, and green botanical undertones into your space.",
      es: "Una vela artesanal refrescante de calidad editorial que aporta el aroma del aire fresco de primavera, pétalos bañados por el rocío y matices botánicos verdes."
    }
  },
  {
    id: "luxury_lemon_verbena",
    name: "Luxury Lemon Verbena",
    category: "luxury",
    categoryLabel: { en: "Luxury Candle", es: "Vela de Lujo" },
    aroma: "verbena",
    aromaLabel: { en: "Lemon Verbena", es: "Verbena de Limón" },
    aromaColor: "#d2d93e",
    price: 35,
    image: "assets/products/10-producto-2.webp",
    thumbnails: [
      "assets/products/10-producto-2.webp",
      "assets/details/11-flores-2.webp",
      "assets/details/16-urna-2.webp",
      "assets/details/15-base.webp"
    ],
    desc: {
      en: "A vibrant blend of bright citrus lemon verbena combined with delicate herbal notes, designed to elevate energy levels and restore clarity.",
      es: "Una mezcla vibrante de verbena de limón cítrico combinada con delicadas notas herbales, diseñada para elevar la energía y restaurar la claridad."
    }
  },
  {
    id: "luxury_rose_fruit",
    name: "Luxury Rose Fruit",
    category: "luxury",
    categoryLabel: { en: "Luxury Candle", es: "Vela de Lujo" },
    aroma: "rose",
    aromaLabel: { en: "Rose Fruit Temptation", es: "Tentación de Rosa y Fruta" },
    aromaColor: "#e0587d",
    price: 35,
    image: "assets/products/10-producto-3.webp",
    thumbnails: [
      "assets/products/10-producto-3.webp",
      "assets/details/11-flores-3.webp",
      "assets/details/16-urna-3.webp",
      "assets/details/15-base.webp"
    ],
    desc: {
      en: "An elegant, deeply comforting fusion of fresh rose petals and rich summer fruits. Creates a warm, luxurious, and romantic atmosphere.",
      es: "Una fusión elegante y profundamente reconfortante de pétalos de rosa frescos y ricas frutas de verano. Crea una atmósfera cálida, lujosa y romántica."
    }
  },
  {
    id: "luxury_orange_cinnamon",
    name: "Luxury Orange Cinnamon",
    category: "luxury",
    categoryLabel: { en: "Luxury Candle", es: "Vela de Lujo" },
    aroma: "cinnamon",
    aromaLabel: { en: "Orange Cinnamon", es: "Naranja Canela" },
    aromaColor: "#e66025",
    price: 35,
    image: "assets/products/10-producto-4.webp",
    thumbnails: [
      "assets/products/10-producto-4.webp",
      "assets/details/11-flores-4.webp",
      "assets/details/16-urna-4.webp",
      "assets/details/15-base.webp"
    ],
    desc: {
      en: "A timeless aroma of sweet orange peel layered with Ceylon cinnamon and clove buds. Perfect for establishing a cozy, festive wellness space.",
      es: "Un aroma atemporal de cáscara de naranja dulce con capas de canela de Ceilán y clavos de olor. Perfecto para establecer un espacio de bienestar acogedor."
    }
  },
  {
    id: "egg_vanilla",
    name: "Egg Vanilla",
    category: "egg",
    categoryLabel: { en: "Egg-Shaped Candle", es: "Vela Ovalada" },
    aroma: "vanilla",
    aromaLabel: { en: "Warm Madagascar Vanilla", es: "Vainilla Cálida de Madagascar" },
    aromaColor: "#eed4a1",
    price: 35,
    image: "assets/details/17-egg.webp",
    thumbnails: [
      "assets/details/17-egg.webp",
      "assets/details/17-cera-egg.webp"
    ],
    desc: {
      en: "A smooth, comforting, and organic egg-shaped candle featuring rich Madagascar vanilla bean pods and warm, creamy caramelized honey tones.",
      es: "Una vela ovalada suave, reconfortante y orgánica que presenta ricas vainas de vainilla de Madagascar y tonos cálidos de miel caramelizada cremosa."
    }
  },
  {
    id: "egg_lavender",
    name: "Egg Lavender",
    category: "egg",
    categoryLabel: { en: "Egg-Shaped Candle", es: "Vela Ovalada" },
    aroma: "lavender",
    aromaLabel: { en: "Calming French Lavender", es: "Lavanda Francesa Relajante" },
    aromaColor: "#a38dbd",
    price: 35,
    image: "assets/details/17-egg.webp",
    thumbnails: [
      "assets/details/17-egg.webp",
      "assets/details/17-cera-egg.webp"
    ],
    desc: {
      en: "An organic egg-shaped design infused with pure French lavender fields and dry cedar wood. Created specifically to promote deep sleep and relieve stress.",
      es: "Un diseño ovalado orgánico infundido con campos de lavanda francesa pura y madera de cedro seca. Creado específicamente para promover el sueño profundo y aliviar el estrés."
    }
  },
  {
    id: "egg_lemon_eucalyptus",
    name: "Egg Lemon Eucalyptus",
    category: "egg",
    categoryLabel: { en: "Egg-Shaped Candle", es: "Vela Ovalada" },
    aroma: "eucalyptus",
    aromaLabel: { en: "Lemon Eucalyptus Refresh", es: "Refresco de Limón y Eucalipto" },
    aromaColor: "#4ca68c",
    price: 35,
    image: "assets/details/17-egg.webp",
    thumbnails: [
      "assets/details/17-egg.webp",
      "assets/details/17-cera-egg.webp"
    ],
    desc: {
      en: "An aromatic egg-shaped geometry blended with crisp blue gum eucalyptus and wild lemon grass. Purifies air particles and enhances breathing.",
      es: "Una geometría ovalada aromática mezclada con eucalipto azul crujiente y limoncillo silvestre. Purifica las partículas de aire y mejora la respiración."
    }
  }
];

// --- 2. Translation Dictionaries ---
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_urn_collection: "Urn Collection",
    nav_egg_collection: "Egg Collection",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_bag: "Bag",
    hero_subtitle: "LUXURY HANDCRAFTED RITUALS",
    hero_title: "Illuminate Moments.<br><italic>Create Rituals.</italic>",
    hero_desc: "Handcrafted candles designed to transform everyday spaces into moments of calm, connection, and elevated wellbeing.",
    hero_cta_primary: "Explore Collection",
    hero_cta_secondary: "Our Story",
    hero_scroll: "Scroll to unveil",
    story_tag: "OUR CRAFT",
    story_headline: "Where Nature Meets <italic>Sophisticated Rituals</italic>",
    story_p1: "Founded in Houston, Texas, YALA was born out of a desire to reintroduce rituals into daily routines. We believe that lighting a candle is not merely about scenting a room—it is an act of intention, a pause in a hectic world to reconnect with the self and nature.",
    story_p2: "Each YALA candle is meticulously handcrafted in small batches using 100% natural wax and clean-burning cotton wicks. Our scents are masterfully formulated with pure botanical extracts and organic essential oils, evoking the delicate complexity of raw earth, flowers, and spices.",
    stat_natural: "Natural Wax",
    stat_burn: "Average Burn",
    stat_synthetic: "Synthetics",
    benefits_tag: "THE YALA ESSENCE",
    benefits_headline: "Formulated for <italic>Mindful Spaces</italic>",
    benefits_desc: "Inspired by the structure of natural crystals, our design and material choices represent raw beauty, durability, and luxury wellbeing.",
    benefit1_title: "Handcrafted",
    benefit1_desc: "Every candle is hand-poured in small batches, ensuring perfect oil dispersion and artistic finish.",
    benefit2_title: "Natural Fragrances",
    benefit2_desc: "Infused with pure botanical essential oils, free from phthalates, parabens, and synthetic additives.",
    benefit3_title: "Decorative Design",
    benefit3_desc: "Sculpted elegant geometries and premium glass domes that complement luxury interior aesthetics.",
    benefit4_title: "Long Lasting",
    benefit4_desc: "Our proprietary wax blend burns slower and cooler, extending aromatic diffusion for up to 45 hours.",
    urn_tag: "CRYSTAL URN COLLECTION",
    urn_headline: "Artisanal <italic>Glass Craftsmanship</italic>",
    urn_desc: "Meticulously hand-blown glass urns designed to amplify ambient light and preserve our delicate cold-throw aromatherapy botanicals. An architectural masterpiece for the senses.",
    urn_detail_1: "Hand-blown borosilicate liquid glass dome",
    urn_detail_2: "Premium dense concrete or natural wood bases",
    urn_detail_3: "Designed for slow heat retention and long diffusion",
    egg_tag: "SCULPTURAL EGG COLLECTION",
    egg_headline: "Organic <italic>Scent Geometries</italic>",
    egg_desc: "Minimalist, hand-sculpted egg-shaped candles inspired by organic forms and natural harmony. These pieces offer an elegant editorial statement even when unlit, releasing gentle, calming botanical aromas during burn time.",
    egg_detail_1: "Organic egg-shaped geometry with satin finish",
    egg_detail_2: "100% natural organic botanical wax formulation",
    egg_detail_3: "Clean burning, lead-free pure cotton wick",
    filter_shape: "Category:",
    filter_all: "All",
    filter_cat_egg: "Egg-Shaped",
    filter_cat_luxury: "Luxury",
    filter_aroma: "Aroma:",
    aroma_eucalyptus: "Lemon Eucalyptus",
    aroma_lavender: "Lavender",
    aroma_vanilla: "Vanilla",
    aroma_verbena: "Lemon Verbena",
    aroma_cinnamon: "Orange Cinnamon",
    aroma_spring: "Fresh Spring",
    aroma_rose: "Rose Fruit Temptation",
    ritual_tag: "SENSORY SEQUENCE",
    ritual_headline: "A Ritual of <italic>Light and Scent</italic>",
    ritual_desc: "A visual storytelling guide designed to help you release the maximum aromatherapy properties.",
    step1: "Step 01",
    step1_title: "The Glass Dome",
    step1_desc: "Our custom-fit glass domes keep the candle clean, lock in the aromatherapy botanicals, and form an architectural center-piece.",
    step2: "Step 02",
    step2_title: "Unveiling Senses",
    step2_desc: "Lift the dome slowly. Let the accumulated concentration of cold-throw pure essential oils fill the surrounding space immediately.",
    step3: "Step 03",
    step3_title: "The Ignition",
    step3_desc: "Ignite the cotton wick with a wooden match. Observe the orange spark and hear the gentle flame establish itself.",
    step4: "Step 04",
    step4_title: "Thermal Diffusion",
    step4_desc: "As the soy wax pool warms and melts, natural scent particles evaporate, generating a persistent atmosphere of relaxation.",
    step5: "Step 05",
    step5_title: "Mindful Pause",
    step5_desc: "Sit back, breathe deeply, and allow the gentle aromatherapy formulations to guide your thoughts to calm spaces.",
    ig_tag: "INSTAGRAM STORIES",
    ig_desc: "Connect with our digital feed. Explore our curated publications, scent maps, and customer stories.",
    ig_button: "View Profile",
    faq_tag: "COMMON QUESTIONS",
    faq_headline: "Frequently Asked <italic>Details</italic>",
    faq_desc: "Answers about shipping, aromatic compositions, ingredients, and bulk policies.",
    faq_q_shipping: "Shipping Policy",
    faq_a_shipping: "We ship nationwide across the United States from our studio in Houston, Texas. Orders are carefully packed with premium insulation to protect the wax. Local delivery is available for orders within the Greater Houston Area.",
    faq_q_returns: "Returns & Replacements",
    faq_a_returns: "Due to the artisanal, handcrafted nature of our candles, returns are accepted within 14 days of delivery only if the items remain completely unused and in their original packaging. Please contact our support team on WhatsApp to coordinate.",
    faq_q_burntime: "Burn Time optimization",
    faq_a_burntime: "Our Luxury Candles average 45 hours of burn time, while the Egg-Shaped geometries average 35 hours. To maximize performance, burn the candle for 2-3 hours on the first light to prevent tunneling, and trim the wick to 1/4 inch before each burn.",
    faq_q_ingredients: "Ingredients & Safety",
    faq_a_ingredients: "We use a premium blend of 100% natural soy wax, beeswax, lead-free cotton wicks, and pure essential oils. Our candles are completely free from synthetic phthalates, parabens, and petroleum-based paraffins, guaranteeing a clean and safe burn.",
    faq_q_wholesale: "Wholesale discount tier",
    faq_a_wholesale: "Wholesale pricing applies to orders exceeding 10 units. This is ideal for events, weddings, corporate gifting, and luxury retailers. You can request a quotation directly through the wholesale inquiry form in the sidebar or at the bottom of the page.",
    faq_q_custom: "Custom event packaging",
    faq_a_custom: "We offer bespoke design wrappers and custom gift tags for events and bulk orders. Contact our team at least 3 weeks prior to your event to allow time for design drafts, batch pouring, and curing.",
    contact_tag: "GET IN TOUCH",
    contact_headline: "Let Us Craft Your <italic>Sensory Space</italic>",
    contact_desc: "Have questions about our aromatherapeutic benefits, local pick-ups in Houston, or designing custom event packages? Reach out to our artisans.",
    footer_location_short: "Houston, Texas",
    contact_phone_label: "Phone",
    contact_whatsapp_label: "WhatsApp",
    contact_form_title: "Send a Message",
    form_name: "Full Name",
    form_email: "Email Address",
    form_message: "Your Inquiry",
    form_submit: "Send Message",
    footer_brand_desc: "Handcrafted decorative and aromatherapy candles designed to invite tranquility, aesthetic beauty, and luxury rituals into your spaces.",
    footer_col_nav: "Navigate",
    footer_col_collection: "Collection",
    footer_bulk_link: "Bulk Orders Inquiry",
    footer_col_legal: "Origin",
    footer_location: "Designed and hand-poured in Houston, Texas.<br><br>For local pickups or specialized event packaging, reach out directly via WhatsApp.",
    footer_crafted: "Crafted with intention in Texas",
    bag_title: "Your Bag",
    bag_total: "Subtotal",
    bag_bulk_alert: "<strong>Bulk order detected (>5 units)!</strong> You qualify for wholesale pricing and customized gifting boxes. Please request a bulk quote.",
    bag_checkout: "Order via WhatsApp",
    bag_bulk_inquiry_btn: "Request Bulk Quote",
    qty: "Quantity",
    btn_add_bag: "Add to Bag",
    bulk_title: "Bulk Gifting Request",
    bulk_desc: "For custom artisan events, weddings, corporate packages, or orders exceeding 5 units. We offer bespoke wrapping and volume discounts.",
    form_phone: "Phone Number",
    form_est_qty: "Estimated Quantity",
    form_custom_needs: "Custom Requirements",
    form_submit_inquiry: "Submit Gifting Request"
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_urn_collection: "Colección Urnas",
    nav_egg_collection: "Colección Ovalada",
    nav_gallery: "Galería",
    nav_contact: "Contacto",
    nav_bag: "Bolsa",
    hero_subtitle: "RITUALES DE LUJO HECHOS A MANO",
    hero_title: "Ilumina Momentos.<br><italic>Crea Rituales.</italic>",
    hero_desc: "Velas artesanales diseñadas para transformar espacios cotidianos en momentos de calma, conexión y bienestar elevado.",
    hero_cta_primary: "Explorar Colección",
    hero_cta_secondary: "Nuestra Historia",
    hero_scroll: "Desliza para descubrir",
    story_tag: "NUESTRO ARTE",
    story_headline: "Donde la Naturaleza se Une con los <italic>Rituales Sofisticados</italic>",
    story_p1: "Fundada en Houston, Texas, YALA nació del deseo de reintroducir rituales en las rutinas diarias. Creemos que encender una vela no es meramente aromatizar una habitación; es un acto de intención, una pausa en un mundo agitado para reconectarse con uno mismo y con la naturaleza.",
    story_p2: "Cada vela YALA es meticulosamente hecha a mano en pequeños lotes utilizando cera 100% natural y mechas de algodón de combustión limpia. Nuestras fragancias están formuladas magistralmente con extractos botánicos puros y aceites esenciales orgánicos, evocando la delicada complejidad de la tierra cruda, las flores y las especias.",
    stat_natural: "Cera Natural",
    stat_burn: "Combustión Promedio",
    stat_synthetic: "Sintéticos",
    benefits_tag: "LA ESENCIA YALA",
    benefits_headline: "Formulada para <italic>Espacios Conscientes</italic>",
    benefits_desc: "Inspirada en la estructura de los cristales naturales, nuestras elecciones de diseño y materiales representan la belleza cruda, la durabilidad y el bienestar de lujo.",
    benefit1_title: "Hecho a Mano",
    benefit1_desc: "Cada vela se vierte a mano en pequeños lotes, asegurando una dispersión perfecta de los aceites y un acabado artístico.",
    benefit2_title: "Fragancias Naturales",
    benefit2_desc: "Infundida con aceites esenciales botánicos puros, libre de ftalatos, parabenos y aditivos sintéticos.",
    benefit3_title: "Diseño Decorativo",
    benefit3_desc: "Geometrías elegantes esculpidas y domos de cristal premium que complementan la estética interior de lujo.",
    benefit4_title: "Larga Duración",
    benefit4_desc: "Nuestra mezcla patentada de cera se quema más lenta y fresca, extendiendo la difusión aromática hasta por 45 horas.",
    urn_tag: "COLECCIÓN URNAS DE CRISTAL",
    urn_headline: "Artesanía <italic>en Cristal</italic>",
    urn_desc: "Urnas de cristal sopladas a mano meticulosamente diseñadas para amplificar la luz ambiental y conservar nuestros delicados aceites esenciales. Una obra de arte arquitectónica para los sentidos.",
    urn_detail_1: "Domo de cristal de borosilicato soplado a mano",
    urn_detail_2: "Bases premium de concreto denso o madera natural",
    urn_detail_3: "Diseñado para retención lenta de calor y difusión prolongada",
    egg_tag: "COLECCIÓN VELAS OVALADAS",
    egg_headline: "Geometrías <italic>Orgánicas</italic>",
    egg_desc: "Velas minimalistas y ovaladas esculpidas a mano, inspiradas en las formas orgánicas y la armonía natural. Estas piezas ofrecen una elegante declaración estética incluso apagadas, liberando suaves aromas botánicos al encenderse.",
    egg_detail_1: "Geometría ovalada orgánica con acabado satinado",
    egg_detail_2: "Formulación de cera botánica 100% natural y orgánica",
    egg_detail_3: "Combustión limpia, mecha de algodón puro sin plomo",
    filter_shape: "Categoría:",
    filter_all: "Todos",
    filter_cat_egg: "Ovaladas (Egg)",
    filter_cat_luxury: "De Lujo",
    filter_aroma: "Aroma:",
    aroma_eucalyptus: "Limón Eucalipto",
    aroma_lavender: "Lavanda",
    aroma_vanilla: "Vainilla",
    aroma_verbena: "Verbena de Limón",
    aroma_cinnamon: "Naranja Canela",
    aroma_spring: "Primavera Fresca",
    aroma_rose: "Tentación de Rosa y Fruta",
    ritual_tag: "SECUENCIA SENSORIAL",
    ritual_headline: "Un Ritual de <italic>Luz y Aroma</italic>",
    ritual_desc: "Una guía visual de narración diseñada para ayudarte a liberar las máximas propiedades de la aromaterapia.",
    step1: "Paso 01",
    step1_title: "El Domo de Cristal",
    step1_desc: "Nuestros domos de cristal a la medida mantienen la vela limpia, encierran los botánicos de la aromaterapia y forman una pieza central arquitectónica.",
    step2: "Paso 02",
    step2_title: "Revelando Sentidos",
    step2_desc: "Levanta el domo lentamente. Deja que la concentración acumulada de aceites esenciales en frío llene el espacio circundante de inmediato.",
    step3: "Paso 03",
    step3_title: "La Ignición",
    step3_desc: "Enciende la mecha de algodón con un cerillo de madera. Observa la chispa naranja y escucha cómo se establece la suave llama.",
    step4: "Paso 04",
    step4_title: "Difusión Térmica",
    step4_desc: "A medida que el pozo de cera de soya se calienta y se derrite, las partículas de aroma natural se evaporan, generando una atmósfera persistente de relajación.",
    step5: "Paso 05",
    step5_title: "Pausa Consciente",
    step5_desc: "Siéntate, respira profundamente y permite que las suaves formulaciones de aromaterapia guíen tus pensamientos hacia espacios de calma.",
    ig_tag: "HISTORIAS DE INSTAGRAM",
    ig_desc: "Conéctate con nuestro feed digital. Explora nuestras publicaciones curadas, mapas de aromas e historias de clientes.",
    ig_button: "Ver Perfil",
    faq_tag: "PREGUNTAS COMUNES",
    faq_headline: "Detalles <italic>Frecuentes</italic>",
    faq_desc: "Respuestas sobre envíos, composiciones aromáticas, ingredientes y políticas de mayoreo.",
    faq_q_shipping: "Política de Envíos",
    faq_a_shipping: "Enviamos a nivel nacional en todo Estados Unidos desde nuestro estudio en Houston, Texas. Las órdenes se empacan cuidadosamente con aislamiento premium para proteger la cera. La entrega local está disponible para pedidos dentro del área metropolitana de Houston.",
    faq_q_returns: "Devoluciones y Reemplazos",
    faq_a_returns: "Debido a la naturaleza artesanal de nuestras velas, se aceptan devoluciones dentro de los 14 días posteriores a la entrega solo si los artículos permanecen completamente sin usar y en su empaque original. Contáctanos por WhatsApp para coordinar.",
    faq_q_burntime: "Optimización de Combustión",
    faq_a_burntime: "Nuestras Velas de Lujo promedian 45 horas de combustión, mientras que las geometrías ovaladas (Egg) promedian 35 horas. Para maximizar el rendimiento, encienda la vela durante 2-3 horas la primera vez para evitar que se forme un túnel, y corte la mecha a 6 mm antes de cada encendido.",
    faq_q_ingredients: "Ingredientes y Seguridad",
    faq_a_ingredients: "Utilizamos una mezcla premium de cera de soya 100% natural, cera de abejas, mechas de algodón libres de plomo y aceites esenciales puros. Nuestras velas están completamente libres de ftalatos sintéticos, parabenos y parafinas derivadas del petróleo, garantizando una combustión limpia y segura.",
    faq_q_wholesale: "Nivel de Descuento de Mayoreo",
    faq_a_wholesale: "Los precios de mayoreo se aplican a pedidos que superan las 10 unidades. Esto es ideal para eventos, bodas, regalos corporativos y minoristas de lujo. Puede solicitar una cotización directamente a través del formulario de consulta de mayoreo en la barra lateral o al final de la página.",
    faq_q_custom: "Empaque de Eventos Personalizados",
    faq_a_custom: "Ofrecemos envolturas de diseño a medida y etiquetas de regalo personalizadas para eventos y pedidos al por mayor. Póngase en contacto con nuestro equipo al menos 3 semanas antes de su evento para dar tiempo a los borradores de diseño, el vertido de lotes y el curado.",
    contact_tag: "PONTE EN CONTACTO",
    contact_headline: "Permítenos Diseñar tu <italic>Espacio Sensorial</italic>",
    contact_desc: "¿Tiene preguntas sobre nuestros beneficios de aromaterapia, recolecciones locales en Houston o diseño de paquetes para eventos personalizados? Comuníquese con nuestros artesanos.",
    footer_location_short: "Houston, Texas",
    contact_phone_label: "Teléfono",
    contact_whatsapp_label: "WhatsApp",
    contact_form_title: "Enviar un Mensaje",
    form_name: "Nombre Completo",
    form_email: "Correo Electrónico",
    form_message: "Tu Consulta",
    form_submit: "Enviar Mensaje",
    footer_brand_desc: "Velas decorativas y de aromaterapia hechas a mano diseñadas para invitar a la tranquilidad, la belleza estética y los rituales de lujo en sus espacios.",
    footer_col_nav: "Navegar",
    footer_col_collection: "Colección",
    footer_bulk_link: "Consulta de Pedidos al por Mayor",
    footer_col_legal: "Origen",
    footer_location: "Diseñado y vertido a mano en Houston, Texas.<br><br>Para recolecciones locales o empaques de eventos especializados, contáctenos directamente a través de WhatsApp.",
    footer_crafted: "Diseñado con intención en Texas",
    bag_title: "Tu Bolsa",
    bag_total: "Subtotal",
    bag_bulk_alert: "<strong>¡Pedido al por mayor detectado (>5 unidades)!</strong> Califica para precios de mayoreo y cajas de regalo personalizadas. Solicite una cotización.",
    bag_checkout: "Pedir por WhatsApp",
    bag_bulk_inquiry_btn: "Solicitar Cotización de Mayoreo",
    qty: "Cantidad",
    btn_add_bag: "Agregar a la Bolsa",
    bulk_title: "Solicitud de Mayoreo",
    bulk_desc: "Para eventos artesanales personalizados, bodas, paquetes corporativos o pedidos de más de 5 unidades. Ofrecemos envolturas a medida y descuentos por volumen.",
    form_phone: "Número de Teléfono",
    form_est_qty: "Cantidad Estimada",
    form_custom_needs: "Requisitos Personalizados"
  }
};

let currentLang = localStorage.getItem("yala_lang") || "en";

// --- 3. Cinematic Frame Sequence System ---
const seq1Total = 106;
const seq2Total = 105;

const seq1Images = [];
const seq2Images = [];

let activeSequence = 'hero'; // 'hero', 'static', 'lighting'
let heroProgress = 0;
let contactProgress = 0;
let canvasReady = false;

// Frame Cache Helper to prevent duplicate instantiations/requests
function loadFrame(sequence, index, src, callback) {
  const cache = sequence === 'hero' ? seq1Images : seq2Images;
  if (cache[index]) {
    if (callback) {
      if (cache[index].complete) {
        callback(cache[index]);
      } else {
        cache[index].addEventListener('load', () => callback(cache[index]), { once: true });
        cache[index].addEventListener('error', () => callback(cache[index]), { once: true });
      }
    }
    return cache[index];
  }

  const img = new Image();
  cache[index] = img;
  if (callback) {
    img.addEventListener('load', () => callback(img), { once: true });
    img.addEventListener('error', () => callback(img), { once: true });
  }
  img.src = src;
  return img;
}

// Preload first 15 frames of sequence 1 for immediate render
function preloadInitialFrames(callback) {
  let loaded = 0;
  const target = Math.min(15, seq1Total);
  for (let i = 1; i <= target; i++) {
    const src = `assets/frames/hero/frame_${String(i).padStart(4, '0')}.webp`;
    loadFrame('hero', i - 1, src, () => {
      loaded++;
      if (loaded === target) {
        callback();
        preloadRemainingHeroFrames();
      }
    });
  }
}

// Preload remaining hero frames progressively in the background in batches of 4
function preloadRemainingHeroFrames() {
  if (window.innerWidth < 768) return; // Skip background preload on mobile to save memory
  let currentIndex = 15;
  const batchSize = 4;
  const delay = 60;

  function loadNextBatch() {
    if (currentIndex >= seq1Total) return;
    let loadedCount = 0;
    const limit = Math.min(currentIndex + batchSize, seq1Total);
    const countToLoad = limit - currentIndex;

    for (let i = currentIndex; i < limit; i++) {
      const idx = i;
      const src = `assets/frames/hero/frame_${String(idx + 1).padStart(4, '0')}.webp`;
      loadFrame('hero', idx, src, () => {
        loadedCount++;
        if (loadedCount === countToLoad) {
          currentIndex = limit;
          if (window.requestIdleCallback) {
            window.requestIdleCallback(() => setTimeout(loadNextBatch, delay));
          } else {
            setTimeout(loadNextBatch, delay);
          }
        }
      });
    }
  }

  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => loadNextBatch());
  } else {
    loadNextBatch();
  }
}

let lightingPreloadStarted = false;
function triggerLightingPreload() {
  if (lightingPreloadStarted) return;
  lightingPreloadStarted = true;
  preloadLightingFramesProgressive();
}

// Preload lighting frames progressively in the background in batches of 4
function preloadLightingFramesProgressive() {
  if (window.innerWidth < 768) return; // Skip background preload on mobile to save memory
  let currentIndex = 0;
  const batchSize = 4;
  const delay = 60;

  function loadNextBatch() {
    if (currentIndex >= seq2Total) return;
    let loadedCount = 0;
    const limit = Math.min(currentIndex + batchSize, seq2Total);
    const countToLoad = limit - currentIndex;

    for (let i = currentIndex; i < limit; i++) {
      const idx = i;
      const src = `assets/frames/lighting/frame_${String(idx + 1).padStart(4, '0')}.webp`;
      loadFrame('lighting', idx, src, () => {
        loadedCount++;
        if (loadedCount === countToLoad) {
          currentIndex = limit;
          if (window.requestIdleCallback) {
            window.requestIdleCallback(() => setTimeout(loadNextBatch, delay));
          } else {
            setTimeout(loadNextBatch, delay);
          }
        }
      });
    }
  }

  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => loadNextBatch());
  } else {
    loadNextBatch();
  }
}

// Sliding frame buffer manager to keep memory footprint tiny on mobile
function ensureFramesLoaded(sequence, currentIndex) {
  const total = sequence === 'hero' ? seq1Total : seq2Total;
  const cache = sequence === 'hero' ? seq1Images : seq2Images;
  const mobile = window.innerWidth < 768;

  if (mobile) {
    // Tighter buffer on mobile: keep 4 behind, 8 ahead (total 13 frames)
    const keepBehind = 4;
    const keepAhead = 8;
    const minIdx = Math.max(0, currentIndex - keepBehind);
    const maxIdx = Math.min(total - 1, currentIndex + keepAhead);

    // Unload frames outside buffer
    for (let i = 0; i < total; i++) {
      if (i < minIdx || i > maxIdx) {
        if (cache[i]) {
          cache[i].src = '';
          cache[i] = null;
        }
      }
    }

    // Load frames inside buffer
    for (let i = minIdx; i <= maxIdx; i++) {
      if (!cache[i]) {
        const src = sequence === 'hero'
          ? `assets/frames/hero/frame_${String(i + 1).padStart(4, '0')}.webp`
          : `assets/frames/lighting/frame_${String(i + 1).padStart(4, '0')}.webp`;
        loadFrame(sequence, i, src);
      }
    }
  } else {
    // Desktop: ensure current frame and 15 frames ahead are loaded
    const keepAhead = 15;
    const maxIdx = Math.min(total - 1, currentIndex + keepAhead);
    for (let i = currentIndex; i <= maxIdx; i++) {
      if (!cache[i]) {
        const src = sequence === 'hero'
          ? `assets/frames/hero/frame_${String(i + 1).padStart(4, '0')}.webp`
          : `assets/frames/lighting/frame_${String(i + 1).padStart(4, '0')}.webp`;
        loadFrame(sequence, i, src);
      }
    }
  }
}

// Fetch helper with fallback to avoid blank spots
function getHeroFrame(index) {
  if (seq1Images[index] && seq1Images[index].complete) {
    return seq1Images[index];
  }
  // Search backward
  for (let i = index - 1; i >= 0; i--) {
    if (seq1Images[i] && seq1Images[i].complete) return seq1Images[i];
  }
  // Search forward
  for (let i = index + 1; i < seq1Total; i++) {
    if (seq1Images[i] && seq1Images[i].complete) return seq1Images[i];
  }
  return null;
}

function getContactFrame(index) {
  if (seq2Images[index] && seq2Images[index].complete) {
    return seq2Images[index];
  }
  for (let i = index - 1; i >= 0; i--) {
    if (seq2Images[i] && seq2Images[i].complete) return seq2Images[i];
  }
  for (let i = index + 1; i < seq2Total; i++) {
    if (seq2Images[i] && seq2Images[i].complete) return seq2Images[i];
  }
  return getHeroFrame(seq1Total - 1);
}

// Cover drawing function to preserve camera scale (aspect cover behavior)
function drawBackground(ctx, img, canvasWidth, canvasHeight) {
  const imgWidth = img.width;
  const imgHeight = img.height;
  
  // Scale factor to cover the entire canvas width and height (aspect ratio preserved)
  const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  
  const drawnWidth = imgWidth * scale;
  const drawnHeight = imgHeight * scale;
  
  // Center horizontally and vertically
  const x = (canvasWidth - drawnWidth) / 2;
  const y = (canvasHeight - drawnHeight) / 2;
  
  ctx.drawImage(img, 0, 0, imgWidth, imgHeight, x, y, drawnWidth, drawnHeight);
}

let lastRenderedKey = '';

function drawScene() {
  const canvas = document.getElementById("cinematicCanvas");
  if (!canvas || !canvasReady) return;
  const ctx = canvas.getContext("2d");

  let imgToDraw = null;
  let currentKey = '';

  if (activeSequence === 'hero') {
    const frameIndex = Math.min(seq1Total - 1, Math.max(0, Math.round(heroProgress * (seq1Total - 1))));
    ensureFramesLoaded('hero', frameIndex);
    imgToDraw = getHeroFrame(frameIndex);
    currentKey = `hero_${frameIndex}`;
  } else if (activeSequence === 'lighting') {
    const frameIndex = Math.min(seq2Total - 1, Math.max(0, Math.round(contactProgress * (seq2Total - 1))));
    ensureFramesLoaded('lighting', frameIndex);
    imgToDraw = getContactFrame(frameIndex);
    currentKey = `lighting_${frameIndex}`;
  } else {
    ensureFramesLoaded('hero', seq1Total - 1);
    imgToDraw = getHeroFrame(seq1Total - 1);
    currentKey = `static`;
  }

  if (imgToDraw && currentKey !== lastRenderedKey) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Fill canvas background with YALA luxury brand dark blue
    ctx.fillStyle = "#051d2b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawBackground(ctx, imgToDraw, canvas.width, canvas.height);
    lastRenderedKey = currentKey;
  }
}

let renderPending = false;
function requestRedraw() {
  if (renderPending) return;
  renderPending = true;
  requestAnimationFrame(() => {
    drawScene();
    renderPending = false;
  });
}

let cachedWidth = 0;
let cachedHeight = 0;

function resizeCanvas() {
  const canvas = document.getElementById("cinematicCanvas");
  if (!canvas) return;
  
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  // Avoid triggers on small vertical resizes (e.g. mobile address bar hiding/showing)
  if (w === cachedWidth && Math.abs(h - cachedHeight) < 100) {
    return;
  }
  
  cachedWidth = w;
  cachedHeight = h;
  
  canvas.width = w;
  canvas.height = h;
  
  // Lock elements style width and height to prevent mobile stretch jumps
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  
  lastRenderedKey = ''; 
  requestRedraw();
}

// --- 4. GSAP & ScrollTrigger Layout binds ---
function initGSAPScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Lazy-load the lighting sequence as the user approaches the FAQ section
  ScrollTrigger.create({
    trigger: "#faq",
    start: "top 120%",
    once: true,
    onEnter: () => {
      triggerLightingPreload();
    }
  });

  // Pin & Scrub Hero Cloche Removal (Seq 01)
  ScrollTrigger.create({
    trigger: "#heroTrigger",
    start: "top top",
    end: "bottom bottom",
    pin: "#heroPinContainer",
    scrub: 0.1,
    onUpdate: (self) => {
      heroProgress = self.progress;
      if (self.isActive) {
        activeSequence = 'hero';
      }
      requestRedraw();
    },
    onToggle: (self) => {
      if (self.isActive) {
        activeSequence = 'hero';
      } else if (self.progress === 1) {
        activeSequence = 'static';
      } else if (self.progress === 0) {
        activeSequence = 'hero';
        heroProgress = 0;
      }
      requestRedraw();
    }
  });

  // Pin & Scrub Contact Lighting (Seq 02)
  ScrollTrigger.create({
    trigger: "#lightingTrigger",
    start: "top top",
    end: "bottom bottom",
    pin: "#lightingPinContainer",
    scrub: 0.1,
    onUpdate: (self) => {
      contactProgress = self.progress;
      if (self.isActive) {
        activeSequence = 'lighting';
      } else if (self.progress === 1) {
        activeSequence = 'lighting';
        contactProgress = 1;
      }
      requestRedraw();
    },
    onToggle: (self) => {
      if (self.isActive) {
        activeSequence = 'lighting';
      } else if (self.progress === 0) {
        activeSequence = 'static';
      } else if (self.progress === 1) {
        activeSequence = 'lighting';
        contactProgress = 1;
      }
      requestRedraw();
    }
  });

  // Reveal Animations Binders
  const reveals = document.querySelectorAll(".reveal-up, .reveal-blur, .reveal-scale, .reveal-fade");
  reveals.forEach((el) => {
    let config = {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      duration: 1.2,
      ease: "power2.out",
      opacity: 1
    };
    
    if (el.classList.contains("reveal-up")) {
      config.y = 0;
    } else if (el.classList.contains("reveal-blur")) {
      config.filter = "blur(0px)";
    } else if (el.classList.contains("reveal-scale")) {
      config.scale = 1;
    }
    
    gsap.to(el, config);
  });
}

// --- 5. E-Commerce Cart Logic ---
let cart = [];
const bagSidebar = document.getElementById("bagSidebar");
const toggleBagBtn = document.getElementById("toggleBagBtn");
const closeBagBtn = document.getElementById("closeBagBtn");
const checkoutBtn = document.getElementById("bagCheckoutBtn");
const bulkInquiryBtn = document.getElementById("bagBulkInquiryBtn");

function loadCart() {
  const saved = localStorage.getItem("yala_cart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch (e) {
      cart = [];
    }
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("yala_cart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, qty) {
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity = Math.min(5, existing.quantity + qty);
  } else {
    cart.push({ productId, quantity: qty });
  }
  saveCart();
  showToast(currentLang === "en" ? "Added to bag" : "Agregado a la bolsa");
  bagSidebar.classList.add("active");
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
}

function updateCartUI() {
  const itemsList = document.getElementById("bagItemsList");
  const bagCount = document.getElementById("bagCount");
  const bagSubtotal = document.getElementById("bagSubtotal");
  const bulkAlert = document.getElementById("bagBulkAlert");
  
  itemsList.innerHTML = '';
  
  let totalQty = 0;
  let subtotal = 0;
  
  if (cart.length === 0) {
    itemsList.innerHTML = `<p class="bag-empty-text">${currentLang === "en" ? "Your bag is empty" : "Tu bolsa está vacía"}</p>`;
  } else {
    cart.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return;
      
      const itemSubtotal = product.price * item.quantity;
      subtotal += itemSubtotal;
      totalQty += item.quantity;
      
      const itemEl = document.createElement("div");
      itemEl.className = "bag-item";
      itemEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="bag-item-img">
        <div class="bag-item-details">
          <h4 class="bag-item-title">${product.name}</h4>
          <span class="bag-item-aroma">${currentLang === "en" ? product.aromaLabel.en : product.aromaLabel.es}</span>
          <div class="bag-item-bottom">
            <span class="bag-item-qty">${currentLang === "en" ? 'Qty' : 'Cant'}: ${item.quantity}</span>
            <span class="bag-item-price">$${itemSubtotal.toFixed(2)}</span>
            <button class="bag-item-remove clickable" data-id="${product.id}">${currentLang === "en" ? 'Remove' : 'Eliminar'}</button>
          </div>
        </div>
      `;
      
      itemEl.querySelector(".bag-item-remove").addEventListener("click", () => {
        removeFromCart(product.id);
      });
      
      itemsList.appendChild(itemEl);
    });
  }
  
  bagCount.textContent = totalQty;
  bagSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  
  if (totalQty > 5) {
    bulkAlert.style.display = 'block';
    bulkInquiryBtn.style.display = 'block';
    checkoutBtn.style.display = 'none';
  } else {
    bulkAlert.style.display = 'none';
    bulkInquiryBtn.style.display = 'none';
    checkoutBtn.style.display = cart.length > 0 ? 'block' : 'none';
  }
}

// Checkout (WhatsApp Integration)
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;
  
  let msg = `Hello YALA,\n\nI would like to order:\n\n`;
  let grandTotal = 0;
  
  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      const itemTotal = product.price * item.quantity;
      grandTotal += itemTotal;
      msg += `* ${product.name}\n  Quantity: ${item.quantity}\n  Unit Price: $${product.price}\n  Total: $${itemTotal}\n\n`;
    }
  });
  
  msg += `Grand Total: $${grandTotal}\n\nPlease confirm availability.\nThank you.`;
  
  const encodedMsg = encodeURIComponent(msg);
  window.open(`https://wa.me/13464020000?text=${encodedMsg}`, '_blank');
});

bulkInquiryBtn.addEventListener("click", () => {
  bagSidebar.classList.remove("active");
  openBulkInquiryModal();
});

toggleBagBtn.addEventListener("click", () => bagSidebar.classList.add("active"));
closeBagBtn.addEventListener("click", () => bagSidebar.classList.remove("active"));

document.addEventListener("click", (e) => {
  if (bagSidebar.classList.contains("active") && 
      !bagSidebar.contains(e.target) && 
      !toggleBagBtn.contains(e.target) && 
      !e.target.closest(".modal-overlay") && 
      !e.target.closest(".product-card") &&
      !e.target.closest("#modalAddToBagBtn") &&
      !e.target.closest(".bag-item-remove")) {
    bagSidebar.classList.remove("active");
  }
});

// --- 6. Product Detail Modals ---
let currentModalProductId = null;
let currentModalQty = 1;

const detailsModal = document.getElementById("detailsModalOverlay");
const closeDetailsBtn = document.getElementById("closeDetailsModalBtn");
const modalQtyMinus = document.getElementById("modalQtyMinus");
const modalQtyPlus = document.getElementById("modalQtyPlus");
const modalAddToBag = document.getElementById("modalAddToBagBtn");
const modalWholesale = document.getElementById("modalWholesaleBtn");

function openDetailsModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  currentModalProductId = productId;
  currentModalQty = 1;
  updateModalQtyDisplay();
  
  document.getElementById("modalProductTitle").textContent = product.name;
  document.getElementById("modalProductCategory").textContent = currentLang === "en" ? product.categoryLabel.en : product.categoryLabel.es;
  document.getElementById("modalProductAromaText").textContent = currentLang === "en" ? product.aromaLabel.en : product.aromaLabel.es;
  document.getElementById("modalProductAromaDot").style.backgroundColor = product.aromaColor;
  document.getElementById("modalProductPrice").textContent = `$${product.price.toFixed(2)}`;
  document.getElementById("modalProductDesc").textContent = currentLang === "en" ? product.desc.en : product.desc.es;
  
  const mainImg = document.getElementById("modalProductImg");
  mainImg.src = product.image;
  
  const thumbContainer = document.getElementById("modalThumbnails");
  thumbContainer.innerHTML = '';
  
  product.thumbnails.forEach((thumbSrc, index) => {
    const thumb = document.createElement("img");
    thumb.src = thumbSrc;
    thumb.alt = `${product.name} detail ${index + 1}`;
    thumb.className = `modal-thumb clickable ${index === 0 ? 'active' : ''}`;
    
    thumb.addEventListener("click", () => {
      mainImg.src = thumbSrc;
      thumbContainer.querySelectorAll(".modal-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
    
    thumbContainer.appendChild(thumb);
  });
  
  detailsModal.classList.add("active");
}

function closeDetailsModal() {
  detailsModal.classList.remove("active");
  currentModalProductId = null;
}

function updateModalQtyDisplay() {
  document.getElementById("modalQtyVal").textContent = currentModalQty;
  if (currentModalQty > 5) {
    modalAddToBag.style.display = 'none';
    modalWholesale.style.display = 'block';
  } else {
    modalAddToBag.style.display = 'block';
    modalWholesale.style.display = 'none';
  }
}

modalQtyMinus.addEventListener("click", () => {
  if (currentModalQty > 1) {
    currentModalQty--;
    updateModalQtyDisplay();
  }
});

modalQtyPlus.addEventListener("click", () => {
  currentModalQty++;
  updateModalQtyDisplay();
});

modalAddToBag.addEventListener("click", () => {
  if (currentModalProductId) {
    addToCart(currentModalProductId, currentModalQty);
    closeDetailsModal();
  }
});

modalWholesale.addEventListener("click", () => {
  closeDetailsModal();
  openBulkInquiryModal();
});

closeDetailsBtn.addEventListener("click", closeDetailsModal);
detailsModal.addEventListener("click", (e) => {
  if (e.target === detailsModal) closeDetailsModal();
});

// --- 7. Wholesale Inquiry Form Modal ---
const bulkModal = document.getElementById("bulkInquiryModalOverlay");
const closeBulkBtn = document.getElementById("closeInquiryModalBtn");
const bulkForm = document.getElementById("bulkInquiryForm");

function openBulkInquiryModal() {
  bulkForm.reset();
  bulkModal.classList.add("active");
}

function closeBulkInquiryModal() {
  bulkModal.classList.remove("active");
}

closeBulkBtn.addEventListener("click", closeBulkInquiryModal);
bulkModal.addEventListener("click", (e) => {
  if (e.target === bulkModal) closeBulkInquiryModal();
});

bulkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("inquiry-name").value;
  const email = document.getElementById("inquiry-email").value;
  const phone = document.getElementById("inquiry-phone").value;
  const qty = document.getElementById("inquiry-qty").value;
  const notes = document.getElementById("inquiry-notes").value;
  
  let msg = `Hello YALA,\n\nI would like to request a Wholesale Quote:\n\n`;
  msg += `* Name: ${name}\n`;
  msg += `* Email: ${email}\n`;
  msg += `* Phone: ${phone}\n`;
  msg += `* Estimated Quantity: ${qty} units\n`;
  if (notes) {
    msg += `* Custom Requirements: ${notes}\n`;
  }
  msg += `\nPlease provide availability and pricing details. Thank you.`;
  
  const encodedMsg = encodeURIComponent(msg);
  window.open(`https://wa.me/13464020000?text=${encodedMsg}`, '_blank');
  
  showToast(currentLang === "en" ? "Gifting request compiled" : "Solicitud de mayoreo compilada");
  closeBulkInquiryModal();
});

// --- 8. Contact Form Integration ---
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;
  
  let msg = `Hello YALA,\n\nI have a general inquiry:\n\n`;
  msg += `* Name: ${name}\n`;
  msg += `* Email: ${email}\n`;
  msg += `* Message: ${message}\n`;
  
  const encodedMsg = encodeURIComponent(msg);
  window.open(`https://wa.me/13464020000?text=${encodedMsg}`, '_blank');
  
  showToast(currentLang === "en" ? "Inquiry compiled" : "Consulta compilada");
  contactForm.reset();
});

// --- 9. Catalog Dynamic Rendering & Filters ---
function renderCatalog() {
  const urnGrid = document.getElementById("urnCatalogGrid");
  const eggGrid = document.getElementById("eggCatalogGrid");
  if (!urnGrid || !eggGrid) return;
  
  urnGrid.innerHTML = '';
  eggGrid.innerHTML = '';
  
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card clickable reveal-blur";
    card.style.opacity = 1;
    card.style.filter = "blur(0px)";
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
      </div>
      <div class="product-card-info">
        <span class="product-card-category">${currentLang === "en" ? p.categoryLabel.en : p.categoryLabel.es}</span>
        <h3 class="product-card-title">${p.name}</h3>
        <div class="product-card-aroma">
          <span class="aroma-dot" style="background-color: ${p.aromaColor};"></span>
          <span>${currentLang === "en" ? p.aromaLabel.en : p.aromaLabel.es}</span>
        </div>
        <div class="product-card-footer">
          <span class="product-card-price">$${p.price.toFixed(2)}</span>
          <button class="product-card-cta clickable">${currentLang === "en" ? 'Discover Details' : 'Ver Detalles'}</button>
        </div>
      </div>
    `;
    
    card.addEventListener("click", () => openDetailsModal(p.id));
    
    if (p.category === 'luxury') {
      urnGrid.appendChild(card);
    } else if (p.category === 'egg') {
      eggGrid.appendChild(card);
    }
  });
}

// --- 10. Translation Manager ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("yala_lang", lang);
  
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.id.includes(lang)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  
  renderCatalog();
  updateCartUI();
  
  // Input Placeholders
  const nameInput = document.getElementById("contact-name");
  if (nameInput) nameInput.placeholder = lang === "en" ? "Aria Vance" : "Aria Vance";
  
  const emailInput = document.getElementById("contact-email");
  if (emailInput) emailInput.placeholder = lang === "en" ? "aria@example.com" : "aria@correo.com";
  
  const msgInput = document.getElementById("contact-message");
  if (msgInput) msgInput.placeholder = lang === "en" ? "Tell us about the atmosphere you want to create..." : "Cuéntanos sobre la atmósfera que deseas crear...";
  
  const bulkName = document.getElementById("inquiry-name");
  if (bulkName) bulkName.placeholder = lang === "en" ? "Alexandra Sterling" : "Alejandra Sterling";
  
  const bulkEmail = document.getElementById("inquiry-email");
  if (bulkEmail) bulkEmail.placeholder = lang === "en" ? "alex@sterlingwellness.com" : "alejandra@sterlingwellness.com";
}

document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
document.getElementById("lang-es").addEventListener("click", () => setLanguage("es"));
document.getElementById("mobile-lang-en").addEventListener("click", () => {
  setLanguage("en");
  toggleMobileMenu(false);
});
document.getElementById("mobile-lang-es").addEventListener("click", () => {
  setLanguage("es");
  toggleMobileMenu(false);
});

// --- 11. Custom Micro-Interactions & Nav Bar scroll ---
const menuToggle = document.getElementById("menuToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
const cursor = document.getElementById("customCursor");
const cursorDot = document.getElementById("customCursorDot");

function toggleMobileMenu(forceState) {
  const willOpen = typeof forceState === 'boolean' ? forceState : !mobileDrawer.classList.contains("active");
  if (willOpen) {
    mobileDrawer.classList.add("active");
    menuToggle.classList.add("active");
    menuToggle.children[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    menuToggle.children[1].style.opacity = "0";
    menuToggle.children[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
  } else {
    mobileDrawer.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.children[0].style.transform = "none";
    menuToggle.children[1].style.opacity = "1";
    menuToggle.children[2].style.transform = "none";
  }
}

menuToggle.addEventListener("click", () => toggleMobileMenu());
document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", () => toggleMobileMenu(false));
});

// Cursor
if (cursor && cursorDot) {
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, overwrite: "auto" });
    gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.02, overwrite: "auto" });
  });

  const bindCursorHovers = () => {
    document.querySelectorAll("a, button, select, input, textarea, .clickable, .product-card").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
    });
  };
  
  bindCursorHovers();
  const observer = new MutationObserver(bindCursorHovers);
  observer.observe(document.body, { childList: true, subtree: true });
}

// Nav Header states & highlights
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 150;
  const header = document.getElementById("mainHeader");
  
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
  
  document.querySelectorAll(".nav-link").forEach(link => {
    const refElement = document.querySelector(link.getAttribute("href"));
    if (refElement) {
      const top = refElement.offsetTop;
      const height = refElement.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
});

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  
  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        otherItem.querySelector(".faq-answer").style.maxHeight = null;
      }
    });
    
    if (isActive) {
      item.classList.remove("active");
      question.setAttribute("aria-expanded", "false");
      answer.style.maxHeight = null;
    } else {
      item.classList.add("active");
      question.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Toast Notifications System
function showToast(message) {
  let toast = document.getElementById("customToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "customToast";
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%) translateY(100px)";
    toast.style.background = "rgba(5, 29, 43, 0.85)";
    toast.style.backdropFilter = "blur(16px)";
    toast.style.border = "1px solid rgba(255, 255, 255, 0.15)";
    toast.style.color = "#ffffff";
    toast.style.padding = "14px 28px";
    toast.style.borderRadius = "30px";
    toast.style.zIndex = "9999";
    toast.style.fontFamily = "var(--font-secondary)";
    toast.style.fontSize = "12px";
    toast.style.letterSpacing = "0.08em";
    toast.style.textTransform = "uppercase";
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    toast.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease";
    toast.style.opacity = "0";
    toast.style.pointerEvents = "none";
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.style.transform = "translateX(-50%) translateY(0)";
  toast.style.opacity = "1";
  
  setTimeout(() => {
    toast.style.transform = "translateX(-50%) translateY(100px)";
    toast.style.opacity = "0";
  }, 3000);
}

// --- 12. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  resizeCanvas();
  // Preload frames progressively
  preloadInitialFrames(() => {
    canvasReady = true;
    requestRedraw();
    initGSAPScroll();
  });
  
  // Load local state
  setLanguage(currentLang);
  loadCart();
});

// Window resize event listener to update resolution dynamically
window.addEventListener("resize", resizeCanvas);
