import {
    Container, HeroHeader, TitleHero, ContainerForm,
    InputForm, TextLabel, ButtonLink, ContentButtons,
    PartitionLine,

} from "./styles";

import { Header } from "../Header/"

export function Section7() {
    return (
        <Container>
            <Header />
            <HeroHeader>
                <TitleHero>finalizar venda - Acumular troco</TitleHero>
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

                    <TextLabel>Acumular troco:</TextLabel>
                    <InputForm style={{ textAlign: "center", color: "#003C8D" }} value={"r$ 00,00"} />


                </>

                <>
                    <PartitionLine />

                    <TextLabel>Bônus:</TextLabel>
                    <InputForm background="background" value={"r$ 00,00"} />

                    <TextLabel>Valor do bônus:</TextLabel>
                    <InputForm background="background" value={"r$ 00,00"} />

                    <TextLabel>Valor acumulado:</TextLabel>
                    <InputForm background="background" value={"r$ 00,00"} />

                    <PartitionLine />

                    <TextLabel style={{ textTransform: "capitalize" }} > novo saldo:</TextLabel>
                    <InputForm style={{ background: "#FFC000", textAlign: "center", color: "#003C8D" }} value={"r$ 00,00"} />

                </>

                <ContentButtons>
                    <ButtonLink color="color ">confirmar</ButtonLink>
                </ContentButtons>
                
            </ContainerForm>


        </Container>
    );
}