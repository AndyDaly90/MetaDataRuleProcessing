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
function fieldAppend() {
    var append = "Append[[-SEP-]]FORMID[[-SEP-]]DFIELD[[-SEP-]]LVALUE[[-SEP-]]APPND[[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]][[-SEP-]]";
    var prepend = append.replace(/Append/, "Prepend");
    if (confirm("Create Append Rule") == true) {
        var formID = prompt("Select Form ID:");
        var dField = prompt("Select Destination Field:");
        var lValue = prompt("Select field containing live value:");
        var sAppend = prompt("Select string to append:");

        var myRule = append.replace(/FORMID/g, formID).replace(/DFIELD/g, dField).replace(/LVALUE/g, lValue).replace(/APPND/g, sAppend);

        alert(myRule)
        prompt("Copy to clipboard: Ctrl+C, Enter", myRule);
    }else {

    }

}

