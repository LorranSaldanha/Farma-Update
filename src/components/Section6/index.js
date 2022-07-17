
import {
    Container, ContainerForm, InputField, TextLabel,
    ContentButtons, ButtonLink, TextFooter, UpperCase
} from "./styles";
import { Header } from "../Header/";

export function Section6() {
    return (
        <Container>
            <Header></Header>
            <ContainerForm>
                <TextLabel >atendente</TextLabel>
                <InputField placeholder="atendente :" />
                <TextLabel label="label">cpf</TextLabel>
                <InputField placeholder="digite apenas números :" />
                <TextLabel >cliente</TextLabel>
                <InputField placeholder="cliente :" />
                <ContentButtons>
                    <ButtonLink>acumular troco</ButtonLink>
                    <ButtonLink>resgatar troco</ButtonLink>
                    <ButtonLink color="color ">fechamento</ButtonLink>
                </ContentButtons>
                <TextFooter>
                    <UpperCase>nunca esqueça de fazer o fachamento</UpperCase>  ao encerrar sua jornada.
                </TextFooter>
            </ContainerForm>
        </Container>
    );
}