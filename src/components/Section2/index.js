import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input, BarTop,
    ItemsBarTop, CheckItem, Button
} from "./styles";

import { useState, useEffect } from "react";
import api from "../../services/api"
import { Header } from "../Header/"
import Image from '..//..//assets/Services.png'

export function Section2() {
    const [servicos, setServicos] = useState([])
    const [categoria, setCategoria] = useState("")
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [coletaMaterial, setColetaMaterial] = useState("")
    const [tempo, setTempo] = useState("")
    const [resultado, setResultado] = useState("")
    const [recomendacao, setRecomendacao] = useState("")
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [ativo, setativo] = useState("")

    useEffect(() => {
        async function getServicos() {
            await api.get("/servicos").then(result => {
                setServicos(result.data)
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
        formData.append("images", image)
        formData.append("images", image2)
        formData.append("categoria", categoria)
        formData.append("titulo", titulo)
        formData.append("descricao", descricao)
        formData.append("coletaMaterial", coletaMaterial)
        formData.append("tempo", tempo)
        formData.append("resultado", resultado)
        formData.append("recomendacao", recomendacao)
        formData.append("ativo", ativo === "true" ? true : false)

        await api.post("/servicos", formData).then(result => console.log(result))
    }
    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>serviços</Centraltitle>
                </ContainerImage>
                <Centraltitle bar >adicionar serviços</Centraltitle>
                <Inputfields>
                    <Input placeholder="logo :" type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <Input placeholder="banner :" type="file" onChange={(e) => setImage2(e.target.files[0])} />
                    <Input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="categoria principal :" />
                    <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="titulo :" />
                    <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="descrição :" />
                    <Input value={coletaMaterial} onChange={(e) => setColetaMaterial(e.target.value)} placeholder="coleta material :" />
                    <Input value={tempo} onChange={(e) => setTempo(e.target.value)} placeholder="tempo :" />
                    <Input value={resultado} onChange={(e) => setResultado(e.target.value)} placeholder="resultado :" />
                    <Input value={recomendacao} onChange={(e) => setRecomendacao(e.target.value)} placeholder="recomendação :" />
                    <Input value={ativo} onChange={(e) => setativo(e.target.value)} placeholder="ativo :" />
                    <Button onClick={(e) => handleClick(e)}>Enviar</Button>
                </Inputfields>
                <BarTop>
                    <ItemsBarTop>titulo</ItemsBarTop>
                    <ItemsBarTop>descrição</ItemsBarTop>
                    <ItemsBarTop>ativar</ItemsBarTop>
                </BarTop>
                {servicos.map(item => (
                    <BarTop ContentItems>
                        <ItemsBarTop item >{item.titulo}</ItemsBarTop>
                        <ItemsBarTop item >{item.categoria}</ItemsBarTop>
                        <CheckItem type='checkbox' className="switch_1" value={item.ativo}></CheckItem>
                    </BarTop>
                ))}
                <BarTop ContentItems></BarTop>
            </Container>
        </>
    );
}