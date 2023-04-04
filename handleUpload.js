const readline = require('readline')
const fs = require('fs')


const handleUpload = async (input) => {
  const output = fs.createWriteStream('./data.json')

  output.write('[\n')

  const lineReader = readline.createInterface({ input, output })

  for await (const line of lineReader) {
    // Logica para manipular o conteudo das linhas do csv
    const [
      instrumentoFinanceiro,
      emissor,
      codigoIf,
      quantidade,
      negociada,
      precoNegocio,
      volumeFinanceiro,
      taxaNegocio,
      origemNegocio,
      horarioNegocio, 
      dataNegocio,
      identificadorDoNegocio,
      codIsin,
      dataLiquidacao,
      situacaoNegocio
    ] = line.split(';')

    output.write(`${JSON.stringify({
      instrumentoFinanceiro,
      emissor,
      codigoIf,
      quantidade: Number(quantidade.replaceAll(',', '.')),
      negociada: Number(negociada.replaceAll(',', '.')),
      precoNegocio: Number(precoNegocio.replaceAll(',', '.')),
      volumeFinanceiro: Number(volumeFinanceiro.replaceAll(',', '.')),
      taxaNegocio,
      origemNegocio,
      horarioNegocio, 
      dataNegocio,
      identificadorDoNegocio,
      codIsin,
      dataLiquidacao,
      situacaoNegocio
    })}, \n`)
  }

  output.write(']\n')
}

module.exports = { handleUpload }
