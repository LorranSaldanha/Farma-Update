import {
    Container, HeroHeader, TitleHero, ContainerForm,
    LabelForm, InputField, LineBehavior, Button, ContainerButtons
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
                <LabelForm >atendente</LabelForm>
                <InputField></InputField>
                <LabelForm label >cpf</LabelForm>
                <InputField></InputField>
                <LabelForm >cliente</LabelForm>
                <InputField></InputField>
            </ContainerForm>
            <LineBehavior />
            <TitleHero title>valor disponível</TitleHero>
            <ContainerButtons>
                <Button button price> r$ 0,00</Button>
            </ContainerButtons>
            <TitleHero title>acumular troco</TitleHero>
            <ContainerButtons>
                <Button> r$ 0,00</Button>
            </ContainerButtons>
            <TitleHero title>bonus</TitleHero>
            <ContainerButtons>
                <Button> r$ 0,00</Button>
            </ContainerButtons>
            <TitleHero title>valor do bonus</TitleHero>
            <ContainerButtons>
                <Button > r$ 0,00</Button>
            </ContainerButtons>
            <TitleHero title>valor acumulado</TitleHero>
            <ContainerButtons>
                <Button > r$ 0,00</Button>
            </ContainerButtons>
            <LineBehavior />
            <TitleHero title>saldo atual</TitleHero>
            <ContainerButtons>
                <Button> r$ 0,00</Button>
            </ContainerButtons>


        </Container>
    );
}