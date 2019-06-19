import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="О нас"
        keywords={[`сайт`, `реклама`, `react`, `бизнес`]}
      />

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <p className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
            Успех возможен только с нами. Сделаем Вам сайт для Вашего бизнеса.
          </p>

          <p className="font-bold mt-4 text-right text-xs uppercase">
            – Команда разработчиков
          </p>
        </div>

        <div className="w-2/3 md:w-1/3">
          <img src={dogIllustration} alt="A dog relaxing" />
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
