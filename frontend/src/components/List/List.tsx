import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { FormatadorService } from "../../services/FormatadorService";
import { ItemDesc, ItemList, ItemName, ItemThumb, ItemValue, ListEmpty, ListStyled } from "./List.style"

interface ListProps {
    teachers: Teacher[],
    onSelect: (teacher: Teacher) => void,
}

const List = (props: ListProps) => {
    return (
        <>
        {props.teachers.length > 0 ? (
            <ListStyled>
            {props.teachers.map(teacher => (
                <ItemList key={teacher.id}>
                    <ItemThumb src={teacher.foto}></ItemThumb>
                    <div>
                        <ItemName>{teacher.nome}</ItemName>
                        <ItemValue>{FormatadorService.valorMonetario(teacher.valor_hora)}/h</ItemValue>
                        <ItemDesc>{FormatadorService.limitarTexto(teacher.descricao, 100)}</ItemDesc>
                        <Button onClick={() => props.onSelect(teacher)} sx={{width: '100%'}}>Marcar Aula com {teacher.nome}</Button>
                    </div>
                </ItemList>
            ))}
            </ListStyled>
        ) : (
            <ListEmpty>Nenhum professor cadastrado.</ListEmpty>
        )}
        </>
    )
}

export default List;