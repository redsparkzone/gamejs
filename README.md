GameJS is a basic framework for self-contained html5 game distribution.

It allows html5 games to be distributed virally in the same way flash games were distributed for the past decade.

#### The principle is simple:
- A developer packages his/her game as a single self-contained javascript blob (see developer folder)
- This single file contains all the libraries, code, asm.js modules and assets (encoded as base64 strings)
- The blob *must* contain global init(canvas) function which is an entry point of the application
- In order to make this game playable every interested publisher should place a tiny snippet on its website (see publisher folder)
- A publisher can create its own custom snippet as long as it does what's expected: loads js file and calls init(canvas) on completion

#### Further improvements:
- The blob can be minified and obfuscated with 3rd party tools to make reverse engineering hard and time consuming
- Minified and obfuscated blob can contain a sponsor's logo which would require a significant effort to alter
- This way the game could be released on sponsor's portal and be ready for viral distribution

#### Online demo:
http://redsparkzone.com/gamejs/publisher/example.html

#### TODO:
- Improve the snippet: add progress bar, placeholder logo, etc.
- Create a simple web tool for packaging all the scripts and assets as a single javascript blob
