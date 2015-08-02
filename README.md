GameJS is a basic framework for self-contained html5 game distribution.

It allows html5 games to be distributed virally in the same way flash games were distributed for the past decade.

#### The principle:
- A developer packages his/her game as a single self-contained javascript blob (see developer folder)
- This file contains all the libraries, code, asm.js modules and assets (encoded as base64 strings)
- It *must* contain global init(canvas) function which is the entry point of an application
- In order to publish games developed with this framework every interested publisher should place a tiny snippet on its website (see publisher folder)
- The default snippet just loads the game via XHR and displays progress bar and can be customized to suit publisher's needs
- Publishers are encouraged to customize the snippet and include ads in it as long as its core functionality stays intact

#### Demo:
http://redsparkzone.com/gamejs/publisher/example.html

#### Incentives:
- Sponsors are interested in driving traffic from viral distribution into their networks through branding and in-game links (which 3rd party publishers have no control over)
- 3rd party publishers control the loading snippet on their portals, so they can place custom ads in it and make money on every play

#### Further thoughts:
- The blob can be minified and obfuscated with 3rd party tools to make reverse engineering hard and time consuming
- Minified and obfuscated file can contain sponsor's logo and links which would require a significant effort to alter
- In case of a large game the blob could be able to load secondary blobs when required at runtime

#### What's required for GameJS to succeed:
- Some respectable entity (FGL or alternative) should encourage both portal owners and developers to agree on this standard
- It should be easy for 3rd party publishers to get sponsored games in bulk for free from some centralized hub

#### TODO:
- Publishers: improve the snippet - add progress bar, placeholder logo, etc
- Developers: create a simple web tool for packaging all the scripts and assets to a single javascript blob
- Developers: come up with an elegant workaround to translate the existing code relying on XMLHttpRequest into local Data URI read