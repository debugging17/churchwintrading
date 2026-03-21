import { Beaker, Pill, Grape, Coffee, Leaf, ShoppingBag } from "lucide-react";

export const sectors = [
  { 
    icon: Beaker, 
    title: "Cosmetic Manufacturers", 
    desc: "Anti-aging serums, regenerative hair care, luxury body oils", 
    target: "R&D Directors, Procurement",
    strategicFit: "Churchwin provides R&D teams with Grade A botanical inputs that exceed EU/US consumer safety standards. Our focus is on maintaining the raw potency of African ingredients through cold-press stabilization.",
    features: ["REACH & IFRA Compliant", "Clinical-Grade Traceability", "Custom R&D Small-Batch Support"],
    commercialProof: {
      volume: "8.5 Tons / Month",
      activeBuyers: "22 Exclusive Labs",
      avgOrderValue: "$18K - $45K",
      revenueGrowth: "+42% YoY",
      moq: "500 Kg",
      leadTime: "10 Days"
    },
    subSegments: [
      { 
        title: "Anti-Aging Serums", 
        market: "Premium Skincare Brands", 
        solution: "High-purity Grade A Shea Butter with clinical-grade traceability.",
        details: "Eliminating the 'impurities bottleneck' in luxury serum production through our proprietary 3-stage filtration process.",
        image: "/images/visual_supremacy/shea_orchard.png" 
      },
      { 
        title: "Regenerative Hair Care", 
        market: "Professional Salons", 
        solution: "Custom Neem Oil infusions for scalp health and follicle strength.",
        details: "Moving beyond generic oils to standardized Neem extracts that guarantee consistent antimicrobial properties for salon-grade treatments.",
        image: "/images/visual_supremacy/cosmetic_rd_lab.png" 
      },
      { 
        title: "Luxury Body Oils", 
        market: "Spa Product Lines", 
        solution: "Cold-pressed Baobab oils for rapid absorption and moisture retention.",
        details: "Optimizing absorption rates through molecular-level refining that retains Vitamin E without the greasy residue typical of unrefined oils.",
        image: "/images/visual_supremacy/cosmetic_rd_lab.png" 
      }
    ]
  },
  { 
    icon: Pill, 
    title: "Nutraceutical & Supplements", 
    desc: "Immunity powders, green superfood blends, capsules", 
    target: "Product Dev Leads",
    strategicFit: "We transform wild-harvested botanicals into pharmaceutical-grade inputs. Standardized to 98% active compounds (HPLC Verified), we ensure your labels are backed by science and rigorous clinical data.",
    features: ["HPLC Verified Potency", "Zero-Additive Guarantee", "Organic & Kosher Certified"],
    commercialProof: {
      volume: "12 Tons / Month",
      activeBuyers: "14+ Global Brands",
      avgOrderValue: "$25K - $60K",
      revenueGrowth: "+28% QoQ",
      moq: "1 Ton",
      leadTime: "14 Days"
    },
    subSegments: [
      { 
        title: "Immunity Powders", 
        market: "Wellness Startups", 
        solution: "Bioavailable Moringa powder with standardized vitamin C content.",
        details: "Solving the 'Bioavailability Gap' with micronized grinding that increases absorption rates by 40% compared to traditional dry-milling.",
        image: "/images/visual_supremacy/compliance_lab.png" 
      },
      { 
        title: "Superfood Blends", 
        market: "Health Food Stores", 
        solution: "Direct-sourced Baobab pulp for high fiber and antioxidant density.",
        details: "Delivering a 'Whole-Plant' nutrient profile with 0% fillers—ideal for the growing 'Clean Label' consumer segment.",
        image: "/images/visual_supremacy/shea_orchard.png" 
      },
      { 
        title: "Capsule Formulations", 
        market: "Contract Manufacturers", 
        solution: "Fine-milled botanical powders optimized for automated encapsulation.",
        details: "Engineered for zero-clog performance in high-speed rotary capsule machines, reducing manufacturing downtime by up to 15%.",
        image: "/images/visual_supremacy/compliance_lab.png" 
      }
    ]
  },
  { 
    icon: Grape, 
    title: "Food & Beverage", 
    desc: "Vitamin C-enriched juices, energy bars, fortified cereals", 
    target: "Supply Chain Heads",
    strategicFit: "Churchwin solves the 'Missing Middle' in the global supply chain by aggregating production from 11 women-led cooperatives into institutional volumes for the world's largest CPG brands.",
    features: ["12-Month Price Stability", "Mass-Scale Fortification Support", "ESG Impact Reporting Included"],
    commercialProof: {
      volume: "45 Tons / Quarter",
      activeBuyers: "3 Tier-1 CPG Brands",
      avgOrderValue: "$120K",
      revenueGrowth: "+15% MoM",
      moq: "5 Tons",
      leadTime: "21 Days"
    },
    subSegments: [
      { 
        title: "Wellness Juices", 
        market: "Functional Beverage Brands", 
        solution: "100% soluble Hibiscus and Baobab concentrates for clean labels.",
        details: "Removing artificial dyes from beverage production by replacing them with high-anthocyanin Hibiscus concentrates that stay stable at low pH.",
        image: "/images/visual_supremacy/luxury_wellness_juice.png" 
      },
      { 
        title: "Energy Bars", 
        market: "Sports Nutrition", 
        solution: "Whole grain inclusions and natural African honey binders.",
        details: "Replacing corn-syrup binders with low-glycemic African honey, providing a natural sustain-release energy profile for endurance athletes.",
        image: "/images/visual_supremacy/industrial_wholesaler.png" 
      },
      { 
        title: "Fortified Cereals", 
        market: "Large Scale CPG", 
        solution: "Micro-nutrient dense Moringa fortification for mass-market availability.",
        details: "Implementing cost-effective nutrition fortification that meets WHO benchmarks for school-feeding programs and mass-market retail.",
        image: "/images/visual_supremacy/industrial_wholesaler.png" 
      }
    ]
  },
  { 
    icon: Coffee, 
    title: "Global Tea Brands", 
    desc: "Detox tea blends, herbal infusions, wellness sachets", 
    target: "Master Blenders",
    strategicFit: "Our botanicals are harvested at peak potency and solar-dried to retain volatile oils. We provide master blenders with the raw material consistency required for global SKU uniformity.",
    features: ["Solar-Dried Quality Control", "Master Blender Grade Selection", "Direct-Origin Sustainability"],
    commercialProof: {
      volume: "6 Tons / Month",
      activeBuyers: "12 Boutique Tea Houses",
      avgOrderValue: "$12K - $28K",
      revenueGrowth: "+35% YoY",
      moq: "250 Kg",
      leadTime: "7 Days"
    },
    subSegments: [
      { 
        title: "Detox Blends", 
        market: "Luxury Tea Houses", 
        solution: "Premium dried Moringa and Lemongrass for metabolic support.",
        details: "Curating leaf-cut consistency to ensure perfect infusion timing and visual appeal in luxury pyramid sachets.",
        image: "/images/visual_supremacy/solar_drying_tea.png" 
      },
      { 
        title: "Herbal Infusions", 
        market: "Hospitality Industry", 
        solution: "Single-origin herbal teas with documented ethno-botanical heritage.",
        details: "Providing the 'Origin Narrative' that allows hotels to market premium wellness experiences rather than just tea.",
        image: "/images/visual_supremacy/shea_orchard.png" 
      },
      { 
        title: "Wellness Sachets", 
        market: "Airport Retail", 
        solution: "Retail-ready pyramids containing high-antioxidant West African blends.",
        details: "Solving the 'Portability' challenge with standardized blends that maintain their aromatic profile even in varied water temperatures.",
        image: "/images/visual_supremacy/retail_boutique.png" 
      }
    ]
  },
  { 
    icon: Leaf, 
    title: "Luxury Hospitality & Spas", 
    desc: "Branded guest amenities, professional massage oils", 
    target: "Spa Directors, GMs",
    strategicFit: "We turn 'commoditized oil' into a 'wellness ritual'. Our ingredients come with the storytelling assets and traceability maps that luxury guests demand as part of their experience.",
    features: ["White-Label Ready Formulations", "Traceability QR-Code Support", "Low-Minimum Order Quantities"],
    commercialProof: {
      volume: "3,500 Units / Month",
      activeBuyers: "18 Boutique Hotels",
      avgOrderValue: "$4.5K - $12K",
      revenueGrowth: "+55% YoY",
      moq: "50 Units",
      leadTime: "5 Days"
    },
    subSegments: [
      { 
        title: "Guest Amenities", 
        market: "Boutique Hotels", 
        solution: "Bespoke miniature Black Soap and Shea Butter sets with custom scenting.",
        details: "Helping boutique brands differentiate with 'Zero-Plastic' solid amenities that tell the story of the 11 women-led Ghanaian cooperatives.",
        image: "/images/visual_supremacy/retail_boutique.png" 
      },
      { 
        title: "Professional Massage Oils", 
        market: "Wellness Resorts", 
        solution: "Gallon-size cold-pressed Shea and Neem oils for therapeutic use.",
        details: "Eliminating paraffin-base fillers from spa rotations with 100% active, medical-grade African botanicals.",
        image: "/images/visual_supremacy/spa_oil_ritual.png" 
      },
      { 
        title: "In-Room Rituals", 
        market: "High-end Lodges", 
        solution: "Curated 'Origin Stories' kits with application rituals for guest engagement.",
        details: "Increasing spa retail revenue by up to 22% through integrated 'Experience-to-Retail' product kits.",
        image: "/images/visual_supremacy/shea_orchard.png" 
      }
    ]
  },
  { 
    icon: ShoppingBag, 
    title: "Supermarket Private Labels", 
    desc: "\"Organic/Ethnic\" aisle house-brand oils & powders", 
    target: "Category Managers",
    strategicFit: "We provide the scale and compliance required for tier-1 retail house brands. Our infrastructure allows grocers to capture the 'Organic Specialty' premium without the supply-chain risk.",
    features: ["GFSI & BRC Compliance Ready", "VMI (Vendor Managed Inventory)", "Direct Export Logistics"],
    commercialProof: {
      volume: "80 Tons / Year",
      activeBuyers: "2 Major Retailers",
      avgOrderValue: "$210K",
      revenueGrowth: "+12% MoM",
      moq: "10 Tons",
      leadTime: "28 Days"
    },
    subSegments: [
      { 
        title: "Organic Aisle", 
        market: "Major Grocers", 
        solution: "Certified organic bulk supply for house-label packing and branding.",
        details: "Securing the 'Organic Aisle' margin with a direct-from-cooperative model that cuts out three levels of middlemen.",
        image: "/images/visual_supremacy/organic_retail_aisle.png" 
      },
      { 
        title: "Ethnic Specialty", 
        market: "International Distributors", 
        solution: "Authentic West African ingredients with export-grade packaging compliance.",
        details: "Bypassing the 'Export-Failure' risk with standardized packaging that meets EU customs labeling requirements on day one.",
        image: "/images/visual_supremacy/industrial_wholesaler.png" 
      },
      { 
        title: "Health & Beauty Section", 
        market: "Value Retailers", 
        solution: "High-volume, cost-effective Shea and Black Soap for mass retail lines.",
        details: "Delivering institutional scale to the value-retail sector without sacrificing the 'Authenticity' narrative that drives sales.",
        image: "/images/visual_supremacy/retail_boutique.png" 
      }
    ]
  },
];
