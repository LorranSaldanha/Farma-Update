import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input, TableItmes, Tbody, Tr, Th, Td, ButtonIcon, CheckItem
} from "./styles";

import { Header } from "../Header/"
import Image from '..//..//assets/Localização.png'

// =============== Icons Imported

import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

// =============== Icons Imported

export function Section5() {
    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>nossas lojas</Centraltitle>
                </ContainerImage>
                <Centraltitle bar >adicionar nossas lojas</Centraltitle>
                <Inputfields>
                    <Input placeholder="imagem :" type="file"></Input>
                    <Input placeholder="descrição :"></Input>
                    <Input placeholder="endereço :"></Input>
                    <Input placeholder="localizção :"></Input>
                    <Input placeholder="ativo :"></Input>
                </Inputfields>

                <TableItmes>
                    <Tbody>
                        <Tr>
                            <Th>produto</Th>
                            <Th>descrição</Th>
                            <Th>editar</Th>
                            <Th>excluir</Th>
                            <Th>ativar</Th>
                        </Tr>
                        <Tr>
                            <Td>frauda turma da monica</Td>
                            <Td>fraudas</Td>
                            <Td><ButtonIcon type="Button"><FiEdit className="edit__icon" /></ButtonIcon></Td>
                            <Td><ButtonIcon type="Button"><FaTrashAlt className="trash__icon" /></ButtonIcon></Td>
                            <Td><CheckItem type='checkbox' className="switch_1" ></CheckItem></Td>
                        </Tr>

                    </Tbody>
                </TableItmes>



                {/* <BarTop>
                    <ItemsBarTop>produto</ItemsBarTop>
                    <ItemsBarTop>descrição</ItemsBarTop>
                    <ItemsBarTop>ativar</ItemsBarTop>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >zzzzzzzzzzz</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >yyyyyyyyyyy</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >zzzzzzzzzzz</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >yyyyyyyyyyy</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems></BarTop> */}
            </Container>
        </>
    );
}