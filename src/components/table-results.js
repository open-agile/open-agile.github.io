import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const TableResults = ({results}) => {
  const useStyles1 = makeStyles(theme => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = event => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = event => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = event => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = event => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="première page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="page précédente">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="page suivante"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="dernière page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }

  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    table: {
      minWidth: 500,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  });

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, results.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
  <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell>Nom</TableCell>
                      <TableCell align="right">Catégories</TableCell>
                      <TableCell align="right">Durée</TableCell>
                      <TableCell align="right">Participants</TableCell>
                      <TableCell align="right">Langue</TableCell>
                      <TableCell align="right">Kit à télécharger</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
              {(rowsPerPage > 0
                ? results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : results
              ).map(row => (
                  <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                          <a href={row.link} title={row.name}>{row.name}</a>
                      </TableCell>
                      <TableCell align="right">{row.tags}</TableCell>
                      <TableCell align="right">{row.duration}</TableCell>
                      <TableCell align="right">{row.people}</TableCell>
                      <TableCell align="right">{row.language}</TableCell>
                      <TableCell align="right"><a href={row.kit} title={row.kit}>Lien</a></TableCell>
                  </TableRow>
              ))}

              {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                  </TableRow>
              )}
              </TableBody>
              <TableFooter>
                  <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'Tout', value: -1 }]}
                        colSpan={3}
                        count={results.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: { 'aria-label': 'Résultats par page' },
                          native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        labelDisplayedRows={({ from, to, count }) => from + '-' + to === -1 ? count : to + ' sur ' +count}
                        labelRowsPerPage={'Résultats par page :'}
                      />
                  </TableRow>
              </TableFooter>
          </Table>
      </div>
</Paper>)
}
export default TableResults
