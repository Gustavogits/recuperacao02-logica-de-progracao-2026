# Atividade Avaliativa II - Recuperação Prática

- **Curso:** Desenvolvimento de Sistemas
- **Unidade Curricular:** Lógica de Programação
- **Docente:** Gustavo Roberto de Souza

## Orientações Gerais

- A avaliação deverá ser realizada individualmente.
- Não é permitido o uso de celular durante a realização da atividade.
- Não é permitido o uso de nenhum tipo de auxílio de Inteligência Artificial.
- Esta atividade envolve conceitos de entrada e saída de dados, variáveis, operadores e estruturas condicionais.
- A entrega deverá ser feita no AVA, enviando apenas o link do repositório no GitHub.

## Passo a Passo — Fork, Clone e Entrega

1. Você deverá fazer um **fork** deste repositório. Para isso, clique no botão **Fork**, localizado na parte superior da página do repositório.

2. Após realizar o fork, clone o repositório para o seu computador.
   1. Escolha ou crie uma pasta no computador para salvar o projeto.
   2. Abra o CMD ou terminal dentro dessa pasta.
   3. Execute o comando abaixo:

   ```bash
   git clone <url_do_seu_repositório>
   ```

3. Abra a pasta do projeto no Visual Studio Code.

4. Desenvolva todos os exercícios solicitados.

5. Ao finalizar, salve, faça o commit e envie suas alterações para o GitHub.
   1. Adicione os arquivos alterados ao stage:

   ```bash
   git add .
   ```

   2. Crie o commit:

   ```bash
   git commit -m "Resolução da recuperação"
   ```

   3. Envie as alterações para o GitHub:

   ```bash
   git push origin master
   ```

6. Por fim, copie o link do seu repositório no GitHub e envie-o no AVA.
   1. O link deverá ser adicionado como comentário na entrega da atividade.

## Questões

### Questão 01

Uma locadora de veículos precisa calcular o valor final do aluguel de um carro.

O programa deverá solicitar ao usuário:

- A quantidade de dias que o carro foi alugado.
- A quantidade de quilômetros percorridos.
- O tipo de carro escolhido: `popular`, `intermediário` ou `luxo`.

Utilize a tabela abaixo para calcular o valor da diária e o valor por quilômetro rodado:

| Tipo de carro | Valor da diária | Valor por km |
| ------------- | --------------: | -----------: |
| Popular       |        R$ 90,00 |      R$ 0,25 |
| Intermediário |       R$ 140,00 |      R$ 0,40 |
| Luxo          |       R$ 220,00 |      R$ 0,70 |

Caso o aluguel tenha duração superior a `7` dias, o cliente deverá receber `10%` de desconto sobre o valor total.

Ao final, apresente o valor das diárias, o valor referente aos quilômetros rodados, o desconto aplicado e o valor final do aluguel.

---

### Questão 02

Uma escola precisa de um programa para verificar se um aluno foi aprovado, ficou em recuperação ou foi reprovado.

O algoritmo deverá solicitar:

- A nota do primeiro bimestre.
- A nota do segundo bimestre.
- A quantidade de faltas do aluno.
- A quantidade total de aulas da disciplina.

Primeiramente, calcule a média das duas notas.

Depois, calcule o percentual de presença do aluno. Para ser aprovado ou ter direito à recuperação, o aluno deverá possuir pelo menos `75%` de presença.

Utilize as regras abaixo:

- Média maior ou igual a `7` e presença mínima de `75%`: **Aprovado**
- Média entre `5` e `6.9` e presença mínima de `75%`: **Recuperação**
- Média menor que `5`: **Reprovado por nota**
- Presença menor que `75%`: **Reprovado por falta**, independentemente da média

Ao final, informe a média, o percentual de presença e a situação final do aluno.

---

### Questão 03

Você deverá desenvolver um programa para calcular o valor de uma compra em uma loja de eletrônicos.

O programa deverá solicitar:

- O valor total dos produtos.
- A forma de pagamento: `1` para dinheiro/pix, `2` para cartão de débito, `3` para cartão de crédito à vista ou `4` para cartão de crédito parcelado.
- Caso o cliente escolha pagamento parcelado, solicite também a quantidade de parcelas.

Utilize as regras abaixo:

- Dinheiro ou Pix: desconto de `12%`
- Cartão de débito: desconto de `7%`
- Cartão de crédito à vista: desconto de `3%`
- Cartão de crédito parcelado em até `6x`: valor normal, sem desconto
- Cartão de crédito parcelado em mais de `6x`: acréscimo de `8%`

Ao final, informe o valor original da compra, o desconto ou acréscimo aplicado, o valor final e, caso seja parcelado, o valor de cada parcela.

---

### Questão 04

Uma empresa deseja calcular o salário final de seus funcionários considerando horas extras e descontos.

O algoritmo deverá solicitar:

- O salário base do funcionário.
- A quantidade de horas extras trabalhadas no mês.
- A quantidade de faltas no mês.

Para o cálculo:

- Cada hora extra vale `R$ 35,00`.
- Cada falta gera um desconto de `R$ 90,00`.
- Caso o funcionário tenha trabalhado mais de `20` horas extras, ele receberá um bônus adicional de `R$ 250,00`.
- Caso o funcionário tenha mais de `3` faltas, deverá receber uma mensagem informando que está sujeito a advertência.

Ao final, informe:

- Salário base.
- Valor total das horas extras.
- Bônus, quando aplicável.
- Desconto pelas faltas.
- Salário final.

---

### Questão 05

Você foi contratado para desenvolver um sistema simples de classificação para uma competição de videogame.

O programa deverá solicitar:

- A quantidade de vitórias do jogador.
- A quantidade de derrotas.
- A quantidade de empates.
- A quantidade de pontos de bônus conquistados.

A pontuação deverá ser calculada da seguinte forma:

- Cada vitória vale `3` pontos.
- Cada empate vale `1` ponto.
- Cada derrota vale `0` pontos.
- Os pontos de bônus devem ser adicionados ao total.

Após calcular a pontuação, classifique o jogador conforme a tabela abaixo:

- Menos de `10` pontos: **Iniciante**
- De `10` até `24` pontos: **Competidor**
- De `25` até `39` pontos: **Avançado**
- De `40` até `59` pontos: **Elite**
- `60` pontos ou mais: **Lenda da competição**

Ao final, informe a quantidade total de partidas disputadas, a pontuação final e a classificação do jogador.
