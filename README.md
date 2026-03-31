# sistemadeagendamento

# 📅 Scheduling & Reporting API

Uma API de agendamentos robusta desenvolvida em **Node.js**, focada em alta performance e manipulação eficiente de dados através de **Streams**.

## 🚀 Diferenciais Técnicos (Nível Pleno/Sênior)

Este projeto foi construído para demonstrar conceitos avançados de engenharia de software:

- **Node.js Streams:** Geração de relatórios CSV em tempo real sem sobrecarregar a memória RAM, utilizando `stream.Transform` e `cursor.pipe()`.
- **Arquitetura Limpa:** Separação clara entre Rotas, Controllers, Services e Models.
- **Resiliência:** Implementação de polyfills para compatibilidade com Node.js v25+ (correção de métodos depreciados no NeDB).
- **Performance:** Uso de índices e processamento assíncrono com `util.promisify`.

## 🛠️ Tecnologias
- **Runtime:** Node.js (v25+)
- **Framework:** Express.js
- **Banco de Dados:** NeDB (Persistência em arquivo com sintaxe MongoDB)
- **Ferramentas:** Dotenv, Streams API

## 📋 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SeuUsuario/sistemadeagendamento.git](https://github.com/SeuUsuario/sistemadeagendamento.git)


📍 Endpoints PrincipaisAgendamentos

MétodoEndpointDescrição

#POST
/api/appointmentsCria um novo agendamento no sistema.

#GET
/api/appointments/viewLista todos os agendamentos cadastrados (JSON).

Relatórios (Alta Performance)
MétodoEndpointDescrição
#GET
/api/appointments/report

[Stream Endpoint] Gera um download instantâneo de CSV processando os dados sob demanda.
