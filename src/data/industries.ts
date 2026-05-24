import {
  Package, FlaskConical, Factory, Stethoscope,
  BarChart3, Wrench, Settings, GraduationCap,
  AlertCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IndustryPainPoint {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface IndustrySolution {
  title: string;
  desc: string;
}

export interface IndustryKPI {
  number: string;
  label: string;
}

export interface IndustryTestimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface IndustryData {
  slug: string;
  label: string;
  icon: LucideIcon;
  image: string;
  tagline: string;
  desc: string;
  headline: string;
  subtext: string;
  painPoints: IndustryPainPoint[];
  solutions: IndustrySolution[];
  kpis: IndustryKPI[];
  testimonial: IndustryTestimonial;
  metaDesc: string;
}

export const industries: IndustryData[] = [
  {
    slug: "fmcg",
    label: "FMCG",
    icon: Package,
    image: "/images/fmcg.jpg",
    tagline: "Streamline distribution, ensure compliance, scale fast",
    desc: "End-to-end ERP for FMCG — batch management, expiry tracking, and multi-channel distribution.",
    headline: "FMCG Operations Without the Chaos",
    subtext:
      "From raw materials to retail shelf, LiteLink ERP tracks every batch, manages distributor networks, and ensures compliance with FSSAI and GST requirements.",
    painPoints: [
      {
        icon: AlertCircle,
        title: "Complex multi-channel distribution",
        desc: "Managing thousands of SKUs across distributors, modern trade, and e-commerce simultaneously leads to overselling, stockouts, and margin erosion.",
      },
      {
        icon: AlertCircle,
        title: "Batch expiry & compliance management",
        desc: "FSSAI batch traceability and expiry management done manually causes recalls, regulatory fines, and damaged brand trust.",
      },
      {
        icon: AlertCircle,
        title: "Demand forecasting & stockout prevention",
        desc: "Seasonal demand spikes and inaccurate forecasting force either overstocking (cash trapped) or stockouts (lost sales).",
      },
    ],
    solutions: [
      {
        title: "Unified distributor & channel management",
        desc: "Manage all channels — distributors, retailers, online — from one real-time dashboard with auto stock reconciliation.",
      },
      {
        title: "Automated batch & expiry tracking",
        desc: "Assign batch numbers automatically, receive expiry alerts, and generate FSSAI-ready traceability reports in one click.",
      },
      {
        title: "AI-powered demand forecasting",
        desc: "ML-based demand signals reduce forecasting error by up to 40%, ensuring optimal stock at every node in the network.",
      },
    ],
    kpis: [
      { number: "35%", label: "Fewer stockouts" },
      { number: "50%", label: "Faster compliance reporting" },
      { number: "2×", label: "Distributor visibility" },
    ],
    testimonial: {
      quote:
        "We cut monthly distributor reconciliation from 4 days to half a day. LiteLink's FMCG module understood our exact workflows without customization.",
      name: "Rajesh Mehta",
      role: "COO",
      company: "Sunrise FMCG Ltd",
      initials: "RM",
    },
    metaDesc:
      "LiteLink ERP for FMCG — batch management, expiry tracking, distributor management, and FSSAI compliance for Indian FMCG companies.",
  },
  {
    slug: "chemical",
    label: "Chemical",
    icon: FlaskConical,
    image: "/images/chemical.jpg",
    tagline: "Hazmat compliance, batch traceability, and regulatory reporting",
    desc: "Chemical industry ERP with hazardous material compliance, batch traceability, and safety documentation.",
    headline: "Safety-First Chemical Operations",
    subtext:
      "Manage hazardous materials, maintain MSDS documentation, track batch genealogy, and stay ahead of CPCB, BIS, and export-import regulations.",
    painPoints: [
      {
        icon: AlertCircle,
        title: "Hazmat compliance across storage & transport",
        desc: "Manual tracking of hazardous material classifications, storage requirements, and transport regulations creates serious liability exposure.",
      },
      {
        icon: AlertCircle,
        title: "Batch genealogy & traceability",
        desc: "In the event of a quality incident, tracing back through raw material lots to finished goods takes days with paper-based systems.",
      },
      {
        icon: AlertCircle,
        title: "Regulatory reporting burden",
        desc: "CPCB returns, BIS certification tracking, and export documentation require significant manual effort and prone to errors.",
      },
    ],
    solutions: [
      {
        title: "Integrated hazmat management",
        desc: "Classify materials automatically, attach MSDS documents, and enforce storage and handling rules system-wide.",
      },
      {
        title: "End-to-end batch genealogy",
        desc: "Complete forward and backward traceability from raw material receipt to final dispatch in seconds, not days.",
      },
      {
        title: "Automated regulatory reporting",
        desc: "Pre-built templates for CPCB returns, BIS compliance tracking, and export documentation reduce filing time by 60%.",
      },
    ],
    kpis: [
      { number: "60%", label: "Less regulatory prep time" },
      { number: "<2 min", label: "Full batch trace" },
      { number: "100%", label: "Audit readiness" },
    ],
    testimonial: {
      quote:
        "Our CPCB compliance filings used to take a week. LiteLink generates the complete return in under 30 minutes. The hazmat module alone justified the investment.",
      name: "Priya Sharma",
      role: "Compliance Head",
      company: "ChemCo Industries",
      initials: "PS",
    },
    metaDesc:
      "LiteLink ERP for Chemical industry — hazmat compliance, batch traceability, CPCB/BIS regulatory reporting, and safety documentation management.",
  },
  {
    slug: "plastic",
    label: "Plastic",
    icon: Factory,
    image: "/images/plastic.jpg",
    tagline: "Precision manufacturing for plastics — from granule to finished goods",
    desc: "Plastic manufacturing ERP with raw material tracking, production scheduling, and quality control.",
    headline: "Precision Manufacturing for Plastics",
    subtext:
      "Track polymer grades from warehouse to machine, manage production runs with recipe-level detail, and enforce quality specs at every stage.",
    painPoints: [
      {
        icon: AlertCircle,
        title: "Raw material grade & lot tracking",
        desc: "Multiple polymer grades, additives, and masterbatches without systematic tracking leads to mix-ups, rejects, and customer complaints.",
      },
      {
        icon: AlertCircle,
        title: "Production scheduling inefficiency",
        desc: "Machine changeovers, colour sequencing, and cavity-count optimisation done manually results in 15–25% production capacity waste.",
      },
      {
        icon: AlertCircle,
        title: "Quality control at each stage",
        desc: "Inline quality checks tracked on paper mean defects are caught late, increasing rework costs and customer returns.",
      },
    ],
    solutions: [
      {
        title: "Material-level lot tracking",
        desc: "Track every polymer grade, additive, and lot from GRN to finished goods with full forward/backward traceability.",
      },
      {
        title: "Optimised production scheduling",
        desc: "Machine-aware scheduling that accounts for changeover sequences, colour runs, and cavity availability reduces idle time by up to 20%.",
      },
      {
        title: "Inline quality checkpoints",
        desc: "Digital quality gates at each production stage capture dimensions, visual checks, and physical tests — with instant reject flagging.",
      },
    ],
    kpis: [
      { number: "20%", label: "More production capacity" },
      { number: "45%", label: "Fewer customer returns" },
      { number: "Real-time", label: "Lot traceability" },
    ],
    testimonial: {
      quote:
        "Colour sequencing used to be a nightmare — we'd lose entire shifts to bad changeovers. LiteLink's scheduler cut our changeover waste by 22% in the first month.",
      name: "Amit Patel",
      role: "Plant Manager",
      company: "PolyForm Industries",
      initials: "AP",
    },
    metaDesc:
      "LiteLink ERP for Plastic manufacturing — polymer lot tracking, production scheduling, inline quality control, and mould management.",
  },
  {
    slug: "pharma",
    label: "Pharmaceuticals",
    icon: Stethoscope,
    image: "/images/pharma.jpg",
    tagline: "End-to-end pharma compliance with zero compromise",
    desc: "Pharmaceutical ERP with Schedule M compliance, batch recall management, and cold-chain monitoring.",
    headline: "Pharma Compliance at Every Stage",
    subtext:
      "Meet Schedule M (Revised), 21 CFR Part 11, and WHO GMP requirements with a purpose-built ERP that treats compliance as a first-class feature.",
    painPoints: [
      {
        icon: AlertCircle,
        title: "Schedule M & GMP compliance gaps",
        desc: "Maintaining equipment logs, calibration records, and SOP adherence across multiple production lines manually creates audit risk and potential recall liability.",
      },
      {
        icon: AlertCircle,
        title: "Cold-chain integrity management",
        desc: "Temperature excursions during storage or transport that aren't caught in real time result in product loss and regulatory action.",
      },
      {
        icon: AlertCircle,
        title: "Batch recall readiness",
        desc: "In the event of a quality failure, identifying all affected batches — from raw material through to patient — currently takes 48–72 hours.",
      },
    ],
    solutions: [
      {
        title: "Schedule M-aligned production workflows",
        desc: "Equipment logs, calibration schedules, SOP checklists, and deviation management built into every production step — audit-ready at all times.",
      },
      {
        title: "Integrated cold-chain monitoring",
        desc: "IoT sensor integration tracks temperature and humidity in real time, with automatic alerts and audit logs for any excursion.",
      },
      {
        title: "1-hour batch recall capability",
        desc: "Complete forward and backward batch genealogy enables a full recall trace in under 60 minutes, meeting CDSCO requirements.",
      },
    ],
    kpis: [
      { number: "<1 hr", label: "Full batch recall trace" },
      { number: "100%", label: "Audit trail coverage" },
      { number: "Zero", label: "Undetected cold-chain breaks" },
    ],
    testimonial: {
      quote:
        "Our last CDSCO audit was the smoothest in company history. The inspector was satisfied with our batch documentation within the first 30 minutes — because LiteLink had it all.",
      name: "Dr. Meena Iyer",
      role: "QA Director",
      company: "PharmaCore Ltd",
      initials: "MI",
    },
    metaDesc:
      "LiteLink ERP for Pharmaceuticals — Schedule M compliance, GMP workflows, cold-chain monitoring, and batch recall management for Indian pharma companies.",
  },
  {
    slug: "trading",
    label: "Trading",
    icon: BarChart3,
    image: "/images/trading.jpg",
    tagline: "Multi-location trading with a single unified view",
    desc: "Trading ERP with multi-location inventory, margin analysis, and supplier relationship management.",
    headline: "Multi-Location Trading, Unified View",
    subtext:
      "Whether you trade in one city or across India, LiteLink gives you real-time stock visibility, margin intelligence, and supplier performance in a single pane of glass.",
    painPoints: [
      {
        icon: AlertCircle,
        title: "Multi-location inventory blind spots",
        desc: "Stock spread across warehouses and branches managed in siloed spreadsheets leads to inter-branch transfers being missed and capital locked in the wrong locations.",
      },
      {
        icon: AlertCircle,
        title: "Margin leakage & pricing discipline",
        desc: "Without real-time landed cost and margin visibility, salespeople give ad-hoc discounts that silently destroy profit.",
      },
      {
        icon: AlertCircle,
        title: "Supplier performance tracking",
        desc: "On-time delivery rates, quality rejection rates, and payment terms across 50+ suppliers tracked manually creates negotiation disadvantages.",
      },
    ],
    solutions: [
      {
        title: "Real-time multi-location stock view",
        desc: "Unified inventory dashboard across all locations with inter-branch transfer requests, approvals, and stock rebalancing suggestions.",
      },
      {
        title: "Live margin dashboards",
        desc: "Landed cost calculation at order entry automatically shows margin percentage, flagging any deals below the minimum threshold.",
      },
      {
        title: "Supplier scorecards & negotiation data",
        desc: "Automatic tracking of delivery performance, rejection rates, and credit terms gives your procurement team leverage in supplier negotiations.",
      },
    ],
    kpis: [
      { number: "18%", label: "Better margins" },
      { number: "30%", label: "Inventory reduction" },
      { number: "Real-time", label: "Stock across all locations" },
    ],
    testimonial: {
      quote:
        "We used to have ₹2Cr of excess inventory locked up because we didn't know where stock was sitting. LiteLink paid for itself in the first quarter.",
      name: "Sanjay Gupta",
      role: "Managing Director",
      company: "Gupta Trading Co.",
      initials: "SG",
    },
    metaDesc:
      "LiteLink ERP for Trading companies — multi-location inventory, real-time margin analysis, supplier scorecards, and purchase order management.",
  },
  {
    slug: "engineering",
    label: "Engineering",
    icon: Wrench,
    image: "/images/engineering.jpg",
    tagline: "Engineer every detail, track every cost",
    desc: "Engineering ERP with project costing, BOM management, and preventive maintenance scheduling.",
    headline: "Engineer Every Detail, Track Every Cost",
    subtext:
      "Whether you manufacture custom components or deliver engineering projects, LiteLink connects BOM to cost to delivery so nothing falls through the cracks.",
    painPoints: [
      {
        icon: AlertCircle,
        title: "Project cost overruns",
        desc: "Engineering projects that start with a tight margin are eroded by untracked labour hours, material wastage, and late change orders.",
      },
      {
        icon: AlertCircle,
        title: "BOM complexity & version control",
        desc: "Multi-level BOMs with dozens of sub-assemblies managed in spreadsheets lead to production errors and costly rework.",
      },
      {
        icon: AlertCircle,
        title: "Unplanned equipment downtime",
        desc: "Reactive maintenance of critical machinery causes production stoppages that delay deliveries and damage customer relationships.",
      },
    ],
    solutions: [
      {
        title: "Real-time project cost tracking",
        desc: "Every labour hour, material consumption, and subcontract cost is posted to the project in real time — with variance alerts before budgets are breached.",
      },
      {
        title: "Multi-level BOM with version control",
        desc: "Manage complex assemblies with numbered revisions, engineering change orders, and automatic BOM explosion for MRP planning.",
      },
      {
        title: "Preventive maintenance scheduling",
        desc: "Automated maintenance schedules based on machine hours or calendar intervals reduce unplanned downtime by 35%.",
      },
    ],
    kpis: [
      { number: "35%", label: "Less unplanned downtime" },
      { number: "22%", label: "Better project margin" },
      { number: "Zero", label: "BOM version confusion" },
    ],
    testimonial: {
      quote:
        "We finally know the true cost of every job before we invoice. LiteLink's project module has transformed how we price and manage contracts.",
      name: "Vikram Nair",
      role: "CEO",
      company: "Precision Engg Works",
      initials: "VN",
    },
    metaDesc:
      "LiteLink ERP for Engineering — project cost tracking, multi-level BOM management, maintenance scheduling, and engineering change order management.",
  },
  {
    slug: "process-manufacturing",
    label: "Process Manufacturing",
    icon: Settings,
    image: "/images/process.jpg",
    tagline: "Recipe management, yield optimisation, full batch control",
    desc: "Process manufacturing ERP with recipe management, yield tracking, and production costing.",
    headline: "Process Manufacturing, Perfected",
    subtext:
      "For industries where the process IS the product — oils, paints, chemicals, food — LiteLink's recipe-based production engine gives you complete control over yield, cost, and quality.",
    painPoints: [
      {
        icon: AlertCircle,
        title: "Recipe deviations and yield loss",
        desc: "Without recipe lock-down and real-time yield monitoring, operators make ad-hoc adjustments that affect quality and inflate material costs.",
      },
      {
        icon: AlertCircle,
        title: "Batch costing inaccuracy",
        desc: "Allocating raw material, utilities, and labour costs to specific production batches manually produces unreliable product costing.",
      },
      {
        icon: AlertCircle,
        title: "Quality hold & release bottlenecks",
        desc: "Lab results waiting on paper forms hold up finished goods dispatch for days, creating cash flow and customer service problems.",
      },
    ],
    solutions: [
      {
        title: "Locked recipe management with substitutions",
        desc: "Define approved recipes with locked-down quantities, approve authorised substitutions with automatic cost impact analysis.",
      },
      {
        title: "Real-time batch costing",
        desc: "Material consumption, utility usage, and labour are allocated to each batch automatically, giving accurate product cost by batch.",
      },
      {
        title: "Digital quality hold & release",
        desc: "Lab results entered digitally trigger automatic hold/release workflows, cutting time-from-production to dispatch by 60%.",
      },
    ],
    kpis: [
      { number: "12%", label: "Better yield" },
      { number: "60%", label: "Faster QC release" },
      { number: "Exact", label: "Batch cost per unit" },
    ],
    testimonial: {
      quote:
        "LiteLink's recipe engine cut our material wastage by 14% in 90 days. The batch costing module finally tells us which products are actually profitable.",
      name: "Anand Krishnan",
      role: "Operations Director",
      company: "Sunrise Paints Ltd",
      initials: "AK",
    },
    metaDesc:
      "LiteLink ERP for Process Manufacturing — recipe management, yield tracking, batch costing, and quality hold/release for oil, paint, food, and chemical manufacturers.",
  },
  {
    slug: "education",
    label: "Education",
    icon: GraduationCap,
    image: "/images/education.jpg",
    tagline: "Modern ERP for modern education institutions",
    desc: "Education ERP with student lifecycle, fee management, timetable automation, and parent communication.",
    headline: "Modern ERP for Modern Education",
    subtext:
      "From admissions through alumni, LiteLink's education module streamlines every administrative process so your staff spends time on students, not spreadsheets.",
    painPoints: [
      {
        icon: AlertCircle,
        title: "Fee collection and defaulter tracking",
        desc: "Manual fee collection, instalment tracking, and defaulter follow-up across hundreds of students consumes enormous administrative bandwidth.",
      },
      {
        icon: AlertCircle,
        title: "Timetable conflicts and scheduling",
        desc: "Creating and updating timetables that satisfy teacher availability, room capacity, and curriculum requirements takes days of manual effort.",
      },
      {
        icon: AlertCircle,
        title: "Parent communication gaps",
        desc: "Parents want real-time visibility into attendance, results, and fees — without a digital platform, administrative staff are overwhelmed by calls and queries.",
      },
    ],
    solutions: [
      {
        title: "Automated fee management",
        desc: "Flexible instalment plans, online payment gateway, automated receipt generation, and defaulter reminders reduce collection time by 70%.",
      },
      {
        title: "Intelligent timetable generation",
        desc: "Auto-generate conflict-free timetables factoring in teacher availability, room capacity, and subject requirements in minutes, not days.",
      },
      {
        title: "Parent & student self-service portal",
        desc: "Mobile-accessible portal for fees, attendance, results, and announcements dramatically reduces administrative queries.",
      },
    ],
    kpis: [
      { number: "70%", label: "Faster fee collection" },
      { number: "90%", label: "Fewer admin queries" },
      { number: "Minutes", label: "To generate timetable" },
    ],
    testimonial: {
      quote:
        "Our admissions process used to involve 12 forms and 3 departments. LiteLink collapsed it into a single online flow. Parents love it, staff love it.",
      name: "Sister Mary Joseph",
      role: "Principal",
      company: "St. Xavier's Academy",
      initials: "MJ",
    },
    metaDesc:
      "LiteLink ERP for Education — student lifecycle management, automated fee collection, timetable scheduling, and parent communication portal.",
  },
];

export const getIndustry = (slug: string): IndustryData | undefined =>
  industries.find((i) => i.slug === slug);
