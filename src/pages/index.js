import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const IndexPage = () => {
    const useStyles = makeStyles({
        root: {
          width: '100%',
          overflowX: 'auto',
        },
        table: {
          minWidth: 650,
        },
      });
      
      function createData(name, link, tags, duration, people, language, kit) {
        return { name, link, tags, duration, people, language, kit };
      }
      
      const rows = [
        createData('caTesTdrale', 'https://catestdrale.github.io/', 'Testing', '30 mn', '2-99', 'fr', 'https://catestdrale.github.io/chateauCarte.pdf'),
        createData('Retrospective Starter Kit', 'https://kenji-getpowered.github.io/retrospective-starter-kit/', 'Retro', 'Tous', 'Tous', 'fr', 'http://www.filedropper.com/scrum-retrospective-starter-kit'),
        createData('Agile Game of Thrones', 'https://github.com/open-agile/agile-game-of-thrones', 'Priorisation', '1h30', '2-30', 'fr', 'https://github.com/open-agile/agile-game-of-thrones/tree/master/long_version_got'),
        createData('Lego Carpaccio', 'https://github.com/open-agile/lego-carpaccio', 'Iteration,Feedback,Lego', '1h30 mn', '2-30', 'fr', 'https://github.com/open-agile/lego-carpaccio'),
        createData('RetroThemez', 'https://github.com/cs91/RetroThemez', 'Retro', 'Tous', 'Tous', 'en', 'https://github.com/cs91/RetroThemez'),
        createData('Rétrospectives Scénarisées', 'https://github.com/chapuyj/scripted-retrospective', 'Retro', 'Tous', 'Tous', 'fr', 'https://github.com/chapuyj/scripted-retrospective/blob/master/scripts/kaamelott_un-sejour-a-kaamelott_20191026.md'),
      ];
    
      const classes = useStyles();


    return (<Layout>
        <SEO title="Que recherchez-vous ?"/>

        <div className={"page-header home"}>
            <h1>Que recherchez-vous ?</h1>
            <p>Voici la liste actuelle :</p>
            <div className={"container"}>
                <div className={"features"}>
                    <Paper className={classes.root}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Nom</TableCell>
                                <TableCell align="right">Lien GitHub</TableCell>
                                <TableCell align="right">Catégories</TableCell>
                                <TableCell align="right">Durée</TableCell>
                                <TableCell align="right">Participants</TableCell>
                                <TableCell align="right">Langue</TableCell>
                                <TableCell align="right">Kit à télécharger</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.link}</TableCell>
                                <TableCell align="right">{row.tags}</TableCell>
                                <TableCell align="right">{row.duration}</TableCell>
                                <TableCell align="right">{row.people}</TableCell>
                                <TableCell align="right">{row.language}</TableCell>
                                <TableCell align="right"><a href={row.kit} title={row.kit}>Lien</a></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </Paper>
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
