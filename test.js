function dropList() {
    document.getElementById("drop_list").classList.toggle("show");
}

function dropList2() {
    document.getElementById("drop_list2").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop_btn')) {

        var dropdowns = document.getElementsByClassName("dropdown_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function alertResult(rule) {
    alert(rule)
    prompt("Copy to clipboard: Ctrl+C, Enter", rule);
}

function fieldAppend() {
    var append = "Append[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]LVALUE[[-SEP-]]APPND[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter form ID:");
    var dField = prompt("Enter destination Field:");
    var lValue = prompt("Enter field containing live value:");
    var sAppend = prompt("Enter string to append:");

    var myRule = append.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/LVALUE/g, lValue).replace(/APPND/g, sAppend);

    alertResult(myRule);
}

function fieldPrepend() {
    var prepend = "Prepend[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]LVALUE[[-SEP-]]PPPND[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter form ID:");
    var dField = prompt("Enter destination Field:");
    var lValue = prompt("Enter field containing live value:");
    var sPrepend = prompt("Enter string to append:");

    var myRule = prepend.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/LVALUE/g, lValue).replace(/PPPND/g, sPrepend);

    alertResult(myRule);
}

function removeNumbers() {
    var remove = "RemoveNumbers[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]LVALUE[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter form ID:");
    var dField = prompt("Enter destination Field:");
    var lValue = prompt("Enter field containing live value:");

    var myRule = remove.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/LVALUE/g, lValue);
    alertResult(myRule);
}

function stripTags() {
    var strip = "StripTags[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]][[-SEP-]]LVALUE[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter form ID:");
    var dField = prompt("Enter destination Field:");
    var lValue = prompt("Enter field containing live value:");

    var myRule = strip.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/LVALUE/g, lValue);
    alertResult(myRule);
}

function concat() {
    var concat = "Concat[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]876[[-SEP-]]strCDA_876_field_0_54[[-SEP-]][[-SEP-]]876[[-SEP-]][[-SEP-]]#bxp_Space#[[-SEP-]]876[[-SEP-]]strCDA_876_field_0_8[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter form ID of destination field:");
    var dField = prompt("Enter destination Field:");

}

function readFrom() {
    var readFrm = "ReadFrom[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]FORMID2[[-SEP-]]FieldToSearch[[-SEP-]]ValueToSearchFor[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter form ID of destination field:");
    var dField = prompt("Enter destination Field:");
    var formID2 = prompt("Enter form ID of field to search");
    var ftSearch = prompt("Enter the field to search: ");
    var vtSearch = prompt("Enter the value to search: ");

    var myRule = readFrm.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/FORMID2/g, formID2).replace(/FieldToSearch/g, ftSearch).replace(/ValueToSearchFor/g, vtSearch);
    alertResult(myRule);
}

function readUntil() {
    var readFrm = "ReadUntil[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]FORMID2[[-SEP-]]FieldToSearch[[-SEP-]]ValueToSearchFor[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter form ID of destination field:");
    var dField = prompt("Enter destination Field:");
    var formID2 = prompt("Enter form ID of field to search");
    var ftSearch = prompt("Enter the field to search: ");
    var vtSearch = prompt("Enter the value to search: ");

    var myRule = readFrm.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/FORMID2/g, formID2).replace(/FieldToSearch/g, ftSearch).replace(/ValueToSearchFor/g, vtSearch);
    alertResult(myRule);
}

function setValue() {
    var setVal = "SetValue[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]FORMID[[-SEP-]][[-SEP-]]VALUE[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter form ID of destination field:");
    var dField = prompt("Enter destination Field:");
    var value = prompt("Enter value");

    var myRule = setVal.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/VALUE/g, value);
    alertResult(myRule)
}

function addition() {
    var additionRule = "AddRule Name[[-SEP-]]Form Id[[-SEP-]]Destination field[[-SEP-]]First Number field[[-SEP-]]Second Number field[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";

}



