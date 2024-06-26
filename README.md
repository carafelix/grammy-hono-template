# barebones grammY + Hono + Cloudflare Workers

## Description
This template set up address the following issues:
  - Bot creation with BOT_TOKEN sourced from .dev.vars secrets, see [Cloudflare enviroment variables](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard)
  - ngrok forward to port 8080 and auto-updates the telegram webHook to the ngrok public domain
  - Setup Hono for using the telegram bot callback webhook, defaults bot api endpoint to `/api/telegram/webhook`

## Installation
- run `npm i` for dependecies
- if you haven't logged into wrangler before, run `wrangler login` and follow auth instructions
- make sure `ngrook` is functional, if not follow their [setup instructions](https://dashboard.ngrok.com/get-started/setup/linux)  
- create a .dev.vars file in the proyect root directory, replace `YOUR_BOT_TOKEN` and `YOUR_DEPLOY_URI` with your actual Telegram bot token and CFW deploy.

  ```
  printf BOT_TOKEN=YOUR_BOT_TOKEN\\n\
  DEPLOY_URI=YOUR_DEPLOY_URI >> .dev.vars
  ```
- change the name of the worker in `wrangler.toml` to your worker name

## Dev enviroment deployment
- `npm run dev` 
- For changing the mounting and listening port, edit the port line in `wrangle.toml` and the ngrook call in `package.json` > script > dev > ngrook http (port)

### If everything went okay, your bot should react to your messages with a 🏆 emoji
 
#### Just in case
- any file prefixed by `_` it's included in the .gitignore
