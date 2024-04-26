import { Env } from "hono"
import { Context } from "grammy"
interface myEnv extends Env {
    BOT_TOKEN   : string
}
interface Mixin {
    env : myEnv
}

type MyTelegramContext = Context & Mixin
