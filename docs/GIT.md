GIT
	- git clone https://github.com/MarkBandilla/mdb-bams-2023-sveltekit.git
	- select "master" branch
	- git pull
	- New branch: git checkout -b <feature/bug>/<TicketID>-<TicketSummary>
	- Old branch: git checkout <feature/bug>/<TicketID>-<TicketSummary>
	- Update Files / Code & Test
	- git add .
	- git commit -m "Commit Message"
	- New branch: git push --set-upstream origin <feature/bug>/<TicketID>-<TicketSummary>
	- Old branch: git push