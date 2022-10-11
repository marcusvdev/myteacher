export const FormatadorService = {
    valorMonetario(valor: number): string {
        return valor.toLocaleString(
            'pt-BR', 
            {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            }
        );
    },
    limitarTexto(text: string, limit: number): string{
        if(text.length < limit){
            return text
        }

        return text.slice(0, limit) + '...';
    }
}