export default function handler(req, res) {
  const { id } = req.query;

  const countries = countryInfo.filter((country) => country.id === id);

  res.status(200).json(countries);
}

export const countryInfo = [
  {
    id: "europe",
    name: "Europa",
    banner: "/europe-single.webp",
    description:
      "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    countries: 50,
    languages: 60,
    cities: 27,
    famous: [
      {
        capital: "Londres",
        banner: "/londres.webp",
        name: "Reino Unido",
        flag: "/reino-unido.svg",
      },
      {
        capital: "Paris",
        banner: "/paris.webp",
        name: "França",
        flag: "/franca.svg",
      },
      {
        capital: "Roma",
        banner: "/roma.webp",
        name: "Itália",
        flag: "/italia.svg",
      },
      {
        capital: "Praga",
        banner: "/praga.webp",
        name: "Republica Tcheca",
        flag: "/republica-tcheca.svg",
      },
      {
        capital: "Amsterdã",
        banner: "/amsterdam.webp",
        name: "Holanda",
        flag: "/holanda.svg",
      },
    ],
  },
  {
    id: "africa",
    name: "África",
    banner: "/africa-single.webp",
    description:
      "A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.",
    countries: 54,
    languages: 3000,
    cities: 6,
    famous: [
      {
        capital: "Joanesburgo",
        banner: "/joanesburgo.webp",
        name: "África do Sul",
        flag: "/africa-do-sul.svg",
      },
      {
        capital: "Cape Town",
        banner: "/cape-town.webp",
        name: "África do Sul",
        flag: "/africa-do-sul.svg",
      },
      {
        capital: "Durban",
        banner: "/durban.webp",
        name: "África do Sul",
        flag: "/africa-do-sul.svg",
      },
      {
        capital: "Entebbe",
        banner: "/entebbe.webp",
        name: "Uganda",
        flag: "/uganda.svg",
      },
      {
        capital: "Nairobi",
        banner: "/nairobi.webp",
        name: "Quênia",
        flag: "/quenia.svg",
      },
    ],
  },
  {
    id: "north-america",
    name: "América do Norte",
    banner: "/north-america-single.webp",
    description:
      "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).",
    countries: 3,
    languages: 7,
    cities: 15,
    famous: [
      {
        capital: "Cidade do México",
        banner: "/cidade-do-mexico.webp",
        name: "México",
        flag: "/mexico.svg",
      },
      {
        capital: "Cancún",
        banner: "/cancun.webp",
        name: "México",
        flag: "/mexico.svg",
      },
      {
        capital: "Miami",
        banner: "/miami.webp",
        name: "Estados Unidos",
        flag: "/estados-unidos.svg",
      },
      {
        capital: "Toronto",
        banner: "/toronto.webp",
        name: "Canadá",
        flag: "/canada.svg",
      },
      {
        capital: "Nova York",
        banner: "/nova-york.webp",
        name: "Estados Unidos",
        flag: "/estados-unidos.svg",
      },
    ],
  },
  {
    id: "south-america",
    name: "América do Sul",
    banner: "/south-america-single.webp",
    description:
      "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente. Os outros pontos extremos da América do Sul são: ao norte a Punta Gallinas, na Colômbia, ao leste a Ponta do Seixas, no Brasil, e a oeste a Punta Pariñas, no Peru. Seus limites naturais são: ao norte com o mar do Caribe; a leste, nordeste e sudeste com o oceano Atlântico; e a oeste com o oceano Pacífico. O Brasil representa atualmente a metade da população e produto econômico desta região.",
    countries: 13,
    languages: 9,
    cities: 22,
    famous: [
      {
        capital: "Rio de Janeiro",
        banner: "/rio-de-janeiro.webp",
        name: "Brasil",
        flag: "/brasil.svg",
      },
      {
        capital: "Buenos Aires",
        banner: "/buenos-aires.webp",
        name: "Argentina",
        flag: "/argentina.svg",
      },
      {
        capital: "Cusco",
        banner: "/cusco.webp",
        name: "Peru",
        flag: "/peru.svg",
      },
      {
        capital: "Lima",
        banner: "/lima.webp",
        name: "Peru",
        flag: "/peru.svg",
      },
      {
        capital: "São Paulo",
        banner: "/sao-paulo.webp",
        name: "Brasil",
        flag: "/brasil.svg",
      },
    ],
  },
  {
    id: "asia",
    name: "Ásia",
    banner: "/asia-single.webp",
    description:
      "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico. Mas na parte meridional, a Ásia chega ao seu final na região mais quente dos trópicos, nas imediações da linha do equador. Na Ásia são encontradas algumas das montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, planícies e planaltos; as selvas e florestas mais densas. A altitude máxima e a mínima está localizada na Ásia. O monte Everest, a altitude máxima do planeta, está localizada a 8 848 m acima do nível do mar; ao longo da linha fronteiriça da República Democrática Federal do Nepal com a região autônoma chinesa do Tibete. O litoral do mar Morto, a planície de menor altitude do mundo, estão localizadas a 396 m abaixo do nível do mar, na região fronteiriça do Estado de Israel com o Reino Hashemita da Jordânia.",
    countries: 50,
    languages: 8,
    cities: 8,
    famous: [
      {
        capital: "Bangcoc",
        banner: "/bangcoc.webp",
        name: "Tailândia",
        flag: "/tailandia.svg",
      },
      {
        capital: "Cingapura",
        banner: "/cingapura.webp",
        name: "Singapura",
        flag: "/singapura.svg",
      },
      {
        capital: "Tóquio",
        banner: "/toquio.webp",
        name: "Japão",
        flag: "/japao.svg",
      },
      {
        capital: "Hong Kong",
        banner: "/china.webp",
        name: "China",
        flag: "/china.svg",
      },
      {
        capital: "Seul",
        banner: "/seul.webp",
        name: "Coreia do Sul",
        flag: "/coreia-do-sul.svg",
      },
    ],
  },
  {
    id: "oceania",
    name: "Oceania",
    banner: "/oceania-single.webp",
    description:
      "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.",
    countries: 16,
    languages: 18,
    cities: 12,
    famous: [
      {
        capital: "Sidney",
        banner: "/sidney.webp",
        name: "Austrália",
        flag: "/australia.svg",
      },
      {
        capital: "Barreira de Corais",
        banner: "/barreira-de-corais.webp",
        name: "Austrália",
        flag: "/australia.svg",
      },
      {
        capital: "Milford Sound",
        banner: "/milford-sound.webp",
        name: "Nova Zelândia",
        flag: "/nova-zelandia.svg",
      },
      {
        capital: "Waikato",
        banner: "/waikato.webp",
        name: "Nova Zelândia",
        flag: "/nova-zelandia.svg",
      },
      {
        capital: "Ilha de Páscoa",
        banner: "/ilha-de-pascoa.webp",
        name: "Chile",
        flag: "/chile.svg",
      },
    ],
  },
];
