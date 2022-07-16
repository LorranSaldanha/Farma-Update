import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input,
    Button, TableItmes, Tbody, Tr, Th, Td, ButtonIcon, CheckItem
} from "./styles";

import { useState, useEffect } from "react";
import api from "../../services/api"
import Image from '..//..//assets/Plus.png'
import { Header } from "../Header/"

// =============== Icons Imported

import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

// =============== Icons Imported


export function Section1() {
    const [maisVantagens, setMaisVantagens] = useState([])
    const [nomeEmpresa, setNomeEmpresa] = useState("")
    // ================= EDITED ==================
    const [endereco, setEndereco] = useState("")
    const [categoria, setCategoria] = useState("")
    // ================= EDITED ==================

    const [beneficios, setBeneficios] = useState("")
    const [image, setImage] = useState(null);
    const [ativo, setativo] = useState("")

    useEffect(() => {
        async function getMaisVantagens() {
            await api.get("/maisVantagens").then(result => {
                setMaisVantagens(result.data)
            })
        }

        getMaisVantagens()
    }, [])

    async function handleClick(e) {
        e.preventDefault()
        var ativar = true
        if (ativo === "true") {
            ativar = true
        } else if (ativo === "false") {
            ativar = false
        }
        const formData = new FormData()
        formData.append("image", image)
        formData.append("nomeEmpresa", nomeEmpresa)

        // ================= EDITED ==================
        formData.append("endereco", endereco)
        formData.append("categoria", categoria)
        // ================= EDITED ==================

        formData.append("beneficios", beneficios)
        formData.append("ativo", ativo === "true" ? true : false)
        console.log(image)
        await api.post("/maisVantagens", formData).then(result => console.log(result))
    }
    // ============================
    // ============================
    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>mais vantagens</Centraltitle>
                </ContainerImage>
                <Centraltitle bar >adicionar empresa conveniada</Centraltitle>

                <Inputfields >

                    <Input placeholder="logo :" type="file" onChange={(e) => setImage(e.target.files[0])} />

                    <Input value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} placeholder="nome da empresa :" />
                    {/* ================= EDITED ================== */}

                    <Input value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="endereço :" />
                    <Input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="categoria :" />
                    {/* ================= EDITED ================== */}

                    <Input value={beneficios} onChange={(e) => setBeneficios(e.target.value)} placeholder="benefícios :" />
                    <Input placeholder="localização :" />
                    <Input value={ativo} onChange={(e) => setativo(e.target.value)} placeholder="ativo :" />

                    <Button onClick={(e) => handleClick(e)} >Enviar</Button>

                </Inputfields>

                <TableItmes>
                    <Tbody>
                        <Tr>
                            <Th>central</Th>
                            <Th>endereço</Th>
                            <Th>editar</Th>
                            <Th>excluir</Th>
                            <Th>ativar</Th>
                        </Tr>
                        <Tr>
                            <Td>flavio calçados</Td>
                            <Td>rua 24 jardim dolorido</Td>
                            <Td><ButtonIcon type="button"><FiEdit className="edit__icon" /></ButtonIcon></Td>
                            <Td><ButtonIcon type="button"><FaTrashAlt className="trash__icon" /></ButtonIcon></Td>
                            <Td><CheckItem type='checkbox' className="switch_1" ></CheckItem></Td>
                        </Tr>
                    </Tbody>
                </TableItmes>

                {/* ================= MIXED ================== */}

                {/* <BarTop>
                    <ItemsBarTop>central</ItemsBarTop>
                    <ItemsBarTop>endereço</ItemsBarTop>
                    <ItemsBarTop>ativar</ItemsBarTop>
                </BarTop>
                {maisVantagens.map(item => (
                    <BarTop ContentItems>
                        <ItemsBarTop item >{item.nomeEmpresa}</ItemsBarTop>
                        <ItemsBarTop item >{item.beneficios}</ItemsBarTop>
                        <CheckItem type='checkbox' className="switch_1" value={item.ativo}></CheckItem>
                    </BarTop>
                ))}
                <BarTop ContentItems></BarTop> */}
            </Container>
        </>
    );
}