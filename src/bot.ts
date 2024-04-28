import { Bot } from "grammy"
import { MyTelegramContext, myEnv } from "./main"

function getBot(env : myEnv){

    const bot = new Bot<MyTelegramContext>(env.BOT_TOKEN)

    bot.use(async (c, next) => {
        c.env = env
        await next()
    })

    bot.command('start',c => c.reply('started'))
    bot.on('message', c => c.react("🏆"))
    bot.catch((err)=> console.trace(err))

    return bot
}

export default getBot
