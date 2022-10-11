import { useEffect, useState } from 'react';
import { Teacher } from '../../@types/teacher';
import { ApiService } from './../../services/ApiService';

export function useIndex(){
    const [listTeachers, setListTeachers] = useState<Teacher[]>([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [professorSelecionado, setProfessorSelecionado] = useState<Teacher | null>(null);
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        ApiService.get('/professores/').then((res) => {
            setListTeachers(res.data)
        })
    }, []);

    function cancelarAula(){
        setProfessorSelecionado(null),
        setNome(''),
        setEmail('')
    }
    function marcarAula(){
        if(professorSelecionado !== null){
            if(validarDadosAula()){
                ApiService.post('/professores/'+professorSelecionado.id+'/aulas', {
                    nome,
                    email
                })
                .then(() => {
                    setProfessorSelecionado(null);
                    setMensagem('Aula agendada com sucesso!');
                })
                .catch((erro) => {
                    setMensagem(erro.response?.data.message);
                })
            } else {
                setMensagem('Preencha as informações corretamente');
            }
        }
    }

    function validarDadosAula(){
        return nome.length > 0 && email.length > 0;
    }

    return {
        listTeachers,
        nome, setNome,
        email, setEmail,
        professorSelecionado, setProfessorSelecionado,
        marcarAula,
        cancelarAula,
        mensagem, setMensagem,
    }
}