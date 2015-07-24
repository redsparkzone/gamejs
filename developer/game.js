/**
* This is an example of a self-contained javascript game.
* All assets and game code are packed inside a single JS file for easy distribution across various game portals.
* The file should have a global function init(canvas) which serves as an entry point of the application.
* Other then that, you're free to structure your code and assets as you like.
* A publisher's portal will load this file and call init(canvas) on completion.
*
* @author	Anton Matrosov
* @email	hello@redsparkzone.com
* @license	MIT license
*/

/**
* A mandatory entry point of the application
*/
function init (canvas)
{
	new Game (canvas);
};


/**
* Sample game
*/
var Game = function (canvas)
{
	this.canvas = canvas;
	this.ctx = canvas.getContext('2d');

	this.canvas.width = 800;
	this.canvas.height = 480;

	this.backpack = new Image ();
	this.backpack.src = Game.data.backpack;

	this.muffin = new Image ();
	this.muffin.src = Game.data.muffin;

	window.requestAnimationFrame (this.update.bind(this));
};


Game.prototype.update = function ()
{
	this.ctx.clearRect (0, 0, this.canvas.width, this.canvas.height);

	this.ctx.fillStyle = 'rgb(230,230,230)';
	this.ctx.fillRect (0, 0, this.canvas.width, this.canvas.height);

	var time = new Date().getMilliseconds();

	var bx = this.canvas.width/2 - this.backpack.width/2 + 100 * Math.sin (2 * Math.PI * time/1000);
	var by = this.canvas.height/2 - this.backpack.height/2 + 50 * Math.sin (2 * Math.PI * time/500);
	var mx = this.canvas.width/2 - this.muffin.width/2 + 10 * Math.sin (2 * Math.PI * time/1000);
	var my = this.canvas.height/2 + 10 * Math.cos (2 * Math.PI * time/1000);;

	this.ctx.drawImage (this.backpack, bx, by);
	this.ctx.drawImage (this.muffin, mx, my);

	window.requestAnimationFrame (this.update.bind(this));
};


