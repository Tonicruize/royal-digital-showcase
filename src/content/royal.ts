import type { InfoDetail } from "@/components/site/InfoDialog";

export const pillarDetails: Record<string, InfoDetail> = {
  Secure: {
    title: "Secure",
    quote: "Institutional-grade security and asset protection.",
    meaning:
      "Capital preservation comes first. Before we look at return, we look at what could go wrong and how we contain it.",
    points: [
      "Qualified custodians, segregated wallets and multi-signature approvals.",
      "Limited exposure to illiquid or unproven assets.",
      "Independent reconciliation of holdings and valuations.",
      "Defined drawdown limits set before any capital is deployed.",
    ],
    simple: "Protect your money first, then try to grow it.",
  },
  Strategic: {
    title: "Strategic",
    quote: "Data-driven strategies built for long-term value.",
    meaning:
      "Decisions are informed by market data, financial analysis, economic trends and on-chain metrics — not rumours or short-term hype.",
    points: [
      "Evidence-based decision-making rather than speculation.",
      "Blockchain and market data reviewed alongside macro trends.",
      "Focus on assets expected to compound over years, not weeks.",
      "Patience and long-term wealth creation over quick gains.",
    ],
    simple:
      "We use facts, research and analysis to make smart decisions that grow wealth over the long term.",
  },
  Global: {
    title: "Global",
    quote: "A global perspective with local market expertise.",
    meaning:
      "We monitor opportunities around the world while understanding the characteristics of individual countries and regions.",
    points: [
      "Exposure to digital assets traded across global venues.",
      "Working knowledge of local regulation in each market we serve.",
      "Regional economic trends factored into allocation decisions.",
      "Clients supported across more than twenty countries.",
    ],
    simple: "We think globally but understand local markets.",
  },
  Trusted: {
    title: "Trusted",
    quote: "Transparency, integrity, and disciplined execution.",
    meaning: "Three values govern how we work with every client, in every market condition.",
    points: [
      "Transparency: open about how we invest, our fees, risks and performance.",
      "Integrity: we act ethically and put client interests first.",
      "Disciplined execution: we follow a defined strategy instead of reacting to hype.",
      "Accountability and reporting you can verify.",
    ],
    simple: "You can rely on us because we're honest, ethical and consistent.",
  },
};

export const approachDetails: Record<string, InfoDetail> = {
  "Capital Preservation": {
    title: "Capital Preservation",
    quote: "We prioritise the protection of capital through rigorous risk management.",
    meaning:
      "Our first goal is to avoid losing investors' money. Instead of chasing the highest possible return, we manage risk deliberately.",
    points: [
      "Diversifying investments across assets and venues.",
      "Limiting exposure to riskier positions.",
      "Monitoring market conditions closely and continuously.",
      "Using hedges and limits to reduce potential losses.",
    ],
    simple: "Protect your money first, then try to grow it.",
  },
  "Strategic Growth": {
    title: "Strategic Growth",
    quote: "We identify high-conviction opportunities in digital assets with long-term potential.",
    meaning:
      "We look for digital assets and blockchain projects we strongly believe will increase in value over time — not every trending coin.",
    points: [
      "Established cryptocurrencies with proven liquidity and governance.",
      "Promising blockchain infrastructure and settlement rails.",
      "Emerging technologies with strong fundamentals and real adoption.",
      "Every position researched carefully before capital is committed.",
    ],
    simple: "We carefully choose investments we believe will grow significantly over the years.",
  },
  "Institutional Expertise": {
    title: "Institutional Expertise",
    quote: "Our team combines deep industry knowledge with disciplined investment processes.",
    meaning:
      "Investment decisions are made by experienced professionals applying standards familiar from banks, hedge funds and asset managers.",
    points: [
      "Deep understanding of the digital asset industry.",
      "Thorough, documented research on every holding.",
      "Structured investment rules instead of emotional decisions.",
      "Formal investment committee oversight and quarterly review.",
    ],
    simple: "Experienced professionals use proven methods to manage investments responsibly.",
  },
};

export const coreValues: InfoDetail[] = [
  {
    title: "Integrity",
    quote: "We conduct every transaction with honesty, transparency and professionalism.",
    meaning: "Client interests come before our own, in every mandate and every market.",
    points: ["Clear fees and clear reasoning.", "No conflicts hidden in the fine print."],
    simple: "We do what we say we will do.",
  },
  {
    title: "Excellence",
    quote: "We strive to deliver exceptional investment solutions and client service.",
    meaning: "Performance and service are held to the same institutional standard.",
    points: ["Personalised guidance for each mandate.", "Reporting built to institutional quality."],
    simple: "We hold ourselves to a higher standard.",
  },
  {
    title: "Innovation",
    quote: "We embrace technology and evolving market opportunities to maximise returns.",
    meaning: "Digital assets move quickly; our research process is built to keep pace responsibly.",
    points: ["Advanced analytics and on-chain data.", "Early but disciplined access to new themes."],
    simple: "We use new tools without taking reckless risks.",
  },
  {
    title: "Security",
    quote: "We prioritise capital preservation through disciplined risk management.",
    meaning: "Custody, controls and risk budgets are treated as core investment decisions.",
    points: ["Qualified custody and multi-signature controls.", "Written limits on concentration."],
    simple: "Your capital is protected first.",
  },
  {
    title: "Trust",
    quote: "We build lasting relationships based on accountability, reliability and results.",
    meaning: "We measure success in decades of partnership, not quarters of performance.",
    points: ["Transparent, regular communication.", "Long-term stewardship of family capital."],
    simple: "We are a partner, not a product.",
  },
];