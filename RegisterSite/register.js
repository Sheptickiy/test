//<form method="post" action="RegisterServlet.html" onsubmit="return valForm()">
function firstname()
{
	var firstname=document.getElementById("firstname");
	var firstErr=document.getElementById("firstErr");
	
	if(firstname.value.replace(/\s/g,"")=="")
	{
		 Useererr.innnerhtml = "Имя пользователя не может быть пустым или местом";
		return false;
	}else
	{
		 Username.value = username.value.replace (/ \ S / G, ""); // удалить пространство
		userErr.innerHTML="";
		return true;
	}
}
 //подтвердите пароль 
function valpass()
{
	var password=document.getElementById("password");
	var passErr=document.getElementById("passErr");
	
	if(password.value.replace(/\s/g,"")=="")
	{
		 Passerr.innerhtml = "пароль не может быть пустым или пробелом";
		return false;
	}else
	{
		 Password.value = Password.value.replace (/ \ s / g, ""); // удалить пространство
		passErr.innerHTML="";
		return true;
	}
}
function valrepass()
{
	var repassword=document.getElementById("repassword");
	var repassErr=document.getElementById("repassErr");
	var password=document.getElementById("password");
	
	if(repassword.value.replace(/\s/g,"")=="")
	{
		 Пароль repasserr.innerhtml = "не может быть пустым или местом";
		return false;
	}else
	{
		 Repassword.value = Repassword.value.replace (/ \ S / G, ""); // удалить пространство
		repassErr.innerHTML="";
	}
	if(repassword.value!=password.value)
	{
		 Repasserr.innerhtml = "Два пароля несовместимыми";
		return false;
	}else
	{
		repassErr.innerHTML="";
	}
	return true;
}
 // Отправить проверку
function valForm()
{
	if(valname()==true && valpass()==true && valrepass()==true )
	{
		return true;
	}else
	{
		return false;
	}
}


//    <table>
        <tr>
            <td><label for = "firstname">Имя:<sup>*</sup></label></td>
            <td><input type="text" name="firstname" id="firstname" required="required" onBlur="firstname();"><span id="firstErr"></span></td>
        </tr>
        <tr>
            <td><label for = "lastname">Фамилия:<sup>*</sup></label></td>
            <td><input type="text" name="lastname" id="lastname" required="required" onblur="valpass();"><span id="lastErr"></span></td>
        </tr>
        <tr>
            <td> <label for = "city">Город:</label></td>
            <td><input type="text" name="city" id="city" onblur="valcity();"><span id="cityErr"></span></td>
        </tr>
        <tr>
            <td> <label for = "address">Адрес:</label></td>
            <td><input type="text" name="address" id="address" onblur="valaddress();"><span id="addressErr"></span></td>
        </tr>
        <tr>
            <td></td>
            <td><input type = "submit" value="Стать Котиком"></td>
        </tr>
    </table>