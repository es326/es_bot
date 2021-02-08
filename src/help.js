const help = (prefix) => {
	return `> *Sticker Comandos* <
├─ *${prefix}sticker* or *${prefix}stiker*
├─ *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc: converte imagem em adesivo enquanto remove o fundo
├─ *${prefix}toimg*
desc : converter adesivo em imagem
├─ *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
─────────────
> *Comandos De Memes* <
├─ *${prefix}meme*
desc: imagens aleatórias de meme [inglês]
├─ *${prefix}memeindo*
desc: imagens aleatórias de meme [indo]
─────────────
> *Outros Comandos* <
├─ *${prefix}randomhentai*
├─ *${prefix}dono*
├─ *${prefix}Oi*
├─ *${prefix}criarbot*
├─ *${prefix}gtts*
desc : converter texto em fala / audio
uso: * $ {prefix} gtts [cc] [texto] * \ nexemplo: * $ {prefix} gtts ja On2-chan * \ n
├─ *${prefix}loli*
desc: imagens aleatórias de loli
├─ *${prefix}nsfwloli*
desc: imagens aleatórias de nsfw loli
├─ *${prefix}url2img*
desc: faz capturas de tela da web
uso: * $ {prefix} url2img [tipe] [url] * \ n
├─ *${prefix}simi*
desc: sua mensagem será respondida por simi
desc: sua mensagem será respondida por simiusage: * $ {prefix} simi sua mensagem * \ n
├─ *${prefix}ocr*
desc : pegue o texto na foto
uso: responder imagem ou enviar imagem com legenda \ n
├─ *${prefix}pinterest*
├─ *${prefix}neko*
├─ *${prefix}nekoanime*
├─ *${prefix}shota*
├─ *${prefix}nsfw*
├─ *${prefix}nsfwneko*
├─ *${prefix}nsfwtrap*
├─ *${prefix}waifu*
├─ *${prefix}randomanime*
├─ *${prefix}belle
├─ *${prefix}belle1
├─ *${prefix}belle2
├─ *${prefix}belle3
├─ *${prefix}wait*
desc: pesquisar anime com imagem [What Anime Is This / That]
uso: repdesc: pesquisar anime com imagem [Que anime é essa / aquela] imagem ou enviar imagem com legenda\n
├─ *${prefix}setprefix*
desc: substituir prefixo
uso: * $ {prefix} setprefix [texto | opcional] * \ nexemplo: * $ {prefix} setprefix? *
Nota : Este comando só pode ser usado pelo proprietário do bot \ n
─────────────
> *Comandos de Grupo* <
├─ *${prefix}add*
desc: adicionar membro ao grupo
uso: * $ {prefix} add 62813xxxxx * \ n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
├─ *${prefix}kick*
desc: expulsa membros do grupo
usage : *${prefix}kick @tagmember*\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
├─ *${prefix}promote*
desc: tornar o membro do grupo como administrador do grupo
uso : *${prefix}promote @tagmember*\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
├─ *${prefix}demote*
desc: tornar o administrador do grupo como membro do grupo
uso : *${prefix}demote @tagmember*\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
├─ *${prefix}linkgroup*
desc: pegue o link do grupo
uso: basta enviar o comando
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
├─ *${prefix}leave*
desc: Faça o bot sair do grupo
uso: basta enviar o comando
nota: só pode ser usado por administradores de grupo e proprietário do bot \ n
├─ *${prefix}tagall*
desc: marca todos os membros do grupo, incluindo administradores também
uso: basta enviar o comando
nota: este comando pode ser usado se você for um administrador de grupo \ n
├─ *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1* para ativar o modo simi e * $ {prefix} simih 0 * para desativar o modo simi
note : Este comando pode ser usado se você for um administrador de grupo \n`
}

exports.help = help
