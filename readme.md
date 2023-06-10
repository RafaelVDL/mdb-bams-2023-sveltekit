# File Structure
ROOT
├ database/ (database folder)
│ └ pocketbase.exe (app database)
├ docs/ (sample vanilla js app)
├ node/ (sample node project)
│ └ server.js (node app)
├ sveltekit/ (main app)
│ ├ build/ (production folder)
│ ├ src/ (development folder)
│ └ .env (configuration file)
├ readme.md (project info)
└ sessions.md (tutorial session notes)

# Develop
- clone project
- rename sveltekit/env to .env
- goto database directory
    - run ```./pocketbase serve```
    - open provided ```http://ip:port/_/```
    - login using ```super@admin.com``` : ```superadmin123```
- goto sveltekit directory
    - run ```npm i``` to install node project dependencies
    - run ```npm run dev``` to start development
    - run ```npm run build``` to generate production build
