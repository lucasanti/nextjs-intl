import Layout from "../components/UI/layout";
import useTranslation from "next-translate/useTranslation";

export default function Home(props) {
  
  const { t } = useTranslation();

  return (
    <Layout>
      <h1>{t("common:greeting")}!</h1>
    </Layout>
  );
}

// example by using getStaticProps
// export async function getStaticProps({locale}) {

//   let greeting = 
//     locale === 'en' ? 'Hello world' : 
//     locale === 'it' ? 'Ciao Mondo' : 
//     ""

//   return {
//     props: {
//       greeting
//     }
//   }