var optionsBtns = document.querySelectorAll('[data-selection]') /* created var named optionsBtns set to a query selector of all of the data selections */
var cpuScores = document.querySelector('[data-cpuScore]') /* created var named cpuScores set to a query selector of the data for the CPU's score */
var userScores = document.querySelector('[data-userScore]') /* created var named userScores set to a query selector of the data for the User's score */
var chooseWisely = document.querySelector('[cpuResults]') /* created var named chooseWisely set to a query selector of the displayed CPU's results */

var options = [ /* created var named options set to an array of elements for rock, paper, and scissors */
  {
    emoji: '🗿', /* The element for the rock emoji */
    name: 'rock', /* The element for the rock name */
    overpowers: 'scissors' /* The element for what rock beats (overpowers) which is set to scissors */
  },

  {
    emoji: '📄', /* The element for the paper emoji */
    name: 'paper', /* The element for the paper name */
    overpowers: 'rock' /* The element for what paper beats (overpowers) which is set to rock */
  },

  {
    emoji: '✌️', /* The element for the scissors emoji */
    name: 'scissors', /* The element for the scissors name */
    overpowers: 'paper' /* The element for what scissors beats (overpowers) which is set to paper */
  }
]

optionsBtns.forEach(optionsBtn => { /* Utilizing optionsBtns to be able to interact with each button of rock, paper, or scissors */
  optionsBtn.addEventListener('click', e => { /* optionsBtn is set to an event listener for every time the user clicks on rock, paper, or scissors */
    var optionName = optionsBtn.dataset.selection /* created var named optionName set to data selections. This will give us the 'name' element of our data set */
    var selection = options.find(selection => selection.name == optionName) /* created var named selection set to finding the name of the user's option in the options array */
    createOutcome(selection) /* Calling the createOutcome function with the parameter set to selection for the user's option. Better visualized in console log */
    /* console.log(selection) */
  })
})

function createOutcome(options) /* created function named createOutcome set to a perameter named options */
{
  var CPUselection = computerOpt() /* created var named CPUselection set to the function computerOpt() with 0 perameters which randomly chooses the CPU's option of rock, paper, or scissors */
  var userWins = champion(options, CPUselection) /* created var named userWins set to calling the function champion() with 2 perameters named options & CPUselection which sets the user winning the round */
  var cpuWins = champion(CPUselection, options) /* created var named cpuWins set to calling the function champion() with 2 perameters named CPUselection & options which sets the CPU winning the round */

  resultingRounds(CPUselection, cpuWins) /* calling the function resultingRounds with 2 perameters named CPUselection & cpuWins to display the result of each round for the CPU */
  resultingRounds(options, userWins) /* calling the function resultingRounds with 2 perameters named options & userWins to display the result of each round for the user */

  if (userWins) /* if the user wins */
  {
    addToScore(userScores) /* call the function addToScore with the userScores perameter to add the user's score */
  }

  else if (cpuWins) /* if the cpu wins */
  {
   	addToScore(cpuScores) /* call the function addToScore with the cpuScores perameter to add the cpu's score */
  }

  /* console.log(options) */
}

function addToScore(score) /* created function named addToScore set to a peremeter named score */
{

	score.innerText = 1 + parseInt(score.innerText) /* The inner text of the score is incremented by 1. parseInt() is a built-in function */
}

function resultingRounds(options, champ) /* created a function named resultingRounds with 2 perameters named options & champ */
{
  	var div = document.createElement('div') /* created var named div set to creating a div element (HTML) */
  	div.innerText = options.emoji /* the inner text of the div is set to the emoji from options */
  	div.classList.add('resultingOutcome') /* resultingOutcome is added and displayed to the css class list */

  	if (champ) /* if champ (set to change opacity) */
  	{
    	div.classList.add('champ') /* resultingOutcome.champ is added and displayed to the css class list */
  	}

  	chooseWisely.after(div) /* Display the div element onto the monitor */
}

function champion(selection, cpuSelection) /* created function named champion with 2 perameters named selection & cpuSelection */
{
  	return selection.overpowers == cpuSelection.name /* Return statement to check who the champion is */
}

function computerOpt() /* created function named computerOpt with 0 perameters */
{
  	var cpuOptions = Math.floor(Math.random() * options.length) /* created var named cpuOptions set to a random variable from 0 to 2 */
  	return options[cpuOptions] /* return the random element from the options array */
}