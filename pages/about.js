import Layout from "../components/UI/Layout";
import useTranslation from "next-translate/useTranslation";
export default function AnotherPage() {
  const { t } = useTranslation();


  return (
    <Layout>
      <h1>{t( "about:about" )}</h1>
      <p>
       {t( "about:my-name-text" )}Luca
      </p>
    </Layout>
  );
}