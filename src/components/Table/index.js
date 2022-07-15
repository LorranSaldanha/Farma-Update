// =============== Components
import { TableItmes, Tbody, Tr, Th, Td, Button, CheckItem } from "./styles";

// =============== Icons Imported

import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

// =============== Icons Imported

// =============== Function Table

export function Table() {
    return (

        <TableItmes>
            <Tbody>
                <Tr>
                    <Th>titulo</Th>
                    <Th>mensagem</Th>
                    <Th>editar</Th>
                    <Th>excluir</Th>
                    <Th>ativar</Th>
                </Tr>
                <Tr>
                    <Td>Materia : remedios</Td>
                    <Td>Material : vacine seu filho</Td>
                    <Td><Button type="button"><FiEdit className="edit__icon" /></Button></Td>
                    <Td><Button type="button"><FaTrashAlt className="trash__icon" /></Button></Td>
                    <Td><CheckItem type='checkbox' className="switch_1" ></CheckItem></Td>
                </Tr>
                <Tr>
                    <Td>Materia : remedios</Td>
                    <Td>Material : vacine seu filho</Td>
                    <Td><Button type="button"><FiEdit className="edit__icon" /></Button></Td>
                    <Td><Button type="button"><FaTrashAlt className="trash__icon" /></Button></Td>
                    <Td><CheckItem type='checkbox' className="switch_1" ></CheckItem></Td>
                </Tr>

            </Tbody>
        </TableItmes>

    );
}



