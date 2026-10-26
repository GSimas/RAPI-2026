/**
 * ==========================================================
 * Conteúdo da página "Relatório" — versão em inglês
 * ==========================================================
 *
 * Tradução livre das Seções 7, 8 e 9 do RAPI 2026. Mesma forma de
 * `relatorio.ts`. Nomes de pessoas e instituições não são traduzidos.
 */

import type { BlocoDimensaoRelatorio, InstituicaoGT } from './relatorio';

export { GRUPO_TRABALHO } from './relatorio';
export type { InstituicaoGT };

export const INTRODUCAO_CONSIDERACOES =
  'Based on the values collected in 2026 for base year 2025 and the historical series of each indicator, below are the considerations and recommendations on the items that most require attention and action. We have not commented on most “green” aspects, as they have already reached satisfactory levels.';

export const BLOCOS_CONSIDERACOES: readonly BlocoDimensaoRelatorio[] = [
  {
    id: 'ambiental',
    icone: '🌍',
    numero: '7.1',
    titulo: 'Environmental Dimension',
    corAcento: '#2ca02c',
    temas: [
      {
        id: 'agua',
        numero: '7.1.1',
        titulo: 'Theme: Water — 06 indicators',
        paragrafos: [
          'a) Drinking-water coverage rose from 93% in 2024 to **99% in 2025**, back in the green range, and supply remained continuous at 24 hours/day.',
          'b) Per capita consumption was 176.84 litres/person/day, still green, but the five-year average rose to 174.3 litres — well above the 110 litres recommended by the UN.',
          'c) Water quality (97.20% compliant tests) returned to green, very close to the 97% threshold. There is still no systematic monitoring of heavy metals and pesticides.',
          'd) Non-revenue water (distribution losses) stood at **37.29%**, stuck in the yellow range and close to the ten-year average (37.45%).',
          'e) Florianópolis produced 24.4 million m³ and imported 36.2 million m³ from other systems: about **60% of the water consumed depends on external sources**, which makes reducing losses and protecting local springs urgent. The water-balance indicator is still not updated.',
        ],
      },
      {
        id: 'saneamento',
        numero: '7.1.2',
        titulo: 'Theme: Sanitation and Drainage — 03 indicators',
        paragrafos: [
          'a) Households connected to the sewer system fell to **58.71%** in 2025, officially entering the red range (< 60%), after 68.89% in 2021 and 64.81% in 2024. While 99% of the city receives treated water, only about 59% has official sewage collection.',
          'b) Wastewater treatment rose to 66.82% (green): the system treats what it collects better, but the collection base is shrinking relative to the population.',
          'c) Households affected by severe flooding stayed at 15%, deep in the red range (3% threshold), against 0.50% in 2018. The share of the annual budget (LOA) for disaster-risk mitigation fell to the lowest level of the series (0.058%). Ongoing transparency and engagement between the utility, government and civil society are recommended.',
        ],
      },
      {
        id: 'residuos',
        numero: '7.1.3',
        titulo: 'Theme: Solid Waste Management — 08 indicators',
        paragrafos: [
          'a) Waste generation rose to **1.33 kg/person/day** (yellow), almost double the World Bank global average of 0.74 kg. Total waste collected jumped from 259,313 to 285,199 tonnes, nearly 10% in one year.',
          'b) Waste sent to landfill fell to 84.5%, the lowest recent rate but still red. The landfill’s remaining useful life is 23 years (green).',
          'c) Composting reached **14.04%** (12.93% in 2024 and 4.56% in 2023), the city’s most successful recovery strategy. Recycling rose to 12%, still red, and waste-to-energy treatment remains at 0%.',
        ],
      },
      {
        id: 'energia',
        numero: '7.1.4',
        titulo: 'Theme: Energy — 06 indicators',
        paragrafos: [
          'a) Households with an authorised electricity connection fell to **89.64%**, leaving the excellence range (99.93% in 2023) — a sign of settlements not yet formally connected to the grid.',
          'b) Power outages stood at 5.55 h/household/year (green) and LED street lighting reached 78% (45,488 fixtures).',
          'c) Energy from renewable sources rose to **93.44%**, against 3.88% in the previous report. The drastic change suggests a revision of the method or of the data source by CELESC.',
          'd) Residential piped-gas connections rose to 920.87 per 100,000 inhabitants, still red, and residential electricity use fell to 3,082.44 kWh (green).',
        ],
      },
      {
        id: 'qualidade-ar',
        numero: '7.1.5',
        titulo: 'Theme: Air Quality — 02 indicators',
        paragrafos: [
          'The air quality index has repeated the value 20 since 2022, and the last genuinely new measurement dates from 2014. Particulate matter (PM10) still has no data. FLORAM is advised to partner with universities on a sensor network across the territory.',
        ],
      },
      {
        id: 'clima',
        numero: '7.1.6',
        titulo: 'Theme: Climate Change Mitigation — 01 indicator',
        paragrafos: [
          'Per capita GHG emissions still have no data for 2024 and 2025. The spreadsheet records 1.8 t (2022) and 2.1 t (2023), in the green range, but without a continuous series the trend cannot be confirmed. An annual GHG Emissions Inventory should be institutionalised.',
        ],
      },
      {
        id: 'ruido',
        numero: '7.1.7',
        titulo: 'Theme: Noise — 01 indicator',
        paragrafos: [
          'Noise at the 5 main hotspots still has no data: since 2019 the measurement structure has never been implemented. Permanent sensors or measurement campaigns with research institutions are recommended.',
        ],
      },
      {
        id: 'vulnerabilidade',
        numero: '7.1.8',
        titulo: 'Theme: Vulnerability to Natural Disasters — 05 indicators',
        paragrafos: [
          'Risk maps returned to 95% (green) and contingency and early-warning plans stayed at 100%. In contrast, the budget share for risk mitigation fell to just **0.058%** — less than half of 2022 (0.125%).',
          'The preliminary figure of 7,922 buildings in risk areas also includes medium and low risk (R2 and R1); the historical series tracks only R3 and R4 (2,100 units in 2024). The overall picture is one of “vulnerability through financial inaction”: good maps and plans, but no funds for preventive works.',
        ],
      },
    ],
  },
  {
    id: 'urbana',
    icone: '🏙️',
    numero: '7.2',
    titulo: 'Urban Dimension',
    corAcento: '#1f77b4',
    temas: [
      {
        id: 'uso-solo',
        numero: '7.2.1',
        titulo: 'Theme: Land Use and Territorial Planning — 10 indicators',
        paragrafos: [
          'The urban road network grew 0.89% in 2025 (green) and density stood at 4,959.95 inhabitants/km² (2024). Estimated population growth of **1.9%** remains red, with about 587,500 inhabitants in 2025, putting pressure on infrastructure and services.',
          'The housing deficit was recalculated at 1.91% (5,446 families) with the online Housing Register, but a 2023 municipal study shows 15% of CadÚnico families without adequate housing.',
          'Only 8% of municipal Conservation Units have a management plan (one of 11 units), and a new indicator shows 0.42% of their area with land-use conflicts. The official recognition of 56 neighbourhoods (Decree 29,142/2026) and the Master Plan are key tools, but completing the management plans is urgent.',
        ],
      },
      {
        id: 'desigualdade',
        numero: '7.2.2',
        titulo: 'Theme: Urban Inequality — 06 indicators',
        paragrafos: [
          'The population below the poverty line stood at 6.40% (green, under the new threshold aligned with SDG target 1.2), against a 23.1% national average. The Gini coefficient reached a satisfactory level for the first time.',
          'The average wage of formal workers reached **R$ 8,054.74** in 2025 (R$ 5,459.98 in 2021), comfortably green.',
        ],
      },
      {
        id: 'mobilidade',
        numero: '7.2.3',
        titulo: 'Theme: Mobility and Transport — 23 indicators',
        paragrafos: [
          'Offered capacity fell from 16.1 to 15.2 million seats/month, while passengers rose from 4.93 to 5.10 million/month. Operating cost jumped from R$ 5.84 to **R$ 6.54**, and average speed is stuck at 23 km/h, with record car ownership (0.723 vehicles/inhabitant) and 0% dedicated bus lanes.',
          'Hospitalisations from traffic accidents rose to 20.77 per 100,000 inhabitants, entering the yellow range. The electric fleet has stayed at 0% since 2019. Dedicated lanes and fleet renewal are the priorities.',
        ],
      },
      {
        id: 'negocios',
        numero: '7.2.4',
        titulo: 'Theme: Business Environment — 01 indicator',
        paragrafos: [
          'The time to open a company reached a record **4 hours** in 2025 (5 hours in 2024 and 21 days in 2020), far below the 12-day green threshold.',
        ],
      },
      {
        id: 'tecido-produtivo',
        numero: '7.2.5',
        titulo: 'Theme: Productive Fabric — 08 indicators',
        paragrafos: [
          'a) The airport exceeded **5 million passengers** (5,167,090) and handled 12,634 tonnes of cargo, with international cargo up and domestic cargo down.',
          'b) The bus terminal recorded 121,399 trips and 2.14 million passengers in 2025, below the 2024 record (2.5 million).',
          'c) GDP per capita reached R$ 58,059.37 in 2023 (US$ 11,565.61, green). The two-to-three-year lag in IBGE data still prevents assessing the immediate impact of policies. City GDP grew 10% in 2023, back in the green range.',
        ],
      },
      {
        id: 'mercado-laboral',
        numero: '7.2.6',
        titulo: 'Theme: Labour Market — 03 indicators',
        paragrafos: [
          'Unemployment fell to **3.60%**, a historic level of excellence. But formal employment fell to 63.30% (red), and informal employment still has no data — the drop in unemployment may rest on jobs with less social protection.',
        ],
      },
      {
        id: 'educacao',
        numero: '7.2.7',
        titulo: 'Theme: Education — 18 indicators',
        paragrafos: [
          'With the new public examination, permanent teachers jumped from 39.30% to **60%** and temporary teachers (ACTs) fell from 60.7% to 40% (green). Teacher qualifications held up: 65% with a specialisation, 12% with a master’s and 4.8% with a doctorate.',
          'IDEB remains at 5.8 in the early years (yellow) and 4.6 in the final years (red), and satisfactory performance in standardised tests is stuck at 14% (Maths) and 31% (Reading).',
          'Special education reached 2,268 students. Schools complying with the Accessibility Law fell from 96.21% to **54%** (red), reflecting a stricter criterion under the agreement with the State Prosecutor (MPSC). Illiteracy stood at 1.4% (yellow) and full-time schooling at 32.5% (green).',
        ],
      },
      {
        id: 'seguranca',
        numero: '7.2.8',
        titulo: 'Theme: Public Safety — 10 indicators',
        paragrafos: [
          'The homicide rate fell from 5.40 to **4.10** per 100,000 inhabitants and robbery-murders remain at zero. Robberies fell by more than 26% (from 153 to 112.2) and vehicle robberies reached the lowest level of the series (9.9). Thefts, vehicle thefts and property crimes also fell.',
          'Domestic violence against women totalled 5,383 cases, stable at around 5,300. Active community safety councils (CONSEGs) jumped from 8 to 15, a highlight for participatory governance.',
        ],
      },
      {
        id: 'saude',
        numero: '7.2.9',
        titulo: 'Theme: Health — 51 indicators',
        paragrafos: [
          'The warning of this cycle is the rate of hospitalisations for primary-care-sensitive conditions (ICSAP), which jumped to **709.75** per 100,000 inhabitants and entered the red range. Hospitalisations from external causes (818.06) are also red.',
          'Infrastructure remains excellent: 1,012.80 doctors, 406.82 hospital beds and 55.66 ICU beds per 100,000 inhabitants, and 103.26% Family Health coverage.',
          'Private health insurance coverage fell to 35.60%: about 64.4% of the population depends exclusively on the public system (SUS). Hypertension (24.75%), obesity (20.81%) and diabetes (7.87%) are red (2024 data).',
          'On the bright side, vaccination coverage at birth recovered — **BCG 96.84%**, Hepatitis B 95.25% and Meningococcal C 95.25% — all back in the green range.',
        ],
      },
      {
        id: 'capital-humano',
        numero: '7.2.10',
        titulo: 'Theme: Human Capital — 02 indicators',
        paragrafos: [
          'Per capita investment in culture fell to R$ 32.05 in 2025, still green, after the R$ 58.22 peak in 2023. As a share of net current revenue it fell from 0.89% to 0.50%, back to the level of the start of the decade — funding for the sector needs to be made permanent.',
        ],
      },
      {
        id: 'tecido-empresarial',
        numero: '7.2.11',
        titulo: 'Theme: Business Fabric — 16 indicators',
        paragrafos: [
          'Active companies reached 25,626 and exports hit a record **US$ 93.63 million** (43.53% growth).',
          'In 2025, sector indicators started to exclude Simples Nacional and MEI companies, and the series was recalculated. Technology revenue grew 12.78% and the sector accounts for 26.61% of taxes; private health grew 17.01% (14.23% of taxes); bars and restaurants grew 15.31%. Hotel occupancy fell to 41.40%, and sector employment data are still missing.',
        ],
      },
    ],
  },
  {
    id: 'fiscal',
    icone: '⚖️',
    numero: '7.3',
    titulo: 'Fiscal and Governance Dimension',
    corAcento: '#ff7f0e',
    temas: [
      {
        id: 'visao-fiscal',
        numero: '7.3',
        titulo: 'Overview — 28 indicators',
        paragrafos: [
          'Net consolidated debt stood at **17.36% of net current revenue**, and Florianópolis earned an A+ rating in the National Treasury’s Payment Capacity (CAPAG) — the 7th least indebted state capital in Brazil and the least indebted in the South. ISS (+16.39%) and IPTU (+11.58%) grew above inflation (IPCA 4.26%).',
          'Warning signs: absenteeism with medical certificates at 10.99% of contracted hours, outsourced staff at 3.94% of net total revenue, information gaps on procurement and difficulty collecting overdue tax debt.',
        ],
      },
      {
        id: 'gestao-moderna',
        numero: '7.3.1',
        titulo: 'Theme: Modern Public Management — 09 indicators',
        paragrafos: [
          'Personnel spending as a share of total spending fell to **42.06%**, the best result in the series (green). Absences without a medical certificate are low (0.69%), but those with a certificate reached 10.99% (red).',
          'The Procurement Department did not send 2025 data. Purchases without bidding (direct contracting) rose from 2.27% in 2020 to 20.55% in 2024, which calls for stricter justification of direct contracts.',
        ],
      },
      {
        id: 'transparencia',
        numero: '7.3.2',
        titulo: 'Theme: Transparency and Audit of Public Management — 01 indicator',
        paragrafos: [
          'Under the Public Transparency Radar criteria (Atricon), the index rose to **87.51%** in 2025, keeping the Gold Transparency Seal.',
        ],
      },
      {
        id: 'impostos',
        numero: '7.3.3',
        titulo: 'Theme: Taxes and Financial Autonomy — 09 indicators',
        paragrafos: [
          'Own revenue stood at 47.03% of total revenue (yellow), and transfers accounted for 33.25%. ISS grew 16.39%, IPTU 11.58% (partly due to an accounting adjustment) and ITBI 14.81%.',
          'Overdue tax debt fell 4.07% in 2025, after a 105.18% rise in 2024. IPTU default (18.21%) remains red, and modernising collection strategies is recommended.',
        ],
      },
      {
        id: 'gasto',
        numero: '7.3.4',
        titulo: 'Theme: Public Spending Management — 05 indicators',
        paragrafos: [
          'Current spending absorbed 88.23% of the total, and investment stood at 11.77% (yellow). Current spending grew 18.21%, far above inflation. Personnel expenditure over net current revenue was 44.63%, the best result on record, but outsourced staff reached 3.94% of net total revenue.',
        ],
      },
      {
        id: 'divida',
        numero: '7.3.5',
        titulo: 'Theme: Debt Management — 04 indicators',
        paragrafos: [
          'Debt service stood at 4.18% of own revenue (green) and debt fell **12.12%**, stabilising net consolidated debt at R$ 657 million. Credit operations amounted to 2.45% of net current revenue. In the first quarter of 2026, the city paid off R$ 564 million in employer pension liabilities accumulated between 2004 and 2017.',
        ],
      },
    ],
  },
];

