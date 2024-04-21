import { Bot } from "grammy"
import { myEnv } from "./main"

function getBot(env : myEnv){
    const bot = new Bot(env.BOT_TOKEN)
    bot.command('start',c => c)
    bot.on('message', c => c.react("🏆"))
    bot.catch((err)=> console.trace(err))

    return bot
}

export default getBot