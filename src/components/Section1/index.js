import {
  Container,
  WrapperHeader,
  WrapperImage,
  TitleCentral,
  TitleForm,
  FormFiled,
  ButtonForm,
  InputFields,
  TableItems,
  TableTbody,
  TableTr,
  TableTh,
  TableTd,
  CheckItem,
} from "./styles";

import { Header } from "..//Header";

import MaisVantagens from "..//..//assets/MaisVantagens.png";

import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

export function Section1() {
  return (
    <Container>
      <Header />
      <WrapperHeader>
        <WrapperImage src={MaisVantagens} />
        <TitleCentral>mais vantagens</TitleCentral>
      </WrapperHeader>

        <TitleForm title="title">adicionar empresa conveniada</TitleForm>
      <FormFiled>

        <InputFields placeholder="logo" type={"file"} />
        <InputFields placeholder="nome da empresa: " />
        <InputFields placeholder="endereço:" />
        <InputFields placeholder="categoria:" />
        <InputFields placeholder="beneficíos:" />
        <InputFields placeholder="localização:" />
        <ButtonForm >Enviar</ButtonForm>

      </FormFiled>

      <TableItems>
        <TableTbody>
          <TableTr>
            <TableTh>central</TableTh>
            <TableTh>endereço</TableTh>
            <TableTh>editar</TableTh>
            <TableTh>excluir</TableTh>
            <TableTh>ativar</TableTh>
          </TableTr>
          <TableTr>
            <TableTd>teste simulado</TableTd>
            <TableTd>teste simulado</TableTd>
            <TableTd><FiEdit style={{ color: "#003C8D", fontSize:"2.0rem" }} /></TableTd>
            <TableTd><FaTrashAlt style={{ color: "#DF2029", fontSize:"2.0rem" }} /></TableTd>
            <TableTd><CheckItem type="checkbox" className="switch_1"/></TableTd>
          </TableTr>
          <TableTr>
            <TableTd>teste simulado</TableTd>
            <TableTd>teste simulado</TableTd>
            <TableTd><FiEdit style={{ color: "#003C8D", fontSize:"2.0rem" }} /></TableTd>
            <TableTd><FaTrashAlt style={{ color: "#DF2029", fontSize:"2.0rem" }} /></TableTd>
            <TableTd><CheckItem type="checkbox" className="switch_1"/></TableTd>
          </TableTr>
          <TableTr>
            <TableTd>teste simulado</TableTd>
            <TableTd>teste simulado</TableTd>
            <TableTd><FiEdit style={{ color: "#003C8D", fontSize:"2.0rem" }} /></TableTd>
            <TableTd><FaTrashAlt style={{ color: "#DF2029", fontSize:"2.0rem" }} /></TableTd>
            <TableTd><CheckItem type="checkbox" className="switch_1"/></TableTd>
          </TableTr>
        </TableTbody>
      </TableItems>
    </Container>
  );
}

// import {
//     Container, ContainerImage, CentralImage,
//      Centraltitle,Inputfields, Input,
//     Button, TableItmes, Tbody, Tr, Th, Td, ButtonIcon, CheckItem
// } from "./styles";

// import { useState, useEffect } from "react";
// import api from "../../services/api";
// import Image from '..//..//assets/Plus.png';
// // import { Header } from "../Header/";

// // =============== Icons Imported

// import { FaTrashAlt } from 'react-icons/fa';
// import { FiEdit } from 'react-icons/fi';

// // =============== Icons Imported

// export function Section1() {

//     const [maisVantagens, setMaisVantagens] = useState([])
//     const [nomeEmpresa, setNomeEmpresa] = useState("")
//     // ================= EDITED ==================
//     const [endereco, setEndereco] = useState("")
//     const [categoria, setCategoria] = useState("")
//     // ================= EDITED ==================

//     const [beneficios, setBeneficios] = useState("")
//     const [image, setImage] = useState(null);
//     const [ativo, setativo] = useState("")

//     useEffect(() => {
//         async function getMaisVantagens() {
//             await api.get("/maisVantagens").then(result => {
//                 setMaisVantagens(result.data)
//             })
//         }

//         getMaisVantagens()
//     }, [])

//     async function handleClick(e) {
//         e.preventDefault()
//         var ativar = true
//         if (ativo === "true") {
//             ativar = true
//         } else if (ativo === "false") {
//             ativar = false
//         }
//         const formData = new FormData()
//         formData.append("image", image)
//         formData.append("nomeEmpresa", nomeEmpresa)

//         // ================= EDITED ==================
//         formData.append("endereco", endereco)
//         formData.append("categoria", categoria)
//         // ================= EDITED ==================

//         formData.append("beneficios", beneficios)
//         formData.append("ativo", ativo === "true" ? true : false)
//         console.log(image)
//         await api.post("/maisVantagens", formData).then(result => console.log(result))
//     }

//     return (
//         <>
//             <Container>
//                 {/* <Header /> */}
//                 <ContainerImage>
//                     <CentralImage src={Image} />
//                     <Centraltitle>mais vantagens</Centraltitle>
//                 </ContainerImage>
//                 <Centraltitle bar="bar" >adicionar empresa conveniada</Centraltitle>

//                 <Inputfields >

//                     <Input placeholder="logo :" type="file" onChange={(e) => setImage(e.target.files[0])} />

//                     <Input value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} placeholder="nome da empresa :" />
//                     {/* ================= EDITED ================== */}

//                     <Input value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="endereço :" />
//                     <Input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="categoria :" />
//                     {/* ================= EDITED ================== */}

//                     <Input value={beneficios} onChange={(e) => setBeneficios(e.target.value)} placeholder="benefícios :" />
//                     <Input placeholder="localização :" />
//                     <Input value={ativo} onChange={(e) => setativo(e.target.value)} placeholder="ativo :" />

//                     <Button onClick={(e) => handleClick(e)} >Enviar</Button>

//                 </Inputfields>

//                 <TableItmes>
//                     <Tbody>
//                         <Tr>
//                             <Th>central</Th>
//                             <Th>endereço</Th>
//                             <Th>editar</Th>
//                             <Th>excluir</Th>
//                             <Th>ativar</Th>
//                         </Tr>
//                         <Tr>
//                             <Td>flavio calçados</Td>
//                             <Td>rua 24 jardim dolorido</Td>
//                             <Td><ButtonIcon type="button"><FiEdit className="edit__icon" /></ButtonIcon></Td>
//                             <Td><ButtonIcon type="button"><FaTrashAlt className="trash__icon" /></ButtonIcon></Td>
//                             <Td><CheckItem type='checkbox' className="switch_1" /></Td>
//                         </Tr>
//                     </Tbody>
//                 </TableItmes>

//                 {/* ================= MIXED ================== */}

//                 {/* <BarTop>
//                     <ItemsBarTop>central</ItemsBarTop>
//                     <ItemsBarTop>endereço</ItemsBarTop>
//                     <ItemsBarTop>ativar</ItemsBarTop>
//                 </BarTop>
//                 {maisVantagens.map(item => (
//                     <BarTop ContentItems>
//                         <ItemsBarTop item >{item.nomeEmpresa}</ItemsBarTop>
//                         <ItemsBarTop item >{item.beneficios}</ItemsBarTop>
//                         <CheckItem type='checkbox' className="switch_1" value={item.ativo}></CheckItem>
//                     </BarTop>
//                 ))}
//                 <BarTop ContentItems></BarTop> */}

//             </Container>
//         </>
//     );
// }
