import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TableResults from "../components/table-results"

const IndexPage = () => {
      function createData(name, link, tags, duration, people, language, kit) {
        return { name, link, tags, duration, people, language, kit };
      }
      
      const rows = [
        createData('caTesTdrale', 'https://catestdrale.github.io/', 'Testing', '30 mn', '2-99', 'fr', 'https://catestdrale.github.io/chateauCarte.pdf'),
        createData('Retrospective Starter Kit', 'https://kenji-getpowered.github.io/retrospective-starter-kit/', 'Retro', 'Tous', 'Tous', 'fr', 'http://www.filedropper.com/scrum-retrospective-starter-kit'),
        createData('Code-moi un mouton', 'https://github.com/zenika-open-source/code-moi-un-mouton', 'School', 'Tous', 'Tous', 'fr', 'https://github.com/zenika-open-source/code-moi-un-mouton/tree/master/kit-de-demarrage'),
        createData('Elephant Carpaccio', 'https://github.com/jlandure/techio-carpaccio-programming/blob/master/intro.md', 'Kata', 'Tous', 'Tous', 'fr', 'https://github.com/jlandure/techio-carpaccio-programming/blob/master/product.md'),
        createData('Gilded Rose Kata', 'https://github.com/emilybache/GildedRose-Refactoring-Kata', 'Kata', 'Tous', 'Tous', 'en,fr', 'https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/master/GildedRoseRequirements_fr.md'),
        createData('Theatrical Players Refactoring Kata', 'https://github.com/emilybache/Theatrical-Players-Refactoring-Kata', 'Kata', 'Tous', 'Tous', 'en', 'https://github.com/emilybache/Theatrical-Players-Refactoring-Kata/blob/master/README.md'),
        createData('Agile Game of Thrones', 'https://github.com/open-agile/agile-game-of-thrones', 'Priorisation', '1h30', '2-30', 'fr', 'https://github.com/open-agile/agile-game-of-thrones/tree/master/long_version_got'),
        createData('Lego Carpaccio', 'https://github.com/open-agile/lego-carpaccio', 'Iteration,Feedback,Lego', '1h30 mn', '2-30', 'fr', 'https://github.com/open-agile/lego-carpaccio'),
        createData('RetroThemez', 'https://github.com/cs91/RetroThemez', 'Retro', 'Tous', 'Tous', 'en', 'https://github.com/cs91/RetroThemez'),
        createData('Rétrospectives Scénarisées', 'https://github.com/chapuyj/scripted-retrospective', 'Retro', 'Tous', 'Tous', 'fr', 'https://github.com/chapuyj/scripted-retrospective/blob/master/scripts/kaamelott_un-sejour-a-kaamelott_20191026.md'),
      ];

    return (<Layout>
        <SEO title="Que recherchez-vous ?"/>

        <div className={"page-header home"}>
            <h1>Que recherchez-vous ?</h1>
            <p>Voici la liste actuelle :</p>
            <div className={"container"}>
                <div className={"features"}>
                    <TableResults results={rows}/>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Votre atelier n'est pas listé&nbsp;?</h2>
                    <p>Rien de plus simple&nbsp;! Il suffit de le proposer.</p>
                </div>

                <div className={"button"}>
                    <a href="https://github.com/open-agile/open-agile.github.io/pulls" target={"_blank"}>Je rajoute mon atelier ici&nbsp;!</a>
                </div>
            </div>
        </div>
    </Layout>)
}

export default IndexPage
