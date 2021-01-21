alert('Welcome')

const general = [5.25, 5.85, 6.25, 6.85, 7.25, 7.75, 7.95]
const senior_c = [5.75, 6.25, 6.75, 7.15, 7.50, 7.90, 8.05]

function find_returns()
{
	let amt = document.getElementById('amount').value;
	let snr = document.getElementById('senior').checked;
	let scm = document.getElementById('tenure').value;
	console.log('Amount: ', amt);
	console.log('Senior: ', snr);
	console.log('Years: ', scm);
	
	if (amt.length==0){return alert('Enter Amount to calculate Returns');}
	if (amt<1000){return alert('Minimum Amount is ₹1000');}
	if (scm==0){return alert('Select Scheme')}
	
	if (snr){var arr=senior_c}
	else {var arr=general}
	
	let rate = arr[scm-1]/100+1
	console.log(rate)
	
	if (scm<3)
	{
		let rtn = Math.round(amt * rate);
		return alert('Principal Amount: '+amt + '\nTotal Interest: '+(rtn-amt) + '\nTotal Return: '+rtn)
	}
	if(confirm('Will you keep the FD until it is matured'))
	{
		if (scm<5){yrs=scm-1}
		else if (scm==5){yrs=scm}
		else if (scm==6){yrs=7}
		else{yrs=10}
	}
	else
	{
		if (scm<5){yrs=scm-2}
		else if (scm==5)
		{
			if(confirm('Will you keep the FD for 4 years')){yrs=4}
			else{yrs=3}
		}
		else if (scm==6)
		{
			if(confirm('Will you keep the FD for 6 years')){yrs=6}
			else{yrs=5}
		}
		else
		{
			while(true)
			{
				x = prompt('Enter years you wish to keep the fd')
				if (['7', '8', '9', '10'].includes(x))
				{
					yrs=x;
					break;
				}
				if(!confirm("Invalid Entry (Try again with 7, 8, 9 or 10)\nDo you want to try again?")){return}
			}
		}
	}
	console.log(yrs);
	let rtn = Math.round(amt * rate**yrs);
	alert('Principal Amount: '+amt + '\nTotal Interest: '+(rtn-amt) + '\nTotal Return: '+rtn)
}

function reset()
{
	document.getElementById('amount').value='';
	document.getElementById('senior').checked = false;
	document.getElementById('tenure').value = 0;
	console.log('clear');
}