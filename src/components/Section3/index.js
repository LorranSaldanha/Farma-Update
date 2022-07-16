import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input, TableItmes, Tbody, Tr, Th, Td, ButtonIcon, CheckItem,
} from "./styles";

import { Header } from "../Header/"
import Image from '..//..//assets/MaisQueFarmacia.png'

// =============== Icons Imported

import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

// =============== Icons Imported


export function Section3() {
    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>mais que farmacia</Centraltitle>
                </ContainerImage>
                <Centraltitle bar >adicionar mais que farmacia</Centraltitle>
                <Inputfields>
                    <Input placeholder="logo :" type="file" ></Input>
                    <Input placeholder="banner :" type="file" ></Input>
                    <Input placeholder="categoria principal :"></Input>
                    <Input placeholder="titulo :"></Input>
                    <Input placeholder="descrição :"></Input>
                    <Input placeholder="coleta material :"></Input>
                    <Input placeholder="tempo :"></Input>
                    <Input placeholder="resultado :"></Input>
                    <Input placeholder="recomendação :"></Input>
                    <Input placeholder="ativo :"></Input>
                </Inputfields>
        
                <TableItmes>
                    <Tbody>
                        <Tr>
                            <Th>titulo</Th>
                            <Th>descrição</Th>
                            <Th>editar</Th>
                            <Th>excluir</Th>
                            <Th>ativar</Th>
                        </Tr>
                        <Tr>
                            <Td>imunize</Td>
                            <Td>rua 24 - jardim dolorido</Td>
                            <Td><ButtonIcon type="Button"><FiEdit className="edit__icon" /></ButtonIcon></Td>
                            <Td><ButtonIcon type="Button"><FaTrashAlt className="trash__icon" /></ButtonIcon></Td>
                            <Td><CheckItem type='checkbox' className="switch_1" ></CheckItem></Td>
                        </Tr>

                    </Tbody>
                </TableItmes>

            </Container>
        </>
    );
}