export const calculateAge = (dateString) => {
  
  const data = dateString.split('/');
  if (data.length !== 3 || data[2].length !== 4) return null;

  const dia = parseInt(data[0], 10);
  const mes = parseInt(data[1], 10) - 1; 
  const ano = parseInt(data[2], 10);

  const aniversario = new Date(ano, mes, dia);
  const data_atual = new Date();

  
  if (isNaN(aniversario.getTime()) || aniversario > data_atual) {
    return null;
  }

  let pessoa_anos_idade = data_atual.getFullYear() - aniversario.getFullYear();
  let pessoa_meses_idade = data_atual.getMonth() - aniversario.getMonth();
  let pessoa_dias_idade = data_atual.getDate() - aniversario.getDate();

  
  if (pessoa_dias_idade < 0) {
    pessoa_meses_idade -= 1;
    const mes_passado = new Date(data_atual.getFullYear(), data_atual.getMonth(), 0);
    pessoa_dias_idade += mes_passado.getDate();
  }

  
  if (pessoa_meses_idade < 0) {
    pessoa_anos_idade -= 1;
    pessoa_meses_idade += 12;
  }

  
  let category = '';
  if (pessoa_anos_idade <= 19) {
    category = 'Jovem';
  } else if (pessoa_anos_idade >= 20 && pessoa_anos_idade <= 59) {
    category = 'Adulto';
  } else {
    category = 'Idoso';
  }

  return { anosIdade: pessoa_anos_idade, mesesIdade: pessoa_meses_idade, diasIdade: pessoa_dias_idade, category };
};