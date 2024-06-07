// Definição da interface
interface Post {
    primeiroNomeColetador: string;
    sobrenomeColetador: string;
    qtdColetado: number;
}

// URL da API
export const API_URL_COLETADOR = 'http://localhost:8080/projetoTeste/rest/coletador/cadastrar';
export const API_URL_CONTATO_COLETADOR = 'http://localhost:8080/projetoTeste/rest/contato-coletador/cadastrar';

export const API_URL_CONTATO_CONSUMIDOR = 'http://localhost:8080/projetoTeste/rest/contato-consumidor/cadastrar';
export const API_URL_CONSUMIDOR= 'http://localhost:8080/projetoTeste/rest/consumidor/cadastrar';

export const API_URL_PRODUTOR= 'http://localhost:8080/projetoTeste/rest/produtor/cadastrar';
export const API_URL_CONTATO_PRODUTOR = 'http://localhost:8080/projetoTeste/rest/contato-produtor/cadastrar';


// Função para enviar dados para a API
export const enviarDadosColetador = async (dados: Post): Promise<void> => {
    try {
        const response = await fetch(API_URL_COLETADOR, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }

        console.log('Dados enviados com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
};

export const enviarDadosContatoColetador = async (dados: Post): Promise<void> => {
    try {
        const response = await fetch(API_URL_CONTATO_COLETADOR, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar dados do contato consumidor');
        }

        console.log('Dados do contato consumidor enviados com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar dados do contato consumidor:', error);
    }
};

export const enviarDadosContatoConsumidor = async (dados: Post): Promise<void> => {
    try {
        const response = await fetch(API_URL_CONTATO_CONSUMIDOR, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar dados do contato consumidor');
        }

        console.log('Dados do contato consumidor enviados com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar dados do contato consumidor:', error);
    }
};
