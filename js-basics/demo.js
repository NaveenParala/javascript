errors={};
errors.username='naveenkumar';
errors.password='naveen';
console.log(errors);
console.log(errors['password']);

const keys=Object.keys(errors);
console.log(keys);
for(let key of(keys))
	console.log(key,errors[key]);