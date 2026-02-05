function Add() {
    var input = document.getElementById("input"); 
    var taskText = input.value;

    if (taskText === "") {
        alert("Empty input field");
        return;
    }

    var nayaItem = document.createElement("p");
    nayaItem.innerHTML = taskText;

    // --- DELETE BUTTON KA CODE YAHAN SE SHURU ---
    
    // 1. Khali button create kiya
    var delBtn = document.createElement("button");
    
    // 2. Button par text likha (aap icon bhi daal sakte hain)
    delBtn.innerText = "Delete";
    
    // 3. Button ko thori style di takay wo task ke sath sahi lage
    delBtn.style.marginLeft = "10px";
    delBtn.style.cursor = "pointer";

    // 4. Button ko paragraph ke andar daal diya
    nayaItem.appendChild(delBtn);
    
    delBtn.style.background = "blue"
    delBtn.style.color = "#fff"
    delBtn.style.padding = "4px 16px"
    delBtn.style.borderRadius = "12px"
    delBtn.style.border = "none"
    delBtn.style.outline = "none"

    delBtn.onclick = function() {
        nayaItem.style.display = "none"
    }
 

    // --- DELETE BUTTON KA CODE KHATAM ---

    // Baki styles wese hi rahengi
    nayaItem.style.backgroundColor = "#e0f2f1";
    nayaItem.style.padding = "10px";
    nayaItem.style.margin = "20px 0";
    nayaItem.style.borderRadius = "5px";
    nayaItem.style.display = "flex"; // Text aur button ko line mein rakhne ke liye
    nayaItem.style.justifyContent = "space-between"; // Button ko kone mein bhejne ke liye

    var container = document.getElementById("listContainer");
    container.appendChild(nayaItem);

    input.value = "";


  
}






