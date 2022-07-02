
import {
    ContainerForm, FormField, LabelForm, InputField,
    ContainerButtons, ButtonLink
} from "./styles";
import { Header } from "../Header/";

export function Section6() {
    return (
        <ContainerForm>
            <Header></Header>
            <FormField>
                <LabelForm >atendente</LabelForm>
                <InputField></InputField>
            </FormField>
            <FormField>
                <LabelForm word >cpf</LabelForm>
                <InputField></InputField>
            </FormField>
            <FormField>
                <LabelForm >cliente</LabelForm>
                <InputField></InputField>
            </FormField>

            <ContainerButtons>
                <ButtonLink>acumular troco</ButtonLink>
                <ButtonLink>resgatar troco</ButtonLink>

            </ContainerButtons>
        </ContainerForm>
    );
}