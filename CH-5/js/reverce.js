let n, rem, rev = 0;

	n = +prompt("Enter any number :");

	while (n != 0)
	{
		rem = n % 10;
		rev = rev * 10 + rem;
		n = Math.floor(n / 10);
	}

	console.log("\nReverse : ", rev);