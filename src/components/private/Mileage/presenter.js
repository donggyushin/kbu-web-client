import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
}));

const Container = styled.div``

const NormalText = styled.div``

const SmallText = styled.div`
    font-size: 12px;
`

const Column = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`

const Row = styled.div`
    display:flex;
`

export default function MileagePresenter({ rows }) {
    const classes = useStyles();
    return <Container>
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>날짜</TableCell>
                            <TableCell align="right">내역</TableCell>
                            <TableCell align="right">가격</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    <SmallText>
                                        {row.date}
                                    </SmallText>
                                </TableCell>
                                <TableCell align="right">
                                    <Column>
                                        <NormalText>
                                            {row.history}
                                        </NormalText>
                                        <Row>
                                            <SmallText>
                                                {row.number}&nbsp;{row.location}
                                            </SmallText>
                                        </Row>
                                    </Column>
                                </TableCell>
                                <TableCell align="right">
                                    {row.price}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    </Container>
}