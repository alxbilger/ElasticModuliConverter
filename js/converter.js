$(document).ready( function(){

	//init
	var input = new Array();

	function changeInput(newInput)
	{
		for (var i = 0; i < input.length; i++)
		{
			if (input[i]==newInput) return;
		}
		while (input.length > 1)
		{
			input.shift();
		}

		input.push(newInput);
	}

	function compute()
	{
		if (input.length == 2)
		{
			if (input[0] == 0 && input[1] == 1 || input[0] == 1 && input[1] == 0)
			{
				var K  = $('#bulk').val();
				var E = $('#young').val();
				$('#lame').val( 3*K*(3*K - E)/(9*K - E) );
				$('#shear').val(3*K*E/(9*K-E));
				$('#poisson').val((3*K-E)/(6*K));
				$('#wave').val( (3*K*(3*K+E))/(9*K-E) );
			}
			else if (input[0] == 0 && input[1] == 2 || input[0] == 2 && input[1] == 0)
			{
				var K  = $('#bulk').val();
				var L  = $('#lame').val();
				$('#young').val(9*K*(K-L)/(3*K-L));
				$('#shear').val(3*(K-L)/2);
				$('#poisson').val(L/(3*K-L));
				$('#wave').val(3*K-2*L);
			}
			else if (input[0] == 0 && input[1] == 3 || input[0] == 3 && input[1] == 0)
			{
				var K  = $('#bulk').val();
				var G  = $('#shear').val();
				$('#young').val(9*K*G/(3*K+G));
				$('#lame').val(K-(2*G)/3);
				$('#poisson').val((3*K-2*G)/(2*(3*K+G)));
				$('#wave').val(K+4*G/3);
			}
			else if (input[0] == 0 && input[1] == 4 || input[0] == 4 && input[1] == 0)
			{
				var K  = $('#bulk').val();
				var v  = $('#poisson').val();
				$('#young').val(3*K*(1-2*v));
				$('#lame').val(3*K*v/(1+1*v));
				$('#shear').val((3*K*(1-2*v))/(2*(1+1*v)));
				$('#wave').val(3*K*(1-v)/(1+1*v));
			}
			else if (input[0] == 1 && input[1] == 3 || input[0] == 3 && input[1] == 1)
			{
				var E = $('#young').val();
				var G = $('#shear').val();
				$('#bulk').val(E*G/(3*(3*G-E)));
				$('#lame').val(G*(E-2*G)/(3*G-E));
				$('#poisson').val(E/(2*G)-1);
				$('#wave').val(G*(4*G-E)/(3*G-E));
			}
			else if (input[0] == 1 && input[1] == 4 || input[0] == 4 && input[1] == 1)
			{
				var E = $('#young').val();
				var v  = $('#poisson').val();
				$('#bulk').val(E/(3*(1-2*v)));
				$('#lame').val(E*v/((1+v)*(1-2*v)));
				$('#shear').val( 0.5*E/(1+1*v) );
				$('#wave').val(E*(1-v)/((1+v)*(1-2*v)));
			}
			else if (input[0] == 2 && input[1] == 3 || input[0] == 3 && input[1] == 2)
			{
				var L  = $('#lame').val();
				var G  = $('#shear').val();
				$('#bulk').val(L+2*G/3);
				$('#young').val(G*(3*L+2*G)/(L+G));
				$('#poisson').val(L/(2*(L+G)));
				$('#wave').val(L+2*G);
			}
			else if (input[0] == 2 && input[1] == 4 || input[0] == 4 && input[1] == 2)
			{
				var L  = $('#lame').val();
				var v  = $('#poisson').val();
				$('#bulk').val(L*(1+1*v)/(3*v));
				$('#young').val(L*(1+1*v)*(1-2*v)/v);
				$('#shear').val(L*(1-2*v)/(2*v));
				$('#wave').val(L*(1-v)/v);
			}
			else if (input[0] == 3 && input[1] == 4 || input[0] == 4 && input[1] == 3)
			{
				var G  = $('#shear').val();
				var v  = $('#poisson').val();
				$('#bulk').val(2*G*(1+1*v)/(3*(1-2*v)));
				$('#young').val(2*G*(1+1*v));
				$('#lame').val(2*G*v/(1-2*v));
				$('#wave').val(2*G*(1-v)/(1-2*v));
			}
			else if (input[0] == 3 && input[1] == 5 || input[0] == 5 && input[1] == 3)
			{
				var G  = $('#shear').val();
				var M  = $('#wave').val();
				$('#bulk').val(M-4*G/3);
				$('#young').val(G*(3*M-4*G)/(M-G));
				$('#lame').val(M-2*G);
				$('#poisson').val((M-2*G)/(2*M-2*G));
			}
		}
	}

	//key press event
	$('input').keypress(function() {
		changeInput($(this).parent().index());
		setTimeout(compute, 10);
	});



});