import {
    Container, HeroHeader, TitleHero, ContainerForm,
    InputField,
    TextLabel,
    ButtonLink, ContentButtons, AreaField, SubForm, InputSub
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
                    <TextLabel  >acumular troco :</TextLabel>
                    <InputField changed="changed" value={"r$ 00,00"} />
                    <AreaField>
                        <SubForm>
                        <TextLabel  >bonus :</TextLabel>
                            <InputSub value={"10%"}/>

                            <TextLabel  >valor do bonus </TextLabel>
                            <InputSub value={"r$ 00,00"}/>

                            <TextLabel  >valor acumulado</TextLabel>
                            <InputSub value={"r$ 00,00"}/>

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