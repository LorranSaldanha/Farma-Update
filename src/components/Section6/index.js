
import {
    Container,ContainerForm,FormField,LabelForm,InputField,ContainerButtons,ButtonLink
} from "./styles";
import { Header } from "../Header/";

export function Section6() {
    return (
        <Container>

                <Header></Header>
            <ContainerForm>
                <FormField>
                    <LabelForm >atendente</LabelForm>
                    <InputField></InputField>
                </FormField>
                <FormField>
                    <LabelForm word="word" >cpf</LabelForm>
                    <InputField></InputField>
                </FormField>
                <FormField>
                    <LabelForm >cliente</LabelForm>
                    <InputField></InputField>
                </FormField>

                <ContainerButtons>
                    <ButtonLink>acumular troco</ButtonLink>
                    <ButtonLink>resgatar troco</ButtonLink>
                    <ButtonLink button="button" >fechamento</ButtonLink>

                </ContainerButtons>
            </ContainerForm>
        </Container>
    );
}