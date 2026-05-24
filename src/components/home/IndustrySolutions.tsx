import { useState } from "react";
import { Hotel, Dumbbell, Stethoscope, Factory, Package, Plane, Truck, Bus, LayoutGrid, Wallet, GraduationCap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { DetailModal, DetailItem } from "@/components/DetailModal";

const solutions: DetailItem[] = [
  {
    icon: LayoutGrid,
    label: "Complete ERP",
    tagline: "One platform. Every department. Zero compromise.",
    desc: "End-to-end enterprise resource planning for any industry.",
    description: "LiteLink ERP is a fully unified platform that connects Finance, HR, Sales, Inventory, Manufacturing, and more into a single source of truth. Eliminate data silos and give every team real-time visibility across the business.",
    highlights: [
      "16 integrated modules — Finance, HR, Sales, Inventory & beyond",
      "Role-based access control with granular permissions",
      "Multi-company and multi-currency support out of the box",
      "AI-powered forecasting and analytics dashboards",
      "Visual workflow builder for cross-department automation",
      "Available on web, mobile, and offline-capable apps",
    ],
    badge: "Flagship",
    highlight: true,
  },
  {
    icon: Hotel,
    label: "Hotel Management",
    tagline: "Seamless stays from check-in to check-out.",
    desc: "Reservations, housekeeping, billing, and guest experience in one system.",
    description: "A purpose-built Property Management System (PMS) that automates the entire hotel workflow — from online booking and front-desk operations to housekeeping schedules and guest billing.",
    highlights: [
      "Drag-and-drop room booking calendar with availability view",
      "OTA channel manager (Booking.com, Expedia, Airbnb sync)",
      "Automated housekeeping task assignment and status tracking",
      "Restaurant and spa billing integrated into the guest folio",
      "Guest loyalty programme and repeat-visit history",
      "Night-audit automation and daily revenue reports",
    ],
  },
  {
    icon: Stethoscope,
    label: "Hospital",
    tagline: "Patient-first care powered by smart systems.",
    desc: "Patient records, appointments, pharmacy, and billing.",
    description: "An end-to-end Hospital Information System (HIS) that digitises clinical and administrative workflows — reducing paperwork, minimising errors, and improving patient outcomes.",
    highlights: [
      "OPD & IPD patient registration and EMR management",
      "Appointment scheduling with doctor availability calendars",
      "In-house pharmacy inventory and prescription dispensing",
      "Diagnostic lab order management and result reporting",
      "Insurance claim processing and cashless billing",
      "Ward and bed management with real-time occupancy view",
    ],
  },
  {
    icon: Factory,
    label: "Manufacturing",
    tagline: "From raw material to finished goods — fully tracked.",
    desc: "Production planning, BOM, shop-floor control, and quality management.",
    description: "A manufacturing ERP that gives production teams complete control over the shop floor, from bill of materials and work orders through to quality checks and delivery.",
    highlights: [
      "Multi-level Bill of Materials (BOM) with version control",
      "Work order scheduling with machine and labour capacity planning",
      "Shop-floor terminals for real-time production progress updates",
      "Quality control checkpoints and non-conformance tracking",
      "Raw material procurement linked to production demand",
      "Scrap and rework management with cost tracking",
    ],
  },
  {
    icon: Package,
    label: "Production",
    tagline: "Real-time visibility across every production stage.",
    desc: "Track raw materials, work-in-progress, and finished goods in real time.",
    description: "A focused production-tracking module for businesses that need end-to-end visibility over materials and output — without the complexity of full manufacturing planning.",
    highlights: [
      "Live WIP (Work-In-Progress) tracking across production stages",
      "Batch and lot traceability for raw materials and outputs",
      "Barcode and QR-code scanning for stock movements",
      "Automated reorder alerts when material stock falls below threshold",
      "Finished-goods dispatch linked to sales orders",
      "Production cost analysis and yield reporting",
    ],
  },
  {
    icon: Dumbbell,
    label: "Gym Management",
    tagline: "Keep members active and revenue growing.",
    desc: "Memberships, attendance, trainer scheduling, and payments.",
    description: "A complete gym and fitness-centre management system that handles everything from member sign-ups and class bookings to trainer commissions and recurring billing.",
    highlights: [
      "Flexible membership plans with auto-renewal and freeze options",
      "Biometric / QR-code attendance tracking at the gate",
      "Class and personal training session scheduling",
      "Trainer assignment, availability, and commission tracking",
      "Point-of-sale for supplements, merchandise, and add-ons",
      "Member mobile app with booking and payment self-service",
    ],
  },
  {
    icon: Plane,
    label: "Tour & Travels",
    tagline: "Build, book, and manage tours end to end.",
    desc: "Package management, bookings, agent commissions, and itinerary planning.",
    description: "A travel business management platform for tour operators, travel agencies, and DMCs — covering package creation, multi-channel bookings, agent networks, and automated communications.",
    highlights: [
      "Visual tour package builder with itinerary and pricing tiers",
      "Online booking portal with real-time seat/slot availability",
      "Agent portal with commission tracking and payout management",
      "Supplier management for hotels, transport, and activity vendors",
      "Automated pre-trip and post-trip customer communications",
      "Revenue and profitability reporting per tour package",
    ],
  },
  {
    icon: Truck,
    label: "Van Sales",
    tagline: "Sell and deliver on the road, in real time.",
    desc: "Route management, mobile invoicing, and stock replenishment on the go.",
    description: "A mobile-first van-sales solution that equips field sales reps with everything they need to take orders, issue invoices, collect payments, and manage their vehicle stock — all offline-capable.",
    highlights: [
      "Daily route planning and stop sequencing for each rep",
      "Mobile app for order taking, invoicing, and payment collection",
      "Van-stock management with end-of-day reconciliation",
      "GPS route tracking and visit-history log for supervisors",
      "Automated stock replenishment requests based on van load",
      "Real-time sync to head-office ERP inventory and accounts",
    ],
  },
  {
    icon: Bus,
    label: "Transport Management",
    tagline: "Fleet under control. Routes on time. Costs in check.",
    desc: "Fleet tracking, trip logs, maintenance scheduling, and driver management.",
    description: "A transport and fleet management system for logistics companies, schools, and enterprises — providing visibility over vehicles, drivers, trips, fuel, and maintenance from a single dashboard.",
    highlights: [
      "Live GPS vehicle tracking with geo-fence alerts",
      "Trip planning, dispatch, and completion logging",
      "Driver management with licence and document expiry alerts",
      "Preventive maintenance scheduling and service history",
      "Fuel consumption tracking and mileage analysis",
      "Customer-facing shipment tracking portal",
    ],
  },
  {
    icon: Wallet,
    label: "Money Management",
    tagline: "Full financial control at every level.",
    desc: "Budgeting, payroll, accounts payable/receivable, and financial reporting.",
    description: "A comprehensive financial management suite covering every aspect of business finance — from day-to-day transactions and payroll processing to budgeting, cash-flow forecasting, and audit-ready reporting.",
    highlights: [
      "Double-entry accounting with multi-currency support",
      "Automated payroll with tax, deduction, and benefits calculation",
      "Accounts payable and receivable with ageing reports",
      "Budget creation, tracking, and variance analysis by department",
      "Bank reconciliation with automatic transaction matching",
      "Real-time P&L, balance sheet, and cash-flow statements",
    ],
  },
  {
    icon: GraduationCap,
    label: "School Management",
    tagline: "Smarter schools start with better systems.",
    desc: "Admissions, timetables, attendance, fees, and parent communication.",
    description: "An integrated school management system that streamlines every administrative and academic process — from student admissions and timetable generation through to fee collection and parent engagement.",
    highlights: [
      "Online admissions portal with document upload and status tracking",
      "Automated timetable generation with teacher and room conflict detection",
      "Biometric / RFID / QR attendance marking and parent SMS alerts",
      "Fee collection with instalment plans and online payment gateway",
      "Exam and result management with grade-card publishing",
      "Parent and student app for schedules, fees, and announcements",
    ],
  },
];

export const IndustrySolutions = () => {
  const [selected, setSelected] = useState<DetailItem | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Industry Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for your industry</h2>
            <p className="text-muted-foreground text-lg">
              Pre-configured ERP modules tailored to the workflows and compliance needs of each sector.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s) => (
            <StaggerItem key={s.label}>
              <button
                onClick={() => setSelected(s)}
                className={`w-full text-left rounded-xl border p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 h-full flex flex-col gap-3 cursor-pointer hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${s.highlight ? "border-primary/40 bg-primary/5" : "border-border bg-card"}`}
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    <s.icon size={20} />
                  </div>
                  {s.highlight && <Badge variant="default" className="text-xs">Flagship</Badge>}
                </div>
                <h3 className="font-semibold text-base">{s.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <p className="text-xs text-primary font-medium mt-auto pt-1">Learn more →</p>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
