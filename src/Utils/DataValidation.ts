export class DataValidation {
    
    isValidMobileNumber(mobileNumber: any) {

        if(mobileNumber == undefined || mobileNumber == null || mobileNumber == "")
        return false;
        
            var mobileNumberRegex = new RegExp("^[0-9]{10}$");
            if(mobileNumberRegex.test(mobileNumber))
                return true;
            return false;
    }

    isValidEmailId(emailId: any) {
       
        if(emailId == undefined || emailId == null || emailId == "")
        return false;

        if(emailId != undefined && emailId != null && emailId != ""){
            var mobileNumberRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
            if(mobileNumberRegex.test(emailId))
            return true;
            return false;
        }
        return true;
    }

    stringToBoolean(string : any){
        if(string == null || string == undefined || string == '')
            return false;
        
            switch(string){
                case 'true':
                case 'True':
                    return true;
                case 'false':
                case 'False':
                    return false;
            }
            return string;
    }

    commaSeperator(string){ 
        //Check if string is null
        if(this.isEmpty(string))
            return null;
        
        //Check if commas are present
        if(string.includes(","))
            return string;
        
        //Insert the commas
        return string.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    isValidPinCode(pinCode: any) {
        if(pinCode != undefined && pinCode != null && pinCode != ""){
            var pinCodeRegex = new RegExp("^[0-9]{6}$"); 
        if(pinCodeRegex.test(pinCode))
        return true;
        return false;
        }
    }


    isValidAmount(amount : any)
    {
        var strongRegex = new RegExp("[0-9]{0,8}.[0-9]{0,2}");
        return (strongRegex.test(amount));
    }
    isValidIfsc(code : any){
        var strongRegex = new RegExp("[A-Za-z]{4}[0-9]{7}$");
        return (strongRegex.test(code));
    }
    doValidateName(name: any) {

    }
    isValidPassword(password:any){
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return (strongRegex.test(password))
    }
    doCheckForUndefinedVariable(fieldToCheck: any, returnMessageTab: any, fieldName: any) {
        if (fieldToCheck == undefined || fieldToCheck == "")
            returnMessageTab = fieldName + " not present !!!";
        return fieldToCheck;
    }
    isNull(value: any) {
        if (value == null) 
            return true;
        return false;
    }
    isEmptyJson(value: any) {
        if (value == undefined)
            return true;
        if (value == null)
            return true;
        if (value == "")
            return true;
        return false;
    }
    isEmpty(value: any) {
        if (value == undefined)
            return true;
        if (value == null)
            return true;
        if (value.trim() == "")
            return true;
        return false;
    }

    isUndefined(value: any) {
        if (value == undefined) {
            return true;
        }

    }


    isValidNumber(number:any)
    {
        if(number != null || number != undefined || number != "")
        {
            var nameRegex = new RegExp("[0-9]+");
            if(nameRegex.test(number))
                return true;
            return false;
        }
        return false;
    }

    isValidName(name : any)
    {
        if(name!=undefined && name != null && name!=""){
            var nameRegex = new RegExp("^[a-zA-Z ]"); 
        if(nameRegex.test(name))
        return true;
        return false;
        }
    }
    addErrorMessage(eid:any,errorMessage:any)
    {
        /*STEP : 1  node variable for adding child element for error message*/
         
        var node = document.createElement("ion-note"); 
        /*STEP : 2 Add classes of this node */ 
        node.setAttribute("class", "validation-error");
        /*STEP : 2 Add id of this node */ 
        node.setAttribute("id", eid + "Err");
        /*STEP : 3 Add text content of this node */
        var textnode = document.createTextNode(errorMessage);  
        node.appendChild(textnode); 
        /*STEP : 4 Add this node to under the text field */                             
        document.getElementById(eid).parentElement.appendChild(node);
    }
    removeErrorMessage(eid : any){
    if (document.getElementById(eid + "Err") != null)
        document.getElementById(eid + "Err").remove();
    }
    removeErrorMessageForMultipleElement(eClass : any,index : any){
        if (document.getElementsByClassName("validation-error"+" "+eClass + "Err")[index] != null)
            document.getElementsByClassName("validation-error"+" "+eClass + "Err")[index].remove();
    }
    addErrorMessageForMultipleElement(eid:any,errorMessage:any,index : any)
    {
        /*STEP : 1  node variable for adding child element for error message*/
        var node = document.createElement("ion-note"); 
        /*STEP : 2 Add classes of this node */ 
        node.setAttribute("class", "validation-error"+" "+ eid + "Err");
        /*STEP : 3 Add text content of this node */
        var textnode = document.createTextNode(errorMessage);  
        node.appendChild(textnode); 
        /*STEP : 4 Add this node to under the text field */                             
        document.getElementsByClassName(eid)[index].parentElement.appendChild(node);
    }
}