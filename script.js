let array = [00, 40, 20, 10, 50]

const renderArray = () => {
    if (array.length > 0) {
        array.forEach((data, index) => {
            const show_data = document.getElementById('show_data');
            const div = document.createElement("div");
            div.innerHTML = `
        <p id=${index}>${data}</p>
        `;
            show_data.appendChild(div);
        })
    } else {
        const show_data = document.getElementById('show_data');
        const div = document.createElement("div");
        div.innerHTML = `
        <p>No data left in the array</p>
        `;
        show_data.appendChild(div);
    }
}

let numberOfTime = 0;

const handleOrder = (type) => {
    numberOfTime += 1;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (type == 'ascending') {
                if (array[j] > array[j + 1]) {
                    let temp = array[j + 1];
                    array[j + 1] = array[j]
                    array[j] = temp;
                }
            } else if (type == 'descending') {
                if (array[j] < array[j + 1]) {
                    let temp = array[j + 1];
                    array[j + 1] = array[j]
                    array[j] = temp;
                }
            }
            const show_data = document.getElementById('show_data');
            show_data.innerHTML = "";
            renderArray()
        }
    }
}

const handleInsert = () => {
    const insert_input_dataEl = document.getElementById('insert_input_data').value;

    const float_data = parseFloat(insert_input_dataEl);

    if (insert_input_dataEl == '') {
        alert("Please enter a number")
    } else {
        array[array.length] = float_data;

        if (numberOfTime > 0 && array[array.length - 1] > array[0]) {
            handleOrder('ascending');
        } else if (numberOfTime > 0 && array[array.length - 1] < array[0]) {
            handleOrder('descending');
        } else {
            handleOrder()
        }
        
        const show_data = document.getElementById('show_data');
        show_data.innerHTML = "";

        renderArray()
    }
}

renderArray();