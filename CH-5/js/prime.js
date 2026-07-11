let n, i, prime = 0;

	n = +prompt("Enter any Number :");

	i = 1;

	while (i <= n)
	{
		if (n % i == 0)
			prime++;

		i++;
	}

	if (prime == 2)
		console.log("\nThis is Prime Number");
	else
		console.log("\nThis is Not a Prime Number");
