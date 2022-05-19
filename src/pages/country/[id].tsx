import { Logo } from "../../components/Header/Logo";

import { CountrySingle } from "../../components/CountrySingle/CountrySingle";
import axios from "axios";
import { GetServerSideProps } from "next";

interface CountryProps {
  id: string;
  name: string;
  banner: string;
  description: string;
  countries: number;
  languages: number;
  cities: number;
  famous: [capital: string, banner: string, name: string, flag: string];
}

export default function Country({ data }) {
  console.log(data);
  return (
    <>
      <Logo />

      <CountrySingle
        name={data[0].name}
        banner={data[0].banner}
        description={data[0].description}
        countries={data[0].countries}
        languages={data[0].languages}
        cities={data[0].cities}
        capital={""}
        bannerCard={""}
        nameCard={""}
        flag={""}
        famous={data[0].famous}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const response = await axios.get(
    `http://localhost:3000/api/countryInfo?id=${params.id}`
  );
  const data = response.data;

  console.log(data);

  return {
    props: { data },
  };
};
