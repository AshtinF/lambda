         //Set up an associative array
 //The keys represent the size of the coffee
 //The values represent the cost of the coffee i.e A 10" coffee cost's $35
 var coffee_types = new Array();
 coffee_types["Coffee"]=1.85;
 coffee_types["Expresso"]=2.85;
 coffee_types["Decaff"]=2.35;

 

 var coffee_sizes = new Array();
 coffee_sizes["12oz"]=0;
 coffee_sizes["16oz"]=.5;
 coffee_sizes["20oz"]=1;
 coffee_sizes["30oz"]=1.5;

 var creamer_number = new Array();
 creamer_number["0cshot"]=0;
 creamer_number["1cshot"]=.5;
 creamer_number["2cshot"]=1;

 
 var sugar_number = new Array();
 sugar_number["0sshot"]=0;
 sugar_number["1sshot"]=.5;
 sugar_number["2sshot"]=1;
 
 
 
 
 //Set up an associative array 
 //The keys represent the size type
 //The value represents the cost of the size i.e. Lemon size is $5,Dobash size is $9
 //We use this this array when the user selects a size from the form

	 
	 
// getcoffeeSizePrice() finds the price based on the size of the coffee.
// Here, we need to take user's the selection from radio button selection
function getcoffeeSizePrice()
{  
    var coffeeSizePrice=0;
    //Get a reference to the form id="coffeeform"
    var theForm = document.forms["coffeeform"];
    //Get a reference to the coffee the user Chooses name=selectedsize":
    var selectedsize = theForm.elements["selectedsize"];
    //Here since there are 4 radio buttons selectedsize.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedsize.length; i++)
    {
        //if the radio button is checked
        if(selectedsize[i].checked)
        {
            //we set coffeeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" coffee we set it to 25
            //by using the coffee_types array
            //We get the selected Items value
            //For example coffee_types["Round8".value]"
            coffeeSizePrice = coffee_types[selectedsize[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the coffeeSizePrice
    return coffeeSizePrice;
}

//This function finds the size price based on the 
//drop down selection
function getsizePrice()
{
    var coffeesizePrice=0;
    //Get a reference to the form id="coffeeform"
    var theForm = document.forms["coffeeform"];
    //Get a reference to the select id="size"
     var selectedsize = theForm.elements["size"];
     
    //set coffeesize Price equal to value user chose
    //For example coffee_sizes["Lemon".value] would be equal to 5
    coffeesizePrice = coffee_sizes[selectedsize.value];

    //finally we return coffeesizePrice
    return coffeesizePrice;
}


function getCreamerShotPrice()
{  
    var creamerSizePrice=0;
    //Get a reference to the form id="coffeeform"
    var theForm = document.forms["coffeeform"];
    //Get a reference to the coffee the user Chooses name=selectedsize":
    var selectedsize = theForm.elements["selectedsize"];
    //Here since there are 4 radio buttons selectedsize.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedsize.length; i++)
    {
        //if the radio button is checked
        if(selectedsize[i].checked)
        {
            //we set coffeeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" coffee we set it to 25
            //by using the coffee_types array
            //We get the selected Items value
            //For example coffee_types["Round8".value]"
            creamerSizePrice = creamer_number[selectedsize[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the coffeeSizePrice
    return creamerSizePrice;
}

//This function finds the size price based on the 
//drop down selection
function getCSsizePrice()
{
    var creamerSizePrice=0;
    //Get a reference to the form id="coffeeform"
    var theForm = document.forms["coffeeform"];
    //Get a reference to the select id="size"
     var selectedsize = theForm.elements["csize"];
     
    //set coffeesize Price equal to value user chose
    //For example coffee_sizes["Lemon".value] would be equal to 5
    creamerSizePrice = creamer_number[selectedsize.value];

    //finally we return coffeesizePrice
    return creamerSizePrice;
}

function getSugarShotPrice()
{  
    var sugarSizePrice=0;
    //Get a reference to the form id="coffeeform"
    var theForm = document.forms["coffeeform"];
    //Get a reference to the coffee the user Chooses name=selectedsize":
    var selectedsize = theForm.elements["selectedsize"];
    //Here since there are 4 radio buttons selectedsize.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedsize.length; i++)
    {
        //if the radio button is checked
        if(selectedsize[i].checked)
        {
            //we set coffeeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" coffee we set it to 25
            //by using the coffee_types array
            //We get the selected Items value
            //For example coffee_types["Round8".value]"
            sugarSizePrice = sugar_number[selectedsize[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the coffeeSizePrice
    return sugarSizePrice;
}

//This function finds the size price based on the 
//drop down selection
function getSsizePrice()
{
    var sugarSizePrice=0;
    //Get a reference to the form id="coffeeform"
    var theForm = document.forms["coffeeform"];
    //Get a reference to the select id="size"
     var selectedsize = theForm.elements["ssize"];
     
    //set coffeesize Price equal to value user chose
    //For example coffee_sizes["Lemon".value] would be equal to 5
    sugarSizePrice = sugar_number[selectedsize.value];

    //finally we return coffeesizePrice
    return sugarSizePrice;
}



//candlesPrice() finds the candles price based on a check box selection

        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var coffeePrice = getcoffeeSizePrice() + getsizePrice() + getCSsizePrice() + getSsizePrice();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the coffee $"+coffeePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}