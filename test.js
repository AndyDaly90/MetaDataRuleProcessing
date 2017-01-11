function dropList() {
    document.getElementById("drop_list").classList.toggle("show");
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
    var formID = prompt("Enter Form ID:");
    var dField = prompt("Enter Destination Field:");
    var lValue = prompt("Enter field containing live value:");
    var sAppend = prompt("Enter string to append:");

    var myRule = append.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/LVALUE/g, lValue).replace(/APPND/g, sAppend);

    alertResult(myRule);
}

function fieldPrepend() {
    var prepend = "Prepend[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]LVALUE[[-SEP-]]PPPND[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter Form ID:");
    var dField = prompt("Enter Destination Field:");
    var lValue = prompt("Enter field containing live value:");
    var sPrepend = prompt("Enter string to append:");

    var myRule = prepend.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/LVALUE/g, lValue).replace(/PPPND/g, sPrepend);

    alertResult(myRule);
}

function removeNumbers() {
    var remove = "RemoveNumbers[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]LVALUE[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter Form ID:");
    var dField = prompt("Enter Destination Field:");
    var lValue = prompt("Enter field containing live value:");

    var myRule = remove.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/LVALUE/g, lValue);
    alertResult(myRule);
}

function stripTags() {
    var strip = "StripTags[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]][[-SEP-]]LVALUE[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var formID = prompt("Enter Form ID:");
    var dField = prompt("Enter Destination Field:");
    var lValue = prompt("Enter field containing live value:");

    var myRule = strip.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/LVALUE/g, lValue);
    alertResult(myRule);
}

function concat() {

}



