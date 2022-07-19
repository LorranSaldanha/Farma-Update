
import {
    Container, TitleHero, HeroHeader, ContainerForm, TextLabel, InputForm,
    ContentButtons, ButtonLink, TextFooter, UpperCase,
} from "./styles";
import { Header } from "../Header/";

export function Section6() {
    return (
        <Container>
            <Header></Header>
            <HeroHeader>
                <TitleHero>escolha a sua operação</TitleHero>
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

                <ContentButtons>
                    <ButtonLink>acumular troco</ButtonLink>
                    <ButtonLink>resgatar troco</ButtonLink>
                    <ButtonLink color="color" >fechamento</ButtonLink>
                </ContentButtons>

                <TextFooter>
                    <UpperCase>nunca esqueça de fazer o fachamento</UpperCase>  ao encerrar sua jornada.
                </TextFooter>

            </ContainerForm>
        </Container>
    );
}