export const CONSIDERACOES_FINAIS: readonly string[] = [
  'In this 10th edition of RAPI, the 208 indicators show a dynamic, economically resilient city with important progress, but still facing structural challenges. In 2025, 76 indicators were green, 29 yellow and 30 red — and 45 were grey, due to missing or inadequate data. Florianópolis also needs to advance in producing information and making it transparent.',
  'In the environmental dimension, 99% of the population has water, but losses reach 37.29% and about 60% of the water comes from external sources. Only about 59% of households are connected to the sewer. Waste generation remains high, 84.5% goes to landfill, and data on air quality, emissions and noise are missing.',
  'In the urban dimension, the economy is strong — high GDP per capita, more companies and record exports — with unemployment at just 3.60%, but formal employment fell to 63.30%. Mobility is a major concern: more passengers, less supply, higher cost, 23 km/h average speed and a 0% electric fleet. Public safety improved; in education, permanent teachers and special education advanced; in health, infrastructure is excellent and vaccination recovered, but avoidable hospitalisations grew.',
  'In the fiscal dimension, the picture is more balanced: net debt at 17.36% of net current revenue, an A+ CAPAG rating and a 12.12% debt reduction. Still, about 88% of spending is current spending, investment stood at 11.77%, and IPTU default, absenteeism and procurement information gaps persist.',
  'For this edition, sources reviewed the indicators back to 2020; values and ratings for 2020 to 2024 may therefore differ from previous editions. RAPI reaffirms its role as a technical tool to track the city and the guidelines of AGENDA FLORIPA 2030/40/50, and as a tool for dialogue to build a more sustainable, inclusive and resilient Florianópolis.',
];

export const AGRADECIMENTOS_INTRO =
  'We thank the Mayor of Florianópolis, Topázio Neto, the municipal secretaries, managers and public servants, as well as state departments, public companies and agencies for their efforts and contributions in providing the requested data. Special thanks to Ana Paula Reusing Pacheco, Under-Secretary for Science, Technology and Innovation and focal point of this initiative, for the dedicated work liaising with the municipal sources.';

export const NOTA_LICENCA =
  'Partial or full reproduction of this material is permitted provided the source is cited: Rede Ver a Cidade Floripa, 2025-2026. September 2026.';