/**
* http://smallicons.net/
*/
Game.data = 
{
	backpack: 	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAB+1BMVEXiV0y/OSvvx17k5+cyTVvBPjDAOy3CQjT9+vr24+HESTzAOizpu7dKYm7NZFnBPjH9+PjAPS/19/fYh3/COy725OLdU0f89fTn6uziWkzZiYHNRTjvxl79/v5PZnLLXlPvoJrajIT64uDJWEz++/v03drYhn3Yh3703tvdlY7LXVH9+fjldFHuwl3CPC7kaE/tt1vunJY4UmDiWE3QbWPbkIh4ipN6i5TK0dXhVkvbUUbme1Lp7O47VWLr7u/nflLGPzLZi4LoiVT9/f3PRzrFSj3iWU7uv13mdlFLY29AWWbJWU303txXbXnc4OO3wcb89vXZioHsrFrbj4c1UF7oh1Q4U2DssVrz9fXnf1KfrLLiWUzojVXuvFznglNDXGlHX2zsr1qSoahpfIfdlY3FSz7h5eefq7JofIazvcPbkYnWTUHFPjHttVtid4KJmKDtuFznc2pJYW7a3+HGzdHncWjPa2G3wMXQb2Tum5TjWlDjX1S4wsb++fngVkrf4+Xy2NVNZXHz2dbvoZtjeILgVUqYpq324uDjW1DqgnrKWk7NZFrLXVKGlp/unZf19vf8/PzCQjXclIx6jJXHztKElJ3qg3tNZHBkeIPJV0uLmqLjXlTo6+364+Fxg4389/f5+vr25ePajYXKWk/mcWeNnKSZpq3CQTP///97rhlIAAAAqXRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A+297FgAAAulJREFUeAHt21tLVFEUwPG1ap8zMEdnEIeBHNFAUJSyvJhoSBpqqfhgmtGltItkaZZC0QWCoKJLPUR0f6uo/THTjnIm9tlnxam99nnY/9dhrf1jfPAcNgMyfTeXmybn5iabluU1mbq0gDPT4o+meQGvu4VS9zs2wNUhEdsQE2BNaFvjAGyIhDbMAxZEYgumAU2C6JFZwFtRVa0Mu/RBVNVvFKAeH1YrokwCHmuP6Y8++WgQEJ3yOeEzc4CnSWccEjv9MAa4HP39Y6o1/w0sJh8htls0BpgXYRMytgkRNv/PgIbCWBG321UV0mlnimMFWfNXgLYcsUwbPZOjAe0eojkAoteeDGhGNAtAbE4CLKF5AC7pAXnkAGBeB2hGHgC+ige0IxcAr8QC6vgAdXGANuQDYGsMIMcJyMUAkBOAKqCeF1CvAAq8gJcKIM8LyCsAjxfgKQDkBaADZA/gAA7gAA7gAA5g/YHE+iNZgRdQyN57QQ0voMbyq9lPqQJabb+cWns9j+IDyHhABxegQwOQJR5ASeoAg50cgM5BLQDKq+YBq2XQA2BgNDALCEYHIAkAUK4E5gBBpQxAAAAerlSGS8H/BgSl4crKEwACoFa9DOiImcwCHOD6VBE34wLgZsWpCPDVR0RWQJjfEALuItoBIPb+BqA9AG4BfJsAX0If2gRgH7TYBbRA0S7AA7QLwGwDHGB3TEBEzGQe4AAO4AAO4ABq7t+xAziAA1yMdp0CImImHeB0tOwCEBEz6QBnD+7sOr8HiIiZdAA4srPsJBARM2kBcCLcdYP4AqiZ9IAD+7d2Ne4DImImPQAON24uOwdE5Ex6ABy/dewo0NEzNIAnB8gWwLMLeAMtdgHfYNYuYBakbxPgS5AjNgEjEqTstQe4s31j4tsB+NGVzcynOm5A7sWMemn1DFh6oL01uw0srWsBEliSesA4MDSeAOgChroSAPI9GO858WO3HjBazz1JAOTe7/fBUF/WpdIvYCcTKe1uzUkAAAAASUVORK5CYII=',
	muffin: 	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEX75cX98uLBdD3QfkT2wXW/hFnAflDBdkDPiFX1uGPqplO/h16/gFL63bK/hVr52KrDdTzNlm775sj3yIX//v3//Pj++vXtq1X64LvAeET87NX62q7Oi1v3yor51aH0tFndl0z1umfOj2H40pz40JfYoE+/imT+9uz97tr3zI3Rl23516bDj2fmolHPgUn3xX/2w3v2wnnBd0L++fLPhVDPhE/99ObPgkvrqVT98eDRfkL86tH1vW374sDSm2PNlGvMjV/4z5X4zpL4zZHBdT7Pg033x4T1vm/AfUzPhlP99ej74r7YlGL637nNlWzVilTvsFvBczvIgE2/jGjQfEDDkEfNl3Dzs1nJeD7xsFffpFHEkUjNl0vOmEvGkmzFkUjAfk/Gkki/imO/gVXMlkq/hlzvsFfAeki/iGD0tl7Xn0+/i2b+/f3Tm03+9+7srlbAfErLlkr0tVr//frrrlbOkGPAeUbAf1LAe0m/gla/i2f1uGH0tFrAfEvOkme/g1jEekT1u2n++/f259zetJb0tVzkn0/2v3H0t2DRh0T05tzIglHmuZj64Lnr08Hw1cK/iGH++O/SgknQfUK/g1f68erv3M7ivqTPiVjQmUz//fvfpn3Ojl/OkWW/iWLNk2ntzLX0tVvir4rz3s7nybPpwqfAfUvAfU7//v70tl348OnOjV752az2xHzQfUH979zZqYe/gFT2v3D9+fb8+PbYnl7869PgpV/fpF/cnG/Edz3AeEPjp17QmWO/jGf1vGv++vO/iWHyslrysVjVoHr3y4ztr1f5057858rcnXDFeD398+XAekfOiljQgEfFkWb758r1uWPtr1vys1jprFznplXAe0i/gVTMlmTxsVf74bzZoGHQgEjKf0Hbn1z2vnC/g1b0s1nBczzHhlf98N786Mz637fpx6nQf0XMgUH2v3LUnGLPhlHRmkz627D40ZjuyarVn3nKeT748OrCdDv+9urjmk7GkWr3yYj++fHXiEX+9er2wHPQfEHJeUD////IV/XRAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAB7xJREFUeAHs10FoE1kcx/E5yEIVacHDCov5dSARQi02tx6KsBbqacFhLLObaRgGYmECISTkllxysE0Oe/PiscfCeimIIoqgaMGLxFVQRGWPu8u6sCyLLIW3SZ7bl2TyJtN/JvMQ/Fwf/8xXZyb5V2OKfaYBXwJmP76fQXtvTU3AbANCMxl3wIcaBlWSsQZk4NeOMaCNkRJxBXiQSMYT0IRULAErCBBDQBJBdhm3n9GBZmOJnYw8oI5AS4x9t7aDPt6ZSAOWMMbBiMJaIroA0OzuRxSwCqr2xAE/sgRb2AXdqQkC0joi0CAGnNpBRDxKwHtEqH76qAEZRKt+tICFHUStcpSA85iCZviAFUzFpbABOqYkHS5Ax9SECjiG6dFDBHwLulKqbNvlVAlSifEBILNS658UfoaENzagQb/+H+uHbliQSIwJ+ACywnqfAiRqYwJmIGdlc66by0r+cVW7P8CuQmJMAOQ2N/hnb2xilNT6gBQktgMDliBlda7P5S2MUB4MKEMmMAByWfHhWYxgDwbYkJklBuTEh+dCBDiQOQgISEIIuIAd4hbkIRUQkAkX4IR5CEkBMyFvAfU15BbkAQj5EFK/iLgztAArH/wawroR+FUsbJMCxBdRflOWWBA/RuFXdC38KmZlNxxnI2tBqloo2065UEUwwmtIQApgygNmVAf8qTqAKQz45lgdsdEvDgcseIiZfrI/4AAK/CYC9KA90HGkeyCeFF23+ASgzXv/Bzyg7oElt3volqjzHg/4SN4Di/ywSJ3HSi+A/hPs8jOXMs/91AnIEJcQEeBQ5rl2J4C8B4pbQJrnmDZL3wPFQ0iZ5/a1NdBvAUrd17BEm+duag/oe6BAn9c1j74HCvT5ikbfA/0o8xom3AMnndegmPYloAalatoelNrT0lAqrTEoxTRWgUKVTsAqFFrtBLBrUOYaX0qhDOMBj+Hz+oce+Fj84BF8HvETCz784DV8HvOAEQVbfxtdZ9/4rn/f7DCMp8sYsvzUMLpn930Fb84aXXNbo67PA4aeg1/m+fWNE+aFh+h3+ZXJA4y7W0PJdw0eYL66jH4PfzdPGD1//TN8/3kAlxZv4+KvxifXTfPZbUv8V747Z/KArtZxHDreMrr46bl34tZZt5+Z5vXe4fdXrvwrRipp/5/nF29e2j7PTjPj0Fe9z7tw5+Xy18uL8625qyZncG9v3Xvx/PmLe7feGpzJXZ1rzS92Rl7e+a8z8wdt64riMEjYFkiIejRoyqDBgwvCQpCh6aBQB4LLCxeRSQhncCBLFutPIFa2DqGJcToU6riQwR5CQzuGQKDQpZB6dJcOpV08dOnUqb2t7z061Xcqyrtv/JFwf5/vn/Px0AeBeFn6nXP/LP/+Jx995T/9nx+t5gDGsuJ9yUsEyA5iPMgIsCTxvuSx9rtcP9s9UoCWrDCQfMcA3I2xagDuSBxIbmn/YS6AdQUoPYgr1CSPDEB1MYD5729Ls373OgcAzuDY/kkEkDtRJ4DdsGPtdz4XwJN/AeqLD9X+swF4yCtT1373NHUHfpRrLXHXAExjnBqAXW7Qr86l7YB/rABbcYm7EtcMwGcxTgzAGu5o/4b2f5wT4HcFGMYVdySuGIAJrogCrEjcCf29jgJ8kQcAZ9CNK96TWAKAnlDNAJQk3gv9vTJPIAkga5olCVCLcUQAxY392y4d4D0FqJpNJcCIzy4zBxb6e8+1/2pugA8zXjNcKwXQuXCqALyyob/3UgFu5gb4GjrCwwLAaYwnCsBHG/p7FQV4kRvAQ0cYLQA4oasyzqVbob/XxhVIBWgtHK4ZJ+M5AeRV3q5EgJ+KADyCjqxeFOA8xncEqMV+93kEeDXrP8wJQCEe00YEeBfjkACD2O8aof9L3YDXCQCeOrI2MoPyDQEexn53FACu4ATyAFCI3xgbAeANp4QA7MZ+txcAGlBh+g5sLbIRr6gFWBP/7weAG8k7QCEOF9koY+wSYEX8fy0AdKDC3ADfQUfWRsZVvxDgL2lcDQBlqDA3gIeOrI0y8LzNAPCHFD4L/ds4gSIA1QU2YmMTsX9NCi8CwPMiABDiz7QRAR6EC6Ix+HdfCjd6UNHVBAAIcZk2IkCTAMG/e9J4nSq6mQAAIY5pIwLs4MMoC/49ksZNquhFIoDnW6eNCFDV2J+fPBWqyCcDQEdqIwIcAOB2qPxBGoOLVl8VAoAQv/2vjfhE6rN+h1NvQEWHyQDr0BFtRIClWX8E2JTKI6jo+2QADx3RRnTlVPoF4LpU7kFFPhngCXREGxFgIv0CsCGV+1DR0+I7MISNCDAN90P6BeDCzbmoU2wHIMQubESASXgh0i8Az+ZdVIYK8wNAiE1rIwMwkv4IsDrvom2qMA3A46rDRhm+zQbSHwHgIlWRLwIAHcFGBHjs5gHgopdFASDEZdpIAWQw9n8DAFxUgQoTACDEMWwEgNNL/20CAC5qQ4UJABBiCzYCwNal/9oAgIvOqMJEAK86sjZSgJO+jD4FgItURb44gOiINlKAWxg2Di4SFRUEgBDr1kbq37bMXgWgi65QhckA66ojYyP1b0dmrwLQRQ2qMBnAz+kINlL/WgC6SFXk0wEgxKG1kfp3A58ezrqoAxUW34GutZH69+yy8k8FsC4q59iBvwGAW6Sbd43R4AAAAABJRU5ErkJggg=='
}