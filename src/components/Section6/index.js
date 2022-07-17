
import {
    Container, ContainerForm, InputField, TextLabel, ContentButtons, ButtonLink
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
            </ContainerForm>

        </Container>
    );
}