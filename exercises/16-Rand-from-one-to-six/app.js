function getRandomInt(max)
{
	var randomNumber = Math.random();
    return Math.floor(randomNumber * Math.floor(max));

}
console.log(getRandomInt(6));