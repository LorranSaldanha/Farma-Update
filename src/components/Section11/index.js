// =============== Components
import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input,
    TableItmes, Tbody, Tr, Th, Td, ButtonIcon, CheckItem
} from "./styles";

// =============== 

import { Header } from "../Header/"
import Image from '..//..//assets/Rings.png'

// =============== Icons Imported

import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

// =============== Icons Imported


export function Section11() {

    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>notificações</Centraltitle>
                </ContainerImage>
                <Centraltitle bar="bar" >adicionar - notificações</Centraltitle>
                <Inputfields>
                    <Input placeholder=" titulo :" ></Input>
                    <Input placeholder="mensagem :"></Input>
                    <Input placeholder="fonte :"></Input>
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