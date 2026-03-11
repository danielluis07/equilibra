export type Professional = {
  slug: string;
  name: string;
  registration: string;
  title: string;
  role: string;
  specialty: string;
  focus: string[];
  modality: string;
  availability: string;
  rating: number;
  reviews: number;
  experience: string;
  bio: string;
  quote: string;
  image: string;
  education: string[];
  specialties: string[];
  targetAudience: string[];
  focusAreas: string[];
  modalities: Array<{ type: "Presencial" | "Online"; detail: string }>;
  schedule: Array<{ day: string; hours: string }>;
  sessionDuration: string;
  nextAvailable: string;
};

export const professionals: Professional[] = [
  {
    slug: "dra-camila-ferreira",
    name: "Dra. Camila Ferreira",
    registration: "CRP 06/12345",
    title: "Psicóloga Clínica",
    role: "Psicóloga Clínica — CRP 06/12345",
    specialty: "Terapia Cognitivo-Comportamental",
    focus: ["Ansiedade", "Depressão", "TOC"],
    modality: "Presencial e Online",
    availability: "Disponível esta semana",
    rating: 4.9,
    reviews: 127,
    experience: "5 anos de experiência",
    bio: "Especialista em transtornos de ansiedade e humor, com abordagem acolhedora e baseada em evidências científicas.",
    quote:
      "Acredito que cada pessoa possui dentro de si os recursos para a mudança.",
    image: "/images/professionals/camila.png",
    education: [
      "Graduação em Psicologia — Universidade de São Paulo (USP)",
      "Especialização em TCC — Instituto de Psiquiatria do HC-FMUSP",
      "Formação em Terapia do Esquema — ISST",
      "Mestrado em Psicologia Clínica — PUC-SP",
    ],
    specialties: [
      "Terapia Cognitivo-Comportamental (TCC)",
      "Terapia do Esquema",
      "Mindfulness e Técnicas de Relaxamento",
      "Psicoterapia Breve",
    ],
    targetAudience: ["Adultos (18+)", "Adolescentes (14-17)", "Casais"],
    focusAreas: [
      "Ansiedade e Pânico",
      "Depressão",
      "Transtorno Obsessivo-Compulsivo (TOC)",
      "Estresse e Burnout",
      "Dificuldades nos Relacionamentos",
      "Autoestima e Autoconhecimento",
      "Luto e Perdas",
      "Fobias Específicas",
    ],
    modalities: [
      {
        type: "Presencial",
        detail: "Av. Paulista, 1578 - Conj. 412, Sao Paulo - SP",
      },
      {
        type: "Online",
        detail: "Atendimento por videoconferencia via plataforma segura",
      },
    ],
    schedule: [
      { day: "Segunda-feira", hours: "8h - 18h" },
      { day: "Terca-feira", hours: "8h - 20h" },
      { day: "Quarta-feira", hours: "8h - 18h" },
      { day: "Quinta-feira", hours: "8h - 20h" },
      { day: "Sexta-feira", hours: "8h - 16h" },
    ],
    sessionDuration: "50 minutos",
    nextAvailable: "Quarta, 12 de marco",
  },
  {
    slug: "dr-rafael-mendes",
    name: "Dr. Rafael Mendes",
    registration: "CRM 54321",
    title: "Psiquiatra",
    role: "Psiquiatra — CRM 54321",
    specialty: "Psiquiatria",
    focus: ["Psicofarmacologia", "Transtornos de Humor", "TDAH"],
    modality: "Presencial",
    availability: "Disponível na próxima semana",
    rating: 4.8,
    reviews: 93,
    experience: "15 anos de experiência",
    bio: "Psiquiatra com foco em tratamento integrado, combinando medicação quando necessário com acompanhamento terapêutico.",
    quote: "Saude mental e prioridade. O tratamento adequado pode mudar vidas.",
    image: "/images/professionals/rafael.png",
    education: [
      "Graduacao em Medicina — UFRJ",
      "Residencia em Psiquiatria — IPUB/UFRJ",
      "Pos-graduacao em Psicofarmacologia Clinica",
    ],
    specialties: [
      "Manejo de Transtornos de Humor",
      "Tratamento de TDAH em Adultos",
      "Acompanhamento Psiquiatrico Integrado",
    ],
    targetAudience: ["Adultos (18+)", "Adolescentes (14-17)"],
    focusAreas: ["Depressao", "Bipolaridade", "TDAH", "Ansiedade", "Insônia"],
    modalities: [
      {
        type: "Presencial",
        detail: "Rua da Consolacao, 2200 - Sao Paulo - SP",
      },
    ],
    schedule: [
      { day: "Segunda-feira", hours: "9h - 17h" },
      { day: "Quarta-feira", hours: "9h - 19h" },
      { day: "Sexta-feira", hours: "9h - 15h" },
    ],
    sessionDuration: "60 minutos",
    nextAvailable: "Segunda, 17 de marco",
  },
  {
    slug: "dra-juliana-costa",
    name: "Dra. Juliana Costa",
    registration: "CRP 06/67890",
    title: "Psicologa Infantil",
    role: "Psicologa Infantil — CRP 06/67890",
    specialty: "Psicologia Infantil",
    focus: ["Ludoterapia", "Desenvolvimento Infantil", "TDAH"],
    modality: "Presencial",
    availability: "Disponível esta semana",
    rating: 5.0,
    reviews: 84,
    experience: "8 anos de experiência",
    bio: "Apaixonada pelo universo infantil, utiliza o brincar como ferramenta terapêutica para o desenvolvimento emocional.",
    quote:
      "No brincar, a crianca encontra um caminho seguro para expressar sentimentos.",
    image: "/images/professionals/juliana.png",
    education: [
      "Graduacao em Psicologia — PUC-Campinas",
      "Especializacao em Psicologia Infantil",
      "Formacao em Ludoterapia",
    ],
    specialties: [
      "Ludoterapia",
      "Orientacao Parental",
      "Acompanhamento de Desenvolvimento",
    ],
    targetAudience: ["Criancas", "Adolescentes (14-17)", "Familias"],
    focusAreas: [
      "Ansiedade Infantil",
      "Dificuldades Escolares",
      "TDAH",
      "Regulacao Emocional",
    ],
    modalities: [
      {
        type: "Presencial",
        detail: "Alameda Santos, 800 - Sao Paulo - SP",
      },
    ],
    schedule: [
      { day: "Terca-feira", hours: "8h - 17h" },
      { day: "Quinta-feira", hours: "8h - 17h" },
      { day: "Sabado", hours: "8h - 12h" },
    ],
    sessionDuration: "50 minutos",
    nextAvailable: "Quinta, 13 de marco",
  },
  {
    slug: "dr-andre-oliveira",
    name: "Dr. Andre Oliveira",
    registration: "CRP 06/11223",
    title: "Psicologo",
    role: "Psicologo — CRP 06/11223",
    specialty: "Psicanalise",
    focus: ["Terapia de Casal", "Autoconhecimento", "Luto"],
    modality: "Presencial e Online",
    availability: "Disponível esta semana",
    rating: 4.9,
    reviews: 156,
    experience: "18 anos de experiência",
    bio: "Psicanalista com vasta experiência em terapia de casal e individual, focado na escuta profunda e transformação pessoal.",
    quote: "A relacao terapeutica e a base de toda transformacao pessoal.",
    image: "/images/professionals/andre.png",
    education: [
      "Graduacao em Psicologia — UFMG",
      "Formacao em Psicanalise Clinica",
      "Especializacao em Terapia de Casal",
    ],
    specialties: ["Psicanalise", "Terapia de Casal", "Psicoterapia Individual"],
    targetAudience: ["Adultos (18+)", "Casais"],
    focusAreas: ["Luto", "Conflitos Conjugais", "Ansiedade", "Autoestima"],
    modalities: [
      {
        type: "Presencial",
        detail: "Rua Augusta, 1100 - Sao Paulo - SP",
      },
      {
        type: "Online",
        detail: "Atendimento por videoconferencia",
      },
    ],
    schedule: [
      { day: "Segunda-feira", hours: "10h - 19h" },
      { day: "Quarta-feira", hours: "10h - 19h" },
      { day: "Sexta-feira", hours: "10h - 18h" },
    ],
    sessionDuration: "50 minutos",
    nextAvailable: "Sexta, 14 de marco",
  },
  {
    slug: "dra-mariana-santos",
    name: "Dra. Mariana Santos",
    registration: "CRP 06/33445",
    title: "Neuropsicologa",
    role: "Neuropsicologa — CRP 06/33445",
    specialty: "Neuropsicologia",
    focus: ["Avaliacao Neuropsicologica", "Reabilitacao Cognitiva"],
    modality: "Presencial",
    availability: "Disponível na próxima semana",
    rating: 4.7,
    reviews: 62,
    experience: "10 anos de experiência",
    bio: "Neuropsicologa especializada em avaliação e reabilitação, com experiência em casos de TDAH, TEA e lesões cerebrais.",
    quote:
      "Entender o funcionamento cognitivo abre caminhos para intervencoes mais precisas.",
    image: "/images/professionals/mariana.png",
    education: [
      "Graduacao em Psicologia — UNESP",
      "Especializacao em Neuropsicologia",
      "Capacitacao em Reabilitacao Cognitiva",
    ],
    specialties: [
      "Avaliacao Neuropsicologica",
      "Plano de Reabilitacao Cognitiva",
      "Laudos e Pareceres",
    ],
    targetAudience: ["Criancas", "Adultos (18+)", "Idosos"],
    focusAreas: ["TDAH", "TEA", "Memoria", "Funcoes Executivas"],
    modalities: [
      {
        type: "Presencial",
        detail: "Rua Bela Cintra, 640 - Sao Paulo - SP",
      },
    ],
    schedule: [
      { day: "Segunda-feira", hours: "8h - 16h" },
      { day: "Quarta-feira", hours: "8h - 16h" },
      { day: "Quinta-feira", hours: "8h - 14h" },
    ],
    sessionDuration: "60 minutos",
    nextAvailable: "Segunda, 17 de marco",
  },
  {
    slug: "dr-lucas-ribeiro",
    name: "Dr. Lucas Ribeiro",
    registration: "CRP 06/55667",
    title: "Psicologo Clinico",
    role: "Psicologo Clinico — CRP 06/55667",
    specialty: "Terapia Cognitivo-Comportamental",
    focus: ["Fobias", "Panico", "Estresse Pos-Traumatico"],
    modality: "Online",
    availability: "Disponível esta semana",
    rating: 4.8,
    reviews: 108,
    experience: "9 anos de experiência",
    bio: "Especialista em transtornos de ansiedade e traumas, com formação em EMDR e técnicas de exposição.",
    quote: "A mudanca consistente vem de pequenas praticas repetidas.",
    image: "/images/professionals/lucas.png",
    education: [
      "Graduacao em Psicologia — UERJ",
      "Especializacao em TCC",
      "Formacao em EMDR",
    ],
    specialties: ["EMDR", "TCC", "Tecnicas de Exposicao"],
    targetAudience: ["Adultos (18+)", "Adolescentes (14-17)"],
    focusAreas: ["Panico", "Fobias", "TEPT", "Ansiedade Generalizada"],
    modalities: [
      {
        type: "Online",
        detail: "Atendimento remoto para todo o Brasil",
      },
    ],
    schedule: [
      { day: "Terca-feira", hours: "9h - 20h" },
      { day: "Quinta-feira", hours: "9h - 20h" },
      { day: "Sabado", hours: "9h - 13h" },
    ],
    sessionDuration: "50 minutos",
    nextAvailable: "Terca, 11 de marco",
  },
  {
    slug: "dra-beatriz-almeida",
    name: "Dra. Beatriz Almeida",
    registration: "CRP 06/77889",
    title: "Terapeuta de Casal",
    role: "Terapeuta de Casal — CRP 06/77889",
    specialty: "Terapia de Casal",
    focus: ["Comunicacao", "Conflitos", "Sexualidade"],
    modality: "Presencial e Online",
    availability: "Disponível esta semana",
    rating: 4.9,
    reviews: 74,
    experience: "11 anos de experiência",
    bio: "Terapeuta de casal com abordagem sistêmica, ajudando parceiros a reconstruir a comunicação e o vínculo afetivo.",
    quote: "Dialogo e seguranca emocional reconstroem relacoes.",
    image: "/images/professionals/beatriz.png",
    education: [
      "Graduacao em Psicologia — PUC-SP",
      "Especializacao em Terapia Sistemica",
      "Formacao em Sexualidade Humana",
    ],
    specialties: ["Terapia de Casal", "Mediacao de Conflitos", "Parentalidade"],
    targetAudience: ["Casais", "Adultos (18+)"],
    focusAreas: ["Conflitos Conjugais", "Comunicação", "Intimidade", "Ciumes"],
    modalities: [
      {
        type: "Presencial",
        detail: "Rua Oscar Freire, 1440 - Sao Paulo - SP",
      },
      {
        type: "Online",
        detail: "Atendimento por videoconferencia",
      },
    ],
    schedule: [
      { day: "Segunda-feira", hours: "12h - 20h" },
      { day: "Quarta-feira", hours: "12h - 20h" },
      { day: "Sexta-feira", hours: "12h - 18h" },
    ],
    sessionDuration: "60 minutos",
    nextAvailable: "Quarta, 12 de marco",
  },
  {
    slug: "dr-felipe-torres",
    name: "Dr. Felipe Torres",
    registration: "CRP 06/99001",
    title: "Psicologo Clinico",
    role: "Psicologo Clinico — CRP 06/99001",
    specialty: "Psicologia Clinica",
    focus: ["Burnout", "Carreira", "Autoestima"],
    modality: "Online",
    availability: "Disponível na próxima semana",
    rating: 4.6,
    reviews: 51,
    experience: "7 anos de experiência",
    bio: "Focado em saúde mental no trabalho, auxilia profissionais a encontrar equilíbrio entre carreira e vida pessoal.",
    quote: "Cuidar da mente tambem e estrategia de carreira.",
    image: "/images/professionals/felipe.png",
    education: [
      "Graduacao em Psicologia — Mackenzie",
      "Pos-graduacao em Psicologia Organizacional",
      "Formacao em Coaching de Carreira",
    ],
    specialties: [
      "Saude Mental no Trabalho",
      "Prevencao de Burnout",
      "Planejamento de Carreira",
    ],
    targetAudience: ["Adultos (18+)", "Profissionais em transicao"],
    focusAreas: [
      "Burnout",
      "Estresse",
      "Autoconfianca",
      "Decisoes de Carreira",
    ],
    modalities: [
      {
        type: "Online",
        detail: "Atendimento remoto com foco em rotina profissional",
      },
    ],
    schedule: [
      { day: "Terca-feira", hours: "10h - 19h" },
      { day: "Quinta-feira", hours: "10h - 19h" },
    ],
    sessionDuration: "50 minutos",
    nextAvailable: "Quinta, 20 de marco",
  },
  {
    slug: "dra-isabela-martins",
    name: "Dra. Isabela Martins",
    registration: "CRP 06/22334",
    title: "Psicologa Infantil",
    role: "Psicologa Infantil — CRP 06/22334",
    specialty: "Psicologia Infantil",
    focus: ["Autismo", "Dificuldade de Aprendizagem", "Ansiedade Infantil"],
    modality: "Presencial",
    availability: "Disponível esta semana",
    rating: 4.9,
    reviews: 91,
    experience: "13 anos de experiência",
    bio: "Especialista em TEA e dificuldades de aprendizagem, com abordagem lúdica e acolhedora para crianças e famílias.",
    quote:
      "Cada crianca aprende de um jeito unico e merece um cuidado singular.",
    image: "/images/professionals/isabela.png",
    education: [
      "Graduacao em Psicologia — UNIFESP",
      "Especializacao em Transtorno do Espectro Autista",
      "Formacao em Intervencao Comportamental",
    ],
    specialties: [
      "Intervencao em TEA",
      "Dificuldades de Aprendizagem",
      "Treino Parental",
    ],
    targetAudience: ["Criancas", "Familias"],
    focusAreas: ["TEA", "Ansiedade Infantil", "Adaptacao Escolar", "Linguagem"],
    modalities: [
      {
        type: "Presencial",
        detail: "Av. Brasil, 980 - Sao Paulo - SP",
      },
    ],
    schedule: [
      { day: "Segunda-feira", hours: "8h - 15h" },
      { day: "Quarta-feira", hours: "8h - 15h" },
      { day: "Sexta-feira", hours: "8h - 15h" },
    ],
    sessionDuration: "50 minutos",
    nextAvailable: "Quarta, 12 de marco",
  },
];

export const featuredProfessionals = professionals.slice(0, 4);

export const getProfessionalBySlug = (slug: string) =>
  professionals.find((professional) => professional.slug === slug);
