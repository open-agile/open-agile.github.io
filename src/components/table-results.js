import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const TableResults = ({results}) => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
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
        {results.map(row => (
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
</Paper>)
}
export default TableResults
