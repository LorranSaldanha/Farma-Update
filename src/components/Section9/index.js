// =============== Components
import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input,
    TableItmes, Tbody, Tr, Th, Td, ButtonIcon, CheckItem
} from "./styles";


import { Header } from "../Header/"
import Image from '..//..//assets/MeuBox.png'

// =============== Icons Imported

import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

// =============== Icons Imported


export function Section9() {

    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>meu box</Centraltitle>
                </ContainerImage>
                <Centraltitle bar="bar" >meu box</Centraltitle>
                <Inputfields>
                    <Input placeholder="cod_box :"></Input>
                    <Input placeholder="nome_box :"></Input>
                    <Input placeholder="endereço :"></Input>
                    <Input placeholder="localizção :"></Input>
                    <Input placeholder="ativo :"></Input>
                </Inputfields>

                <TableItmes>
                    <Tbody>
                        <Tr>
                            <Th>titulo</Th>
                            <Th>mensagem</Th>
                            <Th>editar</Th>
                            <Th>excluir</Th>
                            <Th>ativar</Th>
                        </Tr>
                        <Tr>
                            <Td>Materia : remedios</Td>
                            <Td>write a message</Td>
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