import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { ClienteContext } from '../../contexts/cliente/State.js'

const TabelClientes = () => {
  const { clientes, setClientes } = useContext(ClienteContext);
  /*   useEffect(() => {
      setClientes(JSON.parse(localStorage.getItem("clientes")));
    }) */

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Sobrenome</TableCell>
            <TableCell align="right">CPF</TableCell>
            <TableCell align="right">Nascimento</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.sobrenome}</TableCell>
              <TableCell align="right">{row.cpf}</TableCell>
              <TableCell align="right">{row.nascimento}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.telefone}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TabelClientes;