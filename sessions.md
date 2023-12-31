1st week
- Day1: State of Web / App Development
    - Kevin (FE)
    - Denver (FS)
    - Raf (Beginner)
    - Brando (Boss)
- Day2: HTML & CSS
    - Folder Structure
    - Emmet
    - Tags
- Day3: Javascript & Libraries
    - Types of Variables
	- String
 	- Number / Integer
        - Array
	- Object
	- Boolean
	- Function
	- RegEx
    - Operations
	- Object Copy
	- Spread Operations
	- Array Functions
	    - join
	    - push
            - splice
	    - map
	    - filter
	    - find
	- String Functions
	    - split
	    - substring
	    - concat
	    - replace
    - CRUD
	- Modular
	- Storage
	    - cache
	    - sessionStorage
	    - localStorage (5mb)
	    - cookies
	    - database
		- indexeddb (80%)
		- serverdb
		     - sqlite
- Day4: Collaboration - Jira & GIT Version Control / CI / CD
    - JIRA
	- Backlogs (Pending Tickets)
	- Kanban (Sprint, Estimated Tickets)
    	- Tickets (Epic, Story, Bug, Task & Subtask)
	- Ticket (ID, Type, Summary, Description, Assignee, Reporter)
    - GIT
	- git clone https://github.com/MarkBandilla/mdb-bams-2023-sveltekit.git
	- select "main" branch
	- git pull
	- New branch: git checkout -b <feature/bug>/<TicketID>-<TicketSummary>
	- Old branch: git checkout <feature/bug>/<TicketID>-<TicketSummary>
	- *Update Files / Code & Test*
	- git add .
	- git commit -m "Commit Message"
	- New branch: git push --set-upstream origin <feature/bug>/<TicketID>-<TicketSummary>
	- Old branch: git push
    - GitHub Pages (Demo)
- Day5: Server 
    - Apache VS Node
    - Intro to Node
    - Node NPM

2nd week
- SvelteKit FrontEnd
    - Routes
	- +layout
	- +page
	- Dynamic Routes
    - Content
	- .env
	- lib
	    - Markup
	    - Module
	        - Store
	    - Component
    - Svelte Modules
	- $env
	- $lib
	- $app/stores
    - $app/forms

3rd week
- SvelteKit BackEnd
    - Types of Request Methods
	- GET (View)
	- POST (Add)
	- PUT/PATCH (Update)
	- DELETE (Delete)
    - Svelte Files
	- Component.svelte (Component)
	- Stores.js (Local Global Vars)
	- +layout.svelte (Layout)
	- +layout.js (Client Script)
	- +page.svelte (View)
	- +page.js (Client Script)
	- +page.server.js (Server Script)
	- +server.js (Rest API)
	- Hooks.js (Shield)
    - Data
	- Rest API
	- Headless CMS
	- InApp / Integrated
4th Week
- Database Integration
- Socket Connection over HTTP/HTTPS
- Deployment