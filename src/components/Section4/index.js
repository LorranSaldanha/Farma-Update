import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input, ButtonSide, Button,
    TableItmes, Tbody, Tr, Th, Td, ButtonIcon, CheckItem
} from "./styles";

import { useState, useEffect } from "react";
import api from "../../services/api";
import { Header } from "../Header/";
import Image from '..//..//assets/Oferta.png';

// =============== Icons Imported

import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

// =============== Icons Imported


export function Section4() {
    const [ofertas, setOfertas] = useState([])
    const [categoria, setCategoria] = useState("")
    // ============ Edited ============== 

    const [complemento, setComplemento] = useState("")
    // ============ Edited ============== 

    const [descricao, setDescricao] = useState("")
    const [tipoOferta, setTipoOferta] = useState("")
    const [image, setImage] = useState(null);
    const [valor, setValor] = useState("")
    const [ativo, setativo] = useState("")

    useEffect(() => {
        async function getServicos() {
            await api.get("/ofertas").then(result => {
                setOfertas(result.data)
            })
        }

        getServicos()
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
        formData.append("descricao", descricao)
        // ============ Edited ============== 

        formData.append("complemento", complemento)

        // ============ Edited ==============
        formData.append("tipoOferta", tipoOferta)
        formData.append("categoria", categoria)
        formData.append("valor", valor)
        formData.append("ativo", ativo === "true" ? true : false)

        console.log(image)
        await api.post("/ofertas", formData).then(result => console.log(result))
    }
    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>ofertas</Centraltitle>
                    <ButtonSide>news</ButtonSide>
                </ContainerImage>
                <Centraltitle bar >adicionar ofertas</Centraltitle>
                <Inputfields>
                    <Input placeholder="imagem :" type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <Input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="descrição :" />
                    {/* ============= Edited =========== */}

                    <Input value={complemento} onChange={(e) => setComplemento(e.target.value)} placeholder="complemento :" />
                    {/* ============= Edited =========== */}

                    <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="categoria principal :" />
                    <Input value={tipoOferta} onChange={(e) => setTipoOferta(e.target.value)} placeholder="tipo oferta :" />
                    <Input value={valor} onChange={(e) => setValor(e.target.value)} placeholder="valor :" />

                    {/* ============ Edited ============ */}
                    <Input value={valor} onChange={(e) => setValor(e.target.value)} placeholder="limite_por_pessoa :" />
                    <Input value={valor} onChange={(e) => setValor(e.target.value)} placeholder="data de encerramento :" />
                    {/* ============ Edited ============ */}

                    <Input value={valor} onChange={(e) => setValor(e.target.value)} placeholder="ativar ou comprar :" />
                    <Input value={ativo} onChange={(e) => setativo(e.target.value)} placeholder="ativo :" />
                    <Button onClick={(e) => handleClick(e)}>Enviar</Button>
                </Inputfields>

                <TableItmes>
                    <Tbody>
                        <Tr>
                            <Th>produto</Th>
                            <Th>valor</Th>
                            <Th>editar</Th>
                            <Th>excluir</Th>
                            <Th>ativar</Th>
                        </Tr>
                        <Tr>
                            <Td>frauda pampers</Td>
                            <Td>r$ xx,xx</Td>
                            <Td><ButtonIcon type="Button"><FiEdit className="edit__icon" /></ButtonIcon></Td>
                            <Td><ButtonIcon type="Button"><FaTrashAlt className="trash__icon" /></ButtonIcon></Td>
                            <Td><CheckItem type='checkbox' className="switch_1" ></CheckItem></Td>
                        </Tr>
                    </Tbody>
                </TableItmes>

                {/* ============ MIXED ==============  */}

                {/* <BarTop>
                    <ItemsBarTop>produto</ItemsBarTop>
                    <ItemsBarTop>valor</ItemsBarTop>
                    <ItemsBarTop>ativar</ItemsBarTop>
                </BarTop>
                {ofertas.map(item => (
                    <BarTop ContentItems>
                        <ItemsBarTop style={{ width: 200 }} item >{item.descricao}</ItemsBarTop>
                        <ItemsBarTop item >{item.valor}</ItemsBarTop>
                        <CheckItem type='checkbox' className="switch_1" value={item.ativo}></CheckItem>
                    </BarTop>
                ))}
                <BarTop ContentItems></BarTop> */}

            </Container>
        </>
    );
}