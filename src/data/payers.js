// Payer pages (Admissions-Content-Briefs.md §F, 2026-09-23): /admissions/insurance/{slug}/, one template.
// Carrier copy is deliberately generic: how common plan structures (HMO, PPO, EPO, employer, individual)
// typically affect using an outpatient program. No carrier internal rules, no amounts, no benefit claims; product
// names only where QA allowed them generically (Florida Blue: BlueOptions, BlueSelect, myBlue; Cigna: Evernorth).
// `network`: 'in' renders "In network with {carrier}" in the status card, hero, body, FAQ and meta description;
// any other value renders "We work with {carrier}" in the same spots. "In network" follows the brief ("all in
// network per the Wiki"); our Wiki copy is blank, so each status is pending Elizabeth (7.1, see
// docs/content/admissions-sources-payers.md). Change it here and all of the page's wording follows.
export const PAYERS = [
  {
    slug: 'aetna',
    network: 'in',
    extra:
      'If you changed jobs recently or your employer switched plans at renewal, your Aetna benefits may not match what you had last year. Tell us when your current plan started, and we’ll check the plan you have today, including whether PHP, IOP and OP each need approval on it.',
    carrier: 'Aetna',
    short: 'Aetna',
    logo: '/images/logos/insurance/aetna.svg',
    intro:
      'Aetna is one of the most common names we see on insurance cards in Palm Beach County, usually through an employer. Most Aetna plans include behavioral health and substance use benefits, and outpatient levels of care like PHP, IOP and OP are generally covered when they are medically necessary. What that looks like for you depends on the specific plan your employer or your household chose.',
    planTypes: [
      { type: 'Employer-sponsored plans', text: 'If your Aetna coverage comes through work, your employer chose the plan design. Two coworkers with Aetna cards can have different rules, so we check your plan, not the carrier in general.' },
      { type: 'PPO plans', text: 'PPO plans usually let you see in-network providers without a referral. Staying in network is what keeps your costs predictable, which is why we confirm our status on your specific plan first.' },
      { type: 'HMO and EPO plans', text: 'These plans typically cover in-network care only, and an HMO may ask for a referral from your primary care provider. If yours does, we’ll tell you before you start so nothing gets held up.' },
      { type: 'Individual plans', text: 'If you bought your Aetna plan on your own, the network can be narrower than an employer plan. Your member ID tells us exactly which network applies.' },
    ],
    ready: 'Have your Aetna card nearby. The member ID and the plan name printed on the front are what we need; the phone numbers on the back help too, because some plans list a separate line for behavioral health.',
    note: 'If your Aetna plan requires approval before PHP or IOP begins, our team handles the request and keeps you posted, so you are not stuck calling back and forth.',
  },
  {
    slug: 'florida-blue',
    network: 'in',
    extra:
      'Florida Blue members often ask whether a plan bought on their own works the same way as one through work. Sometimes it does and sometimes it doesn’t, especially when it comes to networks and referrals. That’s why we check your Florida Blue plan by its member ID instead of by name, and explain the answer in plain language.',
    carrier: 'Florida Blue (Blue Cross Blue Shield of Florida)',
    short: 'Florida Blue',
    logo: '/images/logos/insurance/florida-blue.webp?v=2',
    intro:
      'Florida Blue is the Blue Cross Blue Shield plan for Florida, so a lot of people in West Palm Beach carry it, through work or through a plan they bought themselves. Florida Blue plans generally include behavioral health and substance use benefits, and outpatient treatment like PHP, IOP and OP is usually covered when it is medically necessary. The details sit in your specific plan.',
    planTypes: [
      { type: 'Plans through your employer', text: 'Employer plans can differ a lot from one company to the next, even under the same Florida Blue name. We verify the plan tied to your member ID rather than assuming.' },
      { type: 'Individual and Marketplace plans', text: 'If your plan is an individual or Marketplace plan, it may use a specific network. In-network care is what the plan is built around, so network status is the first thing we confirm.' },
      { type: 'BlueOptions, BlueSelect, myBlue', text: 'Florida Blue sells plans under product names like BlueOptions, BlueSelect and myBlue, built as PPO, HMO or EPO designs. The product name on your card tells us which network and which rules apply, so read it to us exactly as printed.' },
      { type: 'HMO and EPO designs', text: 'Plans built around a primary care provider or a set network can require a referral before specialty care, or cover in-network care only. If yours does, we’ll let you know and help you get it sorted before your first day.' },
      { type: 'PPO designs', text: 'PPO-style plans usually give you more flexibility to choose providers. Even so, in-network providers are typically the most affordable option, and we’ll confirm where we stand.' },
    ],
    ready: 'Grab your Florida Blue card. The member ID and the plan name on the front are the most important details; if you have both a medical card and a separate behavioral health number, bring both.',
    note: 'Because Blue Cross Blue Shield plans exist in every state, it helps to know which Blue plan issued your card. If your card says Florida Blue, you’re in the right place; if it’s a Blue plan from another state, call us anyway and we’ll check how it applies here.',
  },
  {
    slug: 'cigna',
    network: 'in',
    extra:
      'If your Cigna coverage is through a large employer, the plan may have been designed specifically for that company. That can mean different rules for approvals and networks than a friend’s Cigna plan. We verify your exact plan and tell you how it applies to PHP, IOP and outpatient treatment before you commit to anything. If you also have coverage through a spouse or parent, mention it, because the order of coverage can matter.',
    carrier: 'Cigna',
    short: 'Cigna',
    logo: '/images/logos/insurance/cigna.svg',
    intro:
      'Many people with Cigna get it through an employer, and Cigna plans generally include behavioral health benefits. Outpatient treatment for substance use and co-occurring mental health conditions, including PHP, IOP and OP, is generally covered when it is medically necessary. The specifics come from the plan your employer selected.',
    planTypes: [
      { type: 'Employer-sponsored plans', text: 'With Cigna, your employer’s choices shape your benefits: network, referral rules and what needs approval. We look up your plan specifically so you get answers that apply to you.' },
      { type: 'Open-access and PPO-style plans', text: 'These plans usually let you see specialists without a referral. Staying with in-network providers is still what keeps costs lower, so we confirm our status first.' },
      { type: 'HMO and network-only plans', text: 'Plans that cover in-network care only may also need a referral from your primary care provider. We’ll tell you if yours does and what the next step is.' },
      { type: 'Individual plans', text: 'If you purchased Cigna coverage on your own, the network may differ from employer plans. Your member ID tells us which one you have.' },
    ],
    ready: 'Keep your Cigna card handy. We need the member ID and the plan or group name on the front. Your card may show Evernorth for behavioral health; that’s normal, so read us that number too.',
    card: 'The front of a Cigna card usually names the network your plan uses, for example Open Access Plus or LocalPlus. That network name, more than the Cigna logo, decides which providers count as in network for you, so it is one of the first things we look at.',
    approvals: 'Cigna plans often ask for approval before a higher level of outpatient care like PHP starts, and some review IOP too. When approval is granted, it usually covers a set stretch of treatment and is then reviewed again based on your progress. If your plan works that way, we send the clinical updates it asks for, so your attention stays on treatment.',
    note: 'Some employer plans also include an employee assistance program. That’s separate from your medical coverage, and it isn’t required to start treatment with us, but if you’ve already talked to one, let us know.',
  },
  {
    slug: 'unitedhealthcare',
    network: 'in',
    extra:
      'UHC members sometimes have more than one card: one for medical coverage and one for behavioral health or pharmacy. If you do, send us what you have. We’ll use the right numbers to confirm how your plan covers PHP, IOP and OP, and whether anything needs approval before your first day. If a card is missing, the member ID alone is usually enough to start.',
    carrier: 'UnitedHealthcare',
    short: 'UnitedHealthcare',
    // QA 8 #2: "UnitedHealthcare" in full in the title, H1, lead and first body line; "UHC" after that.
    abbr: 'UHC',
    logo: '/images/logos/insurance/unitedhealthcare.svg',
    intro:
      'UnitedHealthcare (UHC) covers a wide range of people, from large employer groups to individuals who buy their own plans. Most UHC plans include benefits for substance use and mental health treatment, and outpatient care such as PHP, IOP and OP is generally covered when it is medically necessary. Exactly how depends on which plan you have.',
    planTypes: [
      { type: 'Employer group plans', text: 'Group plans follow the design your employer picked, so the rules for outpatient treatment can vary from one UHC card to another. We check yours individually.' },
      { type: 'PPO and choice-style plans', text: 'These plans usually let you go directly to an in-network specialist without a referral. We confirm our network status on your plan so you know where you stand.' },
      { type: 'HMO and EPO plans', text: 'Plans that stay inside a set network may require a referral or limit coverage to in-network providers. If that applies to you, we’ll tell you up front.' },
      { type: 'Individual and Marketplace plans', text: 'If your plan is an individual or Marketplace plan, the network can be narrower. The name printed on your card helps us identify it quickly.' },
    ],
    ready: 'Have your UHC card in front of you. The member ID and plan name on the front are the key details, and the back often lists a dedicated behavioral health or mental health number that we can use.',
    card: 'UHC cards usually print the plan’s network name near the member ID, such as Choice Plus or Navigate. Choice Plus-style plans generally let you see in-network specialists without a referral, while Navigate-style plans are built around a primary care provider and may ask for one. Reading us that name saves a step.',
    approvals: 'Many UHC plans review PHP and IOP before they begin and again at set points while you are in treatment. That review is routine, not a sign that something is wrong. When your plan asks for it, our team sends what is needed and tells you as soon as we hear back.',
    note: 'On many UHC plans, behavioral health benefits are administered by Optum, so your card or the benefits line on the back may say Optum rather than UHC. You don’t need to figure that out yourself: that’s exactly what the free verification is for.',
  },
  {
    slug: 'humana',
    network: 'in',
    // QA 12 #17 (2026-09-24): not generated. Answer 7.2 kept it noindex until Elizabeth confirms which Humana
    // products are accepted; the batch decision removes it from the build. Set `publish` back to true (or delete
    // the line) to bring the page back; Humana stays an accepted carrier in site.js INSURANCE either way.
    publish: false,
    noindex: true,
    extra:
      'If you’re not sure your Humana plan is the kind that covers outpatient programs like ours, that’s okay. Many people aren’t. Read us what’s on the card and we’ll find out, and if your plan isn’t a fit, we’ll say so plainly and help you look at other options.',
    carrier: 'Humana',
    short: 'Humana',
    logo: '/images/logos/insurance/humana.svg',
    intro:
      'If Humana is on your insurance card, the first question is simply which Humana plan you have, because Humana offers several kinds of coverage and they work differently. Behavioral health benefits usually include outpatient treatment for substance use and co-occurring mental health conditions when it is medically necessary, and PHP, IOP and OP are recognized levels of care.',
    planTypes: [
      { type: 'Know which plan you have', text: 'The plan name on the front of your card matters more than the Humana logo itself. Two Humana cards can come with very different benefits and networks.' },
      { type: 'Network-based plans', text: 'Plans built around a network usually cover in-network providers and may ask for a referral from your primary care provider. We’ll check whether that applies before anything else.' },
      { type: 'Plans with more flexibility', text: 'Some plans let you choose providers more freely, but in-network care is still what keeps things simplest. We confirm where Sunview stands on your plan.' },
      { type: 'If your plan is new', text: 'If you recently changed plans or your coverage is about to renew, tell us. Benefits can change at renewal, and we want to check the plan you will actually have when you start.' },
    ],
    ready: 'Have your Humana card ready and read us the plan name exactly as it’s printed, along with the member ID. If there’s a separate behavioral health number on the back, share that too.',
    card: 'Many Humana members have a Medicare Advantage plan, and those follow different rules than coverage through work or a plan bought on your own, including which providers are in network and when approval is needed. If your card mentions Medicare, tell us, because it changes which questions we ask your plan.',
    approvals: 'Many Humana plans ask for approval before PHP begins, and some review IOP as well. If yours does, we request it, follow up with the plan and let you know where things stand, so you are not left waiting without an answer.',
    note: 'Because Humana plans vary so much, we don’t guess. We verify your specific plan and tell you honestly whether it works with our programs, and if it doesn’t, we’ll help you figure out your options.',
  },
];

// Payer pages that are generated (`publish: false` keeps a carrier's copy here without building its page).
export const PUBLISHED_PAYERS = PAYERS.filter((p) => p.publish !== false);

export const payerBySlug = (slug) => PAYERS.find((p) => p.slug === slug);
