

// javascript syntax, with seo - oct 15 2024


//****************************** Nice and simple data types ***********************************

let a = 23e5;
let s = "strings are like this"
let b, c, d, e, f, g = 2.1718 * 3.1415;         // expression here equates to a value
let caseSensitive = "remember";
caseSensitive += ":";
let casesensivite = "variables in javascript are case sensitive!";

let conc = "string " + "concatenation " + "is done with the " + "+ operator";

let arr = [ 3, 2, 3, 4, 5 ]
let und;

//****************************** OBJECT LITERAL ***********************************
const obj = {
    cooldown: 5,
    name: "bing",
    last: "go",
    id: 2362342,

    // print hi - n times
    print_hi : function (n) {
        for (let i = 0; i < n; i++)
        {
            console.log("hi");
        }
    },          // oops, don't forget comma. Functions are pretty much stored as a property

    printInfo() {
        console.log("***** OBJECT INFO ******")
        console.log(this.cooldown);
        console.log(this.name);
        console.log(this.last);
        console.log(this.id)
        // more sane than output streams lol!!
    }
};

//****************************** EMPTY OBJECT ***********************************
const emptyobj = {};
emptyobj.name = "bing";
emptyobj.id = 2;
emptyobj.assetTag = 253.321;
//****************************** MODIFYING A CONST OBJECT????? O.O ********** loll

//****************************** NEW OBJECT ***********************************
const newobj = new Object();    // Jet-brains suggests using empty object instead {}
newobj.name = "bing go";
newobj.id = 5;

console.log(a);
console.log(conc);
console.log(caseSensitive, casesensivite);

console.log("type for javascript object: "+  typeof(obj));
console.log("type for javascript array: "+  typeof(arr));
console.log("type for javascript number: "+  typeof(a));
console.log("type for javascript underfined: "+  typeof(und));

// member data accessing
console.log(newobj["name"]);        // this feels illegal
console.log(newobj.id);
console.log(emptyobj.assetTag);
console.log(obj["last"])            // why

obj.printInfo();

obj.print_hi(10);

//****************************** OBJECT PROPERTIES ACESSED BY REFERENCE ************************

let obj_reference = obj;      // no copy here.
obj_reference.name = "john";
obj_reference.last = "doe";
obj.printInfo();        // take a look, obj values are modified via the referenced obj_reference.

// you can also delete properties
delete obj_reference.cooldown;
obj.printInfo();        // take a look, obj values are modified via the referenced obj_reference

//******************************* NESTED OBJECT ************************************************
const nested = {
    value: 3,
    grades: [2, 3, 4, 5, 3],
    nestedobj: {
        name: "john",
        last: "bingo"
    }
}
console.log(" Accessing nested object via the dot-operator. Full name: " +
    nested.nestedobj.name + " " +
    nested.nestedobj.last )

//******************************* Creating Literals : Examples *****************************

"";     // string
324;    // number
false;  // boolean
null;   // null

{};     // object object
[];     // array object
/()/;   // regexp object

//******************************* HTML EVENTS *****************************
//******************************* HTML EVENTS *****************************
//******************************* HTML EVENTS *****************************

function changeSubmitText() {
    document.getElementById("submit-button").innerText = "submited successfully!"
}
function changeSendText() {
    document.getElementById("send-button").innerText = "submited successfully!"
}