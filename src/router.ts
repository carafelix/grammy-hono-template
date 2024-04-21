import { Env, ExecutionContext, Hono } from "hono"
import { webhookCallback } from "grammy";
import getBot from "./telegramBot";
import { myEnv } from "./main";

export default {
    fetch(request: Request, env: myEnv, ctx: ExecutionContext) {
        const app = new Hono()
        app.all('/api/telegram/webhook', webhookCallback(getBot(env), 'hono'))
		app.all('*',(c)=> c.text('Any other call would receive this response'))
        app.onError((err)=>{
            return new Response(err.message)
        })
      return app.fetch(request, env, ctx)
    },
    async scheduled(e: ScheduledController, env: myEnv, c: ExecutionContext) {
      switch (e.cron) {
        case "30 13 * * *":
            console.log('\nCRON JOB TEST\n')
            break;
          }
      return
    }
  }
