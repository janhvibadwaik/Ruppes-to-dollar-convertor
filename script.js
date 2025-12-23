function convert(){
        const rupees = document.getElementById("rupees").value;
        const rate = 89.78;
        const dollars = rupees / rate;
        document.getElementById("result").innerText =
            "Dollars: $" + dollars.toFixed(2);
    }

    function clearOutput(){
        document.getElementById("rupees").value = "";
        document.getElementById("result").innerText = "Dollars: $0";
    }