import {
    Container, ContainerImage, CentralImage,
    Centraltitle, FormField, InputField,
    TableItmes, Tbody, Tr, Th, Td, ButtonIcon, CheckItem,
} from "./styles";

import { Header } from "../Header/";
import Image from '..//..//assets/MaisQueFarmacia.png';

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
                    <CentralImage src={Image}/>
                    <Centraltitle>mais que farmacia</Centraltitle>
                </ContainerImage>
                <Centraltitle bar="bar" >adicionar mais que farmacia</Centraltitle>
                <FormField>
                    <InputField placeholder="logo :" type="file" />
                    <InputField placeholder="banner :" type="file" />
                    <InputField placeholder="categoria principal :"/>
                    <InputField placeholder="titulo :"/>
                    <InputField placeholder="descrição :"/>
                    <InputField placeholder="coleta material :"/>
                    <InputField placeholder="tempo :"/>
                    <InputField placeholder="resultado :"/>
                    <InputField placeholder="recomendação :"/>
                    <InputField placeholder="ativo :"/>
                </FormField>
        
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
                            <Td>remedios</Td>
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