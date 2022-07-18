import {
    Container, HeroHeader, TitleHero, ContainerForm,
    ButtonLink, ContentButtons,TextLabel,InputForm,PartitionLine,
} from "./styles";

import { Header } from "../Header/"

export function Section8() {
    return (
        <Container>
            <Header />
            <HeroHeader>
                <TitleHero>finalizar venda - Resgatar troco</TitleHero>
            </HeroHeader>
            <ContainerForm>
                <>
                    <TextLabel>atendente</TextLabel>
                    <InputForm placeholder="atendente :" />

                    <TextLabel>cpf</TextLabel>
                    <InputForm placeholder="digite somente números :" />

                    <TextLabel>cliente</TextLabel>
                    <InputForm placeholder="cliente :" />

                </>

                <>
                    <PartitionLine />

                    <TextLabel>Valor disponível:</TextLabel>
                    <InputForm background="background" value={"r$ 00,00"} />

                    <PartitionLine />

                    <TextLabel style={{ textTransform: "capitalize" }} >resgatar:</TextLabel>
                    <InputForm style={{ textAlign: "center", color: "#003C8D" }} value={"r$ 00,00"} />

                    <PartitionLine />

                    <TextLabel style={{ textTransform: "capitalize" }} > novo saldo:</TextLabel>
                    <InputForm style={{ textAlign: "center", color: "#003C8D" }} value={"r$ 00,00"} />


                </>

                <ContentButtons>
                    <ButtonLink color="color ">confirmar</ButtonLink>
                </ContentButtons>
            </ContainerForm>



        </Container>
    );
}