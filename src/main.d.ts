import { Env } from "hono"

interface myEnv extends Env {
    BOT_TOKEN   : string
    DEPLOY_URI  : string
}