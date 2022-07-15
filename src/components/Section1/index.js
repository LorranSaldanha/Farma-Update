import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input, BarTop,
    ItemsBarTop, CheckItem, Button
} from "./styles";

import { useState, useEffect } from "react";
import api from "../../services/api"
import Image from '..//..//assets/Plus.png'
import { Header } from "../Header/"
import { Table } from "../Table";


export function Section1() {
    const [maisVantagens, setMaisVantagens] = useState([])
    const [nomeEmpresa, setNomeEmpresa] = useState("")
    const [beneficios, setBeneficios] = useState("")
     const [image,setImage] = useState(null);
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
        formData.append("beneficios", beneficios)
        formData.append("ativo", ativo === "true" ? true : false)
        console.log(image)
        await api.post("/maisVantagens",  formData).then(result => console.log(result))
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

                    <Input placeholder="logo :" type="file"  onChange={(e) => setImage(e.target.files[0])} />

                    <Input  value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)}  placeholder="nome da empresa :" />
                    <Input value={beneficios} onChange={(e) => setBeneficios(e.target.value)} placeholder="benefícios :"/>
                    <Input placeholder="localização gps (latitude/longitude) :"/>
                    <Input value={ativo} onChange={(e) => setativo(e.target.value)} placeholder="ativo :" />

                    <Button onClick={(e) => handleClick(e)} >Enviar</Button>
                </Inputfields>
                <Table/>
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