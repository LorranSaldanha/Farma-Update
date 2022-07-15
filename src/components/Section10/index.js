// =============== Components
import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input,
} from "./styles";

// =============== 

import { Header } from "../Header/"
import Image from '..//..//assets/Card.png'
import { Table } from "../Table";

// =============== Components

// =============== Funtion

export function Section10() {

    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    {/* <Centraltitle>meu box</Centraltitle> */}
                </ContainerImage>
                <Centraltitle bar="bar" >seja associado</Centraltitle>
                <Inputfields>
                    <Input placeholder=" logo:" type="file" ></Input>
                    <Input placeholder="titulo :"></Input>
                    <Input placeholder="descrição :"></Input>
                    <Input placeholder="ativo :"></Input>
                </Inputfields>

                {/* ================= Table ================= */}
                <Table />
                {/* ================= Table ================= */}


            </Container>
        </>
    );
}