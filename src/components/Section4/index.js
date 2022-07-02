import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input, BarTop,
    ItemsBarTop, CheckItem,ButtonSide, Button,
} from "./styles";

import { useState, useEffect } from "react";
import api from "../../services/api"
import { Header } from "../Header/"
import Image from '..//..//assets/Oferta.png'

export function Section4() {
    const [ofertas, setOfertas] = useState([])
    const [categoria, setCategoria] = useState("")
    const [descricao, setDescricao] = useState("")
    const [tipoOferta, setTipoOferta] = useState("")
    const [image,setImage] = useState(null);
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
        if(ativo === "true") {
            ativar = true
        } else if(ativo === "false") {
            ativar = false
        }
        const formData = new FormData()
        formData.append("image", image)
        formData.append("descricao", descricao)
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
                    <Input placeholder="imagem :"  type="file"  onChange={(e) => setImage(e.target.files[0])}/>
                    <Input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="descrição :" />
                    <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="categoria principal :" />
                    <Input value={tipoOferta} onChange={(e) => setTipoOferta(e.target.value)} placeholder="tipo oferta :" />
                    <Input value={valor} onChange={(e) => setValor(e.target.value)} placeholder="valor :" />
                    <Input value={valor} onChange={(e) => setValor(e.target.value)} placeholder="ativar ou comprar :" />
                    <Input value={ativo} onChange={(e) => setativo(e.target.value)} placeholder="ativo :" />
                    <Button onClick={(e) => handleClick(e)}>Enviar</Button>
                </Inputfields>
                <BarTop>
                    <ItemsBarTop>produto</ItemsBarTop>
                    <ItemsBarTop>valor</ItemsBarTop>
                    <ItemsBarTop>ativar</ItemsBarTop>
                </BarTop>
                {ofertas.map(item => (
                    <BarTop ContentItems>
                        <ItemsBarTop style={{width: 200}} item >{item.descricao}</ItemsBarTop>
                        <ItemsBarTop item >{item.valor}</ItemsBarTop>
                        <CheckItem type='checkbox' className="switch_1" value={item.ativo}></CheckItem>
                    </BarTop>
                ))}
                <BarTop ContentItems></BarTop>
            </Container>
        </>
    );
}