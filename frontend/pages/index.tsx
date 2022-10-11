import { Box, Button, Dialog, DialogActions, Grid, Input, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import Header from '../src/components/Header/Header'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
	const { 
		listTeachers,
		nome, setNome,
		email, setEmail,
		professorSelecionado, setProfessorSelecionado,
		marcarAula,
		cancelarAula,
		mensagem, setMensagem,
	} = useIndex();

	return (
		<>
			<Box sx={{ backgroundColor: 'secondary.main' }}>
				<List 
					teachers={listTeachers}
					onSelect={(teacher) => setProfessorSelecionado(teacher)}
				></List>
			</Box>
			<Dialog 
				onClose={() => setProfessorSelecionado(null)}
				open={professorSelecionado !== null}
				fullWidth
				PaperProps={{ sx: { p: 3 } }}
			>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField 
							label="Digite o nome"
							type="text"
							fullWidth 
							value={nome}
							onChange={(e) => setNome(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Digite o e-mail"
							type="email"
							fullWidth
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Grid>
				</Grid>
				<DialogActions sx={{mt:3}}>
					<Button onClick={() => cancelarAula()}>Cancelar</Button>
					<Button onClick={() => marcarAula()}>Marcar</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				message={mensagem}
				open={mensagem.length > 0}
				autoHideDuration={3000}
				onClose={() => setMensagem('')}
			/>
		</>
	)
}

export default Home
