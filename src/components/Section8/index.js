import {
    Container, HeroHeader, TitleHero, ContainerForm,
    InputField,
    TextLabel,
    ButtonLink, ContentButtons, AreaField, SubForm, InputSub
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

                <TextLabel >atendente</TextLabel>
                <InputField placeholder="atendente :" />

                <TextLabel label="label">cpf</TextLabel>
                <InputField placeholder="digite apenas números :" />

                <TextLabel >cliente</TextLabel>
                <InputField placeholder="cliente :" />

                <AreaField>
                    <TextLabel  >valor disponível :</TextLabel>
                    <InputField changed="changed" value={"r$ 00,00"} />
                </AreaField>

                <AreaField>
                    <TextLabel  >resgatar :</TextLabel>
                    <InputSub value={"r$ 00,00"} />

                    <AreaField>

                        <SubForm>
                            <TextLabel  >novo saldo :</TextLabel>
                            <InputSub value={"r$ 00,00"} />


                        </SubForm>
                    </AreaField>
                </AreaField>

                <ContentButtons>
                    <ButtonLink color="color ">confirmar</ButtonLink>
                </ContentButtons>
            </ContainerForm>



        </Container>
    );
}