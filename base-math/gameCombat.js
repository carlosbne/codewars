//https://www.codewars.com/kata/586c1cf4b98de0399300001d

function combat(health, damage) {
    let currentHealth = health - damage;
    return currentHealth > 0 ? currentHealth : 0;
  }



// ------- best practices -------

function combat(health, damage) {
	return health < damage ? 0 : health - damage
}