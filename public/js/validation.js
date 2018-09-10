
//----------------Registration----------------//


$(document).ready(function() {
    $("#fullname").focusout(function() {

         if (fullname.value == "") {

            $('#fullname').css("border", "1px solid #ff4000");
            document.getElementById("fullname").placeholder = "Podaj imię i nazwisko";
            fullname.click();
            return false;

        } else {

            $('#fullname').css("border", "1px solid #00cc00");

        }

    });

    $("#email").focusout(function() {

        if (email.value == "") {

            $('#email').css("border", "1px solid #ff4000");
            $('#email').text("Wypełnij pole email");
            $(".error-email").text("");
            document.getElementById("email").placeholder = "Wypełnij pole email";
            email.click();
            return false;

        } else {

            $('#email').css("border", "1px solid #00cc00");

        }

    });
    $("#email").keyup(function() {

        regInputEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        resInputEmail = email.value.match(regInputEmail);

        if (resInputEmail == null) {

            $('#email').css("border", "1px solid #ff4000");
            $(".error-email").css("padding", "5px 0px 0px 0px");
            $(".error-email").css("color", "#ff4000");
            $(".error-email").css("font-size", "12px");
            $(".error-email").text("Niepoprawny adres email");
            email.click();
            return false;

        } else {

            $('#email').css("border", "1px solid #00cc00");
            $(".error-email").text("");
        }

    });

    $("#company").focusout(function() {

        if (company.value == "") {
           $('.company').css("border", "1px solid #ff4000");
           document.getElementById("company").placeholder = "Proszę podać nazwę firmy";
           company.click();
           return false;

       } else {

           $('.company').css("border", "1px solid #00cc00");

       }
   });


    $("#password").focusout(function() {

         if (password.value == "") {

            $('#password').css("border", "1px solid #ff4000");
            document.getElementById("password").placeholder = "Stwórz hasło";
            password.click();
            return false;

        } else {

            $('#password').css("border", "1px solid #00cc00");
            $(".error-password").text("");

        }

    });

        $("#password").keyup(function() {

        if (password.value.length <= 5) {

            $('#password').css("border", "1px solid #ff4000");
            $(".error-password").css("padding", "5px 0px 0px 0px");
            $(".error-password").css("color", "#ff4000");
            $(".error-password").css("font-size", "12px");
            $(".error-password").text("Hasło jest za krótkie");
            password.click();
            return false;

        } else {

            $('#password').css("border", "1px solid #00cc00");
            $(".error-password").text("");

        }

    });

    $("#streetCompany").focusout(function() {

         if (streetCompany.value == "") {
            $('#streetCompany').css("border", "1px solid #ff4000");
            document.getElementById("streetCompany").placeholder = "Proszę podać adres";
            streetCompany.click();
            return false;

        } else {

            $('#streetCompany').css("border", "1px solid #00cc00");

        }

    });

    $("#city").focusout(function() {

         if (city.value == "") {
            $('#city').css("border", "1px solid #ff4000");
            document.getElementById("city").placeholder = "Proszę podać miasto";
            city.click();
            return false;

        } else {

            $('#city').css("border", "1px solid #00cc00");

        }

    });

    $("#zipCode").focusout(function() {

        if (zipCode.value == "") {
            $('#zipCode').css("border", "1px solid #ff4000");
            document.getElementById("zipCode").placeholder = "Proszę podać kod pocztowy";
            zipCode.click();
            return false;

        } else {

            $('#zipCode').css("border", "1px solid #00cc00");

        }

        regZipCode = /^[0-9]{2}-[0-9]{3}$/;
        resZipCode = zipCode.value.match(regZipCode);

        if (resZipCode == null) {

            $('#zipCode').css("border", "1px solid #ff4000");
            $(".error-zipCode").css("padding", "5px 0px 0px 0px");
            $(".error-zipCode").css("color", "#ff4000");
            $(".error-zipCode").css("font-size", "12px");
            $(".error-zipCode").text("Wprowadzono niedozwolone znaki");
            zipCode.click();
            return false;

        } else {

            $('#zipCode').css("border", "1px solid #00cc00");
            $(".error-zipCode").text("");

        }

    });

    $("#numberCompany").focusout(function() {

        regNumberCompany = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
        resNumberCompany = numberCompany.value.match(regNumberCompany);

        if (resNumberCompany == null) {

            $('#numberCompany').css("border", "1px solid #ff4000");
            $(".error-numberCompany").css("padding", "5px 0px 0px 0px");
            $(".error-numberCompany").css("color", "#ff4000");
            $(".error-numberCompany").css("font-size", "12px");
            $(".error-numberCompany").text("Błędny NIP");
            zipCode.click();
            return false;

        } else {

            $('#numberCompany').css("border", "1px solid #00cc00");
            $(".error-numberCompany").text("");

        }

         if (numberCompany.value == "") {
            $('#numberCompany').css("border", "1px solid #ff4000");
            document.getElementById("numberCompany").placeholder = "Wypełnij pole NIP";
            numberCompany.click();
            return false;

        } else {

            $('#numberCompany').css("border", "1px solid #00cc00");

        }

    });

    $("#numberCompany").keyup(function() {

        if(numberCompany.value.length >= 14){

            $('#numberCompany').css("border", "1px solid #ff4000");
            $(".error-numberCompany").css("padding", "5px 0px 0px 0px");
            $(".error-numberCompany").css("color", "#ff4000");
            $(".error-numberCompany").css("font-size", "12px");
            $(".error-numberCompany").text("Numer NIP jest za długi");
            numberCompany.click();
            return false;

        } else {

            $('#numberCompany').css("border", "1px solid #00cc00");
            $(".error-numberCompany").text("");

        }

        if (numberCompany.value.length <= 12) {

            $('#numberCompany').css("border", "1px solid #ff4000");
            $(".error-numberCompany").css("padding", "5px 0px 0px 0px");
            $(".error-numberCompany").css("color", "#ff4000");
            $(".error-numberCompany").css("font-size", "12px");
            $(".error-numberCompany").text("Numer NIP jest za krótki");
            numberCompany.click();
            return false;

        } else {

            $('#numberCompany').css("border", "1px solid #00cc00");
            $(".error-numberCompany").text("");

        }

    });

    $("#accountNumber").focusout(function() {

        regAccountNumber = /^[0-9]{26}$/;
        resAccountNumber = accountNumber.value.match(regAccountNumber);

        if (resAccountNumber == null) {

            $('#accountNumber').css("border", "1px solid #ff4000");
            $(".error-accountNumber").css("padding", "5px 0px 0px 0px");
            $(".error-accountNumber").css("color", "#ff4000");
            $(".error-accountNumber").css("font-size", "12px");
            $(".error-accountNumber").text("Błędny numer konta");
            accountNumber.click();
            return false;

        } else {

            $('#numberCompany').css("border", "1px solid #00cc00");
            $(".error-accountNumber").text("");

        }

        if (accountNumber.value == "") {
           $('#accountNumber').css("border", "1px solid #ff4000");
           document.getElementById("accountNumber").placeholder = "Podaj numer konta";
           accountNumber.click();
           return false;

       } else {

           $('#accountNumber').css("border", "1px solid #00cc00");

       }

    });

    $("#accountNumber").keyup(function() {

       if (accountNumber.value.length <= 25) {

        $('#accountNumber').css("border", "1px solid #ff4000");
        $(".error-accountNumber").css("padding", "5px 0px 0px 0px");
        $(".error-accountNumber").css("color", "#ff4000");
        $(".error-accountNumber").css("font-size", "12px");
        $(".error-accountNumber").text("Numer konta jest za krótki");
        accountNumber.click();
        return false;

    } else {

        $('#accountNumber').css("border", "1px solid #00cc00");
        $(".error-accountNumber").text("");

    }

    if (accountNumber.value.length >= 27) {

        $('#accountNumber').css("border", "1px solid #ff4000");
        $(".error-accountNumber").css("padding", "5px 0px 0px 0px");
        $(".error-accountNumber").css("color", "#ff4000");
        $(".error-accountNumber").css("font-size", "12px");
        $(".error-accountNumber").text("Numer konta jest za długi");
        accountNumber.click();
        return false;

    } else {

        $('#accountNumber').css("border", "1px solid #00cc00");
        $(".error-accountNumber").text("");

    }

   });


//------------------- validation contractor ---------------------//



$("#contractorCompany").focusout(function() {

    if (contractorCompany.value == "") {
       $('#contractorCompany').css("border", "1px solid #ff4000");
       document.getElementById("contractorCompany").placeholder = "Proszę podać nazwę firmy";
       contractorCompany.click();
       return false;

   } else {

       $('#contractorCompany').css("border", "1px solid #00cc00");

   }

});

$("#contractorAddress").focusout(function() {

    if (contractorAddress.value == "") {
       $('#contractorAddress').css("border", "1px solid #ff4000");
       document.getElementById("contractorAddress").placeholder = "Proszę podać adres";
       contractorAddress.click();
       return false;

   } else {

       $('#contractorAddress').css("border", "1px solid #00cc00");

   }

});

$("#contractorCity").focusout(function() {

    if (contractorCity.value == "") {
       $('#contractorCity').css("border", "1px solid #ff4000");
       document.getElementById("contractorCity").placeholder = "Proszę podać miasto";
       contractorCity.click();
       return false;

   } else {

       $('#contractorCity').css("border", "1px solid #00cc00");

   }

});

$("#contractorZipCode").focusout(function() {

   if (contractorZipCode.value == "") {
       $('#contractorZipCode').css("border", "1px solid #ff4000");
       document.getElementById("contractorZipCode").placeholder = "Proszę podać kod pocztowy";
       contractorZipCode.click();
       return false;

   } else {

       $('#contractorZipCode').css("border", "1px solid #00cc00");

   }

   regContractorZipCode = /^[0-9]{2}-[0-9]{3}$/;
   resContractorZipCode = contractorZipCode.value.match(regContractorZipCode);

   if (resContractorZipCode == null) {

       $('#contractorZipCode').css("border", "1px solid #ff4000");
       $(".error-contractorZipCode").css("padding", "5px 0px 0px 0px");
       $(".error-contractorZipCode").css("color", "#ff4000");
       $(".error-contractorZipCode").css("font-size", "12px");
       $(".error-contractorZipCode").text("Wprowadzono niedozwolone znaki");
       contractorZipCode.click();
       return false;

   } else {

       $('#contractorZipCode').css("border", "1px solid #00cc00");
       $(".error-contractorZipCode").text("");

   }

});

$("#contractorNumberCompany").focusout(function() {

   regContractorNumberCompany = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
   resContractorNumberCompany = contractorNumberCompany.value.match(regContractorNumberCompany);

   if (resContractorNumberCompany == null) {

       $('#contractorNumberCompany').css("border", "1px solid #ff4000");
       $(".error-contractorNumberCompany").css("padding", "5px 0px 0px 0px");
       $(".error-contractorNumberCompany").css("color", "#ff4000");
       $(".error-contractorNumberCompany").css("font-size", "12px");
       $(".error-contractorNumberCompany").text("Błędny NIP");
       contractorNumberCompany.click();
       return false;

   } else {

       $('#contractorNumberCompany').css("border", "1px solid #00cc00");
       $(".error-contractorNumberCompany").text("");

   }

    if (contractorNumberCompany.value == "") {
       $('#contractorNumberCompany').css("border", "1px solid #ff4000");
       document.getElementById("contractorNumberCompany").placeholder = "Wypełnij pole NIP";
       contractorNumberCompany.click();
       return false;

   } else {

       $('#contractorNumberCompany').css("border", "1px solid #00cc00");

   }

});

$("#contractorNumberCompany").keyup(function() {

   if(contractorNumberCompany.value.length >= 14){

       $('#contractorNumberCompany').css("border", "1px solid #ff4000");
       $(".error-contractorNumberCompany").css("padding", "5px 0px 0px 0px");
       $(".error-contractorNumberCompany").css("color", "#ff4000");
       $(".error-contractorNumberCompany").css("font-size", "12px");
       $(".error-contractorNumberCompany").text("Numer NIP jest za długi");
       contractorNumberCompany.click();
       return false;

   } else {

       $('#contractorNumberCompany').css("border", "1px solid #00cc00");
       $(".error-contractorNumberCompany").text("");

   }

   if (contractorNumberCompany.value.length <= 12) {

       $('#contractorNumberCompany').css("border", "1px solid #ff4000");
       $(".error-contractorNumberCompany").css("padding", "5px 0px 0px 0px");
       $(".error-contractorNumberCompany").css("color", "#ff4000");
       $(".error-contractorNumberCompany").css("font-size", "12px");
       $(".error-contractorNumberCompany").text("Numer NIP jest za krótki");
       contractorNumberCompany.click();
       return false;

   } else {

       $('#contractorNumberCompany').css("border", "1px solid #00cc00");
       $(".error-contractorNumberCompany").text("");

   }

});




});