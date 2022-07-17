import {
    Container, HeroHeader, TitleHero, FormLogin, InputLogin,
    ButtonLink,
    LabelLogin,
} from "./styles";

import { Header } from "../Header/"


export function Login() {
    return (
        <Container>
            <Header />
            <HeroHeader>
                <TitleHero>login - meu troco</TitleHero>
            </HeroHeader>
            <FormLogin>

                <LabelLogin>cpf</LabelLogin>
                <InputLogin placeholder="digite somente números :" />

                <LabelLogin>senha</LabelLogin>
                <InputLogin placeholder="digite sua senha :" type="password" />

                <ButtonLink>logar</ButtonLink>
            </FormLogin>
        </Container>
    );
